'use client'

import React, { useEffect } from 'react';

const Container = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            {children}
        </>
    );
};

export default Container;
