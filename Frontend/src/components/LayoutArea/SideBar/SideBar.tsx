import { NavLink } from "react-router-dom";
import "./SideBar.css";

function SideBar(): JSX.Element {
    return (
        <div className="SideBar">
			<NavLink to={"/home"}>Home</NavLink>   |    
			  <NavLink to={"/getTargetAudience"}>      get target audience</NavLink>     |      
			<NavLink to={"/add-gift"}> add a new gift</NavLink>
            <br></br>
            <hr></hr>
        </div>
    );
}

export default SideBar;
