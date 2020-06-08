import axios, { AxiosResponse } from 'axios';
import { TodoItem } from '../models/TodoItem';

axios.defaults.baseURL = "https://localhost:44348/api" //modify to match your port from the backend

const responseBody = (response: AxiosResponse) => response.data;

const ToDoApis = {
    getList: (): Promise<TodoItem[]> =>
        axios.get('/todos').then(responseBody),
    delete: (id: string) => axios.delete(`/todos/${id}`).then(responseBody),
    post: (todoItem: TodoItem) => axios.post('/todos', todoItem),
    patch: (id: string) => axios.patch(`/todos/${id}`).then(responseBody),
    put: (todoItem: TodoItem) => axios.put(`/todos/${todoItem.id}`, todoItem)
}

export default
    {
        ToDoApis
    }