import { Table, TableHead, TableRow, TableCell, TableBody, Button, styled } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, loadUsers } from './redux/actions.js';
import { Delete, Edit } from '@mui/icons-material';
import NavBar from "./NavBar"
import { useNavigate } from 'react-router-dom';


const StyledTable = styled(Table)`
  width:100%;
  margin: 50px auto 0 auto;
`
const Thead = styled(TableRow)`
background: #000066;
  & > th{
    color:#fff;
    font-size:20px;
  }
`
const TBody = styled(TableRow)`
  background:#0000;
  & > td{
    font-size:20px;
  }
`

const Home = () => {

  let dispatch = useDispatch();
  const { data } = useSelector(state => state.data.users);
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you wanted to delete this user?")){
      dispatch(deleteUser(id))
    }
  }
  const handleChangeUserData = (id) => {

  }

  return (
    <>
    <NavBar/>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Surname</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>Phone</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {data && data.map((user) => (
            <TBody key={user.id}>
              <TableCell align='center'>{user.name}</TableCell>
              <TableCell align='center'>{user.surname}</TableCell>
              <TableCell align='center'>{user.email}</TableCell>
              <TableCell align='center'>{user.phone}</TableCell>
              <TableCell align='center'><Button onClick={()=>navigate(`/edit/${user.id}`)} variant="contained" endIcon={<Edit />}> Edit</Button></TableCell>
              <TableCell align='left'><Button variant="outlined" startIcon={<Delete />} color="error" onClick={()=> handleDelete(user.id)}> Delete</Button></TableCell>
            </TBody>
          ))}

        </TableBody>
      </StyledTable>
    </>
  )
}
export default Home;