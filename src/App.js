
import { useSelector } from 'react-redux';
import './App.css';
import Loginform from './component/Loginform';
import Userdata from './component/Userdata';

function App() {
  const user = useSelector((state)=>state.auth.user)
  console.log('hello world')
  return (
    <div >
      {user? <Userdata/>:<Loginform/>}
   
    </div>
  );
}

export default App;
