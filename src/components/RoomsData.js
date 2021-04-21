import img1 from '../issest/img/underwater.jpg'
import img2 from '../issest/img/pool.jpg'
import img3 from '../issest/img/lookToOcean.jpg'
import img4 from '../issest/img/hotelPool.jpg'
import img5 from '../issest/img/golden.jpg'
import img6 from '../issest/img/futureRoom.jpg'
import img7 from '../issest/img/cokingRoom.jpg'
import img8 from '../issest/img/castle.jpg'
import img9 from '../issest/img/bar.jpg'
import img10 from '../issest/img/terraza.jpg'

const dataRoom = [
    {
        src: img1,
        title: 'Habitación bajo el agua',
        description: 'Description',
        cat: 'room',
        prize: 150,
        stock: 5,
        notAvailableStart: new Date (2021, 4, 15),
        notAvailableEnd: new Date (2021, 4, 20),
    },
    {
        src: img2,
        title: 'Balneario interno',
        description: 'Description',
        cat: 'pool',
    },
    {
        src: img3,
        title: 'Habitación vista al mar',
        description: 'Description',
        cat: 'room',
        prize: 250,
        stock: 2,
        notAvailableStart: new Date (2021, 4, 5),
        notAvailableEnd: new Date (2021, 4, 10),
    },
    {
        src: img4,
        title: 'Piscina de lujo',
        description: 'Description',
        cat: 'pool',
    },
    {
        src: img5,
        title: 'Habitación golden',
        description: 'Description',
        cat: 'room',
        prize: 500,
        stock: 1,
        notAvailableStart: new Date (2021, 4, 30),
        notAvailableEnd: new Date (2021, 4, 30),
    },
    {
        src: img6,
        title: 'Habitación gamer',
        description: 'Description',
        cat: 'room',
        prize: 200,
        stock: 6,
        notAvailableStart: new Date (2021, 4, 20),
        notAvailableEnd: new Date (2021, 4, 22),
    },
    {
        src: img7,
        title: 'Restaurante',
        description: 'Description',
        cat: 'kitchen',
    },
    {
        src: img8,
        title: 'Habitación castillo',
        description: 'Description',
        cat: 'room',
        prize: 100,
        stock: 8,
        notAvailableStart: new Date (2021, 4, 30),
        notAvailableEnd: new Date (2021, 5, 2),
    },
    {
        src: img9,
        title: 'Bar',
        description: 'Description',
        cat: 'bar',
    },
    {
        src: img10,
        title: 'Terraza',
        description: 'Description',
        cat: 'terraza',
    },

]
export const dataFilter = [
    { ket: 0, label: "Cancelation Flexible" },
    { ket: 1, label: "Standard rooms" },
    { ket: 2, label: "Executive rooms" },
    { ket: 3, label: "Access to louge" },
    { ket: 4, label: "More filter" },
]

export default dataRoom;