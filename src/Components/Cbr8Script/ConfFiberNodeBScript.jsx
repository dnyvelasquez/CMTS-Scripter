import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const ConfFiberNodeBScript = () => {

    const context = useContext(Context);
    const [confFiberNodeB, setConfFiberNodeB] = useState("clear");
    const [scriptConfFiberNodeB, setScriptConfFiberNodeB] = useState("");
    const scriptArray = [];

    const script = () => {

        if (confFiberNodeB === 'clear') {
            context.script.scriptConfFiberNodeB = '';  
            setScriptConfFiberNodeB('');  
        }

        if (confFiberNodeB === 'description') {
            scriptArray.push(`cable fiber-node ${context.script.fiberNodeB}\n`);
            scriptArray.push(`  description ${context.script.usDescB}\n`);
            scriptArray.push(`exit\n`);
            context.script.scriptConfFiberNodeB = scriptArray.join('');  
            setScriptConfFiberNodeB(scriptArray.join(''));  
        }

        if (confFiberNodeB === 'configure') {
            scriptArray.push(`cable fiber-node ${context.script.fiberNodeB}\n`);
            scriptArray.push(`  description ${context.script.usDescB}\n`);
            scriptArray.push(`  downstream Upstream-Cable ${context.script.card}/0/${context.script.dsConn}\n`);
            scriptArray.push(`  upstream Upstream-Cable ${context.script.card}/0/${context.script.usConnB}\n`);
            scriptArray.push(`exit\n`);
            context.script.scriptConfFiberNodeB = scriptArray.join('');  
            setScriptConfFiberNodeB(scriptArray.join(''));  
        }
    }    


    return(
        <div className="flex flex-col w-full h-full">
            <textarea
                rows={5}
                cols={72}
                value={scriptConfFiberNodeB}
                placeholder="Configure Fiber-Node (Seg B)"
                className="place-self-center border-2 w-full resize-none rounded-md my-4 text-sm"
                onChange={(event)=> {
                    context.script.scriptConfFiberNodeB = event.target.value;
                    setScriptConfFiberNodeB(event.target.value);
                }}
            />
            <div className="flex col-start-1 row-start-9 justify-end gap-1">
                <select
                    name="Select"                  
                    className="primary-select border-2 w-32 h-8 rounded-md"
                    onChange={(event) => {
                        setConfFiberNodeB(event.target.value);
                    }}
                >
                    <option value="clear">clear</option>
                    <option value="description">description</option>
                    <option value="configure">configure</option>
                </select>
                <button 
                    className="primary-button border-2 w-20 h-8 rounded-md"
                    onClick={() => {script()}}
                >
                    Script
                </button>
                <button 
                    className="primary-button border-2 w-20 h-8 rounded-md"
                    onClick={() => {copy(context.script.scriptConfFiberNodeB)}}
                >
                    Copy
                </button>
            </div>
        </div>
    );


}

export default ConfFiberNodeBScript;