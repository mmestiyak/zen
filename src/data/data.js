import { nanoid } from 'nanoid';

// Imported Services Icons & Project Images
import images from '../images';

// Get Services
export const getServices = () => [
  {
    id: nanoid(),
    title: 'Wireframe Design',
    desc: `Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.`,
    icon: images.wireframe,
  },
  {
    id: nanoid(),
    title: `Design & Creativity`,
    desc: `Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.`,
    icon: images.paint,
    iconBg: `hsl(342, 98%, 64%)`,
    iconBorder: `hsl(342, 98%, 80%)`,
  },
  {
    id: nanoid(),
    title: 'UI/UX design',
    desc: `Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.`,
    icon: images.layout,
    iconBg: `hsl(156, 87%, 58%)`,
    iconBorder: `hsl(156, 87%, 80%)`,
  },
  {
    id: nanoid(),
    title: 'Web Development',
    desc: `Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.`,
    icon: images.code,
    iconBg: `hsl(248, 86%, 64%)`,
    iconBorder: `hsl(248, 86%, 80%)`,
  },
  {
    id: nanoid(),
    title: 'Mobile App Design',
    desc: `Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.`,
    icon: images.smartphone,
    iconBg: `hsl(207, 62%, 48%)`,
    iconBorder: `hsl(207, 62%, 80%)`,
  },
  {
    id: nanoid(),
    title: 'Digital Marketing',
    desc: `Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.`,
    icon: images.speaker,
    iconBg: `hsl(47, 100%, 49%)`,
    iconBorder: `hsl(47, 100%, 80%)`,
  },
];

// Get Analysis Points

export const getAnalysisPoints = () => [
  {
    id: nanoid(),
    point: `Sed egestas, ante et vulputate volutpat, eros pede semper`,
  },
  {
    id: nanoid(),
    point: `Sed egestas, ante et vulputate volutpat`,
  },
  {
    id: nanoid(),
    point: `Ante et vulputate volutpat, eros pede semper`,
  },
  {
    id: nanoid(),
    point: `Egestas, ante et vulputate volutpat, eros pede sem`,
  },
];

// get Projects
export const getProjects = () => [
  {
    id: nanoid(),
    title: `Wireframe Design`,
    desc: `Web site design & development`,
    bg: images.project1,
  },
  {
    id: nanoid(),
    title: `Responsive Design`,
    desc: `Mobile First Design`,
    bg: images.project2,
  },
  {
    id: nanoid(),
    title: `Theme Development`,
    desc: `Wordpress Development`,
    bg: images.project3,
  },
  {
    id: nanoid(),
    title: `Digital Consultancy`,
    desc: `Development & Marketing`,
    bg: images.project4,
  },
  {
    id: nanoid(),
    title: `UI & UX`,
    desc: `UI & UX Services`,
    bg: images.project5,
  },
  {
    id: nanoid(),
    title: `Cyber Security`,
    desc: `Cyber Security Consultancy`,
    bg: images.project6,
  },
];
