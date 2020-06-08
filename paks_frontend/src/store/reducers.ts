import { TodoItem } from "../models/TodoItem";
import { DELETED_TODO, GETTING_TODO_ITEMS, CREATED_NEW_TODO, TOGGLED_DONE_STATUS_FOR_TODO, UPDATING_ENTIRE_TODO, TodoActionTypes } from "./types"


export interface IState {
    todoItems: TodoItem[];
}

const defaultValue: IState = {
    todoItems: []
}

export function todoReducer(state = defaultValue, action: TodoActionTypes): IState {
    switch(action.type){
        case GETTING_TODO_ITEMS:
            return {
                ...state,
                todoItems: action.todoItems
            }
        case DELETED_TODO:
            return {
                ...state,
                todoItems: state.todoItems
                .filter(individualTodo => {return individualTodo.id !== action.id})
            }

        case CREATED_NEW_TODO:
            return {
                ...state,
                todoItems: [...state.todoItems, action.newTodo]
            }

        case TOGGLED_DONE_STATUS_FOR_TODO:
            let todoItemToModify = state.todoItems.filter(individualTodo => {return individualTodo.id === action.id })[0];
            todoItemToModify.isDone = !todoItemToModify.isDone;

            return {
                ...state,
                todoItems: [...state.todoItems.filter(individualTodoItem => individualTodoItem.id !== action.id), todoItemToModify]
            }  
        case UPDATING_ENTIRE_TODO:
            let todoItemToModify2 = state.todoItems.filter(individualTodo => { return individualTodo.id === action.todoItem.id })[0];
            todoItemToModify2.title = "TITLE HAS BEEN CHANGED";
            return {
                ...state,
                todoItems: [...state.todoItems.filter(individualToDoItem => individualToDoItem.id !== action.todoItem.id), todoItemToModify2]
            }

        default:
            return state;
          
    

    }
}