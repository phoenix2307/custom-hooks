import React from "react";
import useRequest from "../hooks/useRequest";
import axios from "axios";

export const Request = () => {

    const [todos, loading, error]: any = useRequest(fetchTodos)

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if (loading){
        return <h1>Loading...</h1>
    }

    if (error){
        return <h1>Loading is failed!</h1>
    }

    return (
        <div>
            {
                todos && todos.map((todo: any) =>
                    <div key={todo.id} style={{
                        padding: '20px',
                        border: '2px solid white',
                        color: 'white',
                        backgroundColor: '#636363'
                    }}>
                        {todo.id}. {todo.title}
                    </div>
                )}
        </div>
    )
}