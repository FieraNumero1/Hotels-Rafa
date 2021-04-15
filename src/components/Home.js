import React, {useState} from 'react'
import {Button, CssBaseline, makeStyles} from '@material-ui/core'
import Banner from './Banner';
import RoomCard from './RoomCard';
import DatePicker from './DatePicker';
import dataRoom from './RoomsData'
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
          </div>
          {showDatePicker &&(<DatePicker/>)}
          <div className={classes.banner}>
            <Banner/>
          </div>
          <div className={classes.section}>
            {dataRoom.map(({src, title, description}, index)=>(
              <RoomCard key={index} src={src} title={title} description={description}/>
            ))
            }
          </div>
        </div>
      </>
    )
}

const useStyle = makeStyles((theme)=>({
  root: { 
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
  },
  dates: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
  },
  banner:{
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
  },
  section:{
    display: 'flex',
    width: '100vw',
    flexDirection: 'column',
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
