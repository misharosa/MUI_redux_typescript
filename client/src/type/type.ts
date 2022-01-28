export interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
}

export interface ITodo {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}