import React, { useState, useEffect } from 'react'
import { Button, CssBaseline, makeStyles } from '@material-ui/core'
import Banner from './Banner';
import RoomCard from './RoomCard';
import DatePicker from './DatePicker';
import dataRoom from './RoomsData'
import backgroundImage from '../issest/img/fondo.1.svg'
import useSearch from '../hooks/useSearch'
import { useSelector } from 'react-redux';
import { selectSearch } from '../features/searchSlice';

const resetModals = (data) => data.map((room) => ({ ...room, show: false }));

const Home = () => {
  const classes = useStyle();
  const dataComplete = useSelector(selectSearch);
  const [filteredData, setSearchValueData, setSourceDataData] = useSearch();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dataCard, setDataCard] = useState(resetModals(filteredData));
  
  useEffect(()=>{
    setSearchValueData(dataComplete.toString());
  },[dataComplete])

  useEffect(()=>{
    setSourceDataData(dataRoom);
  },[])

  useEffect(()=>{
    setDataCard(resetModals(filteredData));
  },[filteredData])

  const handleModal = (index) => () => {
    setDataCard(prev => {
      const result = resetModals(prev);
      result[index].show = true;

      return result;
    })
  }


  return (
    // react fragment
    <>
      {/* Sirve para pasarlo a primer nivel, y asi renderizar el resto del los componentes */}
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.dates}>
          <Button className={classes.bottonsitos} onClick={() => { setShowDatePicker(!showDatePicker) }}> {showDatePicker ? 'Cerrar' : 'Agendar citas'}</Button>
        </div>
        {showDatePicker && (<DatePicker />)}
        <div className={classes.banner}>
          <Banner />
        </div>
        <div className={classes.section}>
          {dataCard.map((data, index) => (
            <RoomCard key={index} {...data} showCard={handleModal(index)} />
          ))
          }
        </div>
      </div>
    </>
  )
}

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: 'calc(100vh - (126px+56px))',
  },
  dates: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  banner: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  section: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  bottonsitos: {
    top: '10px',
    border: '2px solid',
    width: "100%",
    fontSize: "20px",
    fontWeight: 'bold',
    borderRadius: '0px',
    borderColor: '#982F27',
    transition: 'all 1s ease',
    color: '#982F27',
    "&:hover": {
      backgroundColor: '#982F27',
      color: '#fff'
    },
  },

}))

export default Home
