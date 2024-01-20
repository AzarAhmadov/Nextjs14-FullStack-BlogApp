import { NavlinksProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';

const Links: React.FC<NavlinksProps> = ({ title, path }) => {
    const pathname = usePathname();
    const isActive = path === pathname;

    return (
        <li>
            <Link className={`admin ${isActive ? 'active' : ''}`} href={path}>
                {title}
            </Link>
        </li>
    );
};

export default Links;
