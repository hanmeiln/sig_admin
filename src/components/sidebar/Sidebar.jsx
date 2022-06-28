import './sidebar.scss';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom"
import { logout } from "../../redux/userRedux";
import { useDispatch } from "react-redux";

const Sidebar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

const SidebarData = [
    {
        id: 1,
        title: "Dashboard",
        icon: <DashboardRoundedIcon className="icon" />,
        path: "/",
    },
    {
        id: 2,
        title: "Data Adat",
        icon: <LocalFloristRoundedIcon className="icon" />,
        path: "/culture",
    },
    {
        id: 3,
        title: "Data Provinsi",
        icon: <LocationOnRoundedIcon className="icon" />,
        path: "/province",
    },
    {
        id: 4,
        title: "Logout",
        icon: <LogoutRoundedIcon className="icon" />,
        path: "/login",
    },
]

  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{ textDecoration:"none" }}>
            <span className='logo'>sig-admin</span>
            </Link>
        </div>
        <hr />
        <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            {SidebarData.map((item) => (
                <Link
                    key={item.id}
                    to={item.path}
                    style={{ textDecoration: "none" }}
                >
                <li
                    id={
                        window.location.pathname.split("/")[1] ===
                        item.path.split("/")[1]
                        ? "active"
                        : ""
                    }
                    onClick={
                        item.title === "Logout" ? handleLogout : ""
                    }
                >
                {item.icon}
                <span>{item.title}</span>
                </li>
                </Link>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default Sidebar;