import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const ConfFiberNodeAScript = () => {

    const context = useContext(Context);
    const [confFiberNodeA, setConfFiberNodeA] = useState("clear");
    const [inputText, setInputText] = useState('')
    const scriptArray = [];

    const script = () => {

        if (confFiberNodeA === 'clear') {
            context.script.scriptConfFiberNodeA = '';  
        }

        if (confFiberNodeA === 'description') {
            scriptArray.push(`cable fiber-node ${context.script.fiberNodeA}\n`);
            scriptArray.push(`  description ${context.script.usDescA}\n`);
            scriptArray.push(`exit\n`);
            context.script.scriptConfFiberNodeA = scriptArray.join('');  
        }

        if (confFiberNodeA === 'configure') {
            scriptArray.push(`cable fiber-node ${context.script.fiberNodeA}\n`);
            scriptArray.push(`  description ${context.script.usDescA}\n`);
            scriptArray.push(`  downstream Upstream-Cable ${context.script.card}/0/${context.script.dsConn}\n`);
            scriptArray.push(`  upstream Upstream-Cable ${context.script.card}/0/${context.script.usConnA}\n`);
            scriptArray.push(`exit\n`);
            context.script.scriptConfFiberNodeA = scriptArray.join('');  
        }
        setInputText(scriptArray.join(''))
    }    


    return(
        <div className="flex flex-col w-full h-full">
            <textarea
                rows={5}
                cols={72}
                value={context.script.scriptConfFiberNodeA ? context.script.scriptConfFiberNodeA : ''}
                placeholder="Configure Fiber-Node (Seg A)"
                className="place-self-center border-2 w-full resize-none rounded-md my-4 text-sm"
                onChange={(event)=> {
                    setInputText(event.target.value);
                    context.script.scriptConfFiberNodeA = event.target.value;
                }}
            />
            <div className="flex col-start-1 row-start-9 justify-end gap-1">
                <select
                    name="Select"                  
                    className="primary-select border-2 w-32 h-8 rounded-md"
                    onChange={(event) => {
                        setConfFiberNodeA(event.target.value);
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
                    onClick={() => {copy(context.script.scriptConfFiberNodeA)}}
                >
                    Copy
                </button>
            </div>
        </div>
    );


}

export default ConfFiberNodeAScript;