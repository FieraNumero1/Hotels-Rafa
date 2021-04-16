import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const showImg = (img)=>{
  var image=img;
}

export default function SimpleModal({status, img}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  console.log('status',open)
  const handleOpen = () => {
    setOpen(true);
    showImg(img)
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    (status ? (handleOpen): (handleClose))();
 },[status])

  const body = (
    <div  className={classes.paper} >
      <img src={img} />
      <SimpleModal />
    </div>
  );

  return (
    <div>
      
      <Modal
        className={classes.classModal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    
    position: 'absolute',
    
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    width:'50%',
    height:'50%',
    
  },
  classModal: {
    // padding: theme.spacing(2, 2, 2, 2),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width:'50%',
    height:'50%',
  },
}));