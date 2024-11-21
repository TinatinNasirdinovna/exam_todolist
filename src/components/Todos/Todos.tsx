"use client";
import { usePostFileMutation } from "@/redux/api/file";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoQuery,
} from "@/redux/api/todo";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./Todos.module.scss"

const Todos = () => {
  const [edit, setEdit] = useState<null | number>(null);
  const { data } = useGetTodoQuery();
  const [remove] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const [uploadFile] = usePostFileMutation();
  const { register, handleSubmit, setValue } = useForm<ITodo>();

  const onSubmit: SubmitHandler<ITodo> = async (data) => {
    let images = data.img || "";

    if (data.file && data.file[0]) {
      const files = data.file[0];
      const formData = new FormData();
      formData.append("file", files);

      const { data: resImg } = await uploadFile(formData);
      images = resImg?.url!;
    }
    const updateData = {
      title: data.title,
      img: images,
    };

    await editTodo({ _id: edit!, data: updateData });
    setEdit(null);
  };

  return (
    <div className={s.todos}>
      {data?.map((el) =>
        edit === el._id ? (
          <div className={s.todoEdit} key={el._id}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.formForEdit}>
              <input type="text" {...register("title", { required: true })} />
              <input type="file" {...register("file")} />
              <input type="hidden" {...register("img")} value={el.img} />
              <button type="submit">add</button>
            </form>
          </div>
        ) : (
          <div className={s.todo} key={el._id}>
            <h2>{el.title}</h2>
            <img src={el.img} alt="img" />
           <div className=""> <button onClick={() => remove(el._id!)}>delete</button>
            <button
              onClick={() => {
                setEdit(el._id!);
                setValue("title", el.title);
                setValue("img", el.img);
              }}
            >
              edit
            </button></div>
          </div>
        )
      )}
    </div>
  );
};

export default Todos;
