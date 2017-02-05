import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../common/Button';
import Input from '../common/Input';

import { signIn } from '../../actions/signin';

class SignInForm extends Component {
    static propTypes = {
        errorMessages: React.PropTypes.object,
        signIn: React.PropTypes.func.isRequired,
    };

    state = {
        fields: { name: '', password: '', password2: '', email: '' },
    };

    render () {
        const { errorMessages } = this.props;
        const { fields } = this.state;
        return (
            <div>
                <h4 className='center-align teal-text'>Sign In</h4>
                <form className='col s12'>
                    <div className='row'>
                        <div className='col s6'>
                            <Input
                                hasError={errorMessages.email && !!errorMessages.email.length}
                                label='Username'
                                type='email'
                                onChange={this.inputChanged.bind(this, 'email')}
                                value={fields.email}
                            />
                        </div>
                        <div className='col s6'>
                            <Input
                                hasError={errorMessages.name && !!errorMessages.name.length}
                                label='Name'
                                type='text'
                                onChange={this.inputChanged.bind(this, 'name')}
                                value={fields.name}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col s6'>
                            <Input
                                hasError={errorMessages.password && !!errorMessages.password.length}
                                label='Password'
                                type='password'
                                onChange={this.inputChanged.bind(this, 'password')}
                                value={fields.password}
                            />
                        </div>
                        <div className='col s6'>
                            <Input
                                hasError={fields.password !== fields.password2}
                                label='Repeat Password'
                                type='password'
                                onChange={this.inputChanged.bind(this, 'password2')}
                                value={fields.password2}
                            />
                        </div>
                    </div>
                    <div className="row center-align">
                        <Button
                            className='waves-effect waves-light btn btn-large'
                            onClick={this.onSubmit.bind(this)}
                        >Sign In</Button>
                    </div>
                </form>
            </div>
        );
    }

    inputChanged (field, value) {
        this.setState({
            fields: { ...this.state.fields, [field]: value },
        });
    }

    onSubmit () {
        const { name, email, password, password2 } = this.state.fields;
        if (password === password2) {
            this.props.signIn({
                email,
                password,
                name,
            });
        }
    }
}

export default connect(({ signin }) => {
    return { errorMessages: signin.errorMessages };
}, { signIn })(SignInForm);
