export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "PassEx",
    des: "Pass-EX is a secure and user-friendly password generator designed to create strong, random passwords and ensuring enhanced security for your accounts.",
    img: "/p1.png",
    video: "/passx.webm",
    iconLists: ["/re.svg", "/vite.svg", "/javascript.svg"],
    githubLink: "https://github.com/kumarram27/pass-ex",
    liveLink:
      "https://microsoftedge.microsoft.com/addons/detail/passex/dmcifioindjojcfphmoeeakdjdjmdkkh",
  },
  {
    id: 2,
    title: "MyGvp CLI",
    des: "A CLI tool to automate the process of searching the results in college website.",
    img: "/cli.png",
    video: "/mygvpcli.webm",
    iconLists: [
      "/javascript.svg",
      "/nodejs-icon.svg",
      "/ssh.svg",
      "/npmjs-tile.svg",
    ],
    githubLink: "https://github.com/kumarram27/gvp",
    liveLink: "https://www.npmjs.com/package/mygvp",
  },
  {
    id: 3,
    title: "MyGvp Extension",
    des: "A browser extension to automate the process of searching the results in college website.",
    img: "/ex.png",
    video: "/mygvpex.webm",
    iconLists: ["/re.svg", "/vite.svg", "/mongodb.png", "/vercel2.svg"],
    githubLink: "https://github.com/kumarram27/MyGvp-Extention",
    liveLink:
      "https://microsoftedge.microsoft.com/addons/detail/mygvp-extension/banjhoagimjlnagailpnofkgdadghhed",
  },
];

export const experiences = [
  {
    company: "FlintLab Inc.",
    role: "Software Development Engineer & Founding Engineer",
    period: "Jul 2025 - Present",
    highlights: [
      "Built backend services for a device testing platform supporting 100+ Android and 50+ iOS devices.",
      "Developed Python/FastAPI services with Redis Pub/Sub for 20+ parallel test executions.",
      "Extended Android and iOS streaming, recording, device interaction, and session lifecycle workflows.",
      "Built an ADB Logcat pipeline with Fluent Bit and Elasticsearch, reducing representative log volume from 98K to 20K lines.",
      "Implemented Auth0 authentication, RBAC, API gateway validation, and production HTTPS routing.",
    ],
  },
  {
    company: "FlintLab Inc.",
    role: "Software Development Engineer Intern",
    period: "Mar 2025 - Jun 2025",
    highlights: [
      "Reduced redundant frontend API calls by 30% through state management and Redis caching.",
      "Contributed to a SPA migration that reduced observed routing time from 300 ms to 20 ms.",
      "Migrated Next.js API calls to server-side execution and contributed to Appium automation workflows for Android and iOS.",
    ],
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

// export const workExperience = [
//   {
//     id: 1,
//     title: "Frontend Engineer Intern",
//     desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
//     className: "md:col-span-2",
//     thumbnail: "/exp1.svg",
//   },
//   {
//     id: 2,
//     title: "Mobile App Dev - JSM Tech",
//     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp2.svg",
//   },
//   {
//     id: 3,
//     title: "Freelance App Dev Project",
//     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp3.svg",
//   },
//   {
//     id: 4,
//     title: "Lead Frontend Developer",
//     desc: "Developed and maintained user-facing features using modern frontend technologies.",
//     className: "md:col-span-2",
//     thumbnail: "/exp4.svg",
//   },
// ];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/kumarram27",
  },
  {
    id: 2,
    img: "/email.svg",
    url: "mailto:kumar27.dev@gmail.com",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/kumarsatyasriram/",
  },
];

export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "React Query",
  //   Image: "/reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Stripe Payment",
  //   Image: "/stripe.webp",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/discord.svg",
  },
];

export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Material UI",
  //   Image: "/mui.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Redux",
  //   Image: "/redux.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "React Query",
  //   Image: "/reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  // {
  //   skill_name: "Fire base",
  //   Image: "/Firebase.png",
  //   width: 55,
  //   height: 55,
  // },
  // {
  //   skill_name: "Postger SQL",
  //   Image: "/postger.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Prisma",
  //   Image: "/prisma.webp",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Graphql",
  //   Image: "/graphql.png",
  //   width: 80,
  //   height: 80,
  // },
];

export const Full_stack = [
  {
    skill_name: "React Native",
    Image: "/ReactNative .png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Tauri",
  //   Image: "/tauri.svg",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Docker",
    Image: "/docker.webp",
    width: 70,
    height: 70,
  },
];

export const Other_skill = [
  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 50,
    height: 50,
  },
  // {
  //   skill_name: "Go",
  //   Image: "/go.png",
  //   width: 60,
  //   height: 60,
  // },
];
