import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const ConfUpstreamAScript = () => {

  const context = useContext(Context);
  const [confUpstreamA, setConfUpstreamA] = useState("clear");
  const [scriptConfUpstreamA, setScriptConfUpstreamA] = useState("");
  const scriptArray = [];

  const script = () => {
    
    if (confUpstreamA === "clear") {
      context.script.scriptConfUpstreamA = '';  
      setScriptConfUpstreamA('');  
    }

    if (confUpstreamA === "description") {
      scriptArray.push(`controller Upstream-Cable ${context.script.card}/0/${context.script.usConnA}\n`);
      context.script.usChanA?.map((item) => {
        if (item !== '') {
          scriptArray.push(`  us-channel ${item} description ${context.script.usDescA}\n`);
        }
      })      
      scriptArray.push(`exit\n`);
      context.script.scriptConfUpstreamA = scriptArray.join('');  
      setScriptConfUpstreamA(scriptArray.join(''));  
    }

    if (confUpstreamA === "configure") {
      scriptArray.push(`controller Upstream-Cable ${context.script.card}/0/${context.script.usConnA}\n`);
      context.script.usChanA?.map((item) => {
        if (item !== '') {
          scriptArray.push(`  us-channel ${item} description ${context.script.usDescA}\n`);
          scriptArray.push(`  us-channel ${item} frequency ${context.script.usFreqA[item] * 1000000}\n`);
          scriptArray.push(`  us-channel ${item} frequency ${context.script.usWidthA[item] * 1000000} ${context.script.usWidthA[item] * 1000000}\n`);
          if ((context.script.usFreqA[item] === '44' || context.script.usFreqA[item] === '51') 
            && context.script.usWidthA[item] === '6.4') {
            scriptArray.push(`  us-channel ${item} 2 power-level -1\n`);
          } else if  ((context.script.usFreqA[item] === '58' || context.script.usFreqA[item] === '65') 
            && context.script.usWidthA[item] === '6.4') {
            scriptArray.push(`  us-channel ${item} 2 power-level -2\n`);
          }         
          scriptArray.push(`  us-channel ${item} threshold snr-profiles 24 19\n`);
          scriptArray.push(`  us-channel ${item} threshold corr-fec 0\n`);
          scriptArray.push(`  us-channel ${item} threshold hysteresis 4\n`);
          scriptArray.push(`  us-channel ${item} docsis-mode atdma\n`);
          scriptArray.push(`  us-channel ${item} minislot-size 2\n`);
          scriptArray.push(`  us-channel ${item} modulation-profile 224 223 222\n`);
          scriptArray.push(`  us-channel ${item} equalization-coefficient\n`);
          scriptArray.push(`  no us-channel ${item} shutdown\n`);
        }
      })      
      scriptArray.push(`exit\n`);
      context.script.scriptConfUpstreamA = scriptArray.join('');  
      setScriptConfUpstreamA(scriptArray.join(''));  
    }

  };

  return (
    <div className="flex flex-col w-full h-full">
      <textarea
        rows={20}
        cols={72}
        value={scriptConfUpstreamA}
        placeholder="delete/shutdown Upstream-Cable (Seg A)"
        className="place-self-center col-start-2 row-start-4 border-2 w-full resize-none rounded-md my-4 text-sm"
        onChange={(event) => {
          context.script.scriptConfUpstreamA = event.target.value;
          setScriptConfUpstreamA(event.target.value);
        }}
      />
      <div className="flex justify-end gap-1">
        <select
          className="primary-select border-2 w-32 h-8 rounded-md"
          onChange={(event) => {
            setConfUpstreamA(event.target.value);
          }}
        >
          <option value="clear">clear</option>
          <option value="description">description</option>
          <option value="configure">configure</option>
        </select>
        <button 
          className="primary-button border-2 w-20 h-8 rounded-md"
          onClick={() => {
            script();
          }}
          >
          Script
        </button>
        <button 
          className="primary-button border-2 w-20 h-8 rounded-md"
          onClick={() => copy(context.script.scriptConfUpstreamA)}
          >
          Copy
        </button>
      </div>
    </div>
  );
};

export default ConfUpstreamAScript;
