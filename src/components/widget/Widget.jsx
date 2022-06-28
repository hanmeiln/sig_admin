import './widget.scss'
import React from "react";
// import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const Widget = ({ type, value }) => {
    let data;

    switch (type) {
        case "admin":
            data = {
                title: "ADMIN",
                isMoney: false,
                link: "See all admin",
                icon: (
                    <PersonRoundedIcon 
                    className='icon' 
                    style={{
                        color: '#809A6F',
                        backgroundColor: '#D5D8B5',
                    }}
                />
                ),
                path: "/users",
            };
            break;
        case "adat":
            data = {
                title: "DATA ADAT",
                isMoney: false,
                link: "Lihat semua",
                icon: (
                    <LocalFloristRoundedIcon 
                    className='icon' 
                    style={{
                        color: '#F190B7',
                        backgroundColor: '#FBD6D2',
                    }}
                    />
                ),
                path: "/culture",
            };
            break;
        case "provinsi":
            data = {
                title: "DATA PROVINSI",
                isMoney: false,
                link: "Lihat semua",
                icon: (
                <LocationOnRoundedIcon
                 className='icon'
                    style={{
                        color: '#EEC373',
                        backgroundColor: '#F4DFBA',
                    }}
                />
                ),
                path: "/province",
            };
            break;
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{value}</span>
            <span className='link'>
                <a href={data.path}>{data.link}</a>
            </span>
        </div>
        <div className="right">
            {/* <div className="percentage positive">
                <ArrowDropUpRoundedIcon />
                {diff} %
            </div> */}
            {data.icon}
        </div>
    </div>
  )
}

export default Widget;