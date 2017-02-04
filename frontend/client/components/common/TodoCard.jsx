import React, { Component } from 'react';

const TodoCard = ({ todo }) => {
    return (
        <div className='col s3'>
            <div className='card blue-grey darken-1'>
                <div className='card-content white-text'>
                    <span className="card-title">{ todo.name }</span>
                    <p>{ todo.description }</p>
                </div>
                <div className="card-action">
                    <a href=''>{ todo.done ? 'Undo' : 'Complete'}</a>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;
