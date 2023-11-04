import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const DelShutIntegratedScript = () => {

    const scriptArray = [];
    const context = useContext(Context);
    const [scriptDelShutIntegrated, setScriptDelShutIntegrated] = useState("");
    const [delShutIntegrated, setDelShutIntegrated] = useState("clear");

    const script = () => {

        if (delShutIntegrated === 'clear') {
            context.script.scriptDelShutIntegrated = ''; 
            setScriptDelShutIntegrated('');
        }

        if (delShutIntegrated === 'script') {
            scriptArray.push(`controller Integrated-Cable ${context.interfaceCable}\n`);
            scriptArray.push(`  shutdown\n`);
            scriptArray.push(`  no rf-chan 0 47\n`);
            scriptArray.push(`  no description\n`);
            scriptArray.push(`exit\n`);
            context.script.scriptDelShutIntegrated = scriptArray.join('');  
            setScriptDelShutIntegrated(scriptArray.join(''));  
            }
    }    

    return(
        <div className="flex flex-col w-full h-full">
            <textarea
                rows={20}
                cols={64}
                value={scriptDelShutIntegrated}                
                placeholder="delete/shutdown Integrated-Cable"
                className="place-self-center border-2 w-full resize-none rounded-md my-4 text-sm"
                onChange={(event)=> {
                    context.script.scriptDelShutIntegrated = event.target.value;
                    setScriptDelShutIntegrated(event.target.value);
                }}
            />
            <div className="flex justify-end gap-1">
            <select
              className="primary-select border-2 w-32 h-8 rounded-md"
              onChange={(event) => {
                setDelShutIntegrated(event.target.value);
                }}
            >
                <option value="clear">clear</option>
                <option value="script">script</option>
            </select>
                <button 
                    className="primary-button border-2 w-20 h-8 rounded-md"
                    onClick={() => {script()}}
                    >
                    Script
                </button>
                <button 
                    className="primary-button border-2 w-20 h-8 rounded-md"
                    onClick={() => {copy(context.script.scriptDelShutIntgrated)}}
                    >
                    Copy
                </button>
            </div>
        </div>
    );


}

export default DelShutIntegratedScript;