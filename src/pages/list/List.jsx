import React, { useEffect } from "react";
import "./list.scss"
import Datatable from "../../components/datatable/Datatable"
import { deleteCulture, getCultures } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const List = () => {
  const dispatch = useDispatch();
  const { cultures } = useSelector((state) => state.cultures);
  console.log(cultures);

  useEffect(() => {
      getCultures(dispatch);
  }, []);

  const handleDelete = (id) => {
      deleteCulture(id, dispatch, toast);
  };

  const provinceColumns = [
      { field: "_id", headerName: "ID", minWidth: 50 },
      {
        field: "year",
        headerName: "Tahun",
        width: 70,
        flex: 1,
        renderCell: (params) => {
            return params.row?.year || "-";
        },
    },
      {
          field: "name",
          headerName: "Nama Adat",
          minWidth: 250,
          flex: 1,

          renderCell: (params) => {
              return params.row?.name;
          },
      },
      {
          field: "province",
          headerName: "Provinsi",
          minWidth: 150,
          flex: 1,
          renderCell: (params) => {
              return params.row?.province?.name;
          },
      },
      {
          field: "desc",
          headerName: "Deskripsi",
          minWidth: 300,
          flex: 1,
          renderCell: (params) => {
              return params.row?.desc || "-";
          },
      },
    ];

  return (
    <div className="list">
    <Datatable
        rows={cultures}
        columns={provinceColumns}
        handleDelete={handleDelete}
    />
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
</div>
  )
}

export default List;