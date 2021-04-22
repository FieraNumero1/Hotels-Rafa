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
import img11 from '../issest/img/parking.jpg'

const dataRoom = [
    {
        src: img1,
        title: 'Habitación bajo el agua',
        description: '¿Te imaginas dormir en una habitación de hotel bajo el agua rodeado de peces? Durante años esto ha sido simplemente un deseo, pero en la actualidad ya es un sueño hecho realidad.',
        cat: 'room',
        prize: 150,
        stock: 5,
        notAvailableStart: new Date (2021, 4, 15),
        notAvailableEnd: new Date (2021, 4, 20),
    },
    {
        src: img2,
        title: 'Balneario interno',
        description: 'Es uno de los balnearios más lujosos del planeta. Enclavado en un atolón en medio del océano Pacífico, el complejo llamado The Brando es quizás el último lugar donde podrías imaginarte encontrar un sistema con tecnología de punta. Pero te sorprenderás.',
        cat: 'pool',
    },
    {
        src: img3,
        title: 'Habitación vista al mar',
        description: 'La Habitación privada en Casa Vista al Mar cuenta con terraza y se encuentra en El Sunzal, en el departamento de La Libertad, a menos de 1 km de la playa San Blas.',
        cat: 'room',
        prize: 250,
        stock: 2,
        notAvailableStart: new Date (2021, 4, 5),
        notAvailableEnd: new Date (2021, 4, 10),
    },
    {
        src: img4,
        title: 'Piscina de lujo',
        description: '¿Te imaginas estar en estas piscinas de roca natural? A la orilla del mar, junto con una sala para descansar vista al mar ¡Un lugar increíble para conocer!',
        cat: 'pool',
    },
    {
        src: img5,
        title: 'Habitación golden',
        description: 'La habitacion del Golden de Rafa Hotels ha sido decorada con un estilo simple, elegante y funcional, ideal para crear un ambiente agradable y acogedor.',
        cat: 'room',
        prize: 500,
        stock: 1,
        notAvailableStart: new Date (2021, 4, 30),
        notAvailableEnd: new Date (2021, 4, 30),
    },
    {
        src: img6,
        title: 'Habitación gamer',
        description: 'Explora la sensación de despertar junto con un equipo informatico avanzado, computadoras con tarjetas graficas de ultima generacion, procesadores AMD ryzen, sistema de refrigeracion liquida, sistema de proyección de imagen y sistema instalado de audio estereo 3D',
        cat: 'room',
        prize: 200,
        stock: 6,
        notAvailableStart: new Date (2021, 4, 20),
        notAvailableEnd: new Date (2021, 4, 22),
    },
    {
        src: img7,
        title: 'Restaurante',
        description: 'En Rafa Hotels Restaurant la seguridad de nuestros comensales y empleados siempre tendrá la máxima prioridad. Nos hemos preparado para atender a nuestros clientes de la mejor manera, asegurándonos que se sientan seguros por su salud, y de esa manera poder disfrutar con tranquilidad de la mejor experiencia.',
        cat: 'kitchen',
    },
    {
        src: img8,
        title: 'Habitación castillo',
        description: 'Para los amantes de los castilos esta habitación tiene una tematica de los castillos de Disney. Tiene diversiones dentro de la habitación por lo que lo hace ideal para que los niños disfruten y pasen un momento inolvidable.',
        cat: 'room',
        prize: 100,
        stock: 8,
        notAvailableStart: new Date (2021, 4, 30),
        notAvailableEnd: new Date (2021, 5, 2),
    },
    {
        src: img9,
        title: 'Bar',
        description: 'Te invitamos a nuestro bar con un ambiente tranquilo y relajante, con naturaleza, staff amigable, para divertirse con amigos o con tu pareja, contamos con buena música en vivo cuando hay bandas, ricas bebidas y comida.',
        cat: 'bar',
    },
    {
        src: img10,
        title: 'Terraza',
        description: 'Las terrazas son el lugar preferido de las familias adineradas, porque es donde pueden tener reuniones con sus amigos, hacer una parrillada, beber un buen vino, cerveza o cóctel, hacer una gran plática, y llenar de risas el ambiente.',
        cat: 'terraza',
    },
    {
        src: img11,
        title: 'Parqueo',
        description: 'La inspiración para esta parqueo fue la película de 1986 ‘Todo en un día’ aunque en lugar de Ferrari la marca que destaca en Porsche. Además, los detalles están diseñados para ser únicos de este hotel y de sus clientes, por ejemplo la entrada del parqueo hecha con luces de neón.',
        cat: 'Parqueo',
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