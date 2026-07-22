import { Code2, Mail, Sparkles, Globe2, Send, BookOpen } from 'lucide-react'

export const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact']

export const heroHighlights = [
  'BCA student at MIET Kumaun',
  'Fresher with a strong foundation in Python',
  'Focused on backend development and APIs',
]

export const skills = [
  { name: 'Python', icon: Code2, level: 'Core' },
  { name: 'Flask', icon: Sparkles, level: 'Core' },
  { name: 'REST APIs', icon: Sparkles, level: 'Core' },
  { name: 'Backend Development', icon: BookOpen, level: 'Core' },
  { name: 'Problem Solving', icon: Sparkles, level: 'Practical' },
  { name: 'API Integration', icon: Code2, level: 'Practical' },
]

export const projects = [
  {
    title: 'Project 1',
    scopeHeading: 'Smart Crop Advisory System',
    scopeDescription:
      'A Python and Flask-based project designed to provide crop recommendations and guidance using a backend API. The project reflects my interest in building practical, problem-solving applications for real-world needs.',
    description: '',
    tags: ['Python', 'Flask', 'API', 'Backend'],
    github: 'https://github.com/shubham-francis/smart-crop-advisory',
  },

  {
    title: 'Project 2 (upcoming)',
    description: 'Upcoming',
    tags: [],
    github: '',
  },
  {
    title: 'Project 3 (upcoming)',
    description: 'Upcoming',
    tags: [],
    github: '',
  },
]

export const contactLinks = [
  { label: 'Email', href: 'mailto:shubhamfrancis300@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shubham-francis-80a58a17b/', icon: Globe2 },
  { label: 'GitHub', href: 'https://github.com/shubham-francis', icon: Send },
]
