"use client"
import { usePostFileMutation } from '@/redux/api/file';
import { usePostTodoMutation } from '@/redux/api/todo';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import s from "./TodoAdd.module.scss"
const TodoAdd = () => {
    const {register, handleSubmit, reset} = useForm<ITodo>()
    const [addFile] = usePostFileMutation()
    const [addTodo] = usePostTodoMutation()
    const onSubmit:SubmitHandler<ITodo> = async(data) => {
        const file = data.file![0]!

        const formData = new FormData()
        formData.append("file", file)
        const {data:res} =  await addFile(formData)
        console.log(res);
        
        const new_data = {
            title: data.title,
            img: res?.url!
        }
        const {data: resTodo} = await addTodo(new_data)
        reset()        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.formAdd}>
            <input type="text" {...register("title", {required: true})} />
            <input type="file" {...register("file", {required: true})}/>
            <button type='submit'>send</button>
        </form>
    );
};

export default TodoAdd;