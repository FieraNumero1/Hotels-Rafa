import React, { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectStart, setStart } from '../features/startSlice';
import { selectEnd, setEnd } from '../features/endSlice';
import swal from 'sweetalert';
import * as moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work

const DatePicker = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const start = useSelector(selectStart);
    const end = useSelector(selectEnd);
    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();
    const [people, setPeople] = useState();
    let todayHere = new Date()
    let dataRedux = moment(dateEnd).format('DD [de] MMMM [del] YYYY')
    let todaytwo = moment(todayHere).format('DD [de] MMMM [del] YYYY')

    const handleSelect = (ranges) => {
        dispatch(setStart(ranges.selection.startDate.valueOf()));
        dispatch(setEnd(ranges.selection.endDate.valueOf()));
        setDateStart(ranges.selection.startDate.valueOf());
        setDateEnd(ranges.selection.endDate.valueOf());
    }

    const onChange = (event) => {
        setPeople(event.target.value);
    };

    const validateData = () => {
        if(dataRedux===todaytwo){
            swal( "Advertencia", "Debe reservar minimo con 1 dia con anterioridad, de lo contrario si es reserva inmediata debe ponerse en contacto con el personal para saber si hay habitaciones disponibles inmediatas","warning");
        }
        else{
            if (people && dateStart && dateEnd) {
                history.push('/search')
                
            }
            else {
                console.log('inicio',dateStart)
                console.log('final',dateEnd)
                if (!people) {
                    swal("Advertencia", "Debe ingresar la cantidad de personas a ocupar la habitación", "warning");
                }
                
                if (!dateStart || !dateEnd) {
                    swal("Advertencia", "Debe ingresar las fechas que desea reservar la habitación", "warning");
                }
            }
        }
    }

    let today = new Date();

    const selectionRange = {
        startDate: start,
        endDate: end,
        key: 'selection',
    }

    const classes = useStyle();

    return (
        <div className={classes.root}>
            <DateRangePicker
                minDate={today}
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <div className={classes.inputSection}>
                <Typography variant="h5"> Numero de huespedes </Typography>
                <div className={classes.people}>
                    <InputBase onChange={onChange} value={people} placeholder="2 personas" inputProps={{ className: classes.input }} />
                    <PeopleAltIcon style={{ fontSize: 40 }} />
                </div>
                <Button onClick={validateData} > Buscar habitaciones </Button>
            </div>
        </div>
    )
}

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: '13vh',
        left: '30vw',
        [theme.breakpoints.down("sm")]: {
            top: '16vh',
            left: '0vw',
        },
        zIndex: 1,
    },
    inputSection: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        textAlign: 'center',
        //lo que esta onda hace es que el primer button que encuentre se le aplique estas propiedades
        '& button': { backgroundColor: 'rgba(152,47,39,0.5)', },
        '& button:hover': {
            backgroundColor: "#982F27",
            color: 'white',
        }
    },
    people: {
        display: 'flex',
        justifyContent: 'center',

    },
    input: {
        width: '6vw',
        border: '1px solid gray',
        borderRadius: '25px',
        paddingLeft: '10px',
    },

}))

export default DatePicker
