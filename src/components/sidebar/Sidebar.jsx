import './sidebar.scss';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom"

const Sidebar = () => {
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
                <Link to="/" style={{ textDecoration:"none" }}>
                <li>
                    <DashboardRoundedIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/adat" style={{ textDecoration:"none" }}>
                <li>
                    <LocalFloristRoundedIcon className='icon' />
                    <span>Data Adat</span>
                </li>
                </Link>
                <Link to="/provinsi" style={{ textDecoration:"none" }}>
                <li>
                    <LocationOnRoundedIcon className='icon' />
                    <span>Data Provinsi</span>
                </li>
                </Link>
                <p className="title">USER</p>
                <li>
                    <LogoutRoundedIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;