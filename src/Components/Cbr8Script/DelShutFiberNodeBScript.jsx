import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const DelShutFiberNodeBScript = () => {

    const context = useContext(Context);
    const [delShutFiberNodeB, setdelShutFiberNodeB] = useState("clear");
    const [inputText, setInputText] = useState('');
    const scriptArray = [];

    const script = () => {

        if (delShutFiberNodeB === 'clear') {
            context.script.scriptDelShutFiberNodeB = ''; 
        }

        if (delShutFiberNodeB === 'no description') {
            scriptArray.push(`cable fiber-node ${context.script.fiberNodeB}\n`);
            scriptArray.push(`  no description\n`);
            scriptArray.push(`exit\n`);
            context.script.scriptDelShutFiberNodeB = scriptArray.join('');  
        }
        setInputText(scriptArray.join(''));
    }    


    return(
        <div className="flex flex-col w-full h-full">
            <textarea
                rows={5}
                cols={64}
                value={context.script.scriptDelShutFiberNodeB ? context.script.scriptDelShutFiberNodeB : ''}
                placeholder="delete/shutdown Fiber-Node (Seg B)"
                className="place-self-center border-2 w-full resize-none rounded-md my-4 text-sm"
                onChange={(event)=> {
                    setInputText(event.target.value)
                    context.script.scriptDelShutFiberNodeB = event.target.value;
                }}
            />
            <div className="flex col-start-1 row-start-9 justify-end gap-1">
                <input type="text" 
                    className="border-2 w-24 h-8 rounded-md textarea"
                    value={context.script.fiberNodeB ? context.script.fiberNodeB : ''}
                    placeholder="Fiber-Node" 
                    onChange={(event)=> {
                        setInputText(event.target.value);
                        context.script.fiberNodeB = event.target.value
                    }}               
                />
                <select
                    name="Select"                  
                    className="primary-select border-2 w-32 h-8 rounded-md"
                    onChange={(event) => {
                        setdelShutFiberNodeB(event.target.value);
                    }}
                >
                    <option value="clear">clear</option>
                    <option value="no description">no description</option>
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

export default DelShutFiberNodeBScript;