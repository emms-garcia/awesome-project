import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import { fetchUser } from '../actions/account';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import WidgetLibraryPage from './pages/WidgetLibraryPage';

class App extends Component {
    static propTypes = {
        fetchUser: React.PropTypes.func.isRequired,
        loading: React.PropTypes.bool,
        isAuthenticated: React.PropTypes.bool,
    }

    componentDidMount () {
        this.props.fetchUser();
    }

    render () {
        if (this.props.loading) {
            return <noscript />;
        }

        return (
            <Router history={browserHistory}>
                <Route path='/login' component={LoginPage} onEnter={this.handleLogin.bind(this)}/>
                <Route path='/dashboard' component={DashboardPage} onEnter={this.requiresAuth.bind(this)} />
                <Route path='/library' component={WidgetLibraryPage} onEnter={this.requiresAuth.bind(this)} />

                <Route path='*' onEnter={(nextState, replace) => replace({pathname: '/dashboard'})} />
            </Router>
        );
    }

    handleLogin (nextState, replace) {
        if (this.props.isAuthenticated) {
            replace({ pathname: '/dashboard' });
        }
    }

    requiresAuth (nextState, replace) {
        if (!this.props.isAuthenticated) {
            replace({ pathname: '/login' });
        }
    }
}

const mapStateToProps = ({ account }) => {
    return { ...account };
};

export default connect(mapStateToProps, { fetchUser })(App);
