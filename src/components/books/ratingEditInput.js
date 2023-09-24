import React, { useEffect, useState, useContext } from "react";
import {  useGridApiContext  } from '@mui/x-data-grid';
  import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
  import Rating from '@mui/material/Rating';
  import Box from '@mui/material/Box';

  
  function RatingEditInputCell(props) {
    const { id, value, field, hasFocus } = props;
    const apiRef = useGridApiContext();
    const ref = React.useRef();
  
    const handleChange = (event, newValue) => {
      apiRef.current.setEditCellValue({ id, field, value: newValue });
    };
  
    useEnhancedEffect(() => {
      if (hasFocus && ref.current) {
        const input = ref.current.querySelector(`input[value="${value}"]`);
        input?.focus();
      }
    }, [hasFocus, value]);
  
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
        <Rating
          ref={ref}
          name="rating"
          precision={1}
          value={value}
          onChange={handleChange}
        />
      </Box>
    );
  }
  export default RatingEditInputCell