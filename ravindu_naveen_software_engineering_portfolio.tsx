import React, { useState, useEffect, useCallback, Component, ErrorInfo, ReactNode } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Server,
  Database,
  Cpu,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Send,
  CheckCircle2,
  Menu,
  X,
  Sparkles,
  Layers,
  Smartphone,
  Terminal,
  ArrowUpRight,
  Copy,
  Check,
  ShieldCheck,
  Wrench,
  FolderGit2,
  AlertCircle,
  Download,
  ArrowUp
} from 'lucide-react';

// Feather-style SVG Brand Icons
function Github({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function Linkedin({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ============================================================================
// ERROR BOUNDARY COMPONENT
// Safely catches any unexpected runtime errors inside the portfolio UI.
// ============================================================================
interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class PortfolioErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio render error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100 p-6">
          <div className="max-w-md w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 text-center">
            <AlertCircle className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <p className="text-sm text-zinc-400 mb-6">
              An unexpected error occurred while rendering the portfolio. Please reload to continue.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 text-zinc-950 font-semibold text-sm hover:bg-cyan-400 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ============================================================================
// PORTFOLIO DATA CONSTANTS
// Centralized profile, skills, projects, experience, and education data.
// ============================================================================
// Free Web3Forms Access Key (https://web3forms.com/). Automatically delivers messages straight to ravindunaveen123@gmail.com.
const WEB3FORMS_ACCESS_KEY: string = '25a63dd4-bfbf-4bbc-9f5b-3239d0ed612b';

// Floating Water Bubbles Data for Living Wallpaper (Background Layer)
const WATER_BUBBLES = [
  { id: 1, size: 36, left: '3%', duration: 15, delay: -2, alt: false },
  { id: 2, size: 54, left: '7%', duration: 21, delay: -9, alt: true },
  { id: 3, size: 22, left: '11%', duration: 13, delay: -4, alt: false },
  { id: 4, size: 76, left: '15%', duration: 26, delay: -15, alt: true },
  { id: 5, size: 28, left: '19%', duration: 16, delay: -1, alt: false },
  { id: 6, size: 44, left: '23%', duration: 20, delay: -11, alt: true },
  { id: 7, size: 62, left: '27%', duration: 24, delay: -6, alt: false },
  { id: 8, size: 18, left: '31%', duration: 12, delay: -8, alt: true },
  { id: 9, size: 88, left: '35%', duration: 29, delay: -18, alt: false },
  { id: 10, size: 32, left: '39%', duration: 17, delay: -3, alt: true },
  { id: 11, size: 48, left: '43%', duration: 22, delay: -13, alt: false },
  { id: 12, size: 24, left: '47%', duration: 14, delay: -5, alt: true },
  { id: 13, size: 70, left: '51%', duration: 25, delay: -19, alt: false },
  { id: 14, size: 20, left: '55%', duration: 13, delay: -2, alt: true },
  { id: 15, size: 58, left: '59%', duration: 23, delay: -10, alt: false },
  { id: 16, size: 34, left: '63%', duration: 18, delay: -14, alt: true },
  { id: 17, size: 82, left: '67%', duration: 28, delay: -7, alt: false },
  { id: 18, size: 26, left: '71%', duration: 15, delay: -12, alt: true },
  { id: 19, size: 50, left: '75%', duration: 21, delay: -4, alt: false },
  { id: 20, size: 22, left: '79%', duration: 13, delay: -16, alt: true },
  { id: 21, size: 94, left: '83%', duration: 31, delay: -21, alt: false },
  { id: 22, size: 40, left: '87%', duration: 19, delay: -8, alt: true },
  { id: 23, size: 66, left: '91%', duration: 25, delay: -14, alt: false },
  { id: 24, size: 30, left: '95%', duration: 16, delay: -3, alt: true },
  { id: 25, size: 46, left: '5%', duration: 20, delay: -17, alt: false },
  { id: 26, size: 18, left: '17%', duration: 12, delay: -7, alt: true },
  { id: 27, size: 60, left: '29%', duration: 24, delay: -22, alt: false },
  { id: 28, size: 38, left: '41%', duration: 18, delay: -15, alt: true },
  { id: 29, size: 24, left: '53%', duration: 14, delay: -9, alt: false },
  { id: 30, size: 74, left: '65%', duration: 27, delay: -1, alt: true },
  { id: 31, size: 32, left: '77%', duration: 17, delay: -20, alt: false },
  { id: 32, size: 56, left: '89%', duration: 23, delay: -11, alt: true },
  { id: 33, size: 28, left: '2%', duration: 15, delay: -6, alt: false },
  { id: 34, size: 42, left: '48%', duration: 19, delay: -18, alt: true },
  { id: 35, size: 68, left: '81%', duration: 26, delay: -10, alt: false },
  { id: 36, size: 20, left: '97%', duration: 12, delay: -4, alt: true },
];

// Foreground Subtle Bubbles (Adds 3D Depth)
const FOREGROUND_BUBBLES = [
  { id: 'fg-1', size: 26, left: '8%', duration: 14, delay: -5, alt: false },
  { id: 'fg-2', size: 42, left: '22%', duration: 19, delay: -12, alt: true },
  { id: 'fg-3', size: 30, left: '38%', duration: 16, delay: -3, alt: false },
  { id: 'fg-4', size: 48, left: '58%', duration: 22, delay: -16, alt: true },
  { id: 'fg-5', size: 22, left: '72%', duration: 13, delay: -8, alt: false },
  { id: 'fg-6', size: 38, left: '86%', duration: 18, delay: -1, alt: true },
  { id: 'fg-7', size: 28, left: '94%', duration: 15, delay: -11, alt: false },
];

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const PROFILE = {
  name: 'Ravindu Naveen',
  headline: 'Software Engineer | IT & Systems Specialist',
  status: 'Available for Software Engineering Opportunities',
  bio: 'First Class Honours BSc (Hons) Software Engineering graduate from Cardiff Metropolitan University (ICBT Campus), currently working in the Head Office IT Department at Pussalla Meat Producers (Pvt) Ltd. I bridge full-stack software engineering with hands-on enterprise hardware, networking, and systems operations.',
  email: 'ravindunaveen123@gmail.com',
  phone: '+94 76 915 1420',
  phoneHref: 'tel:+94769151420',
  location: 'Kosgama, Sri Lanka',
  github: 'https://github.com/ravindu-n',
  linkedin: 'https://www.linkedin.com/in/ravindu-naveen-0a364b312/',
  avatar: '/profile.jpg',
  cvUrl: '/Ravindu_Naveen_CV.pdf',
};

const HERO_STATS = [
  {
    icon: Award,
    value: 'First Class Honours',
    label: 'BSc (Hons) Software Engineering',
  },
  {
    icon: FolderGit2,
    value: '7+ GitHub Projects',
    label: 'Web, Desktop, Mobile & ML',
  },
  {
    icon: ShieldCheck,
    value: 'Full-Stack + Enterprise IT',
    label: 'Software Dev & Systems Ops',
  },
];

const SKILL_CATEGORIES = [
  {
    id: 'backend',
    title: 'Languages & Backend',
    subtitle: 'Core object-oriented, service-oriented, and server-side engineering',
    icon: Server,
    accent: 'cyan',
    skills: [
      'Python',
      'Java',
      'C#',
      '.NET / ASP.NET',
      'C++',
      'PHP',
      'Node.js',
      'JavaScript',
      'OOP Architecture',
      'RESTful APIs',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    subtitle: 'Responsive interfaces, modern web UI, and native Android apps',
    icon: Smartphone,
    accent: 'indigo',
    skills: [
      'React',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Android (Java/Gradle)',
      'Responsive UI/UX',
      'Modern Tooling (Vite)',
    ],
  },
  {
    id: 'infra',
    title: 'Databases, ML & Enterprise IT',
    subtitle: 'Data persistence, automated QA, ML pipelines, and IT infrastructure',
    icon: Database,
    accent: 'blue',
    skills: [
      'PostgreSQL',
      'SQL Server',
      'MySQL',
      'Machine Learning',
      'Pytest / Automated QA',
      'Hardware & Diagnostics',
      'Network Troubleshooting',
      'System Administration',
      'Enterprise Peripherals',
      'Data Recovery Workflows',
    ],
  },
];

const PROJECT_CATEGORIES = [
  'All',
  'Full-Stack & Web',
  'Enterprise & Desktop',
  'Mobile',
];

const PROJECTS = [
  {
    id: 'vmar',
    title: 'VMAR — Vehicle Modification Approval & Registry',
    shortTitle: 'VMAR System',
    category: 'Full-Stack & Web',
    flagship: true,
    description:
      'Full-stack registry and approval system featuring separated Backend and Frontend architecture, an integrated Machine Learning module, and automated test suites with Pytest coverage.',
    highlights: [
      'Decoupled Backend, Frontend & ML architecture',
      'Automated Pytest test suites & coverage tracking',
      'End-to-end registry & approval workflow automation',
    ],
    tech: ['Python', 'Machine Learning', 'JavaScript', 'HTML/CSS', 'Pytest'],
    github: 'https://github.com/ravindu-n/VMAR',
    icon: Cpu,
  },
  {
    id: 'tech-fix',
    title: 'Tech Fix — Inventory Management System',
    shortTitle: 'Tech Fix',
    category: 'Enterprise & Desktop',
    flagship: false,
    description:
      'Service-oriented application architected with dedicated Business and Data layers for managing inventory, quotations, and role-based user access.',
    tech: ['C#', 'ASP.NET', 'SQL Server', 'CSS'],
    github: 'https://github.com/ravindu-n/Tech-Fix',
    icon: Layers,
  },
  {
    id: 'megacitycab',
    title: 'MegaCityCab — Cab Reservation System',
    shortTitle: 'MegaCityCab',
    category: 'Full-Stack & Web',
    flagship: false,
    description:
      'End-to-end cab booking platform featuring a decoupled Java backend service paired with a responsive web frontend.',
    tech: ['Java', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ravindu-n/MegaCityCab',
    icon: Code2,
  },
  {
    id: 'gallery-cafe',
    title: 'The Gallery Cafe — Restaurant Web App',
    shortTitle: 'The Gallery Cafe',
    category: 'Full-Stack & Web',
    flagship: false,
    description:
      'Dynamic online cafe and restaurant web application providing an intuitive platform for customers to browse menus and place food orders online.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/ravindu-n/The-Gallery-Cafe',
    icon: Terminal,
  },
  {
    id: 'dog-pal',
    title: 'Dog-Pal — Dog Food Store App',
    shortTitle: 'Dog-Pal',
    category: 'Mobile',
    flagship: false,
    description:
      'Native Android mobile application enabling store administrators to manage product inventory while customers browse and purchase dog food products.',
    tech: ['Java', 'Android SDK', 'Gradle'],
    github: 'https://github.com/ravindu-n/Dog-Pal',
    icon: Smartphone,
  },
  {
    id: 'hr-management',
    title: 'HR Management System',
    shortTitle: 'HRMS',
    category: 'Enterprise & Desktop',
    flagship: false,
    description:
      'Object-oriented Java desktop application engineered to streamline human resources workflows and employee record administration.',
    tech: ['Java', 'OOP', 'Desktop UI'],
    github: 'https://github.com/ravindu-n/HR-Management-System',
    icon: Briefcase,
  },
  {
    id: 'amber-bakery',
    title: 'Amber Bakery — Bakery Management System',
    shortTitle: 'Amber Bakery',
    category: 'Enterprise & Desktop',
    flagship: false,
    description:
      'Fast, file-backed management system built in C++ for handling bakery item catalogs, user logins, orders, and sales tracking.',
    tech: ['C++', 'File Handling'],
    github: 'https://github.com/ravindu-n/Amber-Bakery',
    icon: Terminal,
  },
];

const EXPERIENCE = [
  {
    role: 'IT Department (Head Office)',
    company: 'Pussalla Meat Producers (Pvt) Ltd',
    period: 'Present',
    current: true,
    summary:
      'Managing dual-track software and hardware IT operations at Head Office, supporting enterprise systems, networking, peripherals, and technical troubleshooting.',
    tags: [
      'Enterprise Systems Support',
      'Hardware & Networking',
      'System Administration',
      'Peripherals & Troubleshooting',
    ],
  },
  {
    role: 'Colour Matching Team Member',
    company: 'South Asia Textiles Ltd',
    period: '2022 – 2023',
    current: false,
    summary:
      'Conducted fabric colour verification, quality checks, and coordinated colour adjustments and production follow-ups with high attention to detail.',
    tags: ['Quality Verification', 'Process Follow-up', 'Cross-Team Coordination'],
  },
];

const EDUCATION = [
  {
    degree: 'BSc (Hons) Software Engineering — First Class Honours',
    institution: 'Cardiff Metropolitan University (ICBT Campus)',
    period: 'Completed 2025 · Graduated Feb 2026',
    highlight: 'First Class Honours',
    description:
      'Specialized in full-stack software engineering, object-oriented & service-oriented architecture, machine learning integration, and automated testing.',
  },
  {
    degree: 'Higher Diploma in Computing and Software Engineering',
    institution: 'Cardiff Metropolitan University (ICBT Campus)',
    period: '2024',
    highlight: 'Distinction Track',
    description:
      'Built strong foundations in data structures, relational databases, web technologies, Java/C++ programming, and software design principles.',
  },
  {
    degree: 'G.C.E. Advanced Level (2019) & Ordinary Level (2016)',
    institution: 'Rajasinghe Central College, Hanwella',
    period: '2016 – 2019',
    highlight: null,
    description:
      'Completed secondary education with strong analytical and problem-solving foundations.',
  },
];

// ============================================================================
// MAIN PORTFOLIO APPLICATION
// ============================================================================
function PortfolioApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSection, setActiveSection] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toast, setToast] = useState<{
    type: 'success' | 'error' | 'info';
    title: string;
    message: string;
  } | null>(null);

  // Smooth scrolling helper to top of page
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Smooth scrolling helper that accounts for fixed navbar height
  const scrollToSection = useCallback((sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  // Track currently visible section for navbar highlight and toggle scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide floating scroll-to-top button (active when scrolled past 300px)
      setShowScrollTop(window.scrollY > 300);

      // Near top of page: keep navbar clear (no item active on Hero section)
      if (window.scrollY < 200) {
        setActiveSection('');
        return;
      }
      const scrollPosition = window.scrollY + 140;
      let matched = '';
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          matched = NAV_LINKS[i].id;
          break;
        }
      }
      setActiveSection(matched);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-dismiss confirmation toast after 5 seconds
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  // Copy email helper with graceful fallback
  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PROFILE.email);
      }
      setCopiedEmail(true);
      setToast({
        type: 'success',
        title: 'Email Copied',
        message: `${PROFILE.email} copied to your clipboard.`,
      });
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setToast({
        type: 'info',
        title: 'Email Address',
        message: PROFILE.email,
      });
    }
  };

  // Filter projects based on selected category pill
  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  const getCategoryCount = (category: string) =>
    category === 'All'
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === category).length;

  // Validate contact form fields
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    }
    return errors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Handle Contact Form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY.trim() !== '') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: 'Portfolio Contact Form',
          }),
        });
        const result = await response.json();
        if (!result.success) throw new Error(result.message);
      } else {
        // Fallback: Open sender's mail client directly with recipient & pre-filled content
        const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
      setToast({
        type: 'success',
        title: 'Message Sent Successfully',
        message:
          'Thank you for reaching out! Ravindu will get back to you shortly.',
      });
    } catch {
      setToast({
        type: 'error',
        title: 'Delivery Notice',
        message:
          'Could not submit the form right now. Please email ravindunaveen123@gmail.com directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Bespoke unified styling: Frosted Glass & Aurora Live Wallpaper Theme
  const theme = {
    pageBg: 'bg-[#f8fafc] text-slate-900 selection:bg-cyan-500/20 selection:text-cyan-900',
    navBg: 'bg-white/80 border-slate-200/80 shadow-xs backdrop-blur-xl',
    card: 'bg-white/80 border-slate-200/80 hover:border-cyan-400/60 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 backdrop-blur-xl transition-all duration-300',
    cardSubtle: 'bg-white/70 border-slate-200/80 shadow-xs backdrop-blur-md',
    heading: 'text-slate-900',
    subtext: 'text-slate-600',
    muted: 'text-slate-500',
    divider: 'border-slate-200/80',
    pill: 'bg-white/85 text-slate-700 border-slate-200/90 shadow-xs',
    input: 'bg-white/90 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:ring-cyan-600/20 shadow-xs',
  };

  return (
    <div
      className={`min-h-screen font-sans antialiased relative overflow-x-hidden ${theme.pageBg}`}
    >
      {/* Inline animation & subtle grid helpers for the living wallpaper */}
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes aurora1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(70px, -50px) scale(1.15); }
          66% { transform: translate(-50px, 60px) scale(0.92); }
        }
        @keyframes aurora2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-80px, 60px) scale(1.12); }
          66% { transform: translate(60px, -40px) scale(0.95); }
        }
        @keyframes aurora3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, 60px) scale(1.14); }
        }
        @keyframes aurora4 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-60px, -50px) scale(1.08); }
        }
        .animate-aurora-1 { animation: aurora1 22s ease-in-out infinite; }
        .animate-aurora-2 { animation: aurora2 28s ease-in-out infinite; }
        .animate-aurora-3 { animation: aurora3 24s ease-in-out infinite; }
        .animate-aurora-4 { animation: aurora4 26s ease-in-out infinite; }

        .bg-tech-grid {
          background-image: linear-gradient(to right, rgba(14, 165, 233, 0.055) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(14, 165, 233, 0.055) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        /* Living Wallpaper: Floating Realistic Water Bubbles */
        @keyframes bubbleRise {
          0% {
            transform: translateY(105vh) translateX(0px) scale(0.85);
            opacity: 0;
          }
          4% {
            opacity: 0.95;
          }
          25% {
            transform: translateY(75vh) translateX(18px) scale(1);
          }
          50% {
            transform: translateY(50vh) translateX(-16px) scale(1.04);
          }
          75% {
            transform: translateY(25vh) translateX(16px) scale(1.02);
          }
          92% {
            opacity: 0.95;
          }
          100% {
            transform: translateY(-12vh) translateX(-12px) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes bubbleRiseAlt {
          0% {
            transform: translateY(105vh) translateX(0px) scale(0.85);
            opacity: 0;
          }
          4% {
            opacity: 0.95;
          }
          25% {
            transform: translateY(75vh) translateX(-20px) scale(1.02);
          }
          50% {
            transform: translateY(50vh) translateX(18px) scale(0.98);
          }
          75% {
            transform: translateY(25vh) translateX(-14px) scale(1.05);
          }
          92% {
            opacity: 0.95;
          }
          100% {
            transform: translateY(-12vh) translateX(15px) scale(0.92);
            opacity: 0;
          }
        }

        .water-bubble {
          position: absolute;
          bottom: 0;
          border-radius: 50%;
          pointer-events: none;
          animation: bubbleRise 20s ease-in-out infinite;
          background: radial-gradient(
            circle at 32% 28%,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(224, 242, 254, 0.85) 16%,
            rgba(186, 230, 253, 0.52) 36%,
            rgba(125, 211, 252, 0.40) 60%,
            rgba(14, 165, 233, 0.55) 84%,
            rgba(99, 102, 241, 0.45) 100%
          );
          border: 1.5px solid rgba(14, 165, 233, 0.55);
          box-shadow:
            inset -3px -4px 10px rgba(6, 182, 212, 0.55),
            inset 3px 4px 12px rgba(255, 255, 255, 0.98),
            inset 0 0 16px rgba(56, 189, 248, 0.40),
            0 8px 24px rgba(6, 182, 212, 0.30),
            0 2px 8px rgba(37, 99, 235, 0.22);
          backdrop-filter: blur(2px);
        }

        .water-bubble-alt {
          animation-name: bubbleRiseAlt !important;
        }

        .water-bubble-fg {
          opacity: 0.85;
          filter: drop-shadow(0 4px 12px rgba(6, 182, 212, 0.35));
        }

        .water-bubble::after {
          content: '';
          position: absolute;
          top: 14%;
          left: 18%;
          width: 32%;
          height: 22%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
          transform: rotate(-35deg);
        }

        .water-bubble::before {
          content: '';
          position: absolute;
          bottom: 15%;
          right: 18%;
          width: 22%;
          height: 14%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 5px rgba(125, 211, 252, 0.8);
          transform: rotate(-25deg);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.55s ease-out forwards;
        }

        /* Executive Toast Entrance & Progress Animations */
        @keyframes toastSlideIn {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.94);
          }
          65% {
            opacity: 1;
            transform: translateY(-4px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }
        .animate-toast {
          animation: toastSlideIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes toastProgress {
          from { width: 100%; }
          to { width: 0%; }
        }
        .animate-toast-progress {
          animation: toastProgress 5s linear forwards;
        }
      `}</style>

      {/* ====================================================================
          LIVING WALLPAPER BACKGROUND (ANIMATED MESH & AMBIENT AURORA)
         ==================================================================== */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle Cyber Grid Texture */}
        <div className="absolute inset-0 bg-tech-grid opacity-75" />

        {/* Floating Aurora Orb 1: Cyan / Sky Blue (Top Left) */}
        <div
          className="absolute -top-28 -left-28 w-[38rem] h-[38rem] rounded-full blur-[100px] opacity-70 animate-aurora-1"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.38) 0%, rgba(14,165,233,0.22) 50%, transparent 70%)',
          }}
        />

        {/* Floating Aurora Orb 2: Royal Indigo / Violet (Top Right) */}
        <div
          className="absolute top-16 -right-28 w-[42rem] h-[42rem] rounded-full blur-[110px] opacity-65 animate-aurora-2"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.32) 0%, rgba(139,92,246,0.20) 50%, transparent 70%)',
          }}
        />

        {/* Floating Aurora Orb 3: Mint Emerald / Teal (Mid Left) */}
        <div
          className="absolute top-1/2 -left-24 w-[36rem] h-[36rem] rounded-full blur-[100px] opacity-50 animate-aurora-3"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.26) 0%, rgba(6,182,212,0.16) 50%, transparent 70%)',
          }}
        />

        {/* Floating Aurora Orb 4: Electric Blue / Purple (Bottom Right) */}
        <div
          className="absolute -bottom-28 right-8 w-[42rem] h-[42rem] rounded-full blur-[115px] opacity-60 animate-aurora-4"
          style={{
            background: 'radial-gradient(circle, rgba(79,70,229,0.30) 0%, rgba(6,182,212,0.18) 50%, transparent 70%)',
          }}
        />

        {/* Floating Translucent Water Bubbles (Background Layer - 36 Bubbles) */}
        {WATER_BUBBLES.map((bubble) => (
          <div
            key={bubble.id}
            className={`water-bubble ${bubble.alt ? 'water-bubble-alt' : ''}`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Foreground Water Bubbles (3D Ambient Depth Layer) */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        {FOREGROUND_BUBBLES.map((bubble) => (
          <div
            key={bubble.id}
            className={`water-bubble water-bubble-fg ${bubble.alt ? 'water-bubble-alt' : ''}`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ====================================================================
          EXECUTIVE CONFIRMATION TOAST (FLOATING LUXURY GLASS CARD)
         ==================================================================== */}
      {toast && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 max-w-md w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] animate-toast"
        >
          {/* Radiant Ambient Halo */}
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-35 blur-xl animate-pulse"
          />

          {/* Main Frosted Glass Card */}
          <div className="relative rounded-2xl border-2 border-cyan-400/50 bg-white/95 backdrop-blur-2xl text-slate-900 shadow-2xl shadow-cyan-500/20 overflow-hidden">
            <div className="p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
              {/* Status Icon Badge */}
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
                  toast.type === 'success'
                    ? 'bg-gradient-to-tr from-emerald-400 via-teal-500 to-cyan-500 text-white shadow-emerald-500/30'
                    : toast.type === 'error'
                    ? 'bg-gradient-to-tr from-rose-500 via-red-500 to-orange-500 text-white shadow-rose-500/30'
                    : 'bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 text-white shadow-cyan-500/30'
                }`}
              >
                {toast.type === 'success' && <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />}
                {toast.type === 'error' && <AlertCircle className="w-6 h-6 stroke-[2.5]" />}
                {toast.type === 'info' && <Sparkles className="w-6 h-6 stroke-[2.5]" />}
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {toast.title}
                  </h4>
                  {toast.type === 'success' && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                      Direct to Inbox
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {toast.message}
                </p>
              </div>

              {/* Dismiss Button */}
              <button
                type="button"
                onClick={() => setToast(null)}
                aria-label="Dismiss notification"
                className="p-1.5 rounded-xl border border-slate-200/80 bg-slate-50 text-slate-400 hover:text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Countdown Progress Bar */}
            <div className="h-1 w-full bg-slate-100 overflow-hidden">
              <div
                className={`h-full animate-toast-progress ${
                  toast.type === 'success'
                    ? 'bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600'
                    : toast.type === 'error'
                    ? 'bg-gradient-to-r from-rose-500 to-orange-500'
                    : 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600'
                }`}
              />
            </div>
          </div>
        </aside>
      )}

      {/* ====================================================================
          FLOATING BACK TO TOP BUTTON (ONE-CLICK SMOOTH SCROLL)
         ==================================================================== */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border-2 border-cyan-400/50 bg-white/95 backdrop-blur-xl shadow-xl shadow-cyan-500/20 text-cyan-700 hover:text-white hover:bg-gradient-to-tr hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-600 hover:border-transparent hover:shadow-cyan-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {/* Radiant Ambient Glow on hover */}
        <span
          aria-hidden="true"
          className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-300"
        />
        <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 stroke-[2.5]" />
      </button>

      {/* ====================================================================
          STICKY NAVIGATION BAR
         ==================================================================== */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-colors duration-300 ${theme.navBg}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo with Profile Photo Thumbnail */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none min-w-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  style={{ objectPosition: '50% 16%' }}
                  className="w-full h-full object-cover scale-[1.38] origin-[50%_20%]"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className="text-left leading-tight min-w-0">
              <span className={`block font-bold tracking-tight text-sm sm:text-base truncate ${theme.heading}`}>
                Ravindu Naveen
              </span>
              <span className="block text-[10px] sm:text-[11px] font-mono text-cyan-600 font-medium truncate">
                Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-700 bg-cyan-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <a
              href={PROFILE.cvUrl}
              download="Ravindu_Naveen_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-cyan-500/40 bg-white/90 text-cyan-800 hover:bg-cyan-50 hover:border-cyan-600 shadow-xs transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-600" />
              <span>Download CV</span>
            </a>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:opacity-95 transition-opacity shrink-0"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-xl border border-slate-200 bg-white/80 text-slate-800 shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-50 text-cyan-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-200/80">
              <a
                href={PROFILE.cvUrl}
                download="Ravindu_Naveen_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-cyan-500/50 bg-cyan-50 text-cyan-800 shadow-xs"
              >
                <Download className="w-4 h-4 text-cyan-600" />
                Download CV (PDF)
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* ====================================================================
            HERO SECTION
           ==================================================================== */}
        <section className="relative pt-8 pb-14 sm:pt-20 sm:pb-24 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Left Column: Core Identity & CTAs */}
              <div className="w-full lg:col-span-7 animate-fade-up">
                {/* Live Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border text-xs sm:text-sm font-medium mb-5 sm:mb-6 bg-emerald-50 border-emerald-200 text-emerald-700 shadow-xs max-w-full">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
                  </span>
                  <span className="truncate">{PROFILE.status}</span>
                </div>

                <h1
                  className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] ${theme.heading}`}
                >
                  {PROFILE.name}
                </h1>

                <p className="mt-2.5 sm:mt-3 text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {PROFILE.headline}
                </p>

                <p className={`mt-4 sm:mt-5 text-sm sm:text-lg leading-relaxed max-w-2xl ${theme.subtext}`}>
                  {PROFILE.bio}
                </p>

                {/* Primary CTAs */}
                <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5">
                  <button
                    type="button"
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 transition-all w-full sm:w-auto"
                  >
                    View Projects
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href={PROFILE.cvUrl}
                    download="Ravindu_Naveen_CV.pdf"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border-2 border-cyan-500/50 bg-white/95 text-cyan-900 hover:border-cyan-600 hover:bg-cyan-50/80 shadow-md shadow-cyan-500/10 transition-all group w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4 text-cyan-600 group-hover:translate-y-0.5 transition-transform" />
                    Download CV
                  </a>

                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border border-slate-300 bg-white/90 text-slate-800 hover:border-cyan-500 hover:bg-slate-50 shadow-xs transition-all w-full sm:w-auto"
                  >
                    Contact Me
                    <Mail className="w-4 h-4" />
                  </button>
                </div>

                {/* Direct Social Icon Row */}
                <div className="mt-6 sm:mt-7 grid grid-cols-3 sm:flex items-center gap-2 sm:gap-3">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white/90 text-slate-700 hover:text-slate-900 hover:border-cyan-500 shadow-xs text-xs sm:text-sm font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white/90 text-slate-700 hover:text-slate-900 hover:border-cyan-500 shadow-xs text-xs sm:text-sm font-medium transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`mailto:${PROFILE.email}`}
                    aria-label="Send Email"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white/90 text-slate-700 hover:text-slate-900 hover:border-cyan-500 shadow-xs text-xs sm:text-sm font-medium transition-all"
                  >
                    <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Circular Executive Portrait Frame */}
              <div className="w-full lg:col-span-5 flex justify-center lg:justify-end my-2 lg:my-0">
                <div className="relative group">
                  {/* Radiant Ambient Halo behind the circle */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 opacity-40 blur-2xl group-hover:opacity-70 transition duration-700 animate-pulse"
                  />

                  {/* Outer Glowing Gradient Ring */}
                  <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full p-2 sm:p-2.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl shadow-cyan-500/25 transition-transform duration-500 group-hover:scale-[1.02]">
                    {/* Inner Frosted Glass Ring */}
                    <div className="w-full h-full rounded-full p-1 sm:p-1.5 bg-white/90 backdrop-blur-xl border-2 border-white/90 shadow-inner flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 relative">
                        <img
                          src={PROFILE.avatar}
                          alt={PROFILE.name}
                          style={{ objectPosition: '50% 16%' }}
                          className="w-full h-full object-cover scale-[1.38] origin-[50%_20%] transition-transform duration-500 group-hover:scale-[1.45]"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLElement;
                            target.style.display = 'none';
                            const fallback = document.getElementById('avatar-fallback');
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />

                        {/* Fallback displayed if /profile.jpg is not yet added */}
                        <div
                          id="avatar-fallback"
                          className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 via-white to-slate-100"
                        >
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold shadow-lg shadow-cyan-500/30 mb-2">
                            RN
                          </div>
                          <p className={`text-base font-bold ${theme.heading}`}>{PROFILE.name}</p>
                          <p className="text-xs text-cyan-600 font-mono mt-0.5">Software Engineer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Highlight Stats Strip */}
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.value}
                    className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${theme.card}`}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-cyan-50 text-cyan-700 border border-cyan-200/80">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className={`font-bold text-sm sm:text-base truncate ${theme.heading}`}>
                        {stat.value}
                      </p>
                      <p className={`text-xs sm:text-sm truncate ${theme.subtext}`}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            ABOUT SECTION
           ==================================================================== */}
        <section id="about" className={`py-16 sm:py-20 border-t ${theme.divider}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-500 mb-2">
                  01 / About Me
                </p>
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${theme.heading}`}>
                  Engineering software with real-world operational discipline.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className={`text-base leading-relaxed ${theme.subtext}`}>
                  As a <strong className={theme.heading}>First Class Honours</strong> Software
                  Engineering graduate from Cardiff Metropolitan University (ICBT Campus), I focus
                  on building clean, reliable, and scalable applications across web, desktop, and
                  mobile platforms—ranging from Python/ML registry systems to C#/.NET service-oriented
                  enterprise applications.
                </p>
                <p className={`text-base leading-relaxed ${theme.subtext}`}>
                  Currently working within the{' '}
                  <strong className={theme.heading}>
                    Head Office IT Department at Pussalla Meat Producers (Pvt) Ltd
                  </strong>
                  , I complement my software development foundation with daily hands-on experience
                  in enterprise IT infrastructure, system administration, hardware diagnostics, and
                  network troubleshooting—giving me an end-to-end perspective on how production
                  systems run reliably in real organizations.
                </p>

                <div className="pt-2 grid sm:grid-cols-2 gap-3.5">
                  <div className={`p-4 rounded-xl border ${theme.cardSubtle}`}>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Code2 className="w-4 h-4 text-cyan-500" />
                      <h3 className={`text-sm font-semibold ${theme.heading}`}>
                        Full-Stack Architecture
                      </h3>
                    </div>
                    <p className={`text-xs leading-relaxed ${theme.subtext}`}>
                      Experience designing decoupled frontends, RESTful/service-oriented backends,
                      SQL/PostgreSQL schemas, and automated Pytest validation suites.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${theme.cardSubtle}`}>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Wrench className="w-4 h-4 text-indigo-400" />
                      <h3 className={`text-sm font-semibold ${theme.heading}`}>
                        Enterprise IT & Systems
                      </h3>
                    </div>
                    <p className={`text-xs leading-relaxed ${theme.subtext}`}>
                      Practical head-office operations covering Windows environments, networking,
                      enterprise peripherals, system diagnostics, and data recovery workflows.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center">
                  <a
                    href={PROFILE.cvUrl}
                    download="Ravindu_Naveen_CV.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/50 bg-cyan-50/80 text-cyan-900 text-xs sm:text-sm font-semibold hover:bg-cyan-100 hover:border-cyan-600 transition-all shadow-xs"
                  >
                    <Download className="w-4 h-4 text-cyan-600" />
                    Download Full Curriculum Vitae (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            CORE COMPETENCIES / SKILLS MATRIX
           ==================================================================== */}
        <section id="skills" className={`py-16 sm:py-20 border-t ${theme.divider}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10 sm:mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-500 mb-2">
                02 / Core Competencies
              </p>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${theme.heading}`}>
                Technical Skills Matrix
              </h2>
              <p className={`mt-2 text-sm sm:text-base ${theme.subtext}`}>
                A balanced skill set spanning software engineering languages, modern web & mobile
                frameworks, relational databases, machine learning, and enterprise IT operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SKILL_CATEGORIES.map((category) => {
                const Icon = category.icon;
                const iconStyle =
                  category.accent === 'cyan'
                    ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                    : category.accent === 'indigo'
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    : 'bg-blue-50 text-blue-700 border-blue-200';

                return (
                  <div
                    key={category.id}
                    className={`rounded-2xl border p-6 flex flex-col transition-all duration-200 ${theme.card}`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${iconStyle}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className={`text-lg font-bold ${theme.heading}`}>
                      {category.title}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-1 mb-5 leading-relaxed ${theme.subtext}`}>
                      {category.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${theme.pill}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            FEATURED PROJECTS SECTION
           ==================================================================== */}
        <section id="projects" className={`py-16 sm:py-20 border-t ${theme.divider}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-500 mb-2">
                  03 / Featured Portfolio
                </p>
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${theme.heading}`}>
                  Selected Engineering Projects
                </h2>
                <p className={`mt-2 text-sm sm:text-base ${theme.subtext}`}>
                  Real-world systems hosted on GitHub covering full-stack web platforms,
                  service-oriented enterprise architectures, mobile apps, and C++ systems.
                </p>
              </div>

              {/* Interactive Category Filter Pills */}
              <div
                className="flex flex-wrap gap-2"
                role="tablist"
                aria-label="Filter projects by category"
              >
                {PROJECT_CATEGORIES.map((category) => {
                  const isSelected = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveCategory(category)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white border-transparent shadow-md shadow-cyan-500/20'
                          : 'bg-white/85 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      <span>{category}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded-md text-[11px] font-mono ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {getCategoryCount(category)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const Icon = project.icon;
                const isFlagship = project.flagship;

                return (
                  <article
                    key={project.id}
                    className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                      isFlagship
                        ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-white/95 via-cyan-50/40 to-indigo-50/40 border-cyan-300/80 shadow-md hover:shadow-xl hover:shadow-cyan-500/15 backdrop-blur-xl'
                        : theme.card
                    }`}
                  >
                    <div>
                      {/* Card Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                              isFlagship
                                ? 'bg-gradient-to-br from-cyan-500 to-indigo-600 text-white border-transparent shadow-md shadow-cyan-500/20'
                                : 'bg-slate-100 text-cyan-700 border-slate-200'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>

                          <span
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium border ${theme.pill}`}
                          >
                            {project.category}
                          </span>
                        </div>

                        {isFlagship && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/40 text-cyan-400">
                            <Sparkles className="w-3.5 h-3.5" />
                            Flagship Project
                          </span>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h3
                        className={`font-bold tracking-tight group-hover:text-cyan-400 transition-colors ${
                          isFlagship ? 'text-xl sm:text-2xl' : 'text-lg'
                        } ${theme.heading}`}
                      >
                        {project.title}
                      </h3>

                      <p className={`mt-2.5 text-sm leading-relaxed ${theme.subtext}`}>
                        {project.description}
                      </p>

                      {/* Flagship Architecture Highlights */}
                      {isFlagship && project.highlights && (
                        <ul className="mt-4 grid sm:grid-cols-3 gap-2.5">
                          {project.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200 bg-white/80 text-xs text-slate-700"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Tech Stack Badges & GitHub Link Footer */}
                    <div className="mt-6 pt-4 border-t border-dashed border-slate-200">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-50 text-cyan-800 border border-cyan-200/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-slate-900 hover:text-cyan-700"
                      >
                        <Github className="w-4 h-4" />
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            WORK EXPERIENCE TIMELINE
           ==================================================================== */}
        <section id="experience" className={`py-16 sm:py-20 border-t ${theme.divider}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10 sm:mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-500 mb-2">
                04 / Experience
              </p>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${theme.heading}`}>
                Professional Journey
              </h2>
              <p className={`mt-2 text-sm sm:text-base ${theme.subtext}`}>
                Enterprise IT operations combined with industrial quality assurance experience.
              </p>
            </div>

            <div className="relative space-y-6 before:absolute before:left-4 sm:before:left-6 before:top-4 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500/50 before:to-transparent">
              {EXPERIENCE.map((item) => (
                <div key={item.company} className="relative pl-10 sm:pl-16">
                  {/* Timeline Node */}
                  <div
                    className={`absolute left-1.5 sm:left-3.5 top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center ${
                      item.current
                        ? 'bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/40'
                        : 'bg-white border-slate-400'
                    }`}
                  >
                    {item.current && <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />}
                  </div>

                  <div className={`rounded-2xl border p-6 transition-all ${theme.card}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold ${theme.heading}`}>
                          {item.company}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-600">{item.role}</p>
                      </div>
                      <span
                        className={`inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                          item.current
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                            : theme.pill
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed mb-4 ${theme.subtext}`}>
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${theme.pill}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            EDUCATION SECTION
           ==================================================================== */}
        <section id="education" className={`py-16 sm:py-20 border-t ${theme.divider}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10 sm:mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-500 mb-2">
                05 / Education
              </p>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${theme.heading}`}>
                Academic Credentials
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EDUCATION.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                    index === 0
                      ? 'bg-gradient-to-b from-white to-cyan-50/40 border-cyan-300/80 shadow-sm'
                      : theme.card
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          index === 0
                            ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                            : 'bg-indigo-50 text-indigo-600 border-indigo-200'
                        }`}
                      >
                        <GraduationCap className="w-5 h-5" />
                      </div>

                      {edu.highlight && (
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                            index === 0
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : theme.pill
                          }`}
                        >
                          {edu.highlight}
                        </span>
                      )}
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold leading-snug ${theme.heading}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-cyan-500 mt-1.5">
                      {edu.institution}
                    </p>
                    <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${theme.subtext}`}>
                      {edu.description}
                    </p>
                  </div>

                  <div className={`mt-5 pt-4 border-t text-xs font-mono ${theme.divider} ${theme.muted}`}>
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            CONTACT SECTION
           ==================================================================== */}
        <section id="contact" className={`py-16 sm:py-24 border-t ${theme.divider}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10 sm:mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-500 mb-2">
                06 / Contact
              </p>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${theme.heading}`}>
                Let&apos;s Build Something Great Together
              </h2>
              <p className={`mt-2 text-sm sm:text-base ${theme.subtext}`}>
                Open to Software Engineering roles, freelance engineering collaborations, and
                technical discussions. Feel free to reach out directly or send a message below.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Contact Information Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className={`rounded-2xl border p-6 space-y-5 ${theme.card}`}>
                  <h3 className={`text-lg font-bold ${theme.heading}`}>
                    Contact Details
                  </h3>

                  {/* Email Row with Quick Copy */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border bg-cyan-50 text-cyan-700 border-cyan-200">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-xs font-medium ${theme.muted}`}>Email</p>
                        <a
                          href={`mailto:${PROFILE.email}`}
                          className={`text-sm font-semibold break-all hover:text-cyan-600 transition-colors ${theme.heading}`}
                        >
                          {PROFILE.email}
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="p-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-700 hover:text-cyan-700 shrink-0 transition-colors"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone Row */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border bg-indigo-50 text-indigo-700 border-indigo-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${theme.muted}`}>Phone</p>
                      <a
                        href={PROFILE.phoneHref}
                        className={`text-sm font-semibold hover:text-cyan-600 transition-colors ${theme.heading}`}
                      >
                        {PROFILE.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location Row */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border bg-blue-50 text-blue-700 border-blue-200">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${theme.muted}`}>Location</p>
                      <p className={`text-sm font-semibold ${theme.heading}`}>
                        {PROFILE.location}
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className={`pt-4 border-t flex gap-3 ${theme.divider}`}>
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:border-cyan-500 hover:text-cyan-700 text-sm font-semibold transition-all"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:border-blue-500 hover:text-blue-700 text-sm font-semibold transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className={`rounded-2xl border p-6 sm:p-8 space-y-5 ${theme.card}`}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme.subtext}`}
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Kasun Perera"
                        className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm outline-none focus:ring-2 transition-all ${theme.input} ${
                          formErrors.name ? 'border-rose-500' : ''
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1.5 text-xs text-rose-400">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme.subtext}`}
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm outline-none focus:ring-2 transition-all ${theme.input} ${
                          formErrors.email ? 'border-rose-500' : ''
                        }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1.5 text-xs text-rose-400">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme.subtext}`}
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Software Engineering Opportunity / Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm outline-none focus:ring-2 transition-all ${theme.input} ${
                        formErrors.subject ? 'border-rose-500' : ''
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="mt-1.5 text-xs text-rose-400">{formErrors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme.subtext}`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about the role, team, or project..."
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm outline-none focus:ring-2 resize-y transition-all ${theme.input} ${
                        formErrors.message ? 'border-rose-500' : ''
                      }`}
                    />
                    {formErrors.message && (
                      <p className="mt-1.5 text-xs text-rose-400">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 disabled:opacity-60 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          FOOTER
         ==================================================================== */}
      <footer className={`border-t py-8 ${theme.divider}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className={`text-sm font-semibold ${theme.heading}`}>
              &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
            <p className={`text-xs mt-0.5 ${theme.muted}`}>
              Built with React &amp; Tailwind CSS · Software Engineer | IT &amp; Systems Specialist
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-slate-600 hover:text-cyan-700 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// DEFAULT EXPORT WRAPPED WITH ERROR BOUNDARY
// ============================================================================
export default function App() {
  return (
    <PortfolioErrorBoundary>
      <PortfolioApp />
    </PortfolioErrorBoundary>
  );
}