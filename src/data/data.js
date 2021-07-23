import hotel1 from  '../img/hotel1.jpg';
import hotel2 from  '../img/hotel2.jpg';
import hotel3 from  '../img/stay5.jpg';
import hotel4 from  '../img/stay6.jpg';
import exper1 from '../img/exper1.jpg';
import exper2 from '../img/exper2.jpg';
import stay4 from '../img/stay4.jpg';
import stay5 from '../img/stay5.jpg';
import stay6 from '../img/stay6.jpg';
import flight1 from '../img/flight1.jpg';
import flight5 from '../img/flight5.jpg';
import flight6 from '../img/flight6.jpg';
import japan from '../img/japan.jpg';
import Delta from '../img/Delta Airlines.jpg';
import air from '../img/arline.jpg';

export const hotel = [
    {
        img: hotel1,
        title: "Ryokan Japan",
        price: "$439",
        content: "Enjoy views of the garden from your room",
    },
    {
        img: hotel2,
        title: "Bessho SASA",
        price: "$529",
        content: "Japanese ryokan with private onsen bath",
    },
    {
        img: hotel3,
        title: "HOTEL THE FLAG 大阪市",
        price: "$139",
        content: "Modern hotel in the heart of Osaka",
    },
    {
        img: hotel4,
        title: "9 Hours Shinjuku",
        price: "$59",
        content: "A convenient capsule hotel at Shinjuku station",
    },
];

export const exper = [
    {
        img: exper1,
        title: "Nihon Kimono",
        price: "$89",
        content: "Wear the national dress of Japan around the city",
    },
    {
        img: exper2,
        title: "teamLab Borderless",
        price: "$39",
        content: "A modern sensory experience of light and sound",
    },
]

export const place = [
    {
        img: stay4,
        title: "Hotel Kaneyamaen and Bessho SASA",
        content: "Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner.",
    },
    {
        img: stay5,
        title: "HOTEL THE FLAG 大阪市",
        content: "Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner.",
    },
    {
        img: stay6,
        title: "Hotel Kaneyamaen and Bessho SASA",
        content: "Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner.",
    },

];


export const SearchFor = [
    {
        img: flight1,
        city: "Shanghai",
        country: "China",
        price: "$598",
        content: "An international city rich in culture",
    },
    {
        img: flight5,
        city: "Nairobi",
        country: "Kenya",
        price: "$1,248",
        content: "Dubbed the Safari Capital of the World",
    },
    {
        img: flight6,
        city: "Seoul",
        country: "South Korea",
        price: "$589",
        content: "This modern city is a traveler’s dream",
    },
];

export const chartData = [
    { month: "Feb", price: Math.floor(Math.random()*100)+50},
    { month: "Mar", price: Math.floor(Math.random()*100)+50},
    { month: "Apr", price: Math.floor(Math.random()*100)+50},
    { month: "May", price: Math.floor(Math.random()*100)+50},
    { month: "Jun", price: Math.floor(Math.random()*100)+50},
    { month: "Jul", price: Math.floor(Math.random()*100)+50},
  ];


  export const myArr = [
    { value: 'Mỹ',label: 'USA', city:"Hoa Kỳ", lat: 21.2, long: 105.8},
    { value: 'Đức', label: 'DEU', city:"Bec-lin", lat: 10.8, long: 106.7},
    { value: 'Việt nam', label: 'VN', city:"Hà Nội", lat: 12, long: 109},
    { value: 'Đài loan', label: 'TW', city:"Taipei", lat: 14, long: 110},
  ];


export const flightData = [
    {
        img: air,
        time: "16h 45m",
        name: "Vietnam Airlines",
        title_1: "value",
        title_2: "50m in HKG",
        title_3: "1 Cost",
        title_4: "7:00AM - 4:15PM",
        title_5: "round trip",
        price: 532,
    },
    {
        img: japan,
        time: "18h 22m",
        name: "Japan Airlines",
        title_2: "1h 50m in PVG",
        title_3: "1 Cost",
        title_4: "7:00AM - 4:15PM",
        title_5: "round trip"
    },
    {
        img: Delta,
        time: "18h 52m",
        name: "Delta",
        title_2: "Duration of Flight",
        title_3: "1 Cost",
        title_4: "7:00AM - 4:15PM",
        title_5: "round trip"
    },
];

