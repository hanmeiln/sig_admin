export const userColumns = [
    { field: "id", headerName: "No", width: 70 },
    {
      field: "username",
      headerName: "Nama Provinsi",
      width: 260,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellWithImg">
    //         <img className="cellImg" src={params.row.img} alt="avatar" />
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    },
    {
      field: "email",
      headerName: "Latitude",
      width: 300,
    },
  
    {
      field: "age",
      headerName: "Longitude",
      width: 300,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Aceh",
      email: "4.695135",
      age: "96.749397",
    },
    {
      id: 2,
      username: "Bali",
      email: "-8.409518",
      age: "115.188919",
    },
    {
      id: 3,
      username: "Banten",
      email: "-6.120000",
      age: "106.150276",
    },
    {
      id: 4,
      username: "Bengkulu",
      email: "-3.808590,",
      age: "102.264435",
    },
    {
      id: 5,
      username: "DI Yogyakarta",
      email: "-7.797068",
      age: "110.370529",
    },
    {
      id: 6,
      username: "DKI Jakarta",
      email: "-6.200000",
      age: "106.816666",
    },
    {
      id: 7,
      username: "Gorontalo",
      email: "0.556174",
      age: "123.058548",
    },
    {
      id: 8,
      username: "Jambi",
      email: "-1.609972",
      age: "103.607254",
    },
    {
      id: 9,
      username: "Jawa Barat",
      email: "-6.943097",
      age: "107.633545",
    },
    {
      id: 10,
      username: "Jawa Tengah",
      email: "-6.995016",
      age: "110.418427",
    },
  ];