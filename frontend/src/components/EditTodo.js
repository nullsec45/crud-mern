import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditTodo=() => {
	const {idParams}=useParams();
	const [id, setId]=useState("");
	const [todo, setTodo]=useState("");
	const navigate=useNavigate();
	console.log(idParams)

	useEffect(() => {
		getTodoById()
	},[]);

	const updateTodo=async(e) =>{
		e.preventDefault();
		try{
			await axios.patch(`http://localhost:5000/todos/${id}`,{
				id,
				todo
			});
			navigate("/");
		}catch(error){
			console.log(error);
		}
	}

	const getTodoById=async() => {
			const response=await axios.get(`http://localhost:5000/todos/${idParams}`);
			console.log(response);
			setId(response.data.id)
			setTodo(response.data.todo)
	}
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                 <form onSubmit={updateTodo}>
			        <div className="field">
			            <label for="id" className="control">Id</label>
			            <div className="control">
			                <input type="text" className="input" placeholder="Todo" 
			                  value={id} id="id" onChange={(e) => setId(e.target.value)} placeholder="id"/>
			            </div>
			        </div>
			        <div className="field">
			            <label for="todo" className="control">Todo</label>
			            <div className="control">
			                <input type="text" id="todo" className="input" placeholder="Todo" 
			                  value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="todo"/>
			            </div>
			        </div>
			        <div className="field">
			            <Link to={"/"} className="button is-danger mr-3">Batal</Link>
			            <button type="submit" className="button is-success">Simpan</button>
			        </div>
			    </form>     
            </div>
        </div>
    )
}

export default EditTodo;