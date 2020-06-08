import { ThunkAction } from "redux-thunk";
import { RootState } from ".";
import { AppActions } from "../models/action";
import agent from "../api/agent";
import { GETTING_TODO_ITEMS, DELETED_TODO, TOGGLED_DONE_STATUS_FOR_TODO, UPDATING_ENTIRE_TODO, CREATED_NEW_TODO } from "./types";
import { TodoItem } from "../models/TodoItem";


type ThunkResult<R> = ThunkAction<R, RootState, undefined, AppActions>;

// action creator
export function getTodoItems(): ThunkResult<void> {
    return (dispatch, getstate) => {
        let a = agent.ToDoApis.getList();

        a.then(
            value => {
                //success
                dispatch({ type: GETTING_TODO_ITEMS, todoItems: value });
            },
            reason => {
                // rejection
                console.log(reason);
            }
        ).catch(error => console.log(error));
    }
}

export function deleteTodo(id: string): ThunkResult<void> {
    return (dispatch, getstate) => {
        let a = agent.ToDoApis.delete(id); // api call

        a.then(
            value => {
                //success
                dispatch({ type: DELETED_TODO, id: id }); // make changes to the data. delete object with id from store.
            },
            reason => {
                // rejection
                console.log(reason);
            }
        ).catch(error => console.log(error))
            .then((response) => console.log(response));

    }
}

export function createNewTodo(todoItem: TodoItem): ThunkResult<void> {
    return (dispatch, getstate) => {
        let a = agent.ToDoApis.post(todoItem); // api call

        a.then(
            value => {
                //success
                dispatch({ type: CREATED_NEW_TODO, newTodo: todoItem }); // add to the data. delete object with id from store.
            },
            reason => {
                // rejection
                console.log(reason);
            }
        ).catch(error => console.log(error))
            .then((response) => console.log(response));

    }
}

export function toggleTodoDoneState(id: string): ThunkResult<void> {
    return (dispatch, getstate) => {
        let a = agent.ToDoApis.patch(id); // api call

        a.then(
            value => {
                //success
                dispatch({ type: TOGGLED_DONE_STATUS_FOR_TODO, id: id }); // add to the data. delete object with id from store.
            },
            reason => {
                // rejection
                console.log(reason);
            }
        ).catch(error => console.log(error))
            .then((response) => console.log(response));

    }
}

export function updatingEntireTodo(todoItem: TodoItem): ThunkResult<void> {
    return (dispatch, getstate) => {
        let a = agent.ToDoApis.put(todoItem); // api call

        a.then(
            value => {
                //success
                dispatch({ type: UPDATING_ENTIRE_TODO, todoItem: todoItem }); // add to the data. delete object with id from store.
            },
            reason => {
                // rejection
                console.log(reason);
            }
        ).catch(error => console.log(error))
            .then((response) => console.log(response));

    }
}

