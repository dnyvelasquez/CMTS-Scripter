import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const ConfLoadScript = () => {
  const context = useContext(Context);
  const [confLoad, setConfLoad] = useState("clear");
  const [scriptConfLoad, setScriptConfLoad] = useState("");
  const scriptArray = [];


  
  const script = () => {
    if (confLoad === "clear") {
      context.script.scriptConfLoad = '';  
      setScriptConfLoad('');  
    }

    if (confLoad === "script") {
      scriptArray.push(
        `  exit\n`
      );
      scriptArray.push(
        `  cable load-balance d20 gLBG auto-generate\n`
      );
      scriptArray.push(
        `  configure terminal\n`
      );
      context.script.scriptConfLoad = scriptArray.join("");  
      setScriptConfLoad(scriptArray.join(""));  
    }

  };

  return (
    <div className="flex flex-col w-full h-full ">
      <textarea
        rows={4}
        cols={72}
        value={scriptConfLoad}
        placeholder="Configure Load-Balance-Groups"
        className="place-self-center col-start-2 row-start-4 border-2 w-full resize-none rounded-md my-4 text-sm"
        onChange={(event) => {
          context.script.scriptConfLoad = event.target.value;
          setScriptConfLoad(event.target.value);
        }}
      />
      <div className="flex justify-end gap-1">
        <select
          className="primary-select border-2 w-32 h-8 rounded-md"
          onChange={(event) => {
            setConfLoad(event.target.value);
          }}
        >
          <option value="clear">clear</option>
          <option value="script">script</option>
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
          onClick={() => copy(context.script.scriptConfLoad)}
          >
          Copy
        </button>
      </div>
    </div>
  );
};

export default ConfLoadScript;
