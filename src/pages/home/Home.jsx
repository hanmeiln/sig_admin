// import Chart from "../../components/chart/Chart";
// import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const Home = () => {
    const dispatch = useDispatch();
    const [calc, setCalc] = useState({});
    const { provinces } = useSelector((state) => state.provinces);
    const { cultures } = useSelector((state) => state.cultures);
    const { users } = useSelector((state) => state.users);

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type='admin' value={users.length} />
                    <Widget type='adat' value={cultures.length} />
                    <Widget type='provinsi' value={provinces.length}/>
                </div>
                {/* <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div> */}
            </div>
        </div>
    );
};

export default Home;