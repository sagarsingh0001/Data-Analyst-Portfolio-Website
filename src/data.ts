import { Project, ExperienceItem, CertificationItem } from './types';

export const projectsData: Project[] = [
  {
    id: 'edw',
    title: 'Enterprise Data Warehouse',
    description: 'Centralized data architecture reducing query latency by 45%.',
    fullDescription: 'Architected a scalable, high-performance data warehouse handling terabytes of daily event data. Implemented a medallion architecture resulting in a 40% reduction in query latency and improved data governance across multiple operational modules.',
    tags: ['Python', 'Databricks', 'Spark SQL'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWisyEC3hMtP3_iu7Y-eo9EEq2HJKZkNbWxSszrp0ztTsLy2EEaHuq2RqMt5WH_xHC0EqLZ8IwU6pnT0_cvSl0Vs_uD9IeQ0yuoqn7LWC6RMjEvLEmNilHw9tjbQEJLrVmHCxIBzniuIN3kF4RBclO3xgDJKk8CW0R_DLjPXdfad_rJp9e5fqEHDd0tOGE8KRF7-mJnfilM4r6G6SIo3rE0p-ohCc2gcf2vKjC4E89fC8cjjdiBceL0FyKBMp6N_qPynDqqKoh2Kk',
    stats: [
      { label: 'Latency Reduction', value: '45%' },
      { label: 'Data Volume Treated', value: '10TB+' },
      { label: 'ETL Pipelines', value: '150+' }
    ],
    impact: 'Successfully synchronized multiple siloed databases into a unified, secure queryable storage area, improving business intelligence report times from hours to real-time.',
    architecture: ['Bronze: Raw ingestion storage', 'Silver: Cleansed and standardized data', 'Gold: Aggregated analytical tables']
  },
  {
    id: 'vsa',
    title: 'Vendor Sales Analysis',
    description: 'Predictive modeling framework identifying $2M in potential revenue.',
    fullDescription: 'Developed a comprehensive analytical suite to track vendor performance across multiple regions. The solution identified key bottlenecks in the supply chain, leading to a 15% increase in operational efficiency.',
    tags: ['SQL', 'Tableau', 'dbt'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTwD2ZRq2klHnTb7w4uiw9SqBSIerw8KFir0jngyC1N13QXjUk7FyxOD_shrlSZFGeuYGxEtCDfIq_lcHcUmCC2vu3VCx1HGZJkbom8xqUzr5rj5wJFvWyF62WdPdUu35pwErKY6TPvtSANYahJQgkY0S-vh4YU-R1lF3hkRNNRxGo5w-lXnIwANLUkUcRycr6zwVpMTOaGJlzaZq2bKvtYtV2q90ZnTBuiB8MnFwB83t3HTSOgV5LE9x5XzgHs8P7Hbxkd0KtA',
    stats: [
      { label: 'Revenue Identified', value: '$2M' },
      { label: 'Efficiency Boost', value: '15%' },
      { label: 'Monitored Vendors', value: '500+' }
    ],
    impact: 'Empowered supply chain managers to identify shipping bottlenecks instantly, allowing critical intervention two days faster than previous systems.',
    architecture: ['Direct connectors to CRM systems', 'dbt scheduled parsing algorithms', 'Tableau executive summary dashboards']
  },
  {
    id: 'tstore',
    title: 'Target Store EDA',
    description: 'Exploratory data analysis identifying optimal placement indicators.',
    fullDescription: 'Conducted an extensive Exploratory Data Analysis on national retail locations. Leveraged geospatial data to optimize new store placements based on demographic density and competitor proximity models.',
    tags: ['R', 'Geopandas', 'PostGIS'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbmATwIo1TmerGc-mVoI8rHybKOnNJxJLJghH4ruFvVMXh1ff_jl8efTPbmO8KVLYj0Bhd0vQA1TribOWg1BrjEiFthVDzZKHmz2mMlbXkmhU_cyEBWkJ5dKaBaVNRXAVc5hY61UplMJHPyuwNYNoPsPSBmSM7GtaOlb1s-TnVvFqCMzxKlCq_BwY6qTea0IboNFAgIZIV7AXxrtnP7Yw9szue36CGajIh9KqfpFsbbzgfI3U_9yYZ7_47VvnPl_P5LV0qBK2tSec',
    stats: [
      { label: 'Accuracy Achieved', value: '92%' },
      { label: 'Stores Analyzed', value: '1,800+' },
      { label: 'Geospatial Layers', value: '24' }
    ],
    impact: 'Mapped complex demographic density indexes against drive-time tables to suggest three prospective, high-profit retail zones.',
    architecture: ['Geopandas mapping coordinates extraction', 'PostGIS spatial intersections', 'Kernel density estimations']
  },
  {
    id: 'hbooking',
    title: 'Hotel Booking Analysis',
    description: 'Predictive modeling engine targeting dynamic pricing optimization.',
    fullDescription: 'Engineered a predictive model to forecast booking cancellations with 88% accuracy. The insights derived allowed the hospitality client to adjust dynamic pricing strategies and mitigate revenue loss.',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4690gW05Cr62dXwssZ-lJ85Jt0mPjOtb73gEYs3g5G4kjwzOThCRlOj0KjBfZubWIFvWK7zefE_iKe2b-TinRewhSuFooz40ohYiO7Uek300OZx2jFZqOy5PVEyBZjzLUzkTJAdOwTZWD9vOesksBcm-Hsu17lQ8t9Pyd5Aa-kdwx6iBuZk2fCGnJ-Rb1SMQiv6gZjSc7qiEHnHWoq2Td1_FCauyyFza7rD6NHYfR7ChWKszrd9waDqJ0nD2U90RZXyybYIjd4FE',
    stats: [
      { label: 'Predictive Accuracy', value: '88%' },
      { label: 'Prevented Cancellations', value: '18%' },
      { label: 'Revenue Retained', value: '12%' }
    ],
    impact: 'Mitigated high vacancy rates by deploying dynamic alert mechanisms when pre-computed cancellation thresholds are breached.',
    architecture: ['Random Forest & XGBoost classifiers', 'Shapley values for feature explanations', 'Pandas parsing pipelines']
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'intern',
    role: 'Data Analyst Intern',
    organization: 'Zeno Talent',
    period: 'May 2024 – July 2024',
    points: [
      'Analyzed large datasets to identify key trends and patterns.',
      'Developed interactive dashboards using Power BI.',
      'Collaborated with cross-functional teams to drive data-informed decisions.'
    ]
  },
  {
    id: 'college',
    role: 'B.Tech in Information Technology',
    organization: 'ABES Engineering College',
    period: '2021 – 2025',
    description: 'Focusing on data science, machine learning, and advanced analytics. Maintaining a strong academic record while participating in multiple technical projects.',
    isEducation: true
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'ibm',
    name: 'IBM Data Science',
    issuer: 'Coursera',
    year: '2023',
    iconName: 'school'
  },
  {
    id: 'aws',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    iconName: 'cloud'
  },
  {
    id: 'sql',
    name: '5 Star SQL',
    issuer: 'HackerRank',
    year: '2023',
    iconName: 'military_tech'
  }
];
