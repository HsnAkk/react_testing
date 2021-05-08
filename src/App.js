
import Banner from './components/Banner/Banner';
import FormToDo from './components/formToDo/FormTodo';
import Footer from './components/footer/Footer';
import Filter from './components/filter/Filter';


import './App.css';
import ListToDo from './components/ListTodo/ListToDo';

function App() {
    return (
        <div className="main-wrapper">
            <Banner />
            <FormToDo />
            <Filter />
            <ListToDo />
            <Footer />
        </div>
    );
}

export default App;
