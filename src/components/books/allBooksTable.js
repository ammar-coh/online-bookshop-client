import React, { useEffect, useState, useContext } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridPagination,
} from '@mui/x-data-grid';
import { fetchAllBookData, bookRemoved, bookUpdated } from './api'
import Context from '../../context'
import { useStylesTable } from './style'
import ImageEditInputCell from './imageEditInput'
import RatingEditInputCell from './ratingEditInput'
import Pagination from './customPagination'
const renderImageEditInputCell = (params) => {
  return <ImageEditInputCell {...params} />;
};


const renderRatingEditCell = (params) => {
  return < RatingEditInputCell {...params} />
}

function Table() {
  const { alertContent, setAlertContent, setAlertOpen } = useContext(Context);
  const classes = useStylesTable()
  const { allBooks, setAllBooks } = useContext(Context);
  const initialRows = allBooks.map((book) => ({
    id: book._id,
    coverImage: book.image,
    price: book.price,
    rating: book.rating,
    stock: book.stock,
    title: book.title,
    category: book.category,
    author: book.author,
    description: book.description
  }))
  const [rows, setRows] = React.useState(initialRows);
  const [bookListUpdated, setBookListUpdate] = useState(false)
  const [bookUpdate, setBookUpdate] = useState(false)
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [rowUpdate, setRowUpdate] = useState({})
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  

  useEffect(() => {
    fetchAllBookData(setAllBooks, setRows, allBooks, setBookListUpdate)
  }, [bookListUpdated])


  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => async () => {
    try {
      await setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    }
    catch (error) {
      console.error(error);
    }
  };
  const handleDeleteClick = (id) => async () => {
    console.log("check  ID ", id)
    try {
      await bookRemoved(id, setRows, rows, alertContent, setAlertContent, setAlertOpen)
    }
    catch (error) {
      console.error(error);
    }

  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow};
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    bookUpdated(newRow.id, updatedRow, alertContent, setAlertContent, setAlertOpen)
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  function CustomPagination(props) {
    return <GridPagination ActionsComponent={Pagination} {...props} className={classes.paginationDefault} />;
  }
  const width = 150
  const columns = [
    {
      field: 'coverImage',
      headerName: 'Book Cover',
      headerClassName: 'cover-image-header',
      cellClassName: 'cover-image-cell',
      headerAlign: 'center',
      sortable: false,
      editable: true,
      width: 150,
      renderCell: (params) =>
      (
        <Grid style={{ width: "100%", height: "100%", padding: "12px" }} >
          <img
            style={{ width: "100%", height: "90%" }}
            src={params.value}
            alt="Book Cover " />
        </Grid>
      ),
      renderEditCell: renderImageEditInputCell,
    },
    {
      field: 'title',
      headerName: 'Name',
      headerClassName: 'cover-title-header',
      cellClassName: 'cover-title-cell',
      headerAlign: 'center',
      sortable: false,
      align: 'center',
      editable: true,
      width: 200,
      renderCell: (params) =>
      (
        <Grid className={classes.title}>
          <Typography paragraph>
            {params.value}
          </Typography>
        </Grid>
      )
    },
    {
      field: 'author',
      headerName: 'Author',
      headerClassName: 'cover-author-header',
      cellClassName: 'cover-author-cell',
      headerAlign: 'center',
      sortable: false,
      align: 'center',
      editable: true,
      width: 200,
      renderCell: (params) => (
        <Grid className={classes.author}>
          <Typography>
            {params.value}
          </Typography>
        </Grid>
      )
    },
    {
      field: 'description',
      headerName: 'Description',
      headerClassName: 'cover-des-header',
      cellClassName: 'cover-des-cell', headerAlign: 'center',
      sortable: false,
      align: 'center',
      editable: true,
      width: 250,
      renderCell: (params) => (
        <Grid className={classes.description}>
          <Typography className={classes.paragraph}>

            <p className={classes.paragraph2}>{params.value}</p>

          </Typography>
        </Grid>
      )
    },
    {
      field: 'category',
      headerName: 'Category',
      headerClassName: 'cover-category-header',
      cellClassName: 'cover-category-cell', headerAlign: 'center',
      sortable: false,
      // width:"12%",
      align: 'center',
      editable: true,
      width: 192,
      renderCell: (params) => (
        <Grid className={classes.category}>
          <Typography>
            {params.value}
          </Typography>
        </Grid>
      )
    },
    {
      field: 'rating',
      headerName: 'Rating',
      headerClassName: 'cover-rating-header',
      cellClassName: 'cover-rating-cell',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      type: 'number',
      editable: true,
      width: width,
      renderCell: (params) => (
        <Rating
          className={classes.rating}
          value={params.value}
          readOnly
        />
      ),
      renderEditCell: renderRatingEditCell
    },
    {
      field: 'price',
      headerName: 'Price',
      headerClassName: 'cover-price-header',
      cellClassName: 'cover-price-cell',
      headerAlign: 'center',
      sortable: false,
      type: 'number',
      align: 'center',
      editable: true,
      width: 100,
      renderCell: (params) => (
        <Grid className={classes.price}>
          <Typography>
            ${params.value}
          </Typography>
        </Grid>
      )
    },
    {
      field: 'stock',
      headerName: 'Inventory',
      headerClassName: 'cover-stocK-header',
      cellClassName: 'cover-stock-cell', headerAlign: 'center',
      editable: true,
      sortable: false,
      type: 'number',
      align: 'center',
      width: width,
      renderCell: (params) => (
        <Grid className={classes.stock}>
          <Typography>
            {params.value}
          </Typography>
        </Grid>
      )
    },
    {
      field: 'actions',
      type: 'actions',
      headerClassName: 'cover-actions-header',
      cellClassName: 'cover-actions-cell', headerAlign: 'center',
      headerName: 'Actions',
      align: 'center',
      cellClassName: 'actions',
      width: 80,
      getActions: (params) => {
        const isInEditMode = rowModesModel[params.id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',

              }}
              onClick={handleSaveClick(params.id, params.row)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className={classes.CancelIcon}
              onClick={handleCancelClick(params.id)}
              color="inherit"
            />,
          ];
        }

        return [

          <GridActionsCellItem
            icon={< EditOutlinedIcon
              style={{
                color: "#fff",
                backgroundColor: "#d22129",
                fontSize: "16px",
                borderRadius: "5px",
                lineHeight: "25px",
                width: "20px",
                height: "20px",
              }}

            />
            }
            label="Edit"
            className={classes.edit}
            onClick={handleEditClick(params.id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteOutlinedIcon
              style={{
                color: "#fff",
                backgroundColor: "#d22129",
                fontSize: "16px",
                borderRadius: "5px",
                lineHeight: "25px",
                width: "20px",
                height: "20px"
              }} />}
            label="Delete"
            onClick={handleDeleteClick(params.id)}
            color="inherit"
          />,

        ];
      },
    },
  ];

  return (

    <Box
      className={classes.dataGrid}
      sx={{
        display: "block",
        height: "100%",
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
        '& .super-app-theme--header': {
          padding: "0px 40px",
          headerAlign: 'center',
          // width: "100%"
        },
        '& .cover-des-cell': {
          '& .css-ahj2mt-MuiTypography-root': {
            overflow: "hidden",
          }
        },

      }}
    >

      <DataGrid
        className={classes.dataGrid}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        rowHeight={220}
        disableColumnMenu
        disableRowSelectionOnClick
        pagination
        slots={{
          pagination: CustomPagination,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}

        initialState={{

          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        sx={{
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "inherit" // Or 'transparent' or whatever color you'd like
          }
        }}

      />


    </Box>
  );
}
export default Table