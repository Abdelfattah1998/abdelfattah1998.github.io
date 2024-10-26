module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Abdelfattah Hasanat',
    // Main Site Title
    title: `Abdelfattah Hasanat | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: ``,
    // Optional: Twitter account handle
    author: `@abdelfattah_hasanat`,
    // Optional: Github account URL
    github: `https://github.com/abdelfattah1998`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/abdelfattah-hasanat/`,
    // Content of the About Me section
    about: `Skilled, ambitious, and organized developer, with strong problem-solving skills and an analytical mind. 
I am a fast learner who is passionate about lifelong learning, striving to achieve efficiency & the best 
quality through integrating a variety of technologies.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Welfare Pal',
        description:
          'E-medical Website connecting doctors and patients built using Python/Django',
        link: 'https://github.com/Abdelfattah1998/E-medical_Project',
      },
      {
        name: 'FreeHire',
        description:
          'This application targets workers (construction workers, technicians, contractors...etc.), and workshops owners who are actively recruiting workers in Palestine',
        link: 'https://github.com/Abdelfattah1998/Recruiter',
      },
      {
        name: 'Medica',
        description:
          'Clinic Web-Page that helps doctor to organize appointments and documentation of his patients Built using MERN.',
        link: 'https://github.com/HasanMohammadSadaqa/Clinica',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Userpilot',
        description: 'Back-End Developer, march 2023 - feb 2024',
        link: 'https://www.linkedin.com/in/abdelfattah-hasanat/',
      },
      {
        name: 'UNRWA-RWTC',
        description: 'Instructor, mar 2024 - jul 2024',
        link: 'https://www.linkedin.com/in/abdelfattah-hasanat/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js, React.js,  C#, .Net Core, Python, Django, Flask, Java, SpringBoot, Elixir, Phoenix',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL, ClickHouse',
      },
      {
        name: 'Other',
        description:
          'Linux, Git, GitHub, Docker, PostMan, AWS (EC2), Mongoose, JWT, AJAX, Socket.io, Microservices, API design, Agile / Scrum',
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
