import { useEffect, useState } from "react";
import EachTodo from "../EachTodo/EachTodo";
import './TaskList.css'
import Axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'



const TaskList = (props) =>{
    const {formSubmitted} = props

    const [TaskList, setTaskList] = useState([])
    const [alert, setAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [loading, setLoading] = useState("grow")

    useEffect(()=>{
        Axios.get('http://localhost:3000/')
        .then(res=>{
            setTaskList(res.data)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    },[formSubmitted]);


    const  updateTriggered  = async (id, task, markedas) =>{
        const responce = await Axios.put(`http://localhost:3000/${id}`, {id, task, markedas})
        const data = await responce.data
        setTaskList(values=>(
            values.map(each=>{
                if (each.id===id){
                    return {id, task, markedas}
                } else{
                    return each
                }
            })
        ));
        setAlertText(data)
        setAlert(true);
        closeAlert();
    }

    const updateDelete = async(id) => {
        await Axios.delete(`http://localhost:3000/${id}`)
        .then(setTaskList(TaskList.filter(value=>(value.id===id)?false:true)));
        setAlert(true);
        setAlertText('deleted successfully')
        closeAlert();
    }

    const closeAlert = ()=>{
        setTimeout(()=>setAlert(false), 1000)
    }

    return(
        <div className="container task-div">
            <Alert variant="success" show={alert} >{alertText}</Alert>
            <h3 className="text-start">Task's ToDo</h3>
            <div>
                <Spinner animation={loading}/>
                {TaskList.map(value => {
                    const {id, task, markedas} = value
                    return(<EachTodo key={id} id={id} task={task} markedas={markedas} updateTriggered={updateTriggered} updateDelete={updateDelete}/>)
                })}
            </div>
        </div>
    )
}


export default TaskList