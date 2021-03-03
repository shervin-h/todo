import React, {Component} from "react";
import TodoStore from "../stores/TodoStore";
import {observer} from "mobx-react";

@observer
class TodosDetail extends Component {

    showAllTodos() {
        TodoStore.showAllTodos()
    }

    showActiveTodos() {
        TodoStore.showActiveTodos()
    }

    showCompletedTodos() {
        TodoStore.showCompletedTodos()
    }

    clearComplete(){
        TodoStore.clearCompletely()
    }

    render() {
        return (
            <li>
                <div className="footer">
                    <div className="todo-count">
                        <strong>
                            {TodoStore.unCompletedTodos} items left
                        </strong>
                    </div>
                    <ul className="filters">

                        <li className="">
                            <a href="#" onClick={
                                () => {
                                    this.showAllTodos()
                                }
                            }
                            >
                                All
                            </a>
                        </li>

                        <li>
                            <a href="#" onClick={
                                () => {
                                    this.showActiveTodos()
                                }
                            }
                            >
                                Active
                            </a>
                        </li>

                        <li>
                            <a href="#" onClick={
                                () => {
                                    this.showCompletedTodos()
                                }
                            }
                            >
                                Completed
                            </a>
                        </li>

                    </ul>

                    <div className="clear-completed" onClick={
                        () => {
                            this.clearComplete()
                        }
                    }>
                        clear completely
                    </div>
                </div>
            </li>
        )
    }
}

export default TodosDetail