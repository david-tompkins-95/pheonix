import Footer from "./footer"
import Header from "./header"
import React from "react";

export default function Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}