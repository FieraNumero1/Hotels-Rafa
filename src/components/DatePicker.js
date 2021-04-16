import React from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';
import { useHistory} from 'react-router-dom'



const DatePicker = () => {

    const history = useHistory();

    const handleSelect = (ranges) =>{ }
    let today = new Date();
    const selectionRange = {
        startDate: new Date(2021,3,14),
        endDate: new Date(2021,3,18),
        key: 'selection',
      }

    const classes = useStyle();

    return (
        <div className={classes.root}>
             <DateRangePicker
                
                minDate={today}
                ranges={[selectionRange]}
                onChange={()=>handleSelect()}
            />
            <div className={classes.inputSection}>
                <Typography variant="h5"> Numero de huespedes </Typography>
                <div className={classes.people}>
                    <InputBase placeholder="2 personas" inputProps={{ className: classes.input}} />
                    <PeopleAltIcon style={{fontSize: 40 }} />
                </div>
                <Button onClick={() => history.push('/search')} > Buscar habitaciones </Button>
            </div>
        </div>
    )
}

const useStyle = makeStyles((theme)=>({
    root: {
        position: 'absolute',
        top: '13vh',
        left: '30vw',
        [theme.breakpoints.down("sm")]:{
            top: '16vh',
            left: '0vw',
        },
        zIndex:1,
    },
    inputSection:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        textAlign:'center',
        //lo que esta onda hace es que el primer button que encuentre se le aplique estas propiedades
        '& button':{backgroundColor:'rgba(152,47,39,0.5)',},
        '& button:hover':{
            backgroundColor:"#982F27",
            color: 'white',
        }
    },
    people: {
        display: 'flex',
        justifyContent:'center',
        
    },
    input: {    
        width:'6vw',
        border: '1px solid gray',
        borderRadius: '25px',
        paddingLeft: '10px',
    },
  
  }))

export default DatePicker
