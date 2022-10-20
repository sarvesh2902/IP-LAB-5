import React, { FC } from "react";
import Head from "next/head";


const Layout = ({ title, content, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
                <link
                    rel="icon"
                    href="https://res.cloudinary.com/drr7rbizq/image/upload/v1664977190/logo-removebg-preview_1_jhx4kw.png"
                />
            </Head>
            <div className="">{children}</div>
            
        
        </>
    );
};

export default Layout;
