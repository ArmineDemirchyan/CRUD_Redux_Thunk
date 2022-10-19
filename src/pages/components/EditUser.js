import { FormGroup,FormControl,InputLabel,Input,Typography,Button, styled} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import  Navbar  from './NavBar';
import {getUser, editUser} from '../service/api';

const Container = styled(FormGroup)`
  width:50%;
  margin:5% auto 0 auto;
  & > div {
    margin-top:20px;
  }
`
const initialValues = {
  name: '',
  username: '',
  email: '',
  phone: ''
}


const EditUser = () => {

  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  },[])

  const getUserData = async () => {
    const response = await getUser(id);
    setUser(response.data);
    
  }
  const onValueChange = (e) =>{
     setUser({...user, [e.target.name]:e.target.value})
      console.log(user);
  }
  const EditUserDetails = async() => {
    await editUser(user, id);
    navigate('/armine/all')
  }

  return (
    <>
    <Navbar/>
    <Container>
      <Typography variant='h4'>Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
      </FormControl>
      <FormControl >
        <Button onClick={()=> EditUserDetails()} variant='contained' >Edit User</Button>
      </FormControl>
    </Container>
    </>
  )
}

export default EditUser;