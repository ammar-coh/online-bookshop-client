import React, { useEffect, useState, useContext } from "react";
import MuiPagination from '@mui/material/Pagination';
import {gridPageCountSelector,useGridApiContext, useGridSelector} from '@mui/x-data-grid';


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
  export default Pagination