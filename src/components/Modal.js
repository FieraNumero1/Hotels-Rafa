import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Lightbox } from "react-modal-image";



export default function SimpleModal({status, img}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  console.log('status',open)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    (status ? (handleOpen): (handleClose))();
 },[status])

  
  return (
        <Lightbox
          medium={img}
          large={img}
          alt="Hello World!"
          onClose={this.closeLightbox}
        />
      
    
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));