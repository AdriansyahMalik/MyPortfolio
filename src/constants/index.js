import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    sawadeecha,
    koba,
    carrent,
    Portfolio,
    chungma,
    jobit,
    aeknagok,
    laravel,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];


  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Wordpress Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "MySQl",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "java",
      icon: typescript,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
  ];
  
  const experiences = [
    {
      title: "IT Support",
      company_name: "Badan Pusat Statistik",
      icon: starbucks,
      iconBg: "#c3c3c3",
      date: "June 2022 - Mar 2023",
      points: [
        "Installing and configuring computer hardware, software, systems, networks, printers, and scanners.",
        "Monitoring and maintaining computer systems and networks.",
        "Providing technical support across the company.",
        "Testing new technology"]
    },
    {
      title: "Data Entry",
      company_name: "Badan Pusat Statistik",
      icon: starbucks,
      iconBg: "#c3c3c3",
      date: "Mar 2022 - June 2022",
      points: [
        "Compile, verify accuracy and sort information according to priorities to prepare source data for computer entry.",
        "Review data for deficiencies or errors, correct any incompatibilities if possible and check output.",
        "Generate reports, store completed work in designated locations and perform backup operations.",
        "Insert customer and account data by inputting text based and numerical information from source documents within time limits.",
      ],
    },
    {
      title: "Android Developer",
      company_name: "PT Chungma Engineering and Construction",
      icon: chungma,
      iconBg: "#c3c3c3",
      date: "Nov 2021 - Jan 2022",
      points: [
        "Design and build advanced applications for the Android platform.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Unit-test code for robustness, including edge cases, usability, and general reliability.",
        "Work on bug fixing and improving application performance.",
      ],
    },
    {
      title: "Java Developer",
      company_name: "CV Aeknagok (Internship)",
      icon: aeknagok,
      iconBg: "#c3c3c3",
      date: "Mar 2021 - Aug 2021",
      points: [
        "Design, implement and maintain Java-based applications that can be high-volume and low-latency.",
        "Develop and test software.",
        "Develop documentation to help users.",
        "Ensure application designs conform with business goals.",
      ],
    },
    {
      title: "Barista",
      company_name: "Sawadeecha XP",
      icon: sawadeecha,
      iconBg: "#c3c3c3",
      date: "June 2021 - Sept 2021",
      points: [
        "Give customers drink menus and answer their questions regarding ingredients.",
        "Take orders while paying attention to details (e.g. preferences of coffee blend, dairy and sugar ratios).",
        "Keep the bar area clean.",
        "Maintain stock of clean mugs and plates.",
        "Check if brewing equipment operates properly and report any maintenance needs.",
        "Communicate customer feedback to managers and recommend new menu items.",
      ],
    },
    {
      title: "Barista",
      company_name: "Kopi Bahagia",
      icon: koba,
      iconBg: "#c3c3c3",
      date: "Aug 2020 - May 2021",
      points: [
        "Give customers drink menus and answer their questions regarding ingredients.",
        "Take orders while paying attention to details (e.g. preferences of coffee blend, dairy and sugar ratios).",
        "Keep the bar area clean.",
        "Maintain stock of clean mugs and plates.",
        "Check if brewing equipment operates properly and report any maintenance needs.",
        "Communicate customer feedback to managers and recommend new menu items.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Aditya Fachrizal",
      designation: "Desainer & Founder",
      company: "Extended.asia",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "ANDHIKA MAULUDI",
      designation: "CEO",
      company: "Aku Sara",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "MOHAMMAD SOEHARTO",
      designation: "Chief Marketing Officer",
      company: "Aku Sewa",
      image: "https://randomuser.me/api/portraits/men/26.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Extended.Asia",
      description:
      "Online terminal for visual and sound artist, also connoisseur as well as art lovers to extend collaborative cross genre audio-visual media. A channel provide to education, inspiration, and innovation, of digital cultural.",
      tags: [
        {
          name: "Wordpress",
          color: "orange-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://extended.asia/",
    },
    {
      name: "Aku Sewa",
      description:
        "Web application that enables users to rent a event equipment, Rent lighting, sound system, LED Screen, stage, AC & Cooling fan, Live Streaming, Genset, Backdrop, for personal events or big events.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://akusewa.com/",
    },
    {
      name: "Akusara",
      description:
        "Event Organizer & Technical Event Production offering Audiovisual Equipment Hire and Installations to the event & party industry. Our services include event planning and production, decor, lighting, sound system.",
      tags: [
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://akusarapro.com/",
    },
    {
      name: "My Portfolio",
      description:
      "My Personal Website",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects};