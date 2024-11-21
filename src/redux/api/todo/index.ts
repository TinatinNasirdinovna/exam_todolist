import { api as index } from "..";

const ENDPOIT = process.env.NEXT_PUBLIC_ENDPOINT

const api = index.injectEndpoints({
    endpoints: builder => ({
        postTodo: builder.mutation<TODO.PostTodoResponse, TODO.PostTodoRequest>({
            query: (data) => ({
                url: `/${ENDPOIT}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["todo"]
        }),
        getTodo: builder.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
            query: () => ({
                url: `/${ENDPOIT}`,
                method: "GET"
            }),
            providesTags: ["todo"]
        }),
        deleteTodo: builder.mutation<TODO.DeleteTodoRepsponse, TODO.DeletTodoRequest>({
            query: (_id) => ({
                url: `/${ENDPOIT}/${_id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["todo"]
        }),
        editTodo: builder.mutation<TODO.EditTodoResponse, TODO.EditTodoRequest>({
            query: ({data, _id}) => ({
                url: `/${ENDPOIT}/${_id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["todo", "file"]
        })
    })
})

export const {usePostTodoMutation, useGetTodoQuery, useDeleteTodoMutation, useEditTodoMutation} = api