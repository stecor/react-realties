var listingsData = [
  {
    post_id: 1,
    user: 'Paul Brown',
    userImg: require('../images/Paul Brown_60x60.jpg'),
    postDate: '05/05/2017',
    address: '20-34 Grand Ave',
    city: 'Ridgewood',
    state: 'NY',
    homeType: 'Apartment',
    rooms: '3',
    price: 220000,
    floorSpace: 2000,
    elevator: true,
    basement: false,
    gym: false,
    pool: true,
    storage: false,
    parking: true,
    image: require('../images/Paul Brown.jpg'),
    images: [
      {
        original: require('../images/Paul Brown.jpg'),
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
  },
  {
    post_id: 2,
    user: 'July Peterson',
    userImg: require('../images/July_Peterson_60x60.jpg'),
    postDate: '05/10/2016',
    address: '730 Gates Ave',
    city: 'Orlando',
    state: 'FL',
    homeType: 'Apartment',
    rooms: '2',
    price: 120660,
    floorSpace: 1340,
    elevator: false,
    basement: true,
    gym: true,
    pool: false,
    storage: true,
    parking: false,
    image: require('../images/JulyPeterson-554x369.jpg'),
    images: [
      {
        original: require('../images/JulyPeterson-554x369.jpg'),
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
  },
  {
    post_id: 3,
    user: 'Spencer Morgan',
    userImg: require('../images/Spencer Morgan_60x60.jpg'),
    postDate: '18/10/2017',
    address: '2 Main St.',
    city: 'Richmond',
    state: 'VA',
    homeType: 'Studio',
    rooms: '0',
    price: 340500,
    floorSpace: 1520,
    elevator: true,
    basement: false,
    gym: true,
    pool: false,
    storage: false,
    parking: true,
    image: require('../images/SpencerMorgan.jpeg'),
    images: [
      {
        original: require('../images/SpencerMorgan.jpeg'),
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
  },
  {
    post_id: 4,
    user: 'Mary Justin',
    userImg: require('../images/Mary_Justin_60x60.jpg'),
    postDate: '18/10/2017',
    address: '43 Hollywood blvd',
    city: 'Los Angeles',
    state: 'CA',
    homeType: 'Apartment',
    rooms: '3',
    price: 80000,
    floorSpace: 900,
    elevator: false,
    basement: true,
    gym: false,
    pool: false,
    storage: true,
    parking: true,
    image: require('../images/MaryJustin554x415.gif'),
    images: [
      {
        original: require('../images/MaryJustin554x415.gif'),
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
  },
  {
    post_id: 5,
    user: 'Joseph Kern',
    userImg: require('../images/Joseph_Kern_60x60.jpg'),
    postDate: '20/01/2018',
    address: '889 Beemore St.',
    city: 'Bedstuy',
    state: 'NY',
    homeType: 'Condo',
    rooms: '4',
    price: 180000,
    floorSpace: 3000,
    elevator: true,
    basement: false,
    gym: true,
    pool: true,
    storage: false,
    parking: false,
    image: require('../images/JosephKern.jpg'),
    images: [
      {
        original: require('../images/JosephKern.jpg'),
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
  },
  {
    post_id: 6,
    user: 'Miriam Lindsey',
    userImg: require('../images/Miriam_Lindsey_60x60.jpg'),
    address: '15 Presid. Plaza',
    city: 'Springfield',
    state: 'IN',
    homeType: 'Condo',
    rooms: '3',
    price: 165000,
    floorSpace: 2500,
    elevator: false,
    basement: true,
    gym: false,
    pool: true,
    storage: false,
    parking: true,
    image: require('../images/Miriam Lindsey.jpeg'),
    images: [
      {
        original: require('../images/Miriam Lindsey.jpeg'),
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
  },
  {
    post_id: 7,
    user: 'Mark Philips',
    userImg: require('../images/Mark_Philips_60x60.jpg'),
    postDate: '15/02/2016',
    address: '33 Universal St.',
    city: 'Miami',
    state: 'FL',
    homeType: 'Studio',
    rooms: '0',
    price: 1100,
    floorSpace: 1350,
    elevator: true,
    basement: false,
    gym: false,
    pool: true,
    storage: false,
    parking: true,
    image: require('../images/MarkPhilips-554x400.jpg'),
    images: [
      {
        original: require('../images/MarkPhilips-554x400.jpg'),
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
  },
  {
    post_id: 8,
    user: 'Andrew Carl',
    userImg: require('../images/Andrew Carl_60x60.jpg'),
    postDate: '05/02/2017',
    address: '22 James Ave',
    city: 'San Francisco',
    state: 'CA',
    homeType: 'Apartment',
    rooms: '1',
    price: 1300,
    floorSpace: 2450,
    elevator: false,
    basement: true,
    gym: false,
    pool: false,
    storage: true,
    parking: false,
    image: require('../images/AndrewCarl_554x363.jpg'),
    images: [
      {
        original: require('../images/AndrewCarl_554x363.jpg'),
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
  },
  {
    post_id: 9,
    user: 'Lara Andrew',
    userImg: require('../images/Lara Andrew_60x60.jpg'),
    postDate: '25/05/2016',
    address: '55 King Ave',
    city: 'Hollywood',
    state: 'CA',
    homeType: 'Room',
    rooms: '1',
    price: 33080,
    floorSpace: 3050,
    elevator: false,
    basement: true,
    gym: true,
    pool: false,
    storage: false,
    parking: true,
    image: require('../images/Lara Andrew_554x377.jpg'),
    images: [
      {
        original: require('../images/Lara Andrew_554x377.jpg'),
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ],
  },
]

export default listingsData
