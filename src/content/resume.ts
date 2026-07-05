export interface SocialLink {
  name: string
  url: string
  label: string
}

export interface ExperienceEntry {
  id: string
  title: string
  company: string
  startDate: string
  endDate: string
  bullets: string[]
  tech?: string[]
}

export const siteMeta = {
  name: 'Adel Abdallah',
  tagline: 'Software Engineer',
  siteUrl: 'https://adelabdallah.github.io',
}

export const subtitlePhrases = [
  'Yes this was built with an LLM',
  'Tech priest',
  'Java rocks, all of you are haters',
  'Should probably go for a walk or something',
  'Sorry can\'t talk, playing with my cats',
  'Works on my machine™',
  'Knower of countries and capitals',
  'Nerdiest guitarist you know',
  'Climbin\' rocks',
  'pip install motivation',
  'git push --force --mirror origin',
  'Happiest in nature',
  'LGRW',
  'Why is beef jerky so ludicrously expensive',
  'Quadlingual',
  'Coffee snob par excellence',
  'Over 1000 hours in TF2',
  'My body is a ramen -> ATP pipeline',
  'Play "Outer Wilds"',
  'brrta brrta brrta brrta',
  'Read "Rumi"',
  'Mr. Thousand Hobbies',
  'ADHD for the good of humanity',
  'Voted best in class by J.D. Power and Associates',
]

export const about =
  'Technology professional with a passion for the people. 10+ years of experience have taught me a lot, and I\'ve a lot more to learn still. Avid musician, coffee enthusiast, lover of nature.'

export const socialLinks: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/adelabdallah',
    label: 'GitHub profile',
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/adelabdallah',
    label: 'LinkedIn profile',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/ringtone_rhythm',
    label: 'Instagram profile',
  },
]

export const experience: ExperienceEntry[] = [
  {
    id: 'job-1',
    title: 'Intermediate Software Engineer II',
    company: 'The Data Loft',
    startDate: 'April 2026',
    endDate: 'Present',
    bullets: [
      'Hired as first full-time engineer to contribute to and eventually own the identity resolution and customer 360 platform',
      'Stewarding development and release of the span-data PyPI package',
      'Implemented large refactors of engine code for performance, maintainability, and adherence to commonly accepted Python paradigms',
      'Added benchmarking tools and harnesses for regression analysis and optimization',
    ],
    tech: ['Python', 'SQL', 'Snowflake', 'Data Engineering', 'Agentic development'],
  },
  {
    id: 'job-2',
    title: 'Java Developer',
    company: 'Venuiti Healthcare',
    startDate: 'Feb 2026',
    endDate: 'Apr 2026',
    bullets: [
      'Implemented OAuth2 via OIDC with JIT-provisioning on a multi-tenant platform, compatible with the "bring your own IdP" pattern. This was further supported by implementing step-up authentication for sensitive actions with a "pending action" architecture',
      'Created a unified docker-composable polyrepo to enable developers to develop code within a fully-simulated production environment. This included documentation, usage instructions, and all the CI/CD bells-and-whistles for a world-class deployment posture',
      'Introduced pull-request check pipelines with Sonar reporting to enforce code quality and minimize risk of production regression',
      'Enhanced integration testing by introducing TestContainers to simulate production dependencies, increasing reliability of Cucumber-based test suites',
      'Implemented runtime multi-tenancy proxy switching (with/without authentication) enabling zero-downtime configuration changes and improved tenant flexibility',
      'Fixed critical authentication flaw where first-time users could bypass mandatory password reset by correcting Spring Security flow and validation logic',
    ],
    tech: ['Java', 'Spring Framework', 'PostgreSQL', 'Docker', 'DevOps', 'AWS'],
  },
  {
    id: 'job-3',
    title: 'Intermediate Software Engineer & Scrum Master',
    company: 'PointClickCare',
    startDate: 'Oct 2020',
    endDate: 'Oct 2025',
    bullets: [
      'Designed and owned features contributing to a central identity and access management application for all PointClickCare products',
      'Wrote web features using Vue with JavaScript, and tested with Jest and Cypress, ensuring a high degree of confidence and quality in deployed features',
      'Wrote backend features using Java with Spring, with tests written in Kotlin using TestContainers, achieving full integration-test coverage',
      'Created and managed Azure cloud infrastructure, such as app gateways, WAFs, Event Hubs, DBs, Key Vaults, and more, using Terraform',
      'Served scheduled week-long on-call shifts to support application p99 <= 0.5s for read and p99 <= 0.7s for write',
      'Served as Scrum Master alongside daily duties for a team of 10+ engineers, streamlining agile processes, reducing meeting time by 25% - 75%, and facilitating the creation of clear, detailed stories',
    ],
    tech: ['Java', 'Spring Framework', 'Vue.js', 'TypeScript', 'Azure', 'Terraform'],
  },
  {
    id: 'job-4',
    title: 'Fullstack Developer',
    company: 'NorthOne Business Banking',
    startDate: 'Mar 2020',
    endDate: 'Sept 2020',
    bullets: [
      'Wrote web and backend features using TypeScript and React',
      'Created, designed, and implemented GraphQL schemas for managing user data',
      'Designed and created bespoke microservices for new in-demand features using AWS Lambda',
    ],
    tech: ['TypeScript', 'React', 'GraphQL', 'Serverless', 'Microservices'],
  },
  {
    id: 'job-5',
    title: 'Backend Developer',
    company: 'RBC',
    startDate: 'Jan 2018',
    endDate: 'Jan 2020',
    bullets: [
      'Wrote Java applications for enforcing regulatory measures using Apache Spark, Spring, and Hadoop',
      'Agile development paradigm with emphasis on test-driven development',
      'Implemented CI/CD pipelines using Jenkins and IBM UrbanCode Deploy',
    ],
    tech: ['Java', 'Hadoop', 'Spring Framework', 'Apache Spark', 'Bash'],
  },
]

export const skills = [
  'Java',
  'Spring Framework',
  'TypeScript',
  'Vue.js',
  'Python',
  'Agentic development',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Azure',
  'Terraform',
  'Docker',
  'Jenkins',
  'GitHub Actions',
  'GitLab CI/CD',
  'Jest',
  'Cypress',
  'JUnit',
  'TestContainers',
  'Git',
]

export const pdfResumeAvailable = true
