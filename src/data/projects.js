import productpage from "../assets/projects/ecommerce-site/productpage.jpg";
import mainpage from "../assets/projects/ecommerce-site/mainpage.jpg";

export const projects = [
  {
    id: "ai-resume-screener",
    title: "AI Resume Screener – ATS Matching Tool",
    description:
      "I built a React + TypeScript web app that compares a candidate’s resume to a target job posting" +
      " and produces an ATS score from 0–100. The tool delivers targeted feedback on skills, tone, structure, and content" +
      ", and integrates the OpenAI API via Puter.js for serverless AI, authentication, and file handling—enabling secure" +
      " uploads and real-time suggestions that improve alignment.",
    tech: ["React", "TypeScript", "TailwindCSS", "OpenAI API", "Puter.js"],
    reflection:
      "Integrating serverless AI handling with Puter.js made this project a strong bridge between my coursework on APIs and practical user-centered feature design. I learned how to securely process uploads, generate meaningful resume feedback, and deliver a product that adapts technical analysis into clear guidance for job seekers.",
    demo: {
      images: [],
      // Example video URL; replace with your own to show on the page
      video: "https://youtu.be/7UKr--WKfmA",
    },
    notes: "Github Link: https://github.com/McduckX/ai-resume-analyzer",
  },
  {
    id: "ecommerce-redesign",
    title: "E-Commerce Website Redesign",
    description:
      "I redesigned the storefront frontend with WordPress and React, modernizing product, cart, and checkout pages" +
      " and fixing broken payment flows across Google Pay, Apple Pay, PayPal, and Visa. Post-launch, the site achieved" +
      " roughly 50% more organic traffic (about 100 visitors/month) and ~20% longer session times, alongside stronger SEO visibility.",
    tech: ["WordPress", "React", "CSS", "Google Pay", "Apple Pay", "PayPal"],
    reflection:
      "This redesign reinforced how user experience and technical reliability must work together. By fixing payment flows and improving storefront performance, I saw how small technical changes can have measurable business impact while deepening my understanding of frontend systems and client collaboration.",
    demo: {
      images: [mainpage, productpage],
      video: " ",
    },
    notes: "Website Link: https://thrashmetal.ca",
  },
  {
    id: "arduino-math-tool",
    title: "Mini Math Education Tool (Arduino)",
    description:
      "I developed an interactive learning device on the Arduino Grove Beginner Kit that runs arithmetic flashcards—addition" +
      ", subtraction, multiplication, and division—for Grades 1–5. Testing with ~15 students showed stronger engagement and" +
      " focus compared to traditional paper flashcards.",
    tech: ["Arduino", "Java", "Grove Beginner Kit"],
    reflection:
      "Building this hardware-enabled math tool connected my software skills to a tangible learning outcome. Testing it with young students reminded me that technology is strongest when it makes learning more engaging, accessible, and playful.",
    demo: {
      images: [],
      video: "https://youtu.be/OK1SRApF2vM",
    },
    notes:
      "The demo above shows the early proof-of-concept for the Mini Math Education Tool, demonstrating" +
      " core functionality before expanding into a more polished, visually engaging version for Grades 1–5.",
  },
  {
    id: "power-bi-dashboard",
    title: "Power BI Analytics Dashboard (Internal)",
    description:
      "I rebuilt and standardized an internal Power BI dashboard by integrating client data from Excel," +
      " creating a universal template used across 5+ client projects. This standardization improved visibility" +
      " into project costs and KPIs and made reporting more consistent across teams.",
    tech: ["Power BI", "Excel", "Tableau", "Looker Studio"],
    reflection:
      "Standardizing analytics reports helped me see how data engineering supports better decisions across teams. This project combined technical visualization skills with a clear focus on presenting insights in a way that stakeholders can use immediately.",
    demo: {
      images: [],
      video: "",
    },
    notes: " ",
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
