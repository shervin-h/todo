import React, {Component} from "react"
import {observer} from "mobx-react";

import TodoStore from "../stores/TodoStore";

@observer
class TodoItem extends Component {

    state = {
        checked: false
    }

    onToggle = () => {
        this.props.todo.toggle()
        TodoStore.toggleChecked()
    }

    removeItem(isCompleted){
        TodoStore.removeTodo(this.props.todo.title, this.props.todo.id, isCompleted)
    }

    render() {
        const {todo} = this.props
        return (
            <li className={todo.completed ? "completed" : ""}>
                <div className="view">
                    <input
                        type="checkbox"
                        className="toggle"
                        checked={todo.completed}

                        onChange={
                            this.onToggle
                        }
                    />
                    <label>{todo.title}</label>
                    <button
                        className="destroy"
                        onClick={
                            () => this.removeItem(todo.completed)
                        }
                    />
                </div>
            </li>
        )
    }
}

export default TodoItem