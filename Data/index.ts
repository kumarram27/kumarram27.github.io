import { url } from "inspector";

export const navItems = [
  { name:"Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

 export const heroData = [
    {
      id: 1,
      title: "Hi, I'm Kumar",
      description: "I'm a Frontend Developer with a passion for creating beautiful and interactive user experiences.",
      img: "",
    },
  
 ];
// export const gridItems = [
//   {
//     id: 1,
//     title: "I prioritize client collaboration, fostering open communication ",
//     description: "",
//     className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
//     imgClassName: "w-full h-full",
//     titleClassName: "justify-end",
//     img: "/b1.svg",
//     spareImg: "",
//   },
//   {
//     id: 2,
//     title: "I'm very flexible with time zone communications",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 3,
//     title: "My tech stack",
//     description: "I constantly try to improve",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "",
//     titleClassName: "justify-center",
//     img: "",
//     spareImg: "",
//   },
//   {
//     id: 4,
//     title: "Tech enthusiast with a passion for development.",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-start",
//     img: "/grid.svg",
//     spareImg: "/b4.svg",
//   },

//   {
//     id: 5,
//     title: "Currently building a JS Animation library",
//     description: "The Inside Scoop",
//     className: "md:col-span-3 md:row-span-2",
//     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
//     titleClassName: "justify-center md:justify-start lg:justify-center",
//     img: "/b5.svg",
//     spareImg: "/grid.svg",
//   },
//   {
//     id: 6,
//     title: "Do you want to start a project together?",
//     description: "",
//     className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//     imgClassName: "",
//     titleClassName: "justify-center md:max-w-full max-w-60 text-center",
//     img: "",
//     spareImg: "",
//   },
// ];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    des: "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    img: "/p1.png",
    iconLists: ["/next2.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    githubLink: "https://github.com/kumarram27",
    liveLink: "https://kumardev.me",
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
    iconLists: ["/re.svg", "/vite.svg", "/javascript.svg","/vercel2.svg",],
    githubLink: "https://github.com/kumarram27/MyGvp-Extention",
    liveLink:
      "https://microsoftedge.microsoft.com/addons/detail/mygvp-extension/banjhoagimjlnagailpnofkgdadghhed",
  },
  {
    id: 4,
    title: "",
    des: "",
    img: "",
    iconLists: ["/next2.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    githubLink: "https://kumarram27.github.io/",
    liveLink: "https://kumarram27.github.io/minipassgen/",
  },
];
// export const products = [
//   {
//     title: "Moonbeam",
//     link: "https://gomoonbeam.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
//   },
//   {
//     title: "Cursor",
//     link: "https://cursor.so",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cursor.png",
//   },
//   {
//     title: "Rogue",
//     link: "https://userogue.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/rogue.png",
//   },

//   {
//     title: "Editorially",
//     link: "https://editorially.org",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editorially.png",
//   },
//   {
//     title: "Editrix AI",
//     link: "https://editrix.ai",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editrix.png",
//   },
//   {
//     title: "Pixel Perfect",
//     link: "https://app.pixelperfect.quest",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
//   },

//   {
//     title: "Algochurn",
//     link: "https://algochurn.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
//   },
//   {
//     title: "Aceternity UI",
//     link: "https://ui.aceternity.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
//   },
//   {
//     title: "Tailwind Master Kit",
//     link: "https://tailwindmasterkit.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
//   },
//   {
//     title: "SmartBridge",
//     link: "https://smartbridgetech.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
//   },
//   {
//     title: "Renderwork Studio",
//     link: "https://renderwork.studio",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
//   },

//   {
//     title: "Creme Digital",
//     link: "https://cremedigital.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
//   },
//   {
//     title: "Golden Bells Academy",
//     link: "https://goldenbellsacademy.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
//   },
//   {
//     title: "Invoker Labs",
//     link: "https://invoker.lol",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/invoker.png",
//   },
//   {
//     title: "E Free Invoice",
//     link: "https://efreeinvoice.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
//   },
// ];

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
    img: "/twit.svg",
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
  
  