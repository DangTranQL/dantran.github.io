/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dang Tran",
  title: "Hi all, I'm Dang",
  subTitle: emoji(
    "A PhD researcher at Drexel University 🧬 applying machine learning to immunology, building interpretable models that account for tumor and patient heterogeneity. Background in Computer Engineering and Robotics & Autonomous Systems 🤖."
  ),
  resumeLink: "resume.pdf", // Set to empty to hide the button (the file itself lives in src/containers/greeting/resume.pdf)
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DangTranQL",
  linkedin: "https://www.linkedin.com/in/dangtran67/",
  gmail: "tranquangluandang762@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "MACHINE LEARNING RESEARCHER WORKING ACROSS IMMUNOLOGY, BIOINFORMATICS AND ROBOTICS",
  skills: [
    emoji(
      "⚡ Build interpretable machine learning models (SHAP, causal inference) to predict patient response to immunotherapy"
    ),
    emoji(
      "⚡ Analyze bulk, single-cell and spatial transcriptomics data with pySCENIC, GSEApy, pyDESeq2 and Muon"
    ),
    emoji(
      "⚡ Design multi-objective optimization and control algorithms for synthetic biological circuits and multi-robot systems"
    ),
    emoji(
      "⚡ Develop deep learning for computer vision and reinforcement learning, plus full-stack web apps with React and Node.js"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-square-root-alt"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "ROS",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Bioinformatics",
      fontAwesomeClassname: "fas fa-dna"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Drexel University",
      logo: require("./assets/images/drexelLogo.png"),
      subHeader: "PhD in Mechanical Engineering and Mechanics",
      duration: "September 2024 - May 2028 (expected)",
      desc: "GPA: 3.94 / 4.0. Research in the BioControl Lab with Professor Ania Baetica, focused on machine learning for immunology.",
      descBullets: [
        "Predictive modeling of anti-PD-1 immunotherapy response",
        "Multi-objective optimization and control of synthetic circuits"
      ]
    },
    {
      schoolName: "Boston University",
      logo: require("./assets/images/buLogo.png"),
      subHeader: "Master of Science in Robotics & Autonomous Systems",
      duration: "September 2022 - January 2024",
      desc: "GPA: 3.34 / 4.0. Research internship in the Robotics Lab with Professor Christos Cassandras on multi-robot coordination for smart cities."
    },
    {
      schoolName: "University of Illinois Chicago",
      logo: require("./assets/images/uicLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "August 2018 - May 2022",
      desc: "GPA: 3.87 / 4.0. Undergraduate research on hybrid memory systems."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Bioinformatics",
      progressPercentage: "80%"
    },
    {
      Stack: "Robotics & Control",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Drexel University",
      companylogo: require("./assets/images/drexelLogo.png"),
      date: "Sep 2024 – Present",
      desc: "BioControl Lab, Professor Ania Baetica. Philadelphia, PA.",
      descBullets: [
        "Analyzing gene and pathway expression across 100+ anti-PD-1-treated patient samples to identify signature genes and pathways distinguishing responders from non-responders",
        "Integrating spatial transcriptomics with bulk genomic data and applying causal inference to isolate immune drivers from confounding signals",
        "Building a SHAP-interpretable model to estimate patient responsiveness and tumor recurrence risk",
        "Benchmarked multi-objective optimizers (NSGA-II, Sobol MOSA, EPO, AMOSA, TorchJD) for a multi-species synthetic circuit, cutting wet-lab design time by 70% versus grid search"
      ]
    },
    {
      role: "AI Developer Intern",
      company: "CB/I Digital",
      companylogo: require("./assets/images/cbiLogo.png"),
      date: "Aug 2023 – Nov 2023",
      desc: "Revenue maximization under budget constraints.",
      descBullets: [
        "Implemented an offline deep Q-learning model to maximize advertising revenue under budget constraints for prospecting and retargeting campaigns across 5 client companies",
        "Integrated new user-impact features and ran a 3-month analysis of their effect on gross revenue and bidding strategy"
      ]
    },
    {
      role: "RASTIC Research Intern",
      company: "Boston University",
      companylogo: require("./assets/images/buLogo.png"),
      date: "Jun 2023 – Aug 2023",
      desc: "Robotics Lab, Professor Christos Cassandras. Smart City project.",
      descBullets: [
        "Designed task-scheduling algorithms that generate real-time priority queues at traffic intersections, issuing decisions to 4 Agilex robots",
        "Co-developed multi-robot communication protocols and a joint Optimal Control and Barrier Function (OCBF) framework, improving lane-change safety by 30% (single-lane) and 10% (multi-lane)"
      ]
    },
    {
      role: "Lab Monitor",
      company: "Boston University",
      companylogo: require("./assets/images/buLogo.png"),
      date: "Jan 2023 – May 2023",
      desc: "Monitored the ECE embedded systems lab and helped students use laboratory equipment."
    },
    {
      role: "Computer Network Engineer Intern",
      company: "MobiFone",
      companylogo: require("./assets/images/mobifoneLogo.png"),
      date: "Jun 2022 – Aug 2022",
      desc: "Vietnam.",
      descBullets: [
        "Installed and reconfigured Cisco and Juniper network devices, programmed security policies, and debugged router, switch and connection issues across company sites",
        "Worked with 3 engineers to inspect and document airport network requirements for future internet installations"
      ]
    },
    {
      role: "Hybrid Memory Systems Research Assistant",
      company: "University of Illinois Chicago",
      companylogo: require("./assets/images/uicLogo.png"),
      date: "Sep 2021 – Dec 2021",
      desc: "Researched Flash, PCM and DRAM memory and how PCM and DRAM combine into hybrid memory systems for image processing and smartphone buffer caches."
    },
    {
      role: "Embedded Systems Engineering Intern",
      company: "KASATI",
      companylogo: require("./assets/images/kasatiLogo.png"),
      date: "May 2020 – Jul 2020",
      desc: "Telecommunications Informatics Electronics KASATI, Vietnam.",
      descBullets: [
        "Reduced Arduino Uno board size by 20% by redesigning components and wiring in Altium",
        "Programmed microcontrollers for light, water-level, motion, heat and smoke sensors and displayed readings on a PC with C++"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research & Projects",
  subtitle: "SELECTED RESEARCH AND ENGINEERING PROJECTS",
  projects: [
    {
      projectName: "Predictive Model for anti-PD-1 Immunotherapy Response",
      projectDesc:
        "Ongoing. Combines bulk and spatial transcriptomics from 100+ patients with causal inference and a SHAP-interpretable model to predict who responds to anti-PD-1 therapy and their tumor recurrence risk."
    },
    {
      projectName: "Synthetic Circuit Optimization and Control",
      projectDesc:
        "Benchmarked NSGA-II, Sobol MOSA, EPO, AMOSA and TorchJD to find Pareto-optimal designs for a multi-species synthetic circuit, reducing experimental design time by 70%."
    },
    {
      projectName: "Liver Tumor Segmentation",
      projectDesc:
        "Custom UNet++ with Atrous Spatial Pyramid Pooling (ASPP) for multi-scale context, 7% more accurate than baseline UNet++, plus loss refinements that improved precision by 5% on imbalanced data.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/DangTranQL/Liver-Tumor_Segmentation"
        }
      ]
    },
    {
      projectName: "Smart City: Multi-Robot Traffic Coordination",
      projectDesc:
        "Real-time intersection scheduling and an Optimal Control and Barrier Function framework for a fleet of Agilex robots, improving lane-change safety by up to 30%."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Honors & Awards 🏆 "),
  subtitle: "Mathematics competitions I have been recognized in",

  achievementsCards: [
    {
      title: "Southeast Asian Mathematics Competition",
      subtitle: "Recognized in the Southeast Asian Mathematics Competition.",
      image: require("./assets/images/mathCompetitionLogo.png"),
      imageAlt: "Mathematics competition",
      footerLink: []
    },
    {
      title: "United Kingdom Mathematics Competition",
      subtitle: "Recognized in the United Kingdom Mathematics Competition.",
      image: require("./assets/images/mathCompetitionLogo.png"),
      imageAlt: "Mathematics competition",
      footerLink: []
    },
    {
      title: "Euclid Mathematics Competition",
      subtitle: "Recognized in the Euclid Mathematics Competition.",
      image: require("./assets/images/mathCompetitionLogo.png"),
      imageAlt: "Mathematics competition",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in research collaborations or just want to say hi? My inbox is open.",
  number: "", // Leave empty to keep your phone number off the site
  email_address: "tranquangluandang762@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
