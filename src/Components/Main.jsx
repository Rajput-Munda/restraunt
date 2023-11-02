import '../Styles/Main.css';
import Searchbar from "./Searchbar";
import Recommendation from './Recommendation';
import White from './White';


const Main = () => {
  return (
    <>
      <div className="main-navbar"> <Searchbar /> </div>
      < div className="main-highlight"><Recommendation /> </div>
      <div className="main-menus"> <White /> </div>

    </>
  )
}

export default Main;
