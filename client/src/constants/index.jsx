// --- IMPORT IMAGES ---
// Make sure these match exactly what you saved in src/assets/projects/
import project1 from "../assets/projects/proshop3.png";
import project2 from "../assets/projects/sniffle3.png";

// --- IMPORT ICONS ---
import { 
  Code2, Server, Database, Globe, Palette, Zap, Box, Lock, Workflow, Terminal 
} from 'lucide-react';

// --- SKILLS DATA ---
export const skills = [
  { name: "React", icon: <Code2 size={20} className="text-cyan-400" /> },
  { name: "Node.js", icon: <Server size={20} className="text-green-500" /> },
  { name: "MongoDB", icon: <Database size={20} className="text-green-400" /> },
  { name: "Express", icon: <Globe size={20} className="text-white" /> },
  { name: "Tailwind", icon: <Palette size={20} className="text-cyan-300" /> },
  { name: "Socket.io", icon: <Zap size={20} className="text-yellow-400" /> },
  { name: "Redux", icon: <Box size={20} className="text-purple-500" /> },
  { name: "JWT Auth", icon: <Lock size={20} className="text-red-400" /> },
  { name: "Postman", icon: <Workflow size={20} className="text-orange-400" /> },
  { name: "TypeScript", icon: <Terminal size={20} className="text-blue-400" /> },
];

// --- PROJECTS DATA ---
export const projects = [
  {
    id: 1,
    title: "ProShop E-Commerce Platform",
    // Highlighted: Admin control, Redux, and Payment security
    description: "A robust full-stack shopping solution featuring JWT authentication, Redux state management, PayPal integration, and a comprehensive admin dashboard for product/order oversight.",
    tech: ["MERN Stack", "Redux Toolkit", "JWT Auth", "Stripe API", "Bootstrap"],
    link: "https://proshop-portfolio-muhammadbilal.vercel.app/", // <--- REPLACE THIS with your actual ProShop link
    image: project1,
  },
  {
    id: 2,
    title: "Sniffle Pets Brand Portal",
    // Highlighted: Performance, Smart Logic, and Custom Architecture
    description: "A high-performance landing page engineered for speed. Features smart session-based popups, asset preloading, and a fully custom responsive architecture using advanced CSS3.",
    tech: ["React (Vite)", "Advanced CSS", "Netlify", "Performance", "Session Logic"],
    link: "https://snifflepets.netlify.app/", // <--- REPLACE THIS with your actual SnifflePets link
    image: project2,
  },
];