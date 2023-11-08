import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { NavLink } from "react-router-dom";
import copy from "copy-to-clipboard";
import logo from "../../assets/DVShark.svg";

const NavBar = () => {

    const context = useContext(Context);
    const [oc, setOc] = useState(null);
    const [cmts, setCmts] = useState('');

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
                    <li 
                        className="font-semibold text-lg"
                        onClick={() => {
                            context.setSearchOc('');
                            context.setScript({});
                        }}
                    >
                        <NavLink to='/'>
                            CMTS-Scripter
                        </NavLink>
                    </li>
                    <li>
                        Search OC
                        <input 
                            type="text" 
                            className="self-auto m-2 border-2 rounded-md"
                            value={context.searchOc}
                            onChange={(event) => {context.setSearchOc(event.target.value)}}
                            onBlur ={(event) => {
                                oc?.map((item) => {
                                    if (item.oc === event.target.value) {
                                        context.setScript(item);
                                        context.setIsScript(true); 
                                        setCmts(item.cmts)
                                        
                                    }
                                })
                            }}
                        />
                        <NavLink to={`/${cmts}`}>
                            <button 
                                className="primary-button border-2 w-20 h-8 rounded-md"
                                alt={'Can use OC number : 12345 and 12346'}

                                onClick={() => {
                                    if (context.script.oc) {
                                        context.setSearchOc('');
                                        context.setInterfaceCable(`${context.script.card}/0/${context.script.dsConn}`);                                        
                                    } else {
                                        alert('This OC number was not found');
                                    }
                                }}
                            >
                                Search
                            </button>
                        </NavLink>
                    </li>
                    <li className="font-semibold">                        
                        <button onClick={() => {
                            copy(JSON.stringify(context.script));
                        }}>
                            Save
                        </button>
                    </li>
                </ul>
            </div>
            <div className="mr-8">
                <ul>
                    <NavLink to='/about'>
                        <li className="font-semibold">
                            About
                        </li>
                    </NavLink>
                </ul>
            </div>
        </nav>                        
    )
}
    
export default NavBar;