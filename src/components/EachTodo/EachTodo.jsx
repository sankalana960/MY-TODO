import './Eachtodo.css';


const EachTodo = (props) =>{
    const {id, task, markedas, updateTriggered, updateDelete} = props


    const changeTaskStatus = (event) =>{
        updateTriggered(id, task, event.target.checked)
    }

    const deleteTask = () =>{
        updateDelete(id)
    }

    return(
        <div className="each-todo row">
            <div className="col-2 check-box-div text-center">
                <input onClick={changeTaskStatus} id={`btn${id}`} className="check-box" type="checkbox" defaultChecked={Boolean(markedas)} />
            </div>
            <label className="text-content text-center col-7" style={{textDecoration: Boolean(markedas)? 'line-through':''}} htmlFor={`btn${id}`} >{task}</label>
            <button className="delete btn col-3" onClick={deleteTask}>delete</button>
        </div>
    )
}

export default EachTodo