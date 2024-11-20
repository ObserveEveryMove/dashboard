

const TodoForm = (props) => {
    return (
        <div >

            <form onSubmit={props.handleSubmit} className="todoForm">

                <input type="text" name="task" onChange={props.handleInput} value={props.task} placeholder="Enter a Task" required className="todoInput"/>

                <button type="submit" className="todoSubmitBtn">Add a Task</button>

            </form>


        </div>
    )
}


export default TodoForm