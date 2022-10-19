import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #000066;
    height: 80px;
    width:100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration:none;
`
const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>    
                <Tabs to='/armine'>Admin CRUD</Tabs>
                <Button variant="contained" color="success"><Tabs to='/add'>Add user</Tabs></Button>
            </Toolbar>
        </Header>
    )
}

export default NavBar;