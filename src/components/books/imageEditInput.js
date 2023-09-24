import React, { useEffect, useState, useContext } from "react";
import Grid from '@mui/material/Grid';
import {useGridApiContext,} from '@mui/x-data-grid';
  import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
  import CloudUploadIcon from '@mui/icons-material/CloudUpload';
  import Input from '@mui/material/Input';
  import InputLabel from '@mui/material/InputLabel';
  function ImageEditInputCell(props) {
    const { id, value, field, hasFocus } = props;
    const apiRef = useGridApiContext();
    const ref = React.useRef();
    useEnhancedEffect(() => {
      if (hasFocus && ref.current) {
        const input = ref.current.querySelector(`input[value="${value}"]`);
        input?.focus();
      }
    }, [hasFocus, value]);
    const changeHandler = async (event, params) => {
      const image = event.target.files[0];
      if (!image) {
        return false;
      }
      await apiRef.current.setEditCellValue({ id, field, value: window.URL.createObjectURL(event.target.files[0]) 
      })
    };
    return (
      <Grid  >
        <img
          alt="Selected"
          src={typeof value == "string" ? value :
            window.URL.createObjectURL(value)}
          style={{
            width: "100%",
            height: "90%",
            padding: "12px 12px 12px 12px"
          }}
        />
        <Grid>
          <Input
            type='file'
            name='coverImg'
            accept='image/*'
            style={{ display: "none", }}
            onChange={changeHandler}
            id="coverImg"
          />
          <InputLabel htmlFor="coverImg" style={{
            width: "100%",
            padding: "0px 0px 0px 0px",
          }}>
            <CloudUploadIcon style={{
              fontSize: "10px",
              borderRadius: "10%",
              padding: "0px",
              color: "#d22129",
              cursor: "pointer"
            }}
            />
          </InputLabel>
        </Grid>
      </Grid>
    );
  }
  export default ImageEditInputCell