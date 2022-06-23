import React from "react";
import './TodoForm.css'
import { TodoContext} from '../TodoContext'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo, 
        setOpenModal, 
    } = React.useContext(TodoContext)

    const onCancel = ()=> {
    setOpenModal(false);
    };
    const onChange = (event)=> {
        setNewTodoValue(event.target.value)
        };
    const onSubmit = (event)=> {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    };
    
    return (
        <form onSubmit={onSubmit}>
           <label>Escribe tu nueva tarea</label> 
           <textarea 
           value={newTodoValue}
           onChange={onChange}
           placeholder="Agregar nueva tarea por cumplir"
           />
           <div className="TodoForm-buttonContainer">
            <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
            >
                cancelar
            </button>
            <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
            >
                añadir
            </button>
           </div>
        </form>
    );
}

export {TodoForm};