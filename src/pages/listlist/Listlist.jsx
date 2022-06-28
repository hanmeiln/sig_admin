import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../list/List'
import Listp from '../listprovinsi/Listp'
import { pathName, setDataPage } from "../../utils/naming";
import './listlist.scss';
// import ListCulture from '../list/List'

const Listlist = () => {
  return (
    <div className="listlist">
    <Sidebar />
    <div className="listContainer">
      <Navbar />
      <div className="listWrapper">
        {setDataPage(
            <List />,
            <Listp />,
            <Listp />
        )}
        </div>
    </div>
  </div>
  )
}

export default Listlist;