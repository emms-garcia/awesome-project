import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../common/Button';
import Input from '../common/Input';

import { logIn } from '../../actions/login';

class LogInForm extends Component {
    static propTypes = {
        logIn: React.PropTypes.func.isRequired,
        errorMessages: React.PropTypes.array,
    };

    state = { username: '', password: '' };

    render () {
        const { errorMessages } = this.props;
        return (
            <div>
                <h4 className='center-align teal-text'>Log In</h4>
                {
                    errorMessages && errorMessages.map((error, idx) => {
                        return <p className='center-align red-text' key={idx}>{error}</p>;
                    })
                }
                <form className='col s12' onSubmit={this.onSubmit.bind()}>
                    <div className='row'>
                        <div className='col s12'>
                            <Input
                                label='Username'
                                type='email'
                                onChange={this.inputChanged.bind(this, 'username')}
                                value={this.state.username}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col s12'>
                            <Input
                                label='Password'
                                type='password'
                                onChange={this.inputChanged.bind(this, 'password')}
                                value={this.state.password}
                            />
                        </div>
                    </div>
                    <div className="row center-align">
                        <Button onClick={this.onSubmit.bind(this)}>Log In</Button>
                    </div>
                </form>
            </div>
        );
    }

    inputChanged (field, value) {
        this.setState({ [field]: value });
    }

    onSubmit () {
        const { username, password } = this.state;
        this.props.logIn(username, password);
    }
}

export default connect(({ login }) => {
    return { errorMessages: login.errorMessages };
}, { logIn })(LogInForm);
