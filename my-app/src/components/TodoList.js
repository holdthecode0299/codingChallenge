import React, { Component } from 'react';

class TodoList extends Component {
    componentDidUpdate () {
        
    }

    render() {
        return (
            <div className="todoList">
                <div className="header">
                    <h1>Coding Challenge: React To-Do List</h1>
                    <p>Click on Task to Remove Task from List</p>
                    <form onSubmit={this.props.addItem}>
                        <input placeholder="Add Task" 
                        ref={this.props.inputElement}
                        value={this.props.currentItem.text}
                        onChange={this.props.handleInput}
                        />
                        
                        <button type="submit">Add Task</button>           
                                     
                    </form>
                </div>
            </div>
        )
    }
}



export default TodoList 