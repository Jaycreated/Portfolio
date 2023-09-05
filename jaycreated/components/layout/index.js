import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Index = ({children}) => {
    return (
        <>
            <div>
                <Navbar />
                <div>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Index
