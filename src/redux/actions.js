import axios from 'axios';
import * as types from './actionType.js';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})
const userDeleted = () => ({
    type: types.DELETE_USER,
})
const userAdded = () => ({
    type: types.ADD_USER,
})
const userEdited = () => ({
    type: types.EDIT_USER,
})
const getUser = (user) => ({
    type: types.GET_USER,
    payload:user,
})

export const  loadUsers  =  ()  => {
   
    return  function (dispatch){
         axios.get(`${process.env.REACT_APP_GET_USERS_API}`).then(response => {
            console.log("response", response)
            dispatch(getUsers(response.data));
        })
        .catch((error) => console.log(error));
    }
}

export const  deleteUser  =  (id)  => {
   
    return  function (dispatch){
         axios.delete(`${process.env.REACT_APP_GET_USER_API}/${id}`).then(response => {
            console.log("response", response)
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
        .catch((error) => console.log(error));
    }
}

export const addUser  =  (user)  => {
   
    return  function (dispatch){
         axios.post(`${process.env.REACT_APP_GET_USER_API}`, user).then(response => {
            console.log("response", response)
            dispatch(userAdded());
            dispatch(loadUsers());
        })
        .catch((error) => console.log(error));
    }
}
export const  editUser  =  (user, id)  => {
   
    return  function (dispatch){
         axios.patch(`${process.env.REACT_APP_GET_USER_API}/${id}`, user).then(response => {
            console.log("response", response)
            dispatch(userEdited());
           
        })
        .catch((error) => console.log(error));
    }
}

export const  getSingleUser  =  (id)  => {
   
    return  function (dispatch){
         axios.get(`${process.env.REACT_APP_GET_USER_API}/${id}`).then(response => {
            console.log("response", response)
            dispatch(getUser(response.data));
        })
        .catch((error) => console.log(error));
    }
}