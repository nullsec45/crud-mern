import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const TodoList=() => {
    const [todos, setTodo]=useState([]);

    useEffect(()=>{
        getTodos();
    }, []);

    const getTodos=async() => {
        const response=await axios.get("http://localhost:5000/todos");
        setTodo(response.data);
    }

    const deleteTodo=async (id) => {
        try{
            await axios.delete(`http://localhost:5000/todos/${id}`);
            getTodos();
        }
        catch(error){
            console.log(error);
        }
    }
    return (
         <div className="columns mt-5 is-centered">
            <div className="column is-half">
            <Link to={"/add"} className="button is-small is-success mb-3">Add todo</Link>
            <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Todo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo, index) => (
                           <tr key={todo.id}>
                             <td>{index+1}</td>
                             <td>{todo.todo}</td>
                             <td>
                                <Link to={`/edit/${todo.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteTodo(todo.id)} className="button is-small is-danger">Delete</button>
                             </td>
                           </tr>
                        ))}
                        
                    </tbody>
                </table> 
            </div>
         </div>
        
    )
}
export default TodoList;