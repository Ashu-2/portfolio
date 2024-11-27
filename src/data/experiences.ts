export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "General Motors (GM) - Microsoft client",
    role: "Senior AI Consultant – Generative AI & LangChain Developer",
    period: "Feb 2024 – Present",
    description: "Led development of Generative AI models and LangChain applications for workflow automation and knowledge retrieval.",
    technologies: ["Python", "LangChain", "Langraph", "Azure OpenAI", "Azure Cognitive Search", "RAG"]
  },
  {
    company: "Con Edison AI",
    role: "Senior Consultant - AI Developer",
    period: "April 2024 – Aug 2024",
    description: "Developed advanced AI chatbot for Con Edison's GRC knowledgebase using RAG and Azure OpenAI.",
    technologies: ["Python", "Node.js", "React", "Azure OpenAI", "RAG"]
  },
  {
    company: "Edison GPT - Southern California Project",
    role: "Senior Consultant - AI Developer",
    period: "Aug 2023 – March 2024",
    description: "Developed sophisticated AI chatbot for GRC knowledgebase using advanced AI technologies.",
    technologies: ["Python", "Azure OpenAI", "Lang chain", "RAG", "NLP"]
  },
  {
    company: "Three Stripes",
    role: "AI Developer – Product Developer",
    period: "March 2023 – Aug 2023",
    description: "Contributed to evolving cutting-edge productivity suite using foundational models and generative AI to enhance DevOps journey.",
    technologies: ["Python", "Azure OpenAI", "Lang chain", "Azure Functions", "NLP", "Prompt Engineering"]
  },
  {
    company: "CliftonLarsonAllen",
    role: "Software Developer – Senior Consultant",
    period: "Feb 2023 – Present",
    description: "Development of Backend of Audit and Base Microservices, improving the Product and consulting with Business stakeholders.",
    technologies: ["Node.js", "MongoDB", "Azure", "Docker", "PostgreSQL"]
  },
  {
    company: "Price Spider - Where to Buy (WTB)",
    role: "Software Developer – Senior Consultant",
    period: "Nov 2020 – Jan 2023",
    description: "Led development and maintenance of various microservices including locate, wtb-api, pipeline, and wtb framework.",
    technologies: ["Golang", "Node.js", "MongoDB", "AWS", "React", "Docker", "Kubernetes"]
  },
  {
    company: "Ace Turtle - Rubicon",
    role: "Software Developer",
    period: "Feb 2020 – Oct 2020",
    description: "Developed product framework for managing end-to-end lifecycle of Retail, including aggregation framework and data lake solutions.",
    technologies: ["Node.js", "MongoDB", "AWS Lambda", "API Gateway", "SQS", "Glue", "Athena"]
  },
  {
    company: "Developscripts - Mazzady Auction Software",
    role: "Software Engineer",
    period: "December 2018 – Feb 2020",
    description: "Developed auction software providing ecommerce solutions with various auction paradigms like Forward, Reverse, and Penny auction.",
    technologies: ["Node.js", "MySQL", "Express", "Sequelize", "PayPal API", "Stripe API"]
  }
];