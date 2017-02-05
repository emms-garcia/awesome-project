import React, { Component } from 'react';

import LogInForm from '../forms/LogInForm';
import SignInForm from '../forms/SignInForm';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <section className='row'>
                    <div className='col s12 card-panel red lighten-2 center-align'>
                        <h3 className='white-text'>Awesome Project</h3>
                    </div>
                </section>
                <section className='row'>
                    <div className='col s3 card-panel'>
                        <LogInForm />
                    </div>
                    <div className='col s8 offset-s1 card-panel'>
                        <SignInForm />
                    </div>
                </section>
            </div>
        );
    }
}

export default LoginPage;
