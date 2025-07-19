import { v4 as uuidv4 } from "uuid";

export const uuidGen = () => {
  const newKey = uuidv4();
  return newKey;
};

export const projects = [
  {
    title: "Archfolio",
    availale: true,
    projectType: "static",
    role: "Full-stack engineer",
    year: "2025",
    excerpt:
      "Archfolio is a full-stack, multi-tenant portfolio builder built with Next.js 15, Payload CMS 3.0, and Tailwind CSS. It enables users to dynamically generate responsive portfolio sites from structured CMS data, with secure authentication, Cloudinary media handling, and a customizable dashboard UI optimized for design creatives.",
    description:
      "Archfolio is a full-stack portfolio-building platform tailored for creatives. It allows users manage their content through a custom dashboard, and instantly generate responsive portfolio websites, all without writing code. The platform is built with Next.js 15, Payload CMS 3.0, and Tailwind CSS, featuring a multi-tenant backend, secure authentication, Cloudinary integration for media uploads, and a smooth, mobile-optimized frontend experience. Archfolio emphasizes usability, clean design, and developer-grade scalability, making it as valuable to end-users as it is impressive to recruiters.",
    github: "https://github.com/nonso-uj/archfolio",
    liveLink: "https://archfolio-two.vercel.app",
    images: [
      "img/archfolio/1.png",
      "img/archfolio/2.png",
      "img/archfolio/3.png",
      "img/archfolio/4.png",
      "img/archfolio/5.png",
      "img/archfolio/6.png",
      "img/archfolio/7.png",
      "img/archfolio/8.png",
    ],
  },
  {
    title: "Chatrooms",
    availale: true,
    projectType: "static",
    role: "Full-stack engineer",
    year: "2025",
    excerpt:
      "Chatrooms is a Dockerized Discord clone built with Django and PostgreSQL that enables real-time chatroom communication with user authentication and persistent message history.",
    description:
      "Chatrooms is a full-stack web application that replicates Discord's core functionality, allowing users to create dedicated servers, join real-time chat channels, and communicate with other members. Built with Django for backend logic and PostgreSQL for data persistence, the application features a containerized architecture using Docker for consistent development and deployment. The project demonstrates user authentication systems, database management, environment configuration, and production-ready implementation with Gunicorn and Whitenoise for static file serving.",
    github: "https://github.com/nonso-uj/chatrooms-discord-clone",
    liveLink: "https://chatrooms-sp7c.onrender.com",
    images: [
      "img/chatrooms/1.png",
      "img/chatrooms/2.png",
      "img/chatrooms/3.png",
      "img/chatrooms/4.png",
    ],
  },
  {
    title: "Guestic",
    availale: true,
    projectType: "static",
    role: "Frontend engineer",
    year: "2024",
    excerpt:
      "Enhanced a React-based rental property platform with responsive UI components, optimized booking flows, and integrated APIs for a seamless user experience.",
    description:
      "As a Frontend Engineer, I developed interactive React components, optimized performance, and integrated RESTful APIs to deliver a seamless booking experience for a Node.js-based short-term rental platform, while collaborating closely with backend and design teams.",
    github: "",
    liveLink: "https://www.guestic.ca/",
    images: [
      "img/guestic/1.png",
      "img/guestic/2.png",
      "img/guestic/3.png",
      "img/guestic/4.png",
    ],
  },
  {
    title: "Secure Task Manager API",
    availale: true,
    projectType: "static",
    role: "Full-stack engineer",
    year: "2025",
    excerpt:
      "Built a production-ready REST API with JWT authentication, Redis rate-limiting, and Jest testing—solving complex Windows-specific testing challenges. Implements industry best practices for security and scalability.",
    description:
      "Developed a secure Node.js/Express API with JWT authentication, Redis rate limiting, and MongoDB integration, where I unexpectedly solved complex Windows-specific Jest testing challenges through innovative configurations like cross-env compatibility, dynamic app factory patterns, and experimental VM modules—reducing test failures by 90% while implementing industry best practices including Swagger documentation, OWASP security standards, and Artillery load-tested scalability for 1,000+ concurrent users.",
    github: "https://all-apps-backend.onrender.com/",
    liveLink: "https://nonso-react-auth-app.netlify.app/",
    images: ["img/task-app/1.png", "img/task-app/2.png", "img/task-app/3.png"],
  },
  {
    title: "Tag Energy Group Website",
    availale: true,
    projectType: "static",
    role: "Full-stack engineer",
    year: "2022",
    excerpt:
      "Working on the Tag Energy Group website launched my professional web development journey. Using PHP Laravel, JavaScript, CSS, and HTML, I improved functionality and user experience while aligning with the client’s vision.",
    description:
      "My first official client project was for Tag Energy Group, where I handled website maintenance and implemented new features. The project was built on a stack comprising PHP Laravel, JavaScript, CSS, and HTML. This experience was a significant milestone in my career, as I collaborated with the client to enhance the website's functionality and improve the user experience while ensuring the codebase remained clean and efficient.",
    github: "",
    liveLink: "https://tagenergygroup.net/",
    images: [
      "img/tagEnergy/1.png",
      "img/tagEnergy/2.png",
      "img/tagEnergy/3.png",
      "img/tagEnergy/4.png",
    ],
  },
  {
    title: "Taglines Website",
    availale: true,
    projectType: "static",
    role: "Full-stack engineer",
    year: "2023",
    excerpt:
      "Building the Taglines website from scratch was a comprehensive challenge, combining UI/UX design in Adobe XD with full-stack development. I crafted a seamless user experience while implementing the design with a PHP Laravel-based stack.",
    description:
      "For Taglines, I designed and developed a website from the ground up, handling everything from UI/UX design in Adobe XD to full-stack development using PHP Laravel, JavaScript, CSS, and HTML. This project allowed me to shape the user experience and ensure the technical implementation perfectly aligned with the design vision.",
    github: "",
    liveLink: "https://taglinesng.com/",
    images: [
      "img/taglines/1.png",
      "img/taglines/2.png",
      "img/taglines/3.png",
      "img/taglines/4.png",
      "img/taglines/5.png",
    ],
  },
  {
    title: "Franklin Cook Website",
    availale: true,
    projectType: "static",
    role: "Full-stack engineer",
    year: "2023",
    excerpt:
      "Developing the Franklin Cook website involved converting an HTML template into a WordPress theme. This project showcased my ability to create custom solutions while maintaining design fidelity and functionality.",
    description:
      "For the Franklin Cook website, I created a WordPress site from scratch by transforming an HTML template into a fully functional WordPress theme. This project emphasized adaptability, as I ensured the design and functionality aligned perfectly with the client's needs while leveraging the flexibility of WordPress.",
    github: "",
    liveLink: "https://franklincook.net/",
    images: [
      "img/cook/1.png",
      "img/cook/2.png",
      "img/cook/3.png",
      "img/cook/4.png",
    ],
  },
  {
    title: "Josue Digital Website",
    availale: true,
    projectType: "static",
    role: "Full-stack engineer",
    year: "2024",
    excerpt:
      "Creating the Josue Digital website involved converting an HTML template to a WordPress theme and setting up hosting. This project highlighted my ability to deliver end-to-end web solutions efficiently.",
    description:
      "For Josue Digital, I built the website from scratch by converting an HTML template into a WordPress theme and setting up the hosting. This project combined technical expertise with practical implementation, ensuring a seamless transition from design to deployment.",
    github: "",
    liveLink: "https://josuedigital.com/",
    images: [
      "img/josue/1.png",
      "img/josue/2.png",
      "img/josue/3.png",
      "img/josue/4.png",
    ],
  },
  {
    title: "Apinke Portfolio Website",
    availale: true,
    projectType: "static",
    role: "Frontend engineer",
    year: "2024",
    excerpt:
      "Developing The Apinke Afolabi's portfolio site was an exploration of Astro, React and Framer Motion, blending creativity with technical implementation. I handled everything from development to hosting setup.",
    description:
      "I built The Apinke Afolabi's portfolio site from scratch using Astro, React and Framer Motion, leveraging the project as an opportunity to explore dynamic animations and interactive design. Beyond development, I also set up the hosting, ensuring a smooth deployment process.",
    github: "https://github.com/nonso-uj/apinke",
    liveLink: "https://ini-cms.netlify.app/",
    // liveLink: "https://theapinkeafolabi.com/",
    images: [
      "img/apinke/1.png",
      "img/apinke/2.png",
      "img/apinke/3.png",
      "img/apinke/4.png",
      "img/apinke/5.png",
    ],
  },
  {
    title: "EMS E-Commerce Website",
    availale: true,
    projectType: "static",
    role: "Frontend engineer",
    year: "2022",
    excerpt:
      "Building the EMS e-commerce website was a deep dive into core web technologies. Using only HTML, CSS, and Vanilla JavaScript, I created a responsive site with a shopping cart and payment integration.",
    description:
      "As part of a course in 2022, I developed a fully responsive e-commerce website using only raw HTML, CSS, and Vanilla JavaScript. The project featured a shopping cart and payment integration, demonstrating my ability to build complex functionality without relying on frameworks or libraries.",
    github: "https://github.com/nonso-uj/ems",
    liveLink: "https://nonso-uj.github.io/ems/",
    images: [
      "img/ems/1.png",
      "img/ems/2.png",
      "img/ems/3.png",
      "img/ems/4.png",
      "img/ems/5.png",
    ],
  },
];

export const certifications = [
  {
    link: "http://ude.my/UC-32b4306a-631d-45e4-bd54-97fba9fa3652",
    img: "/img/certifications/udemy-aws.jpg",
  },
  {
    link: "https://app-eu1.hubspot.com/academy/achievements/6pw25yn1/en/1/chinonso-udonne/seo",
    img: "/img/certifications/hubspot-seo.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/certificate/BZNN6S2825JL",
    img: "/img/certifications/coursera-python.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/certificate/ABKF8TSLDDFT",
    img: "/img/certifications/coursera-backend.png",
  },
  {
    link: "/img/certifications/zuri-backend.jpg",
    img: "/img/certifications/zuri-backend.jpg",
  },
  {
    link: "https://www.freecodecamp.org/certification/r2_d2/back-end-development-and-apis",
    img: "/img/certifications/fcc-backend.png",
  },
  {
    link: "https://www.freecodecamp.org/certification/r2_d2/javascript-algorithms-and-data-structures",
    img: "/img/certifications/fcc-dsa.png",
  },
  {
    link: "https://www.freecodecamp.org/certification/r2_d2/scientific-computing-with-python-v7",
    img: "/img/certifications/fcc-python.png",
  },
  {
    link: "http://ude.my/UC-32b4306a-631d-45e4-bd54-97fba9fa3652",
    img: "/img/certifications/udemy-aws.jpg",
  },
  {
    link: "https://app-eu1.hubspot.com/academy/achievements/6pw25yn1/en/1/chinonso-udonne/seo",
    img: "/img/certifications/hubspot-seo.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/certificate/BZNN6S2825JL",
    img: "/img/certifications/coursera-python.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/certificate/ABKF8TSLDDFT",
    img: "/img/certifications/coursera-backend.png",
  },
  {
    link: "/img/certifications/zuri-backend.jpg",
    img: "/img/certifications/zuri-backend.jpg",
  },
  {
    link: "https://www.freecodecamp.org/certification/r2_d2/back-end-development-and-apis",
    img: "/img/certifications/fcc-backend.png",
  },
  {
    link: "https://www.freecodecamp.org/certification/r2_d2/javascript-algorithms-and-data-structures",
    img: "/img/certifications/fcc-dsa.png",
  },
  {
    link: "https://www.freecodecamp.org/certification/r2_d2/scientific-computing-with-python-v7",
    img: "/img/certifications/fcc-python.png",
  },
  {
    link: "http://ude.my/UC-32b4306a-631d-45e4-bd54-97fba9fa3652",
    img: "/img/certifications/udemy-aws.jpg",
  },
  {
    link: "https://app-eu1.hubspot.com/academy/achievements/6pw25yn1/en/1/chinonso-udonne/seo",
    img: "/img/certifications/hubspot-seo.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/certificate/BZNN6S2825JL",
    img: "/img/certifications/coursera-python.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/certificate/ABKF8TSLDDFT",
    img: "/img/certifications/coursera-backend.png",
  },
  {
    link: "/img/certifications/zuri-backend.jpg",
    img: "/img/certifications/zuri-backend.jpg",
  },
  {
    link: "https://www.freecodecamp.org/certification/r2_d2/back-end-development-and-apis",
    img: "/img/certifications/fcc-backend.png",
  },
  {
    link: "https://www.freecodecamp.org/certification/r2_d2/javascript-algorithms-and-data-structures",
    img: "/img/certifications/fcc-dsa.png",
  },
  {
    link: "https://www.freecodecamp.org/certification/r2_d2/scientific-computing-with-python-v7",
    img: "/img/certifications/fcc-python.png",
  },
];
