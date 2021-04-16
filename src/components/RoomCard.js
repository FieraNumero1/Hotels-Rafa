import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Lightbox } from "react-modal-image";

const RoomCard = ({ src, title, description, show, showCard }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   
    
    return (
            <>
            <Card className={classes.root}>
                <CardActionArea > 
                    <CardMedia
                        onClick={handleOpen}
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={src}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* <Button  variant="contained" color="primary">
                        Share
                    </Button> */}
                    <Button size="small" variant="outlined"  className={classes.botonCard}>
                        Ver habitación
                    </Button>
                </CardActions>
                
                
            </Card>
            <div>
            {open&&(<Lightbox
                medium={src}
                large={src}
                alt={title}
                
                onClose={handleClose}
                />)}
            </div>
            </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '2%',
        minWidth: 300,
        width: '25%',
        justifyContent: 'space-around',
        transition: 'all 1s ease',
        '&:hover' : {
            boxShadow:'5px 10px gray',
            transform: 'scale(1.1)',
        }
        
    },
    inputSection: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        textAlign: 'center',
        //lo que esta onda hace es que el primer button que encuentre se le aplique estas propiedades
        '& button:hover': {
            backgroundColor: "#982F27",
            color: 'white',
        }
    },
    botonCard: {
        transition: 'all 0.5s ease',
        fontSize:'15px',
        fontWeight:'bold',
        backgroundColor:'rgba(152,47,39,0.5)',
        color:'white',
        '&:hover': {
            backgroundColor:'#3f51b5',
            color:'white',
            fontWeight:'bold',
            borderRadius: '25px',
            // transform: 'scale(1.1)'
        },
    },
    people: {
        display: 'flex',
        justifyContent: 'center',

    },
    input: {
        border: '1px solid gray',
        borderRadius: '25px',
        paddingLeft: '10px',
    },

}))


export default RoomCard
