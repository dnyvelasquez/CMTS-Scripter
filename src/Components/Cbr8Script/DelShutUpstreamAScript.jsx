import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";
import "./styles.css";

const DelShutUpstreamAScript = () => {

    const context = useContext(Context);
    const [delShutUpstreamA, setDelShutUpstreamA] = useState("clear");
    const [scriptDelShutUpstreamA, setScriptDelShutUpstreamA] = useState("");
    const scriptArray = [];

    const script = () => {

        if (delShutUpstreamA === 'clear') {
            context.script.scriptDelShutUpstreamA = ''; 
            setScriptDelShutUpstreamA('');
        }

        if (delShutUpstreamA === 'script') {
            scriptArray.push(`controller Upstream-Cable ${context.script.card}/0/${context.script.usConnA}\n`);
            scriptArray.push(`  us-channel 0 shutdown\n`);
            scriptArray.push(`  no us-channel 0 frequency\n`);
            scriptArray.push(`  us-channel 0 power-level 0\n`);
            scriptArray.push(`  no us-channel 0 description\n`);
            scriptArray.push(`  us-channel 0 shutdown\n`);
            scriptArray.push(`  no us-channel 1 frequency\n`);
            scriptArray.push(`  us-channel 1 power-level 0\n`);
            scriptArray.push(`  no us-channel 1 description\n`);
            scriptArray.push(`  us-channel 1 shutdown\n`);
            scriptArray.push(`  no us-channel 2 frequency\n`);
            scriptArray.push(`  us-channel 2 power-level 0\n`);
            scriptArray.push(`  no us-channel 2 description\n`);
            scriptArray.push(`  us-channel 2 shutdown\n`);
            scriptArray.push(`  no us-channel 3 frequency\n`);
            scriptArray.push(`  us-channel 3 power-level 0\n`);
            scriptArray.push(`  no us-channel 3 description\n`);
            scriptArray.push(`  us-channel 3 shutdown\n`);
            scriptArray.push(`  no us-channel 4 frequency\n`);
            scriptArray.push(`  us-channel 4 power-level 0\n`);
            scriptArray.push(`  no us-channel 4 description\n`);
            scriptArray.push(`  us-channel 4 shutdown\n`);
            scriptArray.push(`  no us-channel 5 frequency\n`);
            scriptArray.push(`  us-channel 5 power-level 0\n`);
            scriptArray.push(`  no us-channel 5 description\n`);
            scriptArray.push(`  us-channel 5 shutdown\n`);
            scriptArray.push(`exit\n`);
            context.script.scriptDelShutUpstreamA = scriptArray.join('');  
            setScriptDelShutUpstreamA(scriptArray.join(''));  
        }

    }    


    return(
        <div className="flex flex-col w-full h-full">
            <textarea
                rows={20}
                cols={64}
                value={scriptDelShutUpstreamA}
                placeholder="delete/shutdown Upstream-Cable (Seg A)"
                className="place-self-center border-2 w-full resize-none rounded-md my-4 text-sm"
                onChange={(event)=> {
                    context.script.scriptDelShutUpstreamA = event.target.value;
                    setScriptDelShutUpstreamA(event.target.value);
                }}
            />
            <div className="flex col-start-1 row-start-7 justify-end gap-1">
                <select
                    className="primary-select border-2 w-32 h-8 rounded-md"
                    onChange={(event) => {
                        setDelShutUpstreamA(event.target.value);
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
                    onClick={() => {copy(context.script.scriptDelShutUpstreamA)}}
                    >
                    Copy
                </button>
            </div>
        </div>
    );


}

export default DelShutUpstreamAScript;