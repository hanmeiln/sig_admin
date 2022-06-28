import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./new.scss";
// import AddCulture from "../addCulture/AddCulture";
import AddProvince from "../addProvince/AddProvince";
// import AddUser from "../addUser/AddUser";
import { pathName, setDataPage } from "../../utils/naming";
import AddAdat from "../addAdat/AddAdat";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Tambah {pathName()}</h1>
                </div>
                <div className="mid">
                    {setDataPage(<AddAdat />, <AddProvince />, <AddProvince />)}
                </div>
            </div>
        </div>
    );
};

export default New;
