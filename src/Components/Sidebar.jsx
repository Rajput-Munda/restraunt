import '../Styles/Sidebar.css';
import { BiHomeSmile, BiWallet, BiMessageRoundedMinus, BiLogOut } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";

const Sidebar = () => {
  return (

    <>

      {/* <!-- sidebar --> */}
      <div className="sidebar ">
        {/* <!-- logo --> */}
        <h1 className="logo">Dine Flow</h1>

        {/*  List of menus */}
        <div className="sidebar-menus">
          <a href="#">
            <BiHomeSmile className="icons" />
            Home
          </a>

          <a href="#">
            <RiBillLine className="icons" />
            Bills
          </a>

          <a href="#">
            <BiWallet className="icons" />
            Wallet
          </a>

          <a href="#">
            <IoIosNotificationsOutline className="icons" />
            Notification
          </a>

          <a href="#">
            <BiMessageRoundedMinus className="icons" />
            Contact Us
          </a>

          <a href="#">
            <LuSettings className="icons" />
            Setting
          </a>
        </div>
        {/*  logout  */}
        <div className="sidebar_logout">
          <a href="#">
            <BiLogOut className="icons" />
            Logout
          </a>
        </div>
      </div>

      {/* sidebar  */}

    </>

  );
};

export default Sidebar;
