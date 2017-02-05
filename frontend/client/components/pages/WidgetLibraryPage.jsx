import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import Button from '../common/Button';
import Page from './Page';

class WidgetLibraryPage extends Component {
    static propTypes = {
    };

    componentDidMount () {
    }

    render () {
        const buttons = [
            <Button
                className='btn btn-large red-text white'
                key='0'
                onClick={() => browserHistory.push('/library/new')}
            >
                Create Widget
            </Button>
        ];

        return (
            <Page buttons={buttons} header='Widget Library'>
                <div className='row'>
                    { this.renderWidgetLibrary() }
                </div>
            </Page>
        );
    }

    renderWidgetLibrary () {
        return (
            <div className='col s12 center-align'>
                <h3>Nothing here yet :(</h3>
                <ul>
                    <li>
                        <h4>
                        <Link to='/library/new'>Create a new Widget</Link> and share it with the community!
                        </h4>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({}) => {
    return {};
};

export default connect(mapStateToProps)(WidgetLibraryPage);
