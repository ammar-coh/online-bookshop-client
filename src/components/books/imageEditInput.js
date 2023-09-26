import React, { useEffect, useState, useContext } from "react";
import Grid from '@mui/material/Grid';
import { useGridApiContext, } from '@mui/x-data-grid';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Context from '../../context'
function ImageEditInputCell(props) {
  const { id, value, field, hasFocus } = props;
  const [selectedImages, setSelectedImages] = useState(Array.isArray(value) ? value : []);
  const { cover, setCover } = useContext(Context);
  const apiRef = useGridApiContext();
  const ref = React.useRef();
  useEnhancedEffect(() => {
    if (hasFocus && ref.current) {
      const input = ref.current.querySelector(`input[value="${value}"]`);
      input?.focus();
    }
  }, [hasFocus, value]);
  const changeHandler = async (event, params) => {
    const images = event.target.files; 
    if (!images || images.length === 0) {
      return false;
    }
    const imageURLs = [];
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      if (image.type.startsWith('image/')) { // Check if it's an image file
        const imageUrl = window.URL.createObjectURL(image);
        imageURLs.push(imageUrl);
      }
    }
    console.log("imageUrls", imageURLs)
    await apiRef.current.setEditCellValue({
      id, field, value: imageURLs
    })
    setSelectedImages(imageURLs)
    setCover([...cover,{id :id,image: event.target.files[0]}])
  };

  console.log("file cover formdata ",cover )
  return (
   
    <Grid  >
 {selectedImages.map((image, index) => (
      <img
      ke={index}
      alt={`Image ${index}`}
        src={typeof value == "string" ? value :
          value}
        style={{
          width: "100%",
          height: "90%",
          padding: "12px 12px 12px 12px"
        }}
      />
      ))}
      <Grid>
       
        <Input
          type='file'
          name={`coverImg-${id}`} 
          accept='image/*'
          style={{ display: "none", }}
          onChange={changeHandler}
          id={`coverImg-${id}`}
          multiple='multiple'
        />
        <InputLabel htmlFor={`coverImg-${id}`} style={{
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