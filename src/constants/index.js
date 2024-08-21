import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a detail-oriented and analytically driven Data Scientist with 4 years of experience in data analysis, specializing in SQL, Python, Excel and data visualization using Tableau. My focus is on delivering impactful data-driven insights and process automation to enhance operational efficiency and drive business success.`;

export const ABOUT_TEXT = `As an experienced Data Scientist, I have honed my skills in extracting, processing, and analyzing complex datasets to derive meaningful insights. My work in the healthcare industry has equipped me with the technical expertise to handle large-scale data projects, build predictive models, and implement scalable data processing solutions. I am passionate about using data to solve real-world problems and continuously learning to stay at the forefront of industry trends.`;

export const EXPERIENCES = [
  {
    year: "04/2022 - 12/2022",
    role: "Senior Data Scientist (Python + Azure)",
    company: "Wipro Ltd.",
    projectName: "Project Mercury (Healthcare Products and Services) - J&J",
    description: `Led data extraction, transformation, and loading (ETL) processes for healthcare data, developed predictive models, and created data visualization dashboards using Python, SQL, and Tableau. Improved analysis time by 30% and processing time by 20% through automation.`,
    technologies: ["Python", "SQL", "Tableau", "Azure" , "Machine Learning"],
  },
  {
    year: "01/2022 - 03/2022",
    role: "Data Scientist (SQL + Azure)",
    company: "Wipro Ltd.",
    projectName: "Project Car-T(Medical Devices & Healthcare Solutions) - J&J",
    description: `Automated data processing tasks using Python and SQL, implemented cloud-based data solutions with Azure, and developed data reports and dashboards for stakeholders, enhancing data accessibility and security.`,
    technologies: ["Python", "Tableau","SQL", "Azure"],
  },
  {
    year: "01/2020 - 12/2021",
    role: "Data Scientist (SQL + ML)",
    company: "Wipro Ltd.",
    projectName: "Project NeuroHealth (Mental Health Analytics Platform) - J&J ",
    description: `Oversaw the migration of healthcare data to cloud storage, developed predictive models for patient risk factors, and implemented scalable ML models for real-time data analysis. Enhanced data security and compliance.`,
    technologies: ["Python", "Excel","SQL", "AWS", "Machine Learning"],
  },
];

export const PROJECTS = [
  {
    title: "Optimizing Uber Operations",
    image: project1,
    description: "Designed a data engineering solution for analyzing Uber's data and implemented machine learning models to provide insights for improving operations. Created a well-optimized Tableau Dashboard for easy data visualization.",
    technologies: ["Python", "ML", "Tableau","Big Query","Looker Studio","GCP","Excel","Sql"],
  },
  {
    title: "Bangalore Property Price Prediction",
    image: project2,
    description: "Developed a multiple linear regression model to predict property prices in Bangalore, implemented in a Python Flask server, and built a web application for user interaction.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript","Excel","Sql"],
  },
  {
    title: "Personal Finance Dashboard",
    image: project3,
    description: "Tracked and visualized personal finance data using PowerBi to analyze net worth, spending patterns, and savings targets, helping users make informed financial decisions.",
    technologies: ["PowerBi", "Dax","Excel","Sql"],
  },
  {
    title: "Netflix Content Analysis Dashboard",
    image: project4,
    description: "Conducted an exploratory data analysis (EDA) on Netflix's content library using Tableau to uncover trends in genre distribution, content ratings, and regional availability. The dashboard provides interactive insights into the diversity of content, release patterns, and audience preferences, helping stakeholders make data-driven decisions to optimize content strategy.",
    technologies: ["Tableau", "Data Visualization", "EDA","Sql","Excel"],
  },
  {
    title: "Sports Personalities Classification",
    image: project5,
    description: "In this data science and machine learning project, we classify sports personalities. The classification is restricted to 5 people: Maria Sharapova, Serena Williams, Virat Kohli, Roger Federer, and Lionel Messi. The project involves scraping images, building a model, and deploying a web app for user interaction.",
    technologies: ["Python", "Numpy", "OpenCV", "Matplotlib", "Seaborn", "Sklearn", "Flask", "HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Toronto, Ontario, Canada",
  phoneNo: "+1 226-883-1720",
  email: "dipesh.gautam1998@gmail.com",
  linkedin: "https://www.linkedin.com/in/theaayushgautam/",
  github: "https://github.com/theaayushgautam",
};
