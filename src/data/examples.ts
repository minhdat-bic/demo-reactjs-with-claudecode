export interface DemoExample {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  icon: string;
  gradient: string;
}

export const demoExamples: DemoExample[] = [
  {
    id: "react-dashboard",
    name: "react-dashboard",
    title: "React Dashboard",
    description:
      "Modern admin dashboard with charts, tables, and responsive design",
    category: "Web Apps",
    difficulty: "Intermediate",
    tags: ["React", "Charts", "Dashboard"],
    icon: "📊",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "todo-app",
    name: "todo-app",
    title: "Todo Application",
    description:
      "Full-featured todo app with drag & drop, categories, and local storage",
    category: "Web Apps",
    difficulty: "Beginner",
    tags: ["React", "LocalStorage", "CRUD"],
    icon: "✅",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: "chat-interface",
    name: "chat-interface",
    title: "Chat Interface",
    description:
      "Real-time chat interface with emoji support and message history",
    category: "UI Components",
    difficulty: "Advanced",
    tags: ["React", "WebSocket", "Real-time"],
    icon: "💬",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "ecommerce-cart",
    name: "ecommerce-cart",
    title: "E-commerce Cart",
    description:
      "Shopping cart with product catalog, filters, and checkout flow",
    category: "E-commerce",
    difficulty: "Intermediate",
    tags: ["React", "Context", "E-commerce"],
    icon: "🛒",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: "weather-app",
    name: "weather-app",
    title: "Weather App",
    description:
      "Beautiful weather app with forecasts, maps, and location services",
    category: "APIs",
    difficulty: "Beginner",
    tags: ["React", "API", "Weather"],
    icon: "🌤️",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "beincom-api-guide",
    name: "beincom-api-guide",
    title: "Beincom Partner API Guide",
    description:
      "Complete API integration documentation with examples and best practices",
    category: "Documentation",
    difficulty: "Intermediate",
    tags: ["API", "Documentation", "Integration"],
    icon: "📚",
    gradient: "from-indigo-500 to-purple-600",
  },
];

export const categories = Array.from(
  new Set(demoExamples.map((example) => example.category))
);
