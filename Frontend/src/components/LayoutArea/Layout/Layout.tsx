import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import SideBar from "../SideBar/SideBar";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                 <Header/>
            </header>
            <aside>
                <SideBar/>
            </aside>
            <main>
                <Routing/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Layout;
