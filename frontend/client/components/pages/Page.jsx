import React from 'react';

import Navbar from '../Navbar';

const Page = ({ buttons, children, header }) => {
    return (
        <div>
            <Navbar />
            <section className='card-panel header teal lighten-2 row'>
                <div className='col s6'>
                    <h5 className='white-text'>{ header }</h5>
                </div>
                <div className='col s6 right-align'>
                    { buttons }
                </div>
            </section>
            <section className='card-panel content row'>
                <div className='col s12'>
                    { children }
                </div>
            </section>
        </div>
    );
};

Page.propTypes = {
    header: React.PropTypes.string.isRequired,
};

export default Page;
