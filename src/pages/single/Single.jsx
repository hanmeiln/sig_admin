import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { pathName, setDataPage } from "../../utils/naming";
import Edit from "../edit/Edit";
import Editp from "../editprovinsi/Editp";
// import EditUser from "../editUser/EditUser";
import "./single.scss";

const Single = () => {
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Edit {pathName()}</h1>
                </div>
                <div className="mid">
                    {setDataPage(
                        <Edit />,
                        <Editp />,
                        <Edit />,
                    )}
                </div>
            </div>
        </div>
    );
};

export default Single;
