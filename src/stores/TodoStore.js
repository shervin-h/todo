import {observable, action} from "mobx";
import TodoModel from "./TodoModel"
import TodoItem from "../components/TodoItem";

class TodoStore {
    @observable todos = []
    @observable completedTodosList = []
    @observable unCompletedTodosList = []

    @observable todosList = []

    lastID = 0

    @observable unCompletedTodos = 0

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID++))
        this.todosList = this.todos
        this.unCompletedTodos += 1
    }

    @action
    removeTodo(title, id, isCompleted) {

        this.todos = this.todos.filter(item => item.id !== id)
        this.todosList = this.todosList.filter(item => item.id !== id)
        if (!isCompleted){
            this.unCompletedTodos -= 1
        }
    }

    @action
    toggleChecked() {
        this.unCompletedTodos = 0
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === false) {
                this.unCompletedTodos += 1
            }
        }
    }

    @action
    showAllTodos(){
        this.todosList = this.todos
    }

    @action
    showActiveTodos(){
        this.todosList = this.todos.filter(item => item.completed === false)
    }

    @action
    showCompletedTodos(){
        this.todosList = this.todos.filter(item => item.completed === true)
    }

    @action
    clearCompletely(){
        this.todos = []
        this.todosList = []
        this.unCompletedTodos = 0
    }

}

const store = new TodoStore()
export default store