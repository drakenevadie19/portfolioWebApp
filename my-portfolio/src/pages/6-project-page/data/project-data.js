const projectData = [
    {
        name: "BOOKEZ", 
        link: "https://github.com/Web103-BookEZ/web103_finalproject.git",
        src: "/project-bio-image/Bookez.png",
        description: "My final capstone project for WEB 103 of Codepath. This is a website for users to book appointment with favourite hairdresser and manicurists in their favourite salon.",
        workTime: "11/2024 - Present",
        techStack: ["React.js", "JavaScript", "PostgreSQL", "Express.js", "Node.js", "Railway", "Material UI", "Postman", "SweetAlert"],
        // techstacks: ["js", "react", "html", "css", "bootstrap", "nodejs", "express", "firebase", "postman", "mongodb", "vscode", "git", "github", "gcp"],
        liveDemo: ["yes", "https://bookez.vercel.app/"],
        participants: "Drake Do",
    },
    {
        name: "idraiske restaurant app", 
        link: "https://github.com/drakenevadie19/idraiske-delivery-application.git",
        src: "/project-bio-image/mobile-app-for-restaurant.jpg",
        description: "A responsive and intuitive restaurant web application allowing users to view restaurants details and order foods.",
        workTime: "7/2024 - Present",
        techStack: ["Angular", "TypeScipts", "MongoDB", "Boostrap 5", "SpringBoot", "Netflix Eureka", "MicroServices", "MySQL", "Docker", "Kubernetes", "JUnit", "Sonar", "Jenkins", "ArgoCD", "AWS", "RESTful API", "Github", "Postman", "MongoDB Atlas", "MongoDB Compass"],
        // techstacks: ["js", "react", "html", "css", "bootstrap", "nodejs", "express", "firebase", "postman", "mongodb", "vscode", "git", "github", "gcp"],
        liveDemo: ["no"],
        participants: "Drake Do",
    },
    {
        name: "SuperFrog Scheduler",
        link: "https://github.com/drakenevadie19/SuperFrogSchedulerFrontEnd",
        src: "/project-bio-image/superFrog.jpg",
        description: "Our goal is to provide the TCU campus with superior technology and a robust infrastructure that will meet the needs of a growing student and employee population. We are dedicated to securing, supporting, and assisting users with the technology services that we provide.",
        workTime: "4/2023 - 5/2023",
        techStack: ["JavaScript", "Java", "Node.js", "Vue.js", "Spring Boot", "MySQL", "Microsoft Azure"],
        liveDemo: ['no'],
        participants: "Drake Do, Kien Pham, Joey Herzog, Taylor Griffin, Eric Guyette, Tommy Truong",
    },
    {
        name: "Blog app", 
        link: "https://github.com/drakenevadie19/BlogApp.git",
        src: "/project-bio-image/BlogApp.jpg",
        description: "Architectured a fullstack website blog application with MERN-stack allowing users to save memories and articles.",
        workTime: "12/2023 - 4/2024",
        techStack: ["JavaScript", "MongoDB", "Express.js", "React.js", "React Hooks", "Node.js", "RESTful API", "Postman", "MongoDB Atlas", "Axios", "Firebase", "Heroku"],
        // techstacks: ["js", "react", "html", "css", "bootstrap", "nodejs", "express", "firebase", "postman", "mongodb", "vscode", "git", "github", "gcp"],
        liveDemo: ["yes", "https://drakedo-blog-app-7c34e913c768.herokuapp.com/"],
        participants: "Drake Do",
    },
    {
        name: "Two Tree Ecommerce App",
        link: "https://github.com/drakenevadie19/TwoTreeEcommerceApp.git",
        src: "/project-bio-image/ecommerceApp.png",
        description: "Designed an fullstack interface with MEVN-stack for shopping demands of users with fully necessary functions for a shopping page. I am still working on this page to develop more.",
        workTime: "1/2024 - 4/2024",
        techStack: ["JavaScript", "Vue.js", "Node.js", "Express.js", "RESTful API", "Postman", "MongoDB", "Mongo Atlas", "Axios", "Render web hosting"],
        // techstacks: ["js", "vue", "html", "css", "bootstrap", "nodejs", "express", "postman", "mongodb", "vscode", "git", "github", "gcp"],
        liveDemo: ['yes', "https://two-tree-ecommerce-app.onrender.com/"],
        participants: "Drake Do",
    },
    {
        name: "sudokuGame",
        link: "https://github.com/drakenevadie19/sudokuGame",
        src: "/project-bio-image/sudokuGame.jpg",
        description: "Inspired by traditional sudoku game, I design a web page for users to solve their maze, and also play Sudoku there. I created a responsive design website, using Angular framework, with Material UI.",
        workTime: "7/2023 - 8/2023",
        techStack: ["TypeScripts", "Angular.js", "Ngrx", "RxJS", "Bootstrap 5", "Material UI", "SweetAlert"],
        liveDemo: ['yes', "https://sudoku-game-psi.vercel.app/home"],
        participants: "Drake Do",
    },
    {
        name: "CineMatch",
        link: "https://github.com/drakenevadie19/CineMatch.git",
        src: "/project-bio-image/movie-review.png",
        description: "CineMatch is a smart movie discovery app that recommends films based on your watch history and preferences. It offers a personalized experience, making it easy to explore and find movies tailored to your taste. Whether you're looking for a blockbuster hit or a hidden gem, CineMatch ensures you always have the perfect movie to watch.",
        workTime: "2/2024 - 3/2024",
        techStack: ["React.js", "Redux", "Node.js", "Express.js", "GraphQL", "Apollo client", "MongoDB", "Mongoose", "MongoDB Atlas"],
        liveDemo: ['no'],
        participants: "Drake Do",
    },
    {
        name: "Daily Diary app", 
        link: "https://github.com/drakenevadie19/dailyDiaryApp.git",
        src: "/project-bio-image/diaryapp.jpeg",
        description: "Developed a fullstack website diary application with MERN-stack allowing users to save daily diary for healing after a long day.",
        workTime: "5/2023 - Present",
        techStack: ["Next.js", "JavaScript", "MongoDB", "Node.js", "RESTful API", "Postman", "MongoDB Atlas"],
        // techstacks: ["js", "react", "html", "css", "bootstrap", "nodejs", "express", "firebase", "postman", "mongodb", "vscode", "git", "github", "gcp"],
        liveDemo: ['no'],
        participants: "Drake Do",
    },
    {
        name: "Hogwart Artifact Online",
        link: "https://github.com/drakenevadie19/hogwart-artifact-online",
        src: "/project-bio-image/hogwart.jpg",
        description: "Developed a fully-fledged RESTful API server to manage wizard object entity and artifact object entity using SpringBoot, Spring MVC, Spring Data JPA and H2 database.",
        workTime: "3/2023 - 4/2023",
        techStack: ["Java", "Spring Boot", "Spring Data", "Spring JPA", "JWT", "Spring Security"],
        // techstacks: ["java", "react", "html", "css", "bootstrap", "nodejs", "materialui", "postman", "spring", "vscode", "git", "github", "idea"],
        liveDemo: ['no'],
        participants: "Drake Do",
    },
    {
        name: "Github Profile Finder",
        link: "https://github.com/drakenevadie19/ghProfileFinder.git",
        src: "/project-bio-image/ghProfileFinder.png",
        description: "An interface to find Github profile by name and github account using Github APIs",
        workTime: "5/2024 - 6/2024",
        techStack: ["React.js", "JavaScript", "Axios", "Bootstrap 5"],
        liveDemo: ['no'],
        participants: "Drake Do",
    },
    {
        name: "Contact Interface",
        link: "https://github.com/drakenevadie19/ContactInterface.git",
        src: "/project-bio-image/contactInterface.png",
        description: "Designed an fullstack interface using React and Spring Boot to store and manage contacts",
        workTime: "11/2023 - 12/2023",
        techStack: ["Java", "React.js", "Materialize CSS", "Bootstrap 5", "Spring Boot", "RESTful API", "Postman"],
        // techstacks: ["js", "java", "react", "html", "css", "bootstrap", "nodejs", "materialui", "postman", "spring", "vscode", "git", "github", "idea"],
        liveDemo: ['no'],
        participants: "Drake Do",
    },
    {
        name: "Book Manager Database 1&2",
        link: "https://github.com/drakenevadie19/BookManager",
        src: "/project-bio-image/books.jpg",
        description: "Guided Dr. Sarka in TCU, I developed a database system for managing new books coming for TCU, using Python and MySQL. This database can also handle queries such as searching a book/books, changing books' information, deleting books. For IDE, I used Pycharm for Python and Datagrip, with Docker to monitor database.",
        workTime: "10/2023 - 11/2023",
        techStack: ["MySQL", "Python", "MongoDB", "Docker"],
        liveDemo: ['no'],
        participants: "Drake Do",
    },
]

export default projectData;

