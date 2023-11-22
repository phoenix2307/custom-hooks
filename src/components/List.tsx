import React, {useEffect, useState} from 'react';

type ListPT = {}

export const List: React.FC<ListPT> = ({}, ...rest) => {
    const [todos, setTodos] = useState<any[]>([])
    /*    // отримуэмо список todos з jsonplaceholder, ПОВНІСТЮ
        const fetchTodos = () => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => setTodos(json))
        }

        useEffect(()=>{
            fetchTodos()
        }, [])*/

    // отримуэмо список todos з jsonplaceholder, і через динамічну пагінацію показуємо певні блоки todos,
    // ділимо їч на сторінки по 10 задач

    const [page, setPage] = useState(1)
    const limit = 20

    const fetchTodos = (page: number, limit: number) => {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchTodos(page, limit)
    }, [])


    return (
        <div>
            {
                todos.map((todo) => <div key={todo.id} style={{
                    padding: '20px',
                    border: '2px solid white',
                    color: 'white',
                    backgroundColor: '#636363'
                }}>
                    {todo.id}. {todo.title}
                </div>)
            }

        </div>
    );
};