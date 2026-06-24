export const personal = {
  name: 'Revanth Gowda Vimala Kempegowda',
  shortName: 'Revanth Gowda',
  initials: 'RG',
  title: 'Data Engineer',
  location: 'Frisco, Texas, USA',
  email: 'rvimalakempegowda@gmail.com',
  linkedin: 'https://www.linkedin.com/in/revanth-gowda-vimala-kempegowda',
  github: 'https://github.com/rvimalakempegowda/',
  bio: 'Senior Data Engineer at Vanguard, building production-grade data pipelines and cloud platforms that power financial analytics at scale. I specialize in ETL/ELT engineering, real-time streaming, medallion architecture, and AI-ready data workflows across Azure and AWS. IEEE-published researcher, Microsoft-certified (Azure, Power BI), and a 4.0 GPA graduate of the University of Central Oklahoma — where I was named an E.C. Hall Scholar. I turn complex, raw data into reliable, business-ready infrastructure.',
}

export const skills = [
  {
    category: 'Languages',
    icon: '{ }',
    items: ['Python', 'SQL', 'T-SQL', 'PySpark', 'Spark SQL', 'Bash/Shell'],
  },
  {
    category: 'Cloud Platforms',
    icon: '☁',
    items: ['Microsoft Azure', 'AWS', 'Microsoft Fabric'],
  },
  {
    category: 'Azure Tools',
    icon: '⬡',
    items: ['Azure Data Factory', 'Azure Databricks', 'ADLS Gen2', 'Azure SQL', 'Azure Synapse Analytics', 'Azure Event Hub', 'Azure DevOps', 'Logic Apps'],
  },
  {
    category: 'AWS Tools',
    icon: '▲',
    items: ['Amazon S3', 'AWS Glue', 'Amazon Redshift', 'Athena', 'EMR', 'Lambda', 'Kinesis', 'DynamoDB', 'RDS', 'Lake Formation', 'SNS', 'SQS', 'KMS'],
  },
  {
    category: 'Data Platforms',
    icon: '◈',
    items: ['Snowflake', 'Databricks', 'SQL Server', 'PostgreSQL', 'MySQL', 'Redshift', 'Azure SQL'],
  },
  {
    category: 'Data Engineering',
    icon: '⟳',
    items: ['ETL/ELT', 'Data Pipelines', 'Real-Time Streaming', 'CDC', 'SCD Type 1/2', 'Medallion Architecture', 'Delta Lake', 'Data Lakehouse', 'Dimensional Modeling', 'Metadata-Driven Pipelines', 'Data Quality', 'Data Governance'],
  },
  {
    category: 'Orchestration & DevOps',
    icon: '⚙',
    items: ['Apache Airflow', 'dbt', 'Docker', 'GitHub Actions', 'Azure DevOps', 'CI/CD', 'Databricks Workflows', 'Databricks Asset Bundles'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⬡',
    items: ['Apache Spark', 'Pandas', 'NumPy', 'LangChain', 'LangGraph'],
  },
  {
    category: 'BI & Analytics',
    icon: '▦',
    items: ['Tableau', 'Power BI', 'Excel', 'KPI Dashboards', 'SQL Reporting', 'Data Visualization'],
  },
  {
    category: 'AI / GenAI',
    icon: '✦',
    items: ['AI-Ready Pipelines', 'RAG Workflows', 'Embeddings', 'Vector Databases', 'Chroma', 'Pinecone', 'pgvector', 'LangChain', 'LangGraph', 'OpenAI APIs'],
  },
]

export const experience = [
  {
    company: 'Vanguard',
    role: 'Data Engineer',
    period: 'February 2025 – Present',
    location: 'United States',
    description: 'Designing and maintaining production ETL/ELT pipelines that process large-scale financial data for one of the world\'s largest investment management firms. Building analytics-ready datasets using PySpark, Databricks, and Snowflake; implementing data quality frameworks, SCD models, and CI/CD pipelines with Airflow and GitHub Actions. Focused on reliable, secure, and observable data infrastructure across cloud platforms.',
    tags: ['Python', 'PySpark', 'Databricks', 'Snowflake', 'Airflow', 'SQL', 'CI/CD'],
    current: true,
  },
  {
    company: 'University of Central Oklahoma',
    role: 'Data Analyst',
    period: 'August 2023 – December 2024',
    location: 'Edmond, Oklahoma',
    description: 'Built SQL and Python-based reporting pipelines, automated dashboards, and analytical workflows supporting institutional decision-making across academic operations. Delivered data cleaning, validation, and KPI reporting to administrators and faculty — while concurrently maintaining a 4.0 GPA and contributing to IEEE-published research.',
    tags: ['SQL', 'Python', 'Excel', 'Tableau', 'Power BI', 'Data Validation'],
    current: false,
  },
  {
    company: 'Cognizant',
    role: 'Azure Data Engineer',
    period: 'May 2022 – April 2023',
    location: 'Bengaluru, India / Remote',
    description: 'Engineered end-to-end Azure data pipelines handling API-based ingestion, batch processing, and cloud migration workloads using ADF, ADLS Gen2, Databricks, and Delta Lake. Implemented PySpark transformations, data validation layers, monitoring alerts, and CI/CD workflows via Azure DevOps — delivering reliable, production-ready data infrastructure for enterprise clients.',
    tags: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'Delta Lake', 'ADLS Gen2', 'Azure DevOps'],
    current: false,
  },
]

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Central Oklahoma',
    year: '2024',
    location: 'Edmond, Oklahoma',
    gpa: '4.0',
    honors: ['E.C. Hall Scholar — College of Mathematics and Science, Fall 2024', 'Nominated for E.C. Hall Outstanding Graduate Student Award, UCO'],
  },
]

export const projects = [
  {
    title: 'Azure Spotify Data Pipeline',
    description: 'End-to-end Azure data engineering pipeline for ingesting, transforming, and modeling Spotify data using lakehouse architecture. Implemented incremental ingestion, metadata-driven ADF pipelines, Bronze/Silver/Gold layers, Delta Lake, Databricks transformations, CI/CD, data validation, and alerting.',
    tags: ['Azure Data Factory', 'Azure Databricks', 'ADLS Gen2', 'Delta Lake', 'PySpark', 'Spark SQL', 'Medallion Architecture'],
    link: 'private',
    featured: true,
  },
  {
    title: 'Real-Time Ride Booking Streaming Pipeline',
    description: 'Real-time streaming pipeline to process ride-booking events and support near-real-time analytics. Includes event ingestion, structured streaming, watermarking, late-arriving data handling, Delta Lake storage, and analytics-ready modeling.',
    tags: ['Event Hub', 'Kafka', 'Databricks Streaming', 'PySpark', 'Delta Lake', 'Azure Data Factory'],
    link: 'private',
    featured: true,
  },
  {
    title: 'dbt + Snowflake + S3 Medallion Pipeline',
    description: 'Modern analytics engineering pipeline using Snowflake and dbt with AWS S3 as the source layer. Created Bronze/Silver/Gold data models, dbt tests, macros, incremental transformations, and SQL-based warehouse modeling.',
    tags: ['Snowflake', 'dbt', 'AWS S3', 'SQL', 'dbt Tests', 'dbt Macros', 'Incremental Models'],
    link: 'private',
    featured: true,
  },
  {
    title: 'Databricks SQL Warehouse Optimization',
    description: 'Performance optimization and monitoring of Databricks SQL Warehouse using autoscaling, Photon engine, predictive I/O, profiling, jobs, and alerts to improve query performance and cost efficiency.',
    tags: ['Databricks', 'SQL Warehouse', 'Photon', 'Autoscaling', 'Predictive I/O'],
    link: 'private',
    featured: false,
  },
  {
    title: 'AI / RAG / Agent Workflow',
    description: 'AI-ready data workflows using embeddings, vector databases, RAG architecture, SQL agents, and LangChain/LangGraph-based orchestration to support GenAI-enabled analytics use cases.',
    tags: ['Python', 'LangChain', 'LangGraph', 'Chroma', 'Pinecone', 'pgvector', 'OpenAI APIs', 'SQL Agents'],
    link: 'private',
    featured: false,
  },
]

export const certifications = [
  {
    group: 'Microsoft Certifications',
    items: [
      'Microsoft Certified: Azure Fundamentals — AZ-900',
      'Microsoft Certified: Azure Data Fundamentals — DP-900',
      'Microsoft Certified: Azure Data Engineer Associate — DP-203',
      'Microsoft Certified: Power BI Data Analyst Associate — PL-300',
    ],
  },
  {
    group: 'Databricks Academy / Lakeflow Badges',
    items: [
      'Data Ingestion with Lakeflow Connect',
      'Deploy Workloads with Lakeflow Jobs',
      'Build Data Pipelines with Lakeflow Spark Declarative Pipelines',
      'DevOps Essentials for Data Engineering',
    ],
  },
]

export const publications = [
  {
    title: 'A Hybrid Reinforcement Learning and NLP-Based Framework to Navigate Earnings Volatility',
    venue: '2025 10th International Conference on Computer and Communication System (ICCCS), IEEE',
    location: 'Chengdu, China',
    dates: 'April 18–21, 2025',
    authors: 'Goutam Mylavarapu, Revanth Gowda Vimala Kempegowda, Musfiq Rajouan Rahid',
    doi: '10.1109/ICCCS65393.2025.11069908',
    link: 'https://ieeexplore.ieee.org/abstract/document/11069908/',
  },
]
