// import React, { useEffect, useState, useContext } from "react";
// import Grid from '@mui/material/Grid';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import {  GridRowModes,
//     DataGrid,
//     GridActionsCellItem,
//     GridRowEditStopReasons,
//     gridPageCountSelector,
//     GridPagination,
//     useGridApiContext,
//     useGridSelector,} from '@mui/x-data-grid';
// import Rating from '@mui/material/Rating';
// import { useStylesTable } from './style'
// import ImageEditInputCell from './imageEditInput'
// import RatingEditInputCell from './ratingEditInput'
// const classes = useStylesTable()
// const renderImageEditInputCell = (params) => {
//     return <ImageEditInputCell {...params} />;
// };


// const renderRatingEditCell = (params) => {
//     return < RatingEditInputCell {...params} />
// }
// export const columns = [
//     {
//         field: 'coverImage',
//         headerName: 'Book Cover',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         sortable: false,
//         width: 140,
//         editable: true,
//         renderCell: (params) =>
//         (
//             <Grid style={{ width: "100%", height: "100%", padding: "12px" }} >
//                 <img
//                     style={{ width: "100%", height: "90%" }}
//                     src={params.value}
//                     alt="Book Cover " />
//             </Grid>
//         ),
//         renderEditCell: renderImageEditInputCell,
//     },
//     {
//         field: 'price',
//         headerName: 'Price',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         sortable: false,
//         type: 'number',
//         flex: 1,
//         align: 'center',
//         editable: true,
//         renderCell: (params) => (
//             <Grid className={classes.price}>
//                 <Typography>
//                     ${params.value}
//                 </Typography>
//             </Grid>
//         )
//     },
//     {
//         field: 'rating',
//         headerName: 'Rating',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         align: 'center',
//         sortable: false,
//         type: 'number',
//         flex: 1,
//         // width: 180,
//         editable: true,
//         renderCell: (params) => (
//             <Rating
//                 value={params.value}
//                 readOnly
//             />
//         ),
//         renderEditCell: renderRatingEditCell
//     },
//     {
//         field: 'stock',
//         headerName: 'Inventory',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         flex: 1,
//         // width: 220,
//         editable: true,
//         sortable: false,
//         type: 'number',
//         align: 'center',

//     },
//     {
//         field: 'actions',
//         type: 'actions',
//         headerClassName: 'super-app-theme--header',
//         headerAlign: 'center',
//         headerName: 'Actions',
//         flex: 1,
//         // width: 100,
//         align: 'center',
//         cellClassName: 'actions',
//         getActions: ({ id }) => {
//             const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
//             if (isInEditMode) {
//                 return [
//                     <GridActionsCellItem
//                         icon={<SaveIcon />}
//                         label="Save"
//                         sx={{
//                             color: 'primary.main',

//                         }}
//                         onClick={handleSaveClick(id)}
//                     />,
//                     <GridActionsCellItem
//                         icon={<CancelIcon />}
//                         label="Cancel"
//                         className="textPrimary"
//                         onClick={handleCancelClick(id)}
//                         color="inherit"
//                     />,
//                 ];
//             }

//             return [
//                 <GridActionsCellItem
//                     icon={< EditOutlinedIcon
//                         style={{
//                             color: "#fff",
//                             backgroundColor: "#d22129",
//                             fontSize: "16px",
//                             borderRadius: "5px",
//                             lineHeight: "25px",
//                             width: "20px",
//                             height: "20px"
//                         }}
//                     />
//                     }
//                     label="Edit"
//                     className="textPrimary"
//                     onClick={handleEditClick(id)}
//                     color="inherit"
//                 />,
//                 <GridActionsCellItem
//                     icon={<DeleteOutlinedIcon
//                         style={{
//                             color: "#fff",
//                             backgroundColor: "#d22129",
//                             fontSize: "16px",
//                             borderRadius: "5px",
//                             lineHeight: "25px",
//                             width: "20px",
//                             height: "20px"
//                         }} />}
//                     label="Delete"
//                     onClick={handleDeleteClick(id)}
//                     color="inherit"
//                 />,
//             ];
//         },
//     },
// ];