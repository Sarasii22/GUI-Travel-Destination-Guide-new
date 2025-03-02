import timg1 from "../../assets/places/anuradhapura/mihinthalaya/mihinthalaya1.jpg";
import timg2 from "../../assets/places/badulla/ohiya/ohiya1.jpg";
import timg3 from "../../assets/places/kandy/maligawa/maligawa1.jpg";
import timg4 from "../../assets/places/colombo/seethawaka garden/seethawaka1.jpg";
import timg5 from "../../assets/places/galle/galle fort/galle fort1.jpg";
import timg6 from "../../assets/places/hambantota/yala/yala1.jpg";
import timg7 from "../../assets/places/matara/hiriketiya/hiriketiya1.jpg";
import timg8 from "../../assets/places/nuwaraeliya/hortan plains/hortan plains1.jpg";
import timg9 from "../../assets/places/polonnaruwa/galwiharaya/galwiharaya1.jpg";
import timg10 from "../../assets/places/badulla/koslanda/koslanda.webp";
import timg11 from "../../assets/places/galle/kanneliya/kanneliya1.jpg";
import timg12 from "../../assets/places/hambantota/muruthawela/muruthawela1.jpg";
import timg13 from "../../assets/places/anuradhapura/kalawewa/kalawewa6.jpg"
import timg14 from "../../assets/places/anuradhapura/awkana/awkana1.jpg"
import timg15 from "../../assets/places/badulla/dabana/dabana.jpg"
import timg16 from "../../assets/places/badulla/diyaluma/diyaluma.jpeg"
import timg17 from "../../assets/places/badulla/ella/ella.jpeg"

const Tours = [
    {
        id: 1,
        title: "Mihinthalaya Rajamaha Viharaya",
        city: "Anuradhapura",
        distance: 18,
        maxGroupSize: 10,
        img: timg1,
        price: 1000,
        desc: "Mihintale is a mountain peak near Anuradhapura in Sri Lanka. It is believed by Sri Lankans to be the site of a meeting between the Buddhist monk Mahinda and King Devanampiyatissa which inaugurated the presence of Buddhism in Sri Lanka. It is now a pilgrimage site, and the site of several religious monuments and abandoned structures.",
        reviews: [
            {
                name: "John Doe",
                rating: 4.5,
            },
        ],        
       
        avgRating: 4.5,
        featured: true,
        
    },
    {
        id: 2,
        title: "Ohiya",
        city: "Badulla", 
        distance: 61,
        img: timg2,
        desc: "Ohiya is a rural village located in Badulla District of Uva Province, Sri Lanka. It is much closer to the Horton Plains National Park. The picturesque Colombo-Badulla Railyway runs through Ohiya. The area is a base for climbing Sri Lanka's second-highest mountain, Kirigalpoththa.",
        price: 1500,
        reviews: [
          {
              name: "John Doe",
              rating: 4.6,
          },
      ],        
     
        avgRating: 4.7,
        featured: true,
    },
    {
        id: 3,
        title: "Temple of the Tooth",
        city: "Kandy",
        distance: 3,
        img: timg3,
        desc: "Sri Dalada Maligawa or the Temple of the Sacred Tooth Relic is a Buddhist temple in the city of Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha.",
        price: 2000,
        reviews: [
          {
              name: "John Doe",
              rating: 4.7,
          },
      ],        
     
        avgRating: 4.7,
        featured: true,
    },
    {
        id: 4,
        title: "Seethawaka Garden",
        city: "Colombo",
        distance: 30,
        img: timg4,
        desc: "Seethawaka Wet Zone Botanic Gardens is a botanical garden in Sri Lanka. It is situated in the village of Ilukovita in the Seethawaka Divisional Secretariat Division of the Colombo District. The garden was opened to the public on 1 July 2014.",
        price: 2500,
        reviews: [
          {
              name: "John Doe",
              rating: 4.7,
          },
      ],        
     
        avgRating: 4.7,
        featured: true,
    },
    {
        id: 5,
        title: "Galle Fort",
        city: "Galle",
        distance: 119,
        img: timg5,
        desc: "Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical, archaeological and architectural heritage monument, which even after more than 423 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka.",
        price: 3000,
        reviews: [
          {
              name: "John Doe",
              rating: 4.7,
          },
      ],        
     
        avgRating: 4.7,
        featured: true,
    },
    {
        id: 6,
        title: "Yala National Park",
        city: "Hambantota",
        distance: 119,
        img: timg6,
        desc: "Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian Ocean, in southeast Sri Lanka. It’s home to wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species.",
        price: 3500,
        reviews: [
          {
              name: "John Doe",
              rating: 4.7,
          },
      ],        

        avgRating: 4.7,
        featured: true,
    },
    {
        id: 7,
        title: "Hiriketiya",
        city: "Matara",
        distance: 119,
        img: timg7,
        desc: "Hiriketiya is a small bay with a beautiful beach, located in the south of Sri Lanka. It is a great place for surfing and swimming. The beach is surrounded by palm trees and the water is crystal clear. The bay is located in the south of the island, close to the town of Matara.",
        price: 4000,
        reviews: [
          {
              name: "John Doe",
              rating: 4.7,
          },
      ],        

        avgRating: 4.7,
        featured: true,
    },
    {
        id:8,
        title: "Hortan Plains",
        city: "Nuwara Eliya",
        distance: 119,
        img: timg8,
        desc: "Hortan Plains is a mountainous region in Sri Lanka, located in the central highlands. It is a great place for hiking and wildlife watching. The region is home to a variety of wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species.",
        price: 3500,
        reviews: [
          {
              name: "John Doe",
              rating: 4.7,
          },
      ],        

        avgRating: 4.7,
        featured: true,
    },
    
    {
        id:9,
        title: "Koslanda",
        city: "Badulla",
        distance: 119,
        img: timg10,
        desc: "Koslanda is a small village located in the Badulla District of Sri Lanka. It is a great place for hiking and wildlife watching. The region is home to a variety of wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species.",
        price: 3500,
        reviews: [
          {
              name: "John Doe",
              rating: 4.7,
          },
      ],
        avgRating: 4.7,
        featured: true,
    },
    {
        id:10,
        title: "Galwihaaraya",
        city: "Polonnaruwa",
        distance: 119,
        img: timg9,
        desc: "Gal Vihara, also known as Gal Viharaya, are four massive Buddha statues carved into a granite rock face. They are located in Polonnaruwa, Sri Lanka. The statues date back to the 12th century and are considered to be some of the best examples of ancient Sinhalese sculpting and architecture.",


        price: 3500,
        reviews: [
          {
              name: "John Doe",
              rating: 4.5,
          },
      ],        

        avgRating: 4,
        featured: true,
    }
    ,
    {
        id:11,
        title: "Kanneliya",
        city: "Galle",
        distance: 119,
        img: timg11,
        desc: "Kanneliya is a tropical rainforest located in the Galle District of Sri Lanka. It is a great place for hiking and wildlife watching. The region is home to a variety of wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species.",
        price: 3500,
        reviews: [
          {
              name: "John Doe",
              rating: 4.7,
          },
      ],
        avgRating: 4.7,
        featured: true,
    },
    {
        id:12,
        title: "Muruthawela",
        city: "Hambantota",
        distance: 119,
        img: timg12,
        desc: "Muruthawela is a small village located in the Hambantota District of Sri Lanka. It is a great place for hiking and wildlife watching. The region is home to a variety of wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species.",
        price: 3500,
        reviews: [
          {
              name: "John Doe",
              rating: 4.7,
          },
      ],
        avgRating: 4.7,
        featured: true,
    },

    {
        id:13,
        title: "Kalawewa",
        city: "Anuradhapura",
        distance: 119,
        img: timg13,
        desc: "",
        price: 1000,
        reviews: [
            {
                name: "John Doe",
                rating: 4.7,
            },
        ],
          avgRating: 4.7,
          featured: false,

    },

    {
        id:14,
        title: "Awkana",
        city: "Anuradhapura",
        distance: 119,
        img: timg14,
        desc: "",
        price: 1000,
        reviews: [
            {
                name: "John Doe",
                rating: 4.7,
            },
        ],
          avgRating: 4.7,
          featured: false,
    },

    {
        id:15,
        title: "Dabana",
        city: "Badulla",
        distance: 119,
        img: timg15,
        desc: "",
        price: 1000,
        reviews: [
            {
                name: "John Doe",
                rating: 4.7,
            },
        ],
          avgRating: 4.7,
          featured: false,
    },

    {
        id:16,
        title: "Diyaluma",
        city: "Badulla",
        distance: 119,
        img: timg16,
        desc: "",
        price: 1000,
        reviews: [
            {
                name: "John Doe",
                rating: 4.7,
            },
        ],
          avgRating: 4.7,
          featured: false,
    },

    {
        id:17,
        title: "Ella",
        city: "Badulla",
        distance: 119,
        img: timg17,
        desc: "",
        price: 1000,
        reviews: [
            {
                name: "John Doe",
                rating: 4.7,
            },
        ],
          avgRating: 4.7,
          featured: false,
    }
];

export default Tours;