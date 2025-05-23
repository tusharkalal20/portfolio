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
  title: "Hi there, I am Tushar!",
  subTitle: emoji("I am passionate about transforming complex data into strategic business decisions | Analytics professional specializing in BI & Marketing insights 📊"),
  resumeLink: "https://cometmail-my.sharepoint.com/:b:/g/personal/txk230058_utdallas_edu/EQfbuX_8v_pFtswp_zkxbhoBiyWxh7bLJERlekHIY8LQfg?e=5b7Fca", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
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
    emoji("- Ask business critical questions and identify if business problems can be solved using data"),
    emoji("- Source, Clean, integrate, and manage the relevant data that is required for analysis"),
    emoji("- Analyze clean data to derive insights for stakeholders enabling informed decision-making")
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
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fa-solid fa-file-excel"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "Google Analytics",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Google Looker Studio",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Microsoft Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Texas at Dallas",
      logo: require("./assets/images/utd_logo.png"),
      subHeader: "Master of Science in Business Analytics & Artificial Intelligence",
      duration: "August 2024 - May 2026",
      desc: "Dean's Excellence Scholar | Head Of Finance - EnVision",
      descBullets: [
        "Advanced Statistics for Data Science - R, Statistical Analysis, Hypothesis Testing",
        "Database Foundation for Business Analytics - SQL, Database Modeling",
        "Organizing for Business Analytics Platforms - Big Data, Data Architecture, Microsoft Azure, AWS, GCP, Snowflake",
        "Business Analytics with R - Data Mining, Market Basket Analysis, Clustering Analysis, Linear Regression, Logistic Regression, SVM, Decision Tree",
        "Predictive Analytics for Data Science - R, Factor & Cluster Analyses, Linear Regression, Logistic Regression, Customer Lifetime Value, Churn, Limited Dependent Variable Models",
        "Foundations of Digital Product Management - Digital Transformation, Product Management, User Behavior, UI/UX",
        "Marketing Web Analytics & Insights - Website Analytics, Google Analytics, Adobe Analytics",
        "Business Data Warehousing - Enterprise Systems, SAP, SAP S/4 HANA, SAP Lumira"
      ]
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/university of mumbai logo.jpg"), 
      subHeader: "Bachelor of Management Studies",
      duration: "June 2018 - December 2021",
      desc: "Ranked top 10% in the program.",
      descBullets: [
        "Business Statistics",
        "Business Research Methods",
        "IT in Business Management ",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Tableau",
      progressPercentage: "70%"
    },
    {
      Stack: "Python",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      company: "Innoveo",
      companylogo: require("./assets/images/innoveo_solutions_logo.jpeg"),
      location: "Princeton, United States (Remote)",
      positions: [
        {
          role: "Senior Analyst",
          date: "Jan 2024 – Jul 2024",
          descBullets: [
            "Designed, developed, and maintained business intelligence dashboards for senior leadership (CXOs, investors) using Power BI, automating data workflows and reducing report turnaround time by almost 60%.",
            "Built reports to meet the reporting requirements of cross-functional global teams such as sales, marketing, and partnerships using advanced Excel formulas, Power Query, and MS PowerPoint, enabling increased accessibility of insights across the organization.",
            "Led the implementation of Hubspot CRM analytics & Google Analytics to analyze user behavior and optimize website performance, resulting in a 12% increase in lead conversion rate through data-driven marketing strategies.",
            "Collaborated with the Chief Revenue Officer (CRO) to analyze sales and marketing data (email, website, social media, events) using python, delivering insights that optimized go-to-market strategies and contributed to a 15% year-over-year ARR growth."
          ]
        },
        {
          role: "Junior Analyst",
          date: "Feb 2022 – Dec 2023",
          descBullets: [
            "Reduced correction latency by 35% in data processing workflows by implementing automated validation checks on the CRM database, improving accuracy and efficiency.",
            "Extracted and queried sales data using SQL (Joins, Subqueries, Window Functions) to analyze KPIs, performance metrics, and generate actionable insights for the executive team to drive data-driven decision-making.",
            "Conducted EDA (exploratory data analysis) and statistical testing to analyze campaign performance across digital and offline channels, identifying cost-cutting opportunities to optimize marketing spend and increase ROI by almost 15%."
          ]
        },
        {
          role: "Market Research Analyst Intern",
          date: "Aug 2021 – Jan 2022",
          descBullets: [
            "Produced more than 25 research reports focused on North American and European markets, providing cross-functional teams with in-depth prospect insights, market trends, and competitive analysis in the no-code/low-code enterprise application development space.",
            "Evaluated multiple vendors and performed cost-benefit analyses for various product requirements within areas of account management, customer experience, marketing, and sales automation, optimizing spend on martech subscriptions.",
            "Executed and analyzed integrated email marketing campaigns using automation technologies, improving deliverability, brand positioning, and engagement with the target audience of C-level executives."
          ]
        }
      ]
    },
    {
      company: "MedTourEasy",
      companylogo: require("./assets/images/medtoureasyy_logo.jpeg"),
      location: "New Delhi, India",
      positions: [
        {
          role: "Business Analyst Intern",
          date: "Oct 2020 – Nov 2020",
          descBullets: [
            "Acquired, cleaned, and processed global health expenditure data across economies, ensuring data quality and readiness for advanced analysis.",
            "Developed interactive Power BI reports to visualize healthcare expenditure trends across countries and regions, uncovering key patterns, disparities, and insights on different geographies."
          ]
        }
      ]
    },
    {
      company: "Times of India",
      companylogo: require("./assets/images/timesofindia_logo.jpeg"),
      location: "Mumbai, India",
      positions: [
        {
          role: "Business Development Intern",
          date: "August 2020 – Sep 2020",
          descBullets: [
            "Improved customer loyalty and reduced churn by promoting products to prospects who had previously discontinued their services.",
            "Conducted consumer-focused market research to gauge customer interest in various product bundles and to determine their preferences for accessing news content through digital or traditional channels"
          ]
        }
      ]
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
      image: require("./assets/images/aws-logo.png"),
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
      image: require("./assets/images/aws-logo.png"),
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
  title: emoji("Certifications"),
  subtitle:
    "Professional Certifications that I have done !",

  achievementsCards: [
    {
      title: "Google Analytics",
      subtitle:
        "Google Analytics (GA 4) Certified",
      image: require("./assets/images/Google-Analytics-Logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://skillshop.credential.net/297c66a8-24b1-430f-8d26-ddbc51454c53#acc.8x1sgfI3"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "AWS Cloud Practitioner Certified",
      image: require("./assets/images/aws-logo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "SnowPro® Associate: Platform Certification",
      subtitle: "Snowflake Certified",
      image: require("./assets/images/Snowflake.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Certification", url: "https://www.snowflake.com"}
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

export const openSource = {
  display: true,
  githubToken: "",
  githubUsername: "tusharkalal20",
  reposLength: 0,
  specificRepos: []
};
export const talkSection = null;
export const twitterDetails = null;
