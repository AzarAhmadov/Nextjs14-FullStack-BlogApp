import { NavlinksProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React, { memo } from 'react'
import { CiLogin } from "react-icons/ci";

const Links: React.FC<NavlinksProps> = ({ title, path }) => {
    const pathname = usePathname();
    const isActive = path === pathname;

    return (
        <li>
            <Link className={` for-admin ${isActive ? 'active ' : ''}${title === 'Login' ? 'login' : ''}`} href={path}>
                {title} {title === 'Login' ? <CiLogin /> : null}
            </Link>
        </li>
    );
}; 1

export default memo(Links);
