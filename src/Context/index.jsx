import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {

    const [isLeftSideBarOpen, setLeftSideBarOpen] = useState(false);
    const closeLeftSideBar = () => {setLeftSideBarOpen(false)};
    const openLeftSideBar = () => {
        setLeftSideBarOpen(true);
        closeRightSideBar();
    };

    const [isRightSideBarOpen, setRightSideBarOpen] = useState(false);
    const closeRightSideBar = () => {setRightSideBarOpen(false)};
    const openRightSideBar = () => {
        setRightSideBarOpen(true);
        closeLeftSideBar();
    };    

    const [isModalNewOpen, setModalNewOpen] = useState(false);
    const closeModalNew = () => {setModalNewOpen(false)};
    const openModalNew = () => {setModalNewOpen(true)};

    const [isModalInsertOpen, setModalInsertOpen] = useState(false);
    const closeModalInsert = () => {setModalInsertOpen(false)};
    const openModalInsert = () => {setModalInsertOpen(true)};

    const [insert, setInsert] = useState('')

    const [isScript, setIsScript] = useState(true);

    const [superOc, setSuperOc] = useState({})

    const [interfaceCable, setInterfaceCable] = useState('');
    const [cmts, setCmts] = useState('');
    const [oc, setOc] = useState('');
    
    const [script, setScript] = useState({
        dsChan:[],
        dsFreq:[],
        dsPow:[],
        dsPrim:[],
        usChanA:[],
        usChanB:[],
        usFreqA:[],
        usFreqB:[],
        usWidthA:[],
        usWidthB:[],
    });

    return (
        <Context.Provider value={{
            isLeftSideBarOpen, 
            closeLeftSideBar,
            openLeftSideBar,
            isRightSideBarOpen,            
            closeRightSideBar,
            openRightSideBar,
            isModalNewOpen,            
            closeModalNew,
            openModalNew,
            isModalInsertOpen,
            closeModalInsert,
            openModalInsert,
            insert,
            setInsert,
            isScript,
            setIsScript,
            interfaceCable, 
            setInterfaceCable,
            script,
            setScript,
            cmts, 
            setCmts,
            oc, 
            setOc,
            superOc,
            setSuperOc,
        }}>
            {children};
        </Context.Provider>    
    );
};

