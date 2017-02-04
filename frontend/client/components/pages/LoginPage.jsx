import React, { Component } from 'react';

import LogInForm from '../forms/LogInForm';
import SignInForm from '../forms/SignInForm';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <section className='row'>
                    <div className='col s12 card-panel teal accent-4'>
                        <h1 className='white-text'>Frontend</h1>
                    </div>
                </section>
                <section className='row'>
                    <div className='col s3 card-panel gray'>
                        <LogInForm />
                    </div>
                    <div className='col s8 offset-s1 card-panel gray'>
                        <SignInForm />
                    </div>
                </section>
            </div>
        );
    }
}

export default LoginPage;
