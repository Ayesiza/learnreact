import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './component/TodoList';
import TotalItems from './component/TotalItems';
import TodoForm from './component/TodoForm';


const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
		<TodoForm/>
			<TodoList />
			<TotalItems/>
		</div>
	);
};

export default App;
