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
  username: "Tushar Kalal",
  title: "Hi there, I am Tushar",
  subTitle: emoji(
    "Data analyst with experience in business intelligence, marketing analytics, and digital transformation, skilled in turning data into actionable insights."
  ),
  resumeLink:
    "https://1drv.ms/b/c/e6bb06a1185cf085/ER3F4VyBSZNHgPZB_GuAQO8BmifN5F_3CuYXCbzu8xA_nw?e=adgbkP", // Set to empty to hide the button
  displayGreeting: false // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tusharkalal20",
  linkedin: "https://www.linkedin.com/in/tusharkalal/",
  gmail: "tusharrameshkumar.kalal@utdallas.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Harness data to uncover meaningful insights that in turn can drive business value",
  skills: [
    emoji(
      "⚡ Ask business critical questions and identify if business problems can be solved using data"
    ),
    emoji("⚡ Source, Clean, integrate, and manage the relevant data that is required for analysis"),
    emoji(
      "⚡ Analyze clean data to derive insights for stakeholders enabling informed decision-making"
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
      skillName: "SQL",
      fontAwesomeClassname: "fa-light fa-database"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fa-regular fa-r"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Google Analytics",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Adobe Analytics",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Looker Studio",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Microsoft Azure",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Texas at Dallas",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Business Analytics & AI",
      duration: "August 2024 - May 2026",
      desc: "Dean's Excellence Scholar.",
      descBullets: [
        "1. Advanced Statistics for Data Science - R, Statistical Analysis, Hypothesis Testing",
        "2. Database Foundation for Business Analytics - SQL, Advanced Database Modeling, RDBMS, NoSQL",
        "3. Organizing for Business Analytics Platforms - Big Data, Big Data Architecture, Microsoft Azure, AWS, GCP, Snowflake",
        "4. Business Analytics with R - Data Mining, Market Basket Analysis, Clustering Analysis, Linear Regression, Logistic Regression, SVM, Decision Tree",
        "5. Predictive Analytics for Data Science - R, Factor & Cluster Analyses, Linear Regression, Logistic Regression, Customer Lifetime Value, Churn, Limited Dependent Variable Models",
        "6. Foundations of Digital Product Management - Digital Transformation, Product Management, Product Lifecycle Management, Market Research, User Behavior, UI/UX",
        "7. Marketing Web Analytics & Insights - Website Analytics, Google Analytics, Adobe Analytics",
        "8. Business Data Warehousing - Enterprise Systems, SAP, SAP S/4 HANA"
      ]
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Management Studies",
      duration: "June 2018 - December 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "1. Business Statistics",
        "2. Business Research Methods",
        "3. IT in Business Management ",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Analyst",
      company: "Innoveo",
      companylogo: require("./assets/images/innoveo_solutions_logo.jpeg"),
      date: "January 2024 – July 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "• Designed, developed, and maintained business intelligence dashboards for senior leadership (CXOs, investors) using Power BI, automating data workflows and reducing report turnaround time by almost 60%.",
        "• Built reports to meet the reporting requirements of cross-functional global teams such as sales, marketing, and partnerships using advanced Excel formulas, Power Query, and MS PowerPoint, enabling increased accessibility of insights across the organization.",
        "• Led the implementation of Hubspot CRM analytics & Google Analytics to analyze user behavior and optimize website performance, resulting in a 12% increase in lead conversion rate through data-driven marketing strategies.",
        "• Collaborated with the Chief Revenue Officer (CRO) to analyze sales and marketing data (email, website, social media, events) using python, delivering insights that optimized go-to-market strategies and contributed to a 15% year-over-year ARR growth."
      ]
    },
    {
      role: "Junior Analyst",
      company: "Innoveo",
      companylogo: require("./assets/images/innoveo_solutions_logo.jpeg"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "• Reduced correction latency by 35% in data processing workflows by implementing automated validation checks on the CRM database, improving accuracy and efficiency.",
        "• Extracted and queried sales data using SQL (Joins, Subqueries, Window Functions) to analyze KPIs, performance metrics, and generate actionable insights for the executive team to drive data-driven decision-making.",
        "• Conducted EDA (exploratory data analysis) and statistical testing to analyze campaign performance across digital and offline channels, identifying cost-cutting opportunities to optimize marketing spend and increase ROI by almost 15%."
      ]
    },
    {
      role: "Marketing Intern",
      company: "Innoveo",
      companylogo: require("./assets/images/innoveo_solutions_logo.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "• Produced more than 25 research reports focused on North American and European markets, providing cross-functional teams with in-depth prospect insights, market trends, and competitive analysis in the no-code/low-code enterprise application development space.",
        "• Evaluated multiple vendors and performed cost-benefit analyses for various product requirements within areas of account management, customer experience, marketing, and sales automation, optimizing spend on martech subscriptions.",
        "• Executed and analyzed integrated email marketing campaigns using automation technologies, improving deliverability, brand positioning, and engagement with the target audience of C-level executives."
      ]
    },
    {
      role: "Business Analyst Intern",
      company: "MedTourEasy",
      companylogo: require("./assets/images/medtoureasyy_logo.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "• Acquired, cleaned, and processed global health expenditure data across economies, ensuring data quality and readiness for advanced analysis.",
        "• Developed interactive Power BI reports to visualize healthcare expenditure trends across countries and regions, uncovering key patterns, disparities, and insights on different geographies."
      ]
    },
    {
      role: "Business Development Intern",
      company: "Times of India",
      companylogo: require("./assets/images/timesofindia_logo.jpeg"),
      date: "August 2020 – Sep 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// const openSource = {
//   showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
//   display: true // Set false to hide this section, defaults to true
// };

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Analytics",
      subtitle:
        "First Pakistani to b selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
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
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "tusharrameshkumar.kalal@utdallas.edu"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
  resumeSection
};
