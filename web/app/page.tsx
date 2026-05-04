"use client";

import { GraduationCap, UserCheck, Heart, Shield, Globe, Sun, CloudRain, Phone, Mail, MapPin, Share2, MessageCircle, Users, ArrowRight, BookOpen, Award, TrendingUp, Star, ChevronRight, Zap, Target, Clock, CheckCircle, Play, Building2, GraduationCap as GradIcon, Laptop, Calendar, BarChart3, MessageSquare, FileText, Video, HeadphonesIcon, Mail as MailIcon, Phone as PhoneIcon } from 'lucide-react';
import SiteShell from "./components/SiteShell";
import { useEffect, useState, useRef, type CSSProperties } from 'react';

const loginPortals = [
  {
    title: 'Student Login',
    description: 'Access your learning dashboard, assignments, grades, and academic resources.',
    icon: GraduationCap,
    color: '#3b82f6',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Parents Login',
    description: 'Track your child\'s progress, communicate with teachers, and view reports.',
    icon: Heart,
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-400'
  },
  {
    title: 'Staff Login',
    description: 'Manage classes, attendance, and student performance with ease.',
    icon: UserCheck,
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-purple-400'
  },
  {
    title: 'Management Login',
    description: 'Comprehensive analytics, reports, and institutional oversight.',
    icon: Shield,
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-400'
  },
  {
    title: 'Admin Login',
    description: 'Full system control, user management, and configuration settings.',
    icon: Globe,
    color: '#10b981',
    gradient: 'from-emerald-500 to-teal-400'
  }
];

const stats = [
  { value: '15K+', label: 'Active Students', icon: Users },
  { value: '500+', label: 'Expert Teachers', icon: GradIcon },
  { value: '50+', label: 'Institutions', icon: Building2 },
  { value: '98%', label: 'Satisfaction Rate', icon: CheckCircle }
];

const features = [
  {
    icon: BookOpen,
    title: 'Smart Learning',
    description: 'AI-powered personalized learning paths adapted to each student\'s pace.'
  },
  {
    icon: Award,
    title: 'Certified Courses',
    description: 'Industry-recognized certifications and curriculum designed by experts.'
  },
  {
    icon: TrendingUp,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards for tracking progress and identifying gaps.'
  },
  {
    icon: Users,
    title: 'Collaborative Tools',
    description: 'Seamless communication between students, parents, and educators.'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second load times',
    color: '#f59e0b'
  },
  {
    icon: Target,
    title: 'Accurate Tracking',
    description: 'Real-time attendance and performance monitoring',
    color: '#3b82f6'
  },
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automate administrative tasks and focus on education',
    color: '#10b981'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Enterprise-grade security for your data',
    color: '#8b5cf6'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Principal, Delhi Public School',
    image: 'SJ',
    content: 'Prasynx has transformed how we manage our institution. The automation saved us 40% of administrative time.',
    rating: 5
  },
  {
    name: 'Mr. Amit Sharma',
    role: 'Director, Sunshine Academy',
    image: 'AS',
    content: 'The parent-teacher communication feature is exceptional. Parents are more engaged than ever before.',
    rating: 5
  },
  {
    name: 'Mrs. Priya Patel',
    role: 'Headmistress, Nav Bharat School',
    image: 'PP',
    content: 'Our teachers love the intuitive interface. Training time reduced by 60% with excellent adoption.',
    rating: 5
  }
];

const processSteps = [
  { number: '01', title: 'Sign Up', description: 'Create your institution account in minutes' },
  { number: '02', title: 'Configure', description: 'Set up users, roles, and permissions' },
  { number: '03', title: 'Onboard', description: 'Import students and staff data easily' },
  { number: '04', title: 'Launch', description: 'Go live and start transforming education' }
];

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Most institutions are up and running within 1-2 weeks. We provide full onboarding support.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade encryption and comply with all education data regulations.'
  },
  {
    question: 'Can we integrate with existing systems?',
    answer: 'Yes, Prasynx integrates with most school management systems through our robust API.'
  },
  {
    question: 'Do you offer training?',
    answer: 'Yes, we provide comprehensive training for administrators, teachers, and staff at no extra cost.'
  }
];

const footerLinks = {
  product: [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Roadmap', href: '#' }
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '#' }
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Status', href: '#' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '#' }
  ]
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const pageStyles: Record<string, CSSProperties> = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    section: {
      width: '100%',
      maxWidth: 1280,
      margin: '0 auto',
      padding: '72px 24px'
    },
    heroSection: {
      position: 'relative',
      overflow: 'hidden',
      padding: '96px 24px 72px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
      width: '100%',
      maxWidth: 1280,
      margin: '0 auto'
    },
    heroBg: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      pointerEvents: 'none'
    },
    orbBase: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(64px)',
      opacity: 0.68
    },
    gridPattern: {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '120%',
      height: '120%',
      transform: 'translateX(-50%)',
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
      backgroundSize: '38px 38px',
      opacity: 0.28
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      textAlign: 'center',
      alignItems: 'center',
      flex: '1 1 550px',
      minWidth: 320,
      padding: '24px 0'
    },
    heroBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '0.9rem 1.2rem',
      borderRadius: 999,
      background: 'rgba(37, 99, 235, 0.12)',
      color: '#1e3a8a',
      fontWeight: 700,
      fontSize: '0.95rem',
      border: '1px solid rgba(37, 99, 235, 0.16)'
    },
    heroTitle: {
      fontSize: 'clamp(2.7rem, 4vw, 4.4rem)',
      lineHeight: 1.03,
      maxWidth: 720,
      margin: 0,
      fontWeight: 800,
      letterSpacing: '-0.04em',
      color: '#0f172a'
    },
    gradientText: {
      background: 'linear-gradient(90deg, #2563eb, #14b8a6)',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    heroDescription: {
      maxWidth: 620,
      color: '#475569',
      fontSize: '1.05rem',
      lineHeight: 1.75,
      margin: 0
    },
    heroActions: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 16
    },
    heroStats: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 18,
      marginTop: 20
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px 20px',
      minWidth: 130,
      borderRadius: 22,
      background: 'rgba(15, 23, 42, 0.04)',
      boxShadow: '0 14px 32px rgba(15, 23, 42, 0.06)'
    },
    statIcon: {
      width: 44,
      height: 44,
      borderRadius: 14,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
      background: 'rgba(37, 99, 235, 0.12)',
      color: '#2563eb'
    },
    statValue: {
      fontSize: '1.25rem',
      fontWeight: 800,
      color: '#0f172a'
    },
    statLabel: {
      color: '#64748b',
      marginTop: 4,
      fontSize: '0.95rem'
    },
    heroVisual: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '1 1 420px',
      minWidth: 320,
      minHeight: 520,
      padding: 24
    },
    heroCard: {
      position: 'relative',
      width: '100%',
      minWidth: 220,
      borderRadius: 28,
      padding: '1.3rem',
      background: 'rgba(255,255,255,0.96)',
      border: '1px solid rgba(148,163,184,0.18)',
      boxShadow: '0 18px 50px rgba(15, 23, 42, 0.08)'
    },
    heroCardIcon: {
      width: 48,
      height: 48,
      borderRadius: 18,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 14,
      background: 'rgba(37, 99, 235, 0.12)',
      color: '#2563eb'
    },
    heroCardTitle: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: '#0f172a'
    },
    heroCardValue: {
      marginTop: 6,
      fontSize: '1.4rem',
      fontWeight: 800,
      color: '#111827'
    },
    cardGlow: {
      position: 'absolute',
      inset: 0,
      borderRadius: 28,
      boxShadow: '0 0 80px rgba(37, 99, 235, 0.14)',
      opacity: 0.4,
      filter: 'blur(20px)',
      zIndex: -1
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: 32
    },
    sectionTag: {
      display: 'inline-flex',
      padding: '0.65rem 1.35rem',
      borderRadius: 999,
      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(139, 92, 246, 0.1))',
      color: '#2563eb',
      fontSize: '0.95rem',
      fontWeight: 700,
      marginBottom: 16,
      border: '1px solid rgba(37, 99, 235, 0.3)',
      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.08)',
      animation: 'gradientShift 6s ease infinite',
      backgroundSize: '200% 200%'
    },
    sectionTitle: {
      fontSize: '2.3rem',
      fontWeight: 800,
      margin: 0,
      color: '#0f172a',
      lineHeight: 1.05
    },
    sectionSubtitle: {
      maxWidth: 760,
      margin: '18px auto 0',
      color: '#475569',
      fontSize: '1rem'
    },
    gridWrap: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '24px'
    },
    portalGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '24px'
    },
    featureCard: {
      borderRadius: 24,
      padding: '28px 24px',
      background: 'rgba(255,255,255,0.95)',
      border: '1px solid rgba(148, 163, 184, 0.18)',
      boxShadow: '0 18px 44px rgba(15, 23, 42, 0.06)',
      transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
    },
    featureIcon: {
      width: 56,
      height: 56,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 18,
      marginBottom: 18,
      background: 'rgba(37, 99, 235, 0.12)',
      color: '#2563eb'
    },
    featureLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 18,
      color: '#2563eb',
      fontWeight: 700
    },
    portalCard: {
      position: 'relative',
      padding: '28px 24px',
      borderRadius: 30,
      background: 'rgba(255,255,255,0.95)',
      border: '1px solid rgba(148,163,184,0.18)',
      boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
      overflow: 'hidden'
    },
    portalBadge: {
      width: 54,
      height: 54,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 18,
      marginBottom: 16,
      color: 'white'
    },
    portalAction: {
      marginTop: 20,
      display: 'inline-flex',
      alignItems: 'center'
    },
    testimonialCard: {
      padding: '28px 24px',
      borderRadius: 28,
      background: 'rgba(255,255,255,0.96)',
      border: '1px solid rgba(148,163,184,0.18)',
      boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)'
    },
    authorAvatar: {
      width: 50,
      height: 50,
      borderRadius: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(37, 99, 235, 0.12)',
      fontWeight: 800,
      color: '#2563eb'
    },
    faqCard: {
      width: '100%',
      borderRadius: 24,
      padding: '20px 22px',
      background: 'rgba(255,255,255,0.98)',
      border: '1px solid rgba(148,163,184,0.2)',
      boxShadow: '0 16px 36px rgba(15, 23, 42, 0.06)'
    },
    faqQuestion: {
      width: '100%',
      textAlign: 'left',
      background: 'transparent',
      border: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#0f172a',
      fontSize: '1rem',
      fontWeight: 700,
      cursor: 'pointer'
    },
    faqAnswer: {
      marginTop: 12,
      color: '#475569',
      lineHeight: 1.75
    },
    ctaBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      padding: '48px 24px',
      borderRadius: 32,
      background: 'linear-gradient(135deg, rgba(37,99,235,0.18), rgba(16,185,129,0.12))'
    }
  };

  const appear = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`
  });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const timer = setTimeout(() => setAnimatedStats(true), 1000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const orbStyle = (options: Record<string, string | number>) => ({
    ...pageStyles.orbBase,
    ...options
  });

  const portalGradient = (gradient: string) => {
    const gradients: Record<string, string> = {
      'from-blue-500 to-cyan-400': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      'from-pink-500 to-rose-400': 'linear-gradient(135deg, #ec4899, #f43f5e)',
      'from-violet-500 to-purple-400': 'linear-gradient(135deg, #8b5cf6, #a855f7)',
      'from-amber-500 to-orange-400': 'linear-gradient(135deg, #f59e0b, #fb923c)',
      'from-emerald-500 to-teal-400': 'linear-gradient(135deg, #10b981, #2dd4bf)'
    };
    return gradients[gradient] || '#2563eb';
  };

  return (
    <SiteShell>
      <main style={pageStyles.main}>
        <section style={pageStyles.heroSection} ref={heroRef}>
          <div style={pageStyles.heroBg}>
            <div style={{ ...orbStyle({ width: 260, height: 260, top: -40, left: -40, background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45), transparent 60%)', transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }) }} />
            <div style={{ ...orbStyle({ width: 220, height: 220, top: '12%', right: '8%', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35), transparent 58%)', transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)` }) }} />
            <div style={{ ...orbStyle({ width: 300, height: 300, left: '30%', bottom: -40, background: 'radial-gradient(circle, rgba(16, 185, 129, 0.28), transparent 62%)', transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)` }) }} />
            <div style={pageStyles.gridPattern} />
            {[...Array(14)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.45)',
                top: `${10 + (i * 6) % 80}%`,
                left: `${(i * 12) % 92}%`,
                opacity: 0.65,
                filter: 'blur(1px)'
              }} />
            ))}
          </div>

          <div style={{ ...pageStyles.heroContent, transform: mounted ? `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` : 'translate(0, 0)' }}>
            <div style={{ ...pageStyles.heroBadge, ...appear(0.05) }}>
              <Star size={14} />
              <span>India's Leading Education Platform</span>
            </div>
            <h1 style={{ ...pageStyles.heroTitle, ...appear(0.15) }}>
              Empowering Education<br />
              <span style={pageStyles.gradientText}>Through Innovation</span>
            </h1>
            <p style={{ ...pageStyles.heroDescription, ...appear(0.25) }}>
              Prasynx transforms educational management with cutting-edge technology. Connect students, parents, teachers, and administrators on one unified platform.
            </p>
            <div style={{ ...pageStyles.heroActions, ...appear(0.35) }}>
              <a href="#portals" className="btn btn-primary btn-lg">
                Get Started <ArrowRight size={20} />
              </a>
              <a href="/about" className="btn btn-outline btn-lg">
                <Play size={18} /> Watch Demo
              </a>
            </div>
            <div style={{ ...pageStyles.heroStats, ...appear(0.45) }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} style={{ ...pageStyles.statItem, transitionDelay: `${index * 0.08}s` }}>
                    <div style={pageStyles.statIcon}>
                      <Icon size={20} />
                    </div>
                    <span style={pageStyles.statValue}>{animatedStats ? stat.value : '0'}</span>
                    <span style={pageStyles.statLabel}>{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={pageStyles.heroVisual}>
            <div style={{ position: 'relative', width: 320, height: 320, borderRadius: '50%', background: 'rgba(37, 99, 235, 0.08)', boxShadow: '0 40px 90px rgba(37, 99, 235, 0.14)' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(37, 99, 235, 0.08)' }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', width: 180, height: 180, borderRadius: '50%', transform: 'translate(-50%, -50%)', border: '2px solid rgba(16, 185, 129, 0.22)' }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', width: 130, height: 130, borderRadius: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255,255,255,0.85)', display: 'grid', placeItems: 'center' }}>
                <GraduationCap size={48} color="#2563eb" />
              </div>
            </div>
            {[
              { top: 14, left: 18, icon: Users, title: 'Active Learners', value: '15,234', color: 'rgba(37, 99, 235, 0.12)' },
              { top: 190, right: 12, icon: TrendingUp, title: 'Progress Rate', value: '+24%', color: 'rgba(16, 185, 129, 0.14)' },
              { bottom: 16, left: 84, icon: Award, title: 'Certifications', value: '1,250+', color: 'rgba(236, 72, 153, 0.14)' }
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={card.title} style={{
                  ...pageStyles.heroCard,
                  position: 'absolute',
                  width: 210,
                  top: card.top ?? 'auto',
                  bottom: card.bottom ?? 'auto',
                  left: card.left ?? 'auto',
                  right: card.right ?? 'auto',
                  transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                  opacity: mounted ? 1 : 0,
                  transition: `opacity 0.55s ease ${0.2 + index * 0.1}s, transform 0.55s ease ${0.2 + index * 0.1}s`
                }}>
                  <div style={{ ...pageStyles.heroCardIcon, background: card.color, color: '#0f172a' }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <div style={pageStyles.heroCardTitle}>{card.title}</div>
                    <div style={pageStyles.heroCardValue}>{card.value}</div>
                  </div>
                  <div style={pageStyles.cardGlow} />
                </div>
              );
            })}
          </div>
        </section>

        <section style={pageStyles.section} className="section-benefits">
          <div style={pageStyles.sectionHeader}>
            <span style={pageStyles.sectionTag}>Why Prasynx</span>
            <h2 style={pageStyles.sectionTitle}>Built for Modern Education</h2>
            <p style={pageStyles.sectionSubtitle}>Everything you need to transform your institution's digital presence.</p>
          </div>
          <div style={pageStyles.gridWrap}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isHovered = hoveredCard === `benefit-${index}`;
              return (
                <div 
                  key={benefit.title} 
                  style={{ 
                    ...pageStyles.featureCard, 
                    transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`, 
                    opacity: mounted ? 1 : 0, 
                    transform: mounted ? (isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)') : 'translateY(18px) scale(0.95)',
                    boxShadow: isHovered 
                      ? '0 28px 64px rgba(37, 99, 235, 0.16)' 
                      : '0 18px 44px rgba(15, 23, 42, 0.06)',
                    borderColor: isHovered 
                      ? 'rgba(37, 99, 235, 0.35)' 
                      : 'rgba(148, 163, 184, 0.18)'
                  }}
                  onMouseEnter={() => setHoveredCard(`benefit-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{ 
                    ...pageStyles.featureIcon, 
                    background: `${benefit.color}22`, 
                    color: benefit.color,
                    transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}>
                    <Icon size={28} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', marginBottom: 10 }}>{benefit.title}</h3>
                  <p style={{ margin: 0, color: '#475569', lineHeight: 1.8 }}>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section style={pageStyles.section} className="section-features">
          <div style={pageStyles.sectionHeader}>
            <span style={pageStyles.sectionTag}>Why Choose Us</span>
            <h2 style={pageStyles.sectionTitle}>Everything You Need for Modern Education</h2>
            <p style={pageStyles.sectionSubtitle}>Comprehensive tools designed to enhance learning experiences and administrative efficiency.</p>
          </div>
          <div style={pageStyles.gridWrap}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredCard === `feature-${index}`;
              return (
                <div 
                  key={feature.title} 
                  style={{ 
                    ...pageStyles.featureCard, 
                    transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`, 
                    opacity: mounted ? 1 : 0, 
                    transform: mounted ? (isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)') : 'translateY(18px) scale(0.95)',
                    boxShadow: isHovered 
                      ? '0 28px 64px rgba(37, 99, 235, 0.16)' 
                      : '0 18px 44px rgba(15, 23, 42, 0.06)',
                    borderColor: isHovered 
                      ? 'rgba(37, 99, 235, 0.35)' 
                      : 'rgba(148, 163, 184, 0.18)'
                  }}
                  onMouseEnter={() => setHoveredCard(`feature-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{ 
                    ...pageStyles.featureIcon,
                    transform: isHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
                    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}>
                    <Icon size={28} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', marginBottom: 10 }}>{feature.title}</h3>
                  <p style={{ margin: 0, color: '#475569', lineHeight: 1.8 }}>{feature.description}</p>
                  <div style={{
                    ...pageStyles.featureLink,
                    opacity: isHovered ? 1 : 0.7,
                    transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'all 0.3s ease'
                  }}>
                    Learn more <ChevronRight size={16} style={{ 
                      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section style={pageStyles.section} className="section-portals">
          <div style={pageStyles.sectionHeader}>
            <span style={pageStyles.sectionTag}>Login Portals</span>
            <h2 style={pageStyles.sectionTitle}>Access Your Dashboard</h2>
            <p style={pageStyles.sectionSubtitle}>Choose your portal to access personalized features and services.</p>
          </div>
          <div style={pageStyles.portalGrid}>
            {loginPortals.map((portal, index) => {
              const Icon = portal.icon;
              const isHovered = hoveredCard === `portal-${index}`;
              return (
                <div 
                  key={portal.title} 
                  style={{ 
                    ...pageStyles.portalCard, 
                    width: 'min(100%, 360px)',
                    minHeight: 390,
                    opacity: mounted ? 1 : 0, 
                    transform: mounted ? (isHovered ? 'translateY(-16px) scale(1.03)' : 'translateY(0) scale(1)') : 'translateY(18px) scale(0.95)',
                    transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)`,
                    boxShadow: isHovered 
                      ? '0 32px 80px rgba(37, 99, 235, 0.22)' 
                      : '0 20px 50px rgba(15, 23, 42, 0.08)',
                    borderColor: isHovered 
                      ? 'rgba(37, 99, 235, 0.4)' 
                      : 'rgba(148,163,184,0.18)'
                  }}
                  onMouseEnter={() => setHoveredCard(`portal-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{ ...pageStyles.portalBadge, background: portalGradient(portal.gradient), transform: isHovered ? 'scale(1.15) rotate(8deg)' : 'scale(1) rotate(0deg)', transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.15rem', marginBottom: 10, color: '#0f172a', transition: 'color 0.3s ease', ...(isHovered && { color: '#2563eb' }) }}>{portal.title}</h3>
                    <p style={{ margin: 0, color: '#475569', lineHeight: 1.75 }}>{portal.description}</p>
                  </div>
                  <div style={{
                    ...pageStyles.portalAction,
                    opacity: isHovered ? 1 : 0.85,
                    transition: 'opacity 0.3s ease'
                  }}>
                    <a href="#" className="btn btn-outline" style={{ transition: 'all 0.3s ease', ...(isHovered && { transform: 'translateX(4px)' }) }}>Login Now <ArrowRight size={16} style={{ transition: 'transform 0.3s ease', transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }} /></a>
                  </div>
                  <div style={{ ...pageStyles.cardGlow, background: 'rgba(37, 99, 235, 0.1)', opacity: isHovered ? 0.7 : 0.3, transition: 'opacity 0.4s ease' }} />
                </div>
              );
            })}
          </div>
        </section>

        <section style={pageStyles.section} className="section-testimonials">
          <div style={pageStyles.sectionHeader}>
            <span style={pageStyles.sectionTag}>Testimonials</span>
            <h2 style={pageStyles.sectionTitle}>Trusted by Leading Institutions</h2>
            <p style={pageStyles.sectionSubtitle}>See what education leaders say about Prasynx.</p>
          </div>
          <div style={pageStyles.gridWrap}>
            {testimonials.map((testimonial, index) => {
              const isHovered = hoveredCard === `testimonial-${index}`;
              return (
                <div 
                  key={testimonial.name} 
                  style={{ 
                    ...pageStyles.testimonialCard, 
                    opacity: mounted ? 1 : 0, 
                    transform: mounted ? (isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)') : 'translateY(18px) scale(0.95)', 
                    transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)`,
                    boxShadow: isHovered 
                      ? '0 28px 64px rgba(37, 99, 235, 0.14)' 
                      : '0 18px 40px rgba(15, 23, 42, 0.06)',
                    borderColor: isHovered 
                      ? 'rgba(37, 99, 235, 0.25)' 
                      : 'rgba(148,163,184,0.18)'
                  }}
                  onMouseEnter={() => setHoveredCard(`testimonial-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" style={{ 
                        transition: 'transform 0.3s ease', 
                        transform: isHovered ? `scale(1.1) rotate(${i * 8}deg)` : 'scale(1) rotate(0deg)'
                      }} />
                    ))}
                  </div>
                  <p style={{ margin: 0, color: '#475569', lineHeight: 1.8, fontStyle: 'italic' }}>"{testimonial.content}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 22 }}>
                    <div style={{
                      ...pageStyles.authorAvatar,
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}>{testimonial.image}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>{testimonial.name}</div>
                      <div style={{ color: '#64748b', fontSize: '0.95rem' }}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section style={pageStyles.section} className="section-faq">
          <div style={pageStyles.sectionHeader}>
            <span style={pageStyles.sectionTag}>FAQ</span>
            <h2 style={pageStyles.sectionTitle}>Frequently Asked Questions</h2>
            <p style={pageStyles.sectionSubtitle}>Got questions? We've got answers.</p>
          </div>
          <div style={{ display: 'grid', gap: 18 }}>
            {faqs.map((faq, index) => {
              const isHovered = hoveredCard === `faq-${index}`;
              return (
                <div 
                  key={faq.question} 
                  style={{ 
                    ...pageStyles.faqCard, 
                    opacity: mounted ? 1 : 0, 
                    transform: mounted ? 'translateY(0)' : 'translateY(18px)', 
                    transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
                    borderColor: activeFaq === index 
                      ? 'rgba(37, 99, 235, 0.4)' 
                      : isHovered 
                      ? 'rgba(37, 99, 235, 0.25)'
                      : 'rgba(148,163,184,0.2)',
                    background: activeFaq === index 
                      ? 'rgba(37, 99, 235, 0.04)' 
                      : isHovered
                      ? 'rgba(37, 99, 235, 0.02)'
                      : 'rgba(255,255,255,0.98)',
                    boxShadow: activeFaq === index 
                      ? '0 12px 40px rgba(37, 99, 235, 0.12)' 
                      : isHovered
                      ? '0 12px 40px rgba(37, 99, 235, 0.08)'
                      : '0 16px 36px rgba(15, 23, 42, 0.06)'
                  }}
                  onMouseEnter={() => setHoveredCard(`faq-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <button 
                    style={{
                      ...pageStyles.faqQuestion,
                      color: activeFaq === index || isHovered ? '#2563eb' : '#0f172a',
                      transition: 'color 0.3s ease'
                    }} 
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronRight size={20} style={{ transform: activeFaq === index ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} />
                  </button>
                  {activeFaq === index && <div style={pageStyles.faqAnswer}><p style={{ margin: 0 }}>{faq.answer}</p></div>}
                </div>
              );
            })}
          </div>
        </section>

        <section style={pageStyles.section}>
          <div style={pageStyles.ctaBox}>
            <h2 style={{ margin: 0, fontSize: '2.2rem', lineHeight: 1.05, color: '#0f172a' }}>Ready to Transform Your Institution?</h2>
            <p style={{ margin: 0, color: '#475569', maxWidth: 760, fontSize: '1rem', lineHeight: 1.8 }}>Join thousands of educational institutions already using Prasynx to streamline their operations.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginTop: 12 }}>
              <a href="#" className="btn btn-primary btn-lg">Schedule Demo <ArrowRight size={20} /></a>
              <a href="/contact" className="btn btn-outline btn-lg">Contact Sales</a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
