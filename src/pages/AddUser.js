import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addUser } from './redux/actions';
 
const initialValues = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: ''
  };
  
  
  const AddUser = () => {
   
    const [state, setState] = useState(initialValues);
    const [error, setError] = useState("");
    const {name, surname, email, phone, password} = state;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleInputChange =(e)=>{
        let {name,value} = e.target;
        setState({...state, [name]:value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !surname || !email || !phone || !password){
            setError("Please input all input fields");
        }else{
            dispatch(addUser(state));
            navigate("/");
            setError("");
        }
    }

    
    return (
        <>
        <Button onClick={() =>  navigate('/')} variant="contained" color="primary" type="submit">Back</Button>
            <h2>Add User</h2>
            {error && <h3 style={{color:"red"}} >{error}</h3>}
            <form noValidate autoComplete="off" onSubmit={handleSubmit} >
                <TextField onChange={handleInputChange} name="name" id="standard-basic" label="Name" value={name} type="text" variant="standard"/>
                <TextField onChange={handleInputChange} name="surname" id="standard-basic" label="Surname" value={surname} type="text" variant="standard"/>
                <TextField onChange={handleInputChange} name="email" id="standard-basic" label="Email" value={email} type="email" variant="standard"/>
                <TextField onChange={handleInputChange} name="phone" id="standard-basic" label="Phone" value={phone} type="phone" variant="standard"/>
                <TextField onChange={handleInputChange} name="password" id="standard-basic" label="Password" value={password} type="text" variant="standard"/>
                <Button variant="contained" color="primary" type="submit">Add User</Button>
            </form>

        </>
    )
}

export default AddUser