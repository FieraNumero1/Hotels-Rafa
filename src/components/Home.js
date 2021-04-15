import React, {useState} from 'react'
import {Button, CssBaseline, makeStyles} from '@material-ui/core'
import Banner from './Banner';
import RoomCard from './RoomCard';
import DatePicker from './DatePicker';

const Home = () => {
  const classes = useStyle();
  const [showDatePicker, setShowDatePicker] = useState(false);
  
    return (
      // react fragment
      <> 
      {/* Sirve para pasarlo a primer nivel, y asi renderizar el resto del los componentes */}
      <CssBaseline/>
        <div className={classes.root}>
          <div className={classes.dates}>
            <Button className={classes.bottonsitos} onClick={()=>{setShowDatePicker(!showDatePicker)}}> {showDatePicker ? 'Cerrar':'Agendar citas'}</Button>
            {showDatePicker &&(<DatePicker/>)}
            
          </div>
          <Banner/>
          <div className={classes.section}>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
          </div>
        </div>
      </>
    )
}

const useStyle = makeStyles((theme)=>({
  root: { 
    

  },
  bottonsitos: {
    top:'10px',
    border: '2px solid',
    width:"100%",
    fontSize:"20px",
    fontWeight: 'bold',
    borderRadius: '0px',
    borderColor: '#982F27',
    transition: 'all 1s ease',
    color: '#982F27',
    "&:hover": {
    backgroundColor:'#982F27',
    color:'#fff'
    },
  },

  }))

export default Home
