import './Filter.scss'
// redux
import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../../actions/filterActions';



function Filter() {

    const dispatch = useDispatch();

    const filters = ['All', 'Active', 'Completed'];

    const clickHandler = (e) => {
        console.log(e.target.innerText);
        dispatch(setVisibilityFilter(e.target.innerText))

    }


    return (
        <div className="filter">
            {
                filters.map((item, index) =>
                    <button key={index} onClick={clickHandler}>
                        {item}
                    </button>)
            }
        </div>
    )
}

export default Filter
