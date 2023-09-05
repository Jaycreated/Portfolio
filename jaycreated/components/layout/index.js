import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Index = ({children}) => {
    return (
        <>
            <div>
                <Navbar />
                <div className="md:mx-64 mx-2">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Index
