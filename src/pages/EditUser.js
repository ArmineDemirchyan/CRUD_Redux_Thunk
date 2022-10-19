import React, {useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, editUser } from '../redux/actions';
 
const initialValues = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: ''
  };
  
  
  const EditUser = () => {
   
    const [state, setState] = useState(initialValues);
    const [error, setError] = useState("");
    const {name, surname, email, phone, password} = state;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let {id} = useParams();
    const {data} = useSelector((state) => state.data.user);
    

    useEffect(()=>{
        dispatch(getSingleUser(id));
    },[])

    useEffect(()=>{
        if(data){
            setState({...data})
        }
    },[data])

    const handleInputChange =(e)=>{
        let {name,value} = e.target;
        setState({...state, [name]:value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !surname || !email || !phone ){
            setError("Please input all input fields");
        }else{
            dispatch(editUser(state, id));
            navigate("/");
            setError("");
        }
    }

    
    return (
        <>
        <Button onClick={() =>  navigate('/')} variant="contained" color="primary" type="submit">Back</Button>
            <h2>Edit User</h2>
            {error && <h3 style={{color:"red"}} >{error}</h3>}
            <form noValidate autoComplete="off" onSubmit={handleSubmit} >
                <TextField onChange={handleInputChange} name="name" id="standard-basic" label="Name" value={name || ""} type="text" variant="standard"/>
                <TextField onChange={handleInputChange} name="surname" id="standard-basic" label="Surname" value={surname || ""} type="text" variant="standard"/>
                <TextField onChange={handleInputChange} name="email" id="standard-basic" label="Email" value={email || ""} type="email" variant="standard"/>
                <TextField onChange={handleInputChange} name="phone" id="standard-basic" label="Phone" value={phone || ""} type="phone" variant="standard"/>
                <TextField onChange={handleInputChange} name="password" id="standard-basic" label="New Password" value={password || ""} type="text" variant="standard"/>
                <Button variant="contained" color="primary" type="submit">Edit User</Button>
            </form>

        </>
    )
}

export default EditUser