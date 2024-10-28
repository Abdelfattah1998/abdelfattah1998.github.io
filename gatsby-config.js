module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Abdelfattah Hasanat',
    // Main Site Title
    title: `Abdelfattah Hasanat | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full-Stack Developer | Software Engineer`,
    // Optional: Twitter account handle
    author: `@abdelfattah_hasanat`,
    // Optional: Github account URL
    github: `https://github.com/abdelfattah1998`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/abdelfattah-hasanat/`,
    // Content of the About Me section
    about: `Skilled, ambitious, and organized developer, with strong problem-solving skills and an analytical mind. 
I am a fast learner who is passionate about lifelong learning, striving to achieve efficiency & the best 
quality through integrating a variety of technologies.
`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: ' Welfare Pal',
        description:
          'The Eclinic project on GitHub is a Django-based web application designed for booking online clinic appointments. It features user registration, appointment scheduling, doctor and patient dashboards, and real-time diagnosis updates. The system includes navigation for clinics, doctor availability, and patient diagnostics. It employs Python, Django, Bootstrap, jQuery, and AJAX, ensuring responsiveness across devices.',
        link: 'https://github.com/Abdelfattah1998/E-medical_Project',
      },
      {
        name: 'FreeHire',
        description:
          'The Recruiter project, also called FreeHire, is a Java-based web application aimed at helping workshop owners in Palestine find and recruit workers, such as technicians and contractors. It allows owners to create job postings, review workers, and manage job applications, while job seekers can apply for positions, display their experience, and rate employers. The platform includes 12 JSP pages, API integration for email notifications, and user authentication using Spring Security.',
        link: 'https://github.com/Abdelfattah1998/Recruiter',
      },
      {
        name: 'Medica',
        description:
          'The Clinica project is a MERN (MongoDB, Express, React, Node.js) stack application for clinic management, handling appointment scheduling, patient records, and doctor availability. It provides a structured, full-stack solution for clinic administrators and medical staff.',
        link: 'https://github.com/HasanMohammadSadaqa/Clinica',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Userpilot',
        description: 'Back-End Developer, march 2023 - february 2024',
        link: '',

      },
      {
        name: 'UNRWA-RWTC',
        description: 'Instructor, December 2017 - February 2020',
        link: '',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'C#, Python, Java, JavaScript (ES6, Node.js), TypeScript, Elixir',
      },
      {
        name: 'Frameworks',
        description: '.Net Core, Django, Flask, Spring Boot, React, Express, jQuery, Bootstrap, Material-UI, Phoenix'
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL, ClickHouse',
      },
      {
        name: 'Other',
        description:
          'Git, GitHub, Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum, PostMan, Jason Web Token (JWT), Socket.io',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
