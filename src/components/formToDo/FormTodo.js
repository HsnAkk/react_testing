import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './FormToDo.scss'

// redux
import { useDispatch } from 'react-redux';
import { addTodo} from '../../actions/todosActions';



function FormTodo() {

    const[todo, setTodo] = useState('')
    const [priority, setPriority] = useState('High')
    
    const dispatch = useDispatch();


    const submitHandler = (e)  => {
        e.preventDefault();

        if (todo && priority) {
            let todoObj = {
                id: uuidv4(),
                todo,
                priority,
                completed: false
            }
            console.log(todoObj);
    
            dispatch(addTodo(todoObj))
        } else {
            alert('Please enter a ToDo...!')
        }
    }

    return (
        <form onSubmit= {submitHandler}>
            
            <input
                type="text"
                value={todo}
                onFocus= { e => e.target.placeholder= ''}
                onChange= { e => setTodo(e.target.value)}
                placeholder="Todo"
            />
            
            <select name="priority"
                value={priority}
                onChange= { e => setPriority(e.target.value)}
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <input type="submit" value="Add" />
            
        </form>
    )
}

export default FormTodo
