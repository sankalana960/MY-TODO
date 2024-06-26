import {Link} from 'react-router-dom'

const Options = () =>(
        <div className="container">
            <Link to='/'><button>Home</button></Link>
            <Link to='/deleted'><button>Deleted</button></Link>
        </div>
    )


export default Options