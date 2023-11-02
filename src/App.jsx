
import './App.css'
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';


function App() {


  return (
    <div className="maincontent">

        <div className= "Sidebar"> <Sidebar /> </div>
        <div className='main'><Main /></div>
        

    </div>

  );
};

export default App;
