import AudiophileMobileImage from "../assets/audiophile-iphone.png";
import AudiophileLaptopImage from "../assets/audiophile-laptop.png";
import InvoiceAppMobileImage from "../assets/invoice-iphone.png";
import InvoiceAppDesktopImage from "../assets/invoice-app-laptop.png";
import EntertainmentWebAppMobileImage from "../assets/entertainment-iphone.png";
import EntertainmentWebAppDesktopImage from "../assets/entertainment-laptop.png";
import PhotoSnapMobileImage from "../assets/art-gallery-iphone.png";
import PhotoSnapDesktopImage from "../assets/art-gallery-laptop.png";
export const projects = [
  {
    id: 1,
    name: "Audiophile e-commerce",
    description: [
      "A complete e-commerce CRUD web app made to be responsive across all devices.",
      "Advanced data handling and state management using Redux and Context.",
      "Used various JavaScript Methods to add and remove items from the cart.",
    ],
    tags: [
      "TypeScript",
      "React.js",
      "Redux",
      "TailwindCSS",
      "CRUD",
      "Custom Hooks",
      "Responsive",
    ],
    mobileImage: AudiophileMobileImage,
    laptopImage: AudiophileLaptopImage,
    live: "https://am1553.github.io/audiophile/",
    code: "https://github.com/am1553/audiophile",
  },
  {
    id: 2,
    name: "Invoice Web App",
    description: [
      "A fully functional CRUD web app integrated with Firebase",
      "I started this project with the intention of building backend using Express.js, MongoDB and Node but had issues deploying the API, however I did manage to perform the CRUD functionality on the app and have it reflect on the MongoDB database.",
    ],
    tags: ["React.js", "TailwindCSS", "Firebase", "Responsive", "Custom Hooks"],
    mobileImage: InvoiceAppMobileImage,
    laptopImage: InvoiceAppDesktopImage,
    live: "https://am1553.github.io/invoice-app/",
    code: "https://github.com/am1553/invoice-app",
  },
  {
    id: 3,
    name: "Entertainment Web App",
    description: [
      "On this project, data was stored on a local JSON file and passed as props through reusable components and rendered using map function. There is filter functionality added to this, where shows can be rendered based on user search or category selected.",
    ],
    tags: [
      "React.js",
      "Responsive",
      "SCSS",
      "BEM",
      "LocalStorage",
      "Advance JavaScript",
    ],
    mobileImage: EntertainmentWebAppMobileImage,
    laptopImage: EntertainmentWebAppDesktopImage,
    live: "https://am1553.github.io/entertainment-web-app/",
    code: "https://github.com/am1553/entertainment-web-app",
  },
  {
    id: 4,
    name: "PhotoSnap Art Gallery",
    description: [
      "This is a simple website that has multiple pages. Reusable components were used for this where data was passed as props from a local JSON file. This website is also responsive across all devices.",
    ],
    tags: ["React.js", "SCSS", "BEM", "Advance JavaScript", "Animation"],
    mobileImage: PhotoSnapMobileImage,
    laptopImage: PhotoSnapDesktopImage,
    live: "https://am1553.github.io/photosnap/",
    code: "https://github.com/am1553/photosnap",
  },
];
