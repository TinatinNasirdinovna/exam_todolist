namespace TODO {
    type PostTodoRequest = ITodo
    type PostTodoResponse = ITodo[]

    type GetTodoRequest = void
    type GetTodoResponse = ITodo[]

    type DeleteTodoRepsponse = ITodo[]
    type DeletTodoRequest = number

    type EditTodoResponse = ITodo[]
    type EditTodoRequest = {
        _id: number
        data: ITodo
    }
}