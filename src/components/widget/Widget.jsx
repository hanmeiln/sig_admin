import './widget.scss'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

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
            };
            break;
        case "adat":
            data = {
                title: "DATA ADAT",
                isMoney: false,
                link: "View all",
                icon: (
                    <LocalFloristRoundedIcon 
                    className='icon' 
                    style={{
                        color: '#F190B7',
                        backgroundColor: '#FBD6D2',
                    }}
                />
                ),
            };
            break;
        case "provinsi":
            data = {
                title: "DATA PROVINSI",
                isMoney: false,
                link: "View all",
                icon: (
                <LocationOnRoundedIcon
                 className='icon'
                    style={{
                        color: '#EEC373',
                        backgroundColor: '#F4DFBA',
                    }}
                />
                ),
            };
            break;
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"} {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpRoundedIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget