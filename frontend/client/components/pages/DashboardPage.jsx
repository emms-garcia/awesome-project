import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTodo, fetchTodos } from '../../actions/todos';
import TodoCard from '../common/TodoCard';

class DashboardPage extends Component {
    static propTypes = {
        createTodo: React.PropTypes.func.isRequired,
        fetchTodos: React.PropTypes.func.isRequired,
        todos: React.PropTypes.object.isRequired,
    };

    componentDidMount () {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div>
                <section className='row'>
                    <div className='col s12 card-panel teal accent-4'>
                        <h1 className='white-text'>Dashboard</h1>
                    </div>
                </section>
                <section>
                    <div className='row'>
                        {
                            Object.values(this.props.todos).map((todo, idx) => {
                                return <TodoCard key={idx} todo={todo}/>;
                            })
                        }
                    </div>
                    <div className='row'>
                        <a className='btn-floating btn-large waves-effect waves-light red'>
                            <i className='material-icons'></i>
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = ({ todos }) => {
    return { todos };
};

export default connect(mapStateToProps, { createTodo, fetchTodos })(DashboardPage);
