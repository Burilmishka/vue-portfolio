import Home from '@/components/Home';
import About from '@/components/About';
import Works from '@/components/Works';
import Contact from '@/components/Contact';

// const About = () => import('@/components/About');


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/works',
        name: 'Works',
        component: Works
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
];

export default routes;
