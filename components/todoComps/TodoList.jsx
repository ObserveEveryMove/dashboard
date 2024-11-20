



// import Form from "./Form"

const TodoList = (props) => {
    return (
        <div>



            {props.todos.length > 0 ?
                props.todos.map(todo => {
                    return props.isEdit && todo.id === props.editId ? (
                        <div key={todo.id} className="todoCard">

                            <ul>
                                <li>{todo.task}</li>

                                <input name="editTodo" value={props.editTodo} type="text" placeholder="Change your task" onChange={props.handleInput} className="todoInput" />

                                <button onClick={props.handleEdit}>Change</button>

                            </ul>

                        </div>) :
                        (
                            <div key={todo.id} className="todoCard">

                                <ul>
                                    <li className="todoLi">{todo.task}</li>
                                </ul>

                

                                <button className="removeBtn" onClick={() => props.handleDelete(todo.id)}>Remove!!</button>

                                <button className="changeBtn" onClick={() => props.getReadyToEdit(todo)}>Change</button>

                            </div>
                        )
                }) : <div>
                    <h1 className="enterATask">What are we doing Today?</h1>

                </div>
            }



        </div>
    )
}

export default TodoList