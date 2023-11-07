import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const DelShutFiberNodeAScript = () => {

    const context = useContext(Context);
    const [delShutFiberNodeA, setdelShutFiberNodeA] = useState("clear");
    const [inputText, setInputText] = useState('');
    const scriptArray = [];

    const script = () => {

        if (delShutFiberNodeA === 'clear') {
            context.script.scriptDelShutFiberNodeA = ''; 
        }

        if (delShutFiberNodeA === 'no description') {
            scriptArray.push(`cable fiber-node ${context.script.fiberNodeA}\n`);
            scriptArray.push(`  no description\n`);
            scriptArray.push(`exit\n`);
            context.script.scriptDelShutFiberNodeA = scriptArray.join('');  
        }

        if (delShutFiberNodeA === 'no upstream') {
            scriptArray.push(`cable fiber-node ${context.script.fiberNodeA}\n`);
            scriptArray.push(`  no upstream Upstream-Cable ${context.script.card}/0/${context.script.usConnA}\n`);
            scriptArray.push(`exit\n`);
            context.script.scriptDelShutFiberNodeA = scriptArray.join('');  
        }
        setInputText(scriptArray.join(''));
    }    


    return(
        <div className="flex flex-col w-full h-full">
            <textarea
                rows={5}
                cols={64}
                value={context.script.scriptDelShutFiberNodeA ? context.script.scriptDelShutFiberNodeA : ''}
                placeholder="delete/shutdown Fiber-Node (Seg A)"
                className="place-self-center border-2 w-full resize-none rounded-md my-4 text-sm"
                onChange={(event)=> {
                    setInputText(event.target.value);
                    context.script.scriptDelShutFiberNodeA = event.target.value;
                }}
            />
            <div className="flex col-start-1 row-start-9 justify-end gap-1">
                <input type="text" 
                    className="border-2 w-24 h-8 rounded-md textarea"
                    value={context.script.fiberNodeA ? context.script.fiberNodeA : ''}
                    placeholder="Fiber-Node" 
                    onChange={(event)=> {
                        setInputText(event.target.value);
                        context.script.fiberNodeA = event.target.value
                    }}             
                />
                <select
                    name="Select"                  
                    className="primary-select border-2 w-32 h-8 rounded-md"
                    onChange={(event) => {
                        setdelShutFiberNodeA(event.target.value);
                    }}
                >
                    <option value="clear">clear</option>
                    <option value="no description">no description</option>
                    <option value="no upstream">no upstream</option>
                </select>
                <button 
                    className="primary-button border-2 w-20 h-8 rounded-md"
                    onClick={() => {script()}}
                >
                    Script
                </button>
                <button 
                    className="primary-button border-2 w-20 h-8 rounded-md"
                    onClick={() => {copy(context.script.scriptDelShutFiberNodeB)}}
                >
                    Copy
                </button>
            </div>
        </div>
    );


}

export default DelShutFiberNodeAScript;