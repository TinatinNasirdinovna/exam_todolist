import TodoAdd from '@/components/TodoAdd/TodoAdd';
import Todos from '@/components/Todos/Todos';
import React from 'react';

const page = () => {
    return (
        <div className='container'>
            <TodoAdd/>
            <Todos/>
        </div>
    );
};

export default page;