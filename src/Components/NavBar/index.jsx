import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { NavLink } from "react-router-dom";
import copy from "copy-to-clipboard";
import logo from "../../assets/DVShark.svg";

const NavBar = () => {

    const context = useContext(Context);
    const [oc, setOc] = useState(null);

    useEffect(() => {
        fetch('https://dnyvelasquez.github.io/APIs/CmtsApi/ocs.json')
            .then(response => response.json())
            .then(data => setOc(data))
    }, [])

    return (                    
        <nav className="flex items-center fixed z-10 top-0 w-full text-sm font-light border-b-2 nav-bar">
            <div className="flex justify-self-start w-full">
                <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
                <ul className="flex items-center gap-3">
                    <li className="font-semibold text-lg">
                        <NavLink to='/'>
                            CMTS-Scripter
                        </NavLink>
                    </li>
                    <li>
                        Search OC
                        <input 
                            type="text" 
                            className="m-2 border-2 rounded-md"
                            onClick ={() => {
                                console.log(oc[0].script)
                            }}    
                        />
                        <button className="primary-button border-2 w-20 h-8 rounded-md">
                            Search
                        </button>
                    </li>
                    <li className="font-semibold">                        
                        <button onClick={() => {
                            context.superOc.oc = context.oc;
                            context.superOc.cmts = context.cmts
                            context.superOc.interfaceCable = context.interfaceCable
                            context.superOc.script = context.script
                            copy(JSON.stringify(context.superOc));
                        }}>
                            Save
                        </button>
                    </li>
                </ul>
            </div>
        </nav>                        
    )
}
    
export default NavBar;