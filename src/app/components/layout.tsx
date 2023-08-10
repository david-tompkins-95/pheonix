import Footer from "./footer"
import Header from "./header"

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