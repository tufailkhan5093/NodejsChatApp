
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AllUsers from './components/AllUsers';
import Chat from './components/Chat';
import SignUp from './components/SignUp';
function App() {
  return (
   <>
   <Router>


<Routes>
  {/* <Route element={<ProtectedRoute user={loginStatus()} />}> */}
    <Route exact path='/' element={<><Home/></>} />
    <Route exact path='/signup' element={<><SignUp/></>} />
    <Route exact path='/allusers' element={<><AllUsers/></>} />
    <Route exact path='/chat' element={<><Chat/></>} />
    
</Routes>
</Router>
   </>
  );
}

export default App;
