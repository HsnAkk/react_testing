import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import './Todo.scss';

// redux
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../actions/todosActions';


function Todo( {id, todo, priority, completed }) {

    const dispatch = useDispatch();
    
    
    const deleteHandler = id => {
        console.log(id);
        dispatch(deleteTodo(id))
    }

    const toggleHandler = id => {
        // console.log(id)
        dispatch(toggleTodo(id))
    }

    const classPri = priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'lightgreen';

    return (
        <div className="todocomp">
            <div className={'todo ' + classPri} >
                <p className={completed ? 'linethrough' : null } onClick={() => toggleHandler(id)}>{todo} </p>
                <div className="icons">
                    <MdDeleteForever onClick={ () => deleteHandler(id)} />
                </div>
            </div>
        </div>
    
    )
}

export default Todo
