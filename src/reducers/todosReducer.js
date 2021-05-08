import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes';


const initialState = [
    {
        id: 1,
        todo: "delectus aut autem",
        priority: 'High',
        completed: false,
    },
    {
        id: 2,
        todo: "lorem ipsum emet",
        priority: 'Low',
        completed: false,
    },
    {
        id: 3,
        todo: "lorem ipsum emet",
        priority: 'Medium',
        completed: false,
    }
];


const todos = (state = initialState, action) => {
    
    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    todo:action.payload.todo,
                    priority: action.payload.priority,
                    completed: action.payload.completed
                }
            ]
        
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo
            )
        
        
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id)
            
        
        default:
            return state
    }
}
  
export default todos