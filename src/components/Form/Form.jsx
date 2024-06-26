import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Form.css'
import Alert from 'react-bootstrap/Alert';

const Form = (props) =>{
    const {reloadNewTasks} = props
    const [input, setInput] = useState('')
    const [alerts, setAlert] = useState(false)


    const inputFunction = (event) =>{
        setInput(event.target.value)
    }

    const addEventToList = async(e) =>{
        e.preventDefault()
        const data = input
        setInput('')
        if (input === ''){
            alert('Enter Something')
        }else{
            await fetch('http://localhost:3000/form-submitted', {
            method:'POST',
            headers:{
                'Content-type': 'application/JSON'
            },
            body:JSON.stringify({text:data.charAt(0).toUpperCase()+data.slice(1)})
        })
        .then(()=>{
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 1000);
        })
        }
        reloadNewTasks()
    }
    return (
        <><form className='form' method='POST'>
            <input className='col-8 input-elm' name='text' value={input} onChange={inputFunction} type="text"></input>
            <button id='submit' type="submit" onClick={addEventToList} className="btn btn-primary btn-elm">Add</button>
        </form>
        <Alert show={alerts} >Updated Successufuly</Alert>
        </>
    )
}

export default Form