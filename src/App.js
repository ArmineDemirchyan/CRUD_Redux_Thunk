import  Home from './pages/Home.js';
import {Route, Routes} from "react-router-dom";
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser.js';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/add" element={<AddUser/>}></Route>
        <Route exact path="/edit/:id" element={<EditUser/>}></Route>
      </Routes>
    </div>
  );
}
export default App;