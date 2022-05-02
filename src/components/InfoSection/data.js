import { Card } from '@material-ui/core';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'unlimited transactions with 0 fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../Images/1.svg').default,
    alt: 'car',
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjTwo = {
    id: 'portfolio',
    lightBg: true,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    buttonLabel: 'Learn more',
    imgStart: true,
    img: require('../../Images/svg-2.svg').default,
    alt: 'phone',
    dark: false,
    primary: true,
    darkText: false,
}

export const homeObjThree = {
    id: 'gallery',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: require('../../Images/svg-3.svg').default,
    alt: 'car',
    dark: false,
    primary: true,
    darkText: false,
}