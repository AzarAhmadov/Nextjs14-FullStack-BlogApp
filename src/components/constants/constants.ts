
import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { NavlinksProps } from "@/types/types";

export const navLinks: NavlinksProps[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
];

export const sosials = [
    {
        icon: React.createElement(CiInstagram),
        path: ""
    },
    {
        icon: React.createElement(FaGithub),
        path: ""
    },
    {
        icon: React.createElement(CiLinkedin),
        path: ""
    }
];