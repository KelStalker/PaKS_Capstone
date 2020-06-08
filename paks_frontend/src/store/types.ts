// needs TodoActionTypes to be defined here
import { TodoItem } from "../models/TodoItem";
import { Action } from "redux";

export interface TodoState {
    todoItems: TodoItem[];
    loading: boolean; // ????
}

export const THUNK_ACTION = "THUNK_ACTION";

// action type definitions
// GET (aka GET)
export const GETTING_TODO_ITEMS = "GETTING_TODO_ITEMS";

// CREATE (aka POST)
export const CREATED_NEW_TODO = "CREATED_NEW_TODO";

// TOGGLE (aka PATCH)
export const TOGGLED_DONE_STATUS_FOR_TODO = "TOGGLED_DONE_STATUS_FOR_TODO";

// UPDATE (aka PUT)
export const UPDATING_ENTIRE_TODO = "UPDATING_ENTIRE_TODO";

// DELETE TODO (aka DELETE)
export const DELETED_TODO = "DELETED_TODO";

// actions. (note async actinos with redux thunk are very differently written!!!)
// warning: very different from redux action from before, when we;re delaying with async with thunk!!
export interface GettingTodoItems extends Action<typeof GETTING_TODO_ITEMS> {
    todoItems: TodoItem[];
}

export interface CreatedNewTodo extends Action<typeof CREATED_NEW_TODO> {
    newTodo: TodoItem;
}

export interface ToggleDoneStatusForTodo extends Action<typeof TOGGLED_DONE_STATUS_FOR_TODO> {
    id: string;
}

export interface UpdatingEntireTodo extends Action<typeof UPDATING_ENTIRE_TODO> {
    todoItem: TodoItem;
}

export interface DeletedTodo extends Action<typeof DELETED_TODO> {
    id: string;
}

export type TodoActionTypes =
    GettingTodoItems |
    CreatedNewTodo |
    ToggleDoneStatusForTodo |
    UpdatingEntireTodo |
    DeletedTodo;