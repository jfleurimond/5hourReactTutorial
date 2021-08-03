import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import './App.css'


function MyTest(){
    return(
        <div>
            <h1>Hello World</h1>
            {/* going to add header, maincontent, and footer component */}
            <Header />
            <MainContent />
            <Footer /> 
        </div>
    );

}

export default MyTest