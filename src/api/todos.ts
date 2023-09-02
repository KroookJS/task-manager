import axios from "axios";
import { API_URL } from ".";

export interface ITodos {
    userId: number,
    id: number;
    title: string;
    completed: boolean
}

export const getAllTodos = () :Promise<ITodos[]> => {
    return axios.get(`${API_URL}/todos?_limit=15`).then(res => res.data)
}
