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
  GridActionsCellItem,
  GridRowEditStopReasons,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { fetchAllBookData } from './api'
import Context from '../../context'
import { useStylesTable } from './style'
import MuiPagination from '@mui/material/Pagination';



function Table() {
  const classes = useStylesTable()
 
  const [pageSize, setPageSize] = useState(5); // Initial page size
  const [page, setPage] = useState(1)
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
 
  function Pagination({ page, onPageChange, className }) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <MuiPagination
        color="error"
        className={className}
        count={pageCount}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event, newPage - 1);
        }}
      />
    );
  }
  function CustomPagination(props) {
    return <GridPagination ActionsComponent={Pagination} {...props} className={classes.paginationDefault} />;
  }
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
        <Grid style={{ width: "100%", height: "100%" }} >
          <img
            style={{ width: "100%", height: "100%" }}
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
      flex: 1,
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
      flex: 1,
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
      flex: 1,
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
      flex: 1,
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
          width: "100%"
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
        className={classes.dataGrid}
      
       
      />
    

    </Box>
  );
}

export default Table