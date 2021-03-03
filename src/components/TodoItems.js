import React, {Component} from "react"
import TodoItem from "./TodoItem";
import TodoStore from "../stores/TodoStore"
import {observer} from "mobx-react";

import TodosDetail from "./TodosDetail";

@observer
class TodoItems extends Component {
    render() {
        const todos = TodoStore.todosList
        return (
            <section className="main">
                <ul className="todo-list">
                    {
                        todos.map(todo => {
                            return (
                                <TodoItem key={todo.id} todo={todo} />
                            )
                        })
                    }
                    {
                        (TodoStore.todos.length > 0)? <TodosDetail/> : ''
                    }
                </ul>
            </section>

        )
    }
}

export default TodoItems