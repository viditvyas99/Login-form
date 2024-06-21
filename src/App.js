
import { useSelector } from 'react-redux';
import './App.css';
import Loginform from './component/Loginform';
import Userdata from './component/Userdata';
import LanguageSwitcher from './component/LanguageSwitcher';

function App() {
  const user = useSelector((state)=>state.auth.user)
  
  return (
    <div >
      <LanguageSwitcher/>
      {user? <Userdata/>:<Loginform/>}
   
    </div>
  );
}

export default App;
