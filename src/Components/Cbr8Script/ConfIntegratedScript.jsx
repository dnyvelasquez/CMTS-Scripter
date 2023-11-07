import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const ConfIntegratedScript = () => {

  const context = useContext(Context);
  const [confIntegrated, setConfIntegrated] = useState("clear");
  const [inputText, setInputText] = useState('')
  const scriptArray = [];

  const script = () => {
    
    if (confIntegrated === "clear") {
      context.script.scriptConfIntegrated = '';  
    }

    if (confIntegrated === "description") {
      scriptArray.push(`controller Integrated-Cable ${context.interfaceCable}\n`);
      scriptArray.push(`  description ${context.script.description}\n`);
      scriptArray.push(`  no shutdown\n`);
      scriptArray.push(`exit\n`);
      context.script.scriptConfIntegrated = scriptArray.join('');  
    }

    if (confIntegrated === "configure") {
      scriptArray.push(`controller Integrated-Cable ${context.interfaceCable}\n`);
      scriptArray.push(`  description ${context.script.description}\n`);
      scriptArray.push(`  max-carrier 48\n`);
      scriptArray.push(`  base-channel-power ${context.script.dsPow[0]}\n`);
      context.script.dsChan?.map((item) => {
        if (item !== '') {
          scriptArray.push(`  rf-chan ${item}\n`);
          scriptArray.push(`    requency ${context.script.dsFreq[item]}000000\n`);  
        }
      })
      scriptArray.push(`  exit\n`);
      if (context.script.dsChan[40] === '40') {
        scriptArray.push(`  rf-chan 8 15\n`)
        scriptArray.push(`    power-adjust 0.4\n`)
        scriptArray.push(`  rf-chan 16 23\n`)
        scriptArray.push(`    power-adjust 0.8\n`)
        scriptArray.push(`  rf-chan 24 31\n`)
        scriptArray.push(`    power-adjust 1.2\n`)
        scriptArray.push(`  rf-chan 32 39\n`)
        scriptArray.push(`    power-adjust 1.6\n`)
        scriptArray.push(`  rf-chan 40 47\n`)
        scriptArray.push(`    power-adjust 2.0\n`)
        scriptArray.push(`  exit\n`)
      }
      scriptArray.push(`  no shutdown\n`);
      scriptArray.push(`exit\n`);
      context.script.scriptConfIntegrated = scriptArray.join('');  
    }
    setInputText(scriptArray.join(''));
  };

  return (
    <div className="flex flex-col w-full h-full">
      <textarea
        rows={20}
        cols={72}
        value={context.script.scriptConfIntegrated ? context.script.scriptConfIntegrated : ''}
        placeholder="delete/shutdown Integrated-Cable"
        className="place-self-center col-start-2 row-start-4 border-2 w-full resize-none rounded-md my-4 text-sm"
        onChange={(event) => {
          setInputText(event.target.value);
          context.script.scriptConfIntegrated = event.target.value;
        }}
      />
      <div className="flex justify-end gap-1">
        <select
          className="primary-select border-2 w-32 h-8 rounded-md"
          onChange={(event) => {
            setConfIntegrated(event.target.value);
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
          onClick={() => copy(context.script.scriptConfIntegrated)}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default ConfIntegratedScript;
