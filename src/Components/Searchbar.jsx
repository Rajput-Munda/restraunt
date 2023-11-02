import '../Styles/Searchbar.css';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";


const Searchbar = () => {
  return (
    <>
      
     

        {/*  menu when appear on mobile version */}
        {/* <ion-icon class="menu-toggle" name="menu-outline"></ion-icon> */}
        <FaBars className="menu-toggle"/>

        {/* <!-- search-bar --> */}
        <div className="search">
            <input type="text" placeholder="What you want to eat?" />
            <button className="search-btn">Search</button>
        </div>
        {/* profile icon on left side of navbar */}

        <div className="profile">
            <a className="cart" href="#">
               <AiOutlineShoppingCart className="icons2"/></a>
            <a className="user" href="#">
               <AiOutlineUser className="icons2"/></a>
        </div>

        

    </>
  )
}

export default Searchbar;
