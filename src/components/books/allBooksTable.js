import React, { useEffect, useState, useContext } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { fetchAllBookData } from './api'
import Context from '../../context'
import { useStylesTable } from './style'

function Table() {
  const classes = useStylesTable()

  const { allBooks, setAllBooks } = useContext(Context);
  const initialRows = allBooks.map((book) => ({
    id: book._id,
    coverImage: book.image,
    price: book.price,
    rating: book.rating,
    stock: book.stock
  }))
  const [rows, setRows] = React.useState(initialRows);
  const [bookUpdated, setBookUpdate] = useState(false)
  const [rowModesModel, setRowModesModel] = React.useState({});
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  useEffect(() => {
    fetchAllBookData(setAllBooks, setRows, allBooks, setBookUpdate)
  }, [bookUpdated])
  console.log("books", allBooks)
  console.log("books", rows)
  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
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
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: 'coverImage',
      headerName: 'Book Cover',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      sortable: false,
      width: 200,
      editable: true,
      renderCell: (params) => (
        <Grid style={{ width: "100%" }} >
          <img
            style={{ width: "100%" }}
            src={params.value} />
        </Grid>
      )

    },
    {
      field: 'price',
      headerName: 'Price',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      sortable: false,
      type: 'number',
    flex:1,
      align: 'center',
      editable: true,
      renderCell: (params) => (
        <Grid className={classes.price}>
          <Typography>
            ${params.value}
          </Typography>
        </Grid>
      )
    },
    {
      field: 'rating',
      headerName: 'Rating',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      type: 'number',
      flex:1,
      // width: 180,
      editable: true,
      renderCell: (params) => (
        <Rating
          value={params.value}
        // onChange={(event, newValue) =>
        //   handleRatingChange(event, newValue, params.row.id)
        // }
        />
      ),
    },
    {
      field: 'stock',
      headerName: 'Inventory',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      flex:1,
      // width: 220,
      editable: true,
      sortable: false,
      type: 'number',
      align: 'center',

    },
    {
      field: 'actions',
      type: 'actions',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      headerName: 'Actions',
      flex:1,
      // width: 100,
      align: 'center',
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  const CustomHeader = () => {
    return (
      <Grid className="custom-header">
        <span>price</span>
      </Grid>
    );
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
        '& .super-app-theme--header': {
         padding :"0px 40px",
         headerAlign: 'center',
         width:"100%"
        },
      }}
    >
      <DataGrid
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
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        autoPageSize
      
      />
    </Box>
  );
}

export default Table