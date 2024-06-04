// eslint-disable-next-line no-unused-vars
import "./sidebar.scss";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/">
                    <span className="logo">Footlocker</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <Link to="/users">
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li>
                            <CreditCardIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <StorefrontIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <Link to="/categories">
                        <li>
                            <CategoryIcon className="icon" />
                            <span>Categories</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    );
};

export default Sidebar;