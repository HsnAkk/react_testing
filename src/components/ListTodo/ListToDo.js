import { useState, useEffect } from 'react';
import './ListToDo.scss';
import Todo from '../todo/Todo';

// redux
import { useSelector } from 'react-redux';



function ListToDo() {

    const [visiableTodosArr, setVisiableTodosArr] = useState([])
    
    const todos = useSelector(state => state.todos)
    const filter = useSelector(state => state.visibilityFilter)

    
    const getVisibleTodos = (todos, filter) => {
        switch (filter) {
            case 'All':
                return todos
            
            case 'Active':
                return todos.filter(item => item.completed !== true)
            
            case 'Completed':
                return todos.filter(item => item.completed === true)
            
            default:
                throw new Error('Unknown filter : ', filter)
        }
    }

    useEffect(() => {
        setVisiableTodosArr(getVisibleTodos(todos, filter));
    }, [todos, filter])
    


    return (
        <div className="listtodo">
            {visiableTodosArr.map(item => <Todo key={item.id} {...item}/>)}
        </div>
    )
}

export default ListToDo
