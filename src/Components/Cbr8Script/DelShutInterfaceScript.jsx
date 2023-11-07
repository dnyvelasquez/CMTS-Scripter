import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const DelShutInterfaceScript = () => {
  const context = useContext(Context);
  const [delShutInterface, setDelShutInterface] = useState("clear");
  const [inputText, setInputText] = useState("");
  const scriptArray = [];

  const script = () => {
    if (delShutInterface === "clear") {
      context.script.scriptDelShutInterface = "";
    }

    if (delShutInterface === "shutdown") {
      scriptArray.push(`interfaceCable${context.interfaceCable}\n`);
      scriptArray.push(`  shutdown\n`);
      scriptArray.push(`exit\n`);
      context.script.scriptDelShutInterface = scriptArray.join("");
    }

    if (delShutInterface === "downstream") {
      scriptArray.push(`interfaceCable${context.interfaceCable}\n`);
      scriptArray.push(`  shutdown\n`);
      scriptArray.push(
        `  no downstream Integrated-Cable ${context.interfaceCable} rf-channel 0-47\n`
      );
      scriptArray.push(`exit\n`);
      context.script.scriptDelShutInterface = scriptArray.join("");
    }

    if (delShutInterface === "upstream") {
      scriptArray.push(`interfaceCable${context.interfaceCable}\n`);
      scriptArray.push(`  shutdown\n`);
      scriptArray.push(`  no upstream 0\n`);
      scriptArray.push(`  no upstream 1\n`);
      scriptArray.push(`  no upstream 2\n`);
      scriptArray.push(`  no upstream 3\n`);
      scriptArray.push(`  no upstream 5\n`);
      scriptArray.push(`  no upstream 6\n`);
      scriptArray.push(`  no upstream 7\n`);
      scriptArray.push(`  no upstream 8\n`);
      scriptArray.push(`  no upstream 9\n`);
      scriptArray.push(`  no upstream 10\n`);
      scriptArray.push(`  no upstream 11\n`);
      scriptArray.push(`  no upstream 12\n`);
      scriptArray.push(`  no cable upstream bonding-group 2\n`);
      scriptArray.push(`  no cable upstream bonding-group 3\n`);
      scriptArray.push(`  no cable upstream bonding-group 4\n`);
      scriptArray.push(`  no cable upstream bonding-group 5\n`);
      scriptArray.push(`exit\n`);
      context.script.scriptDelShutInterface = scriptArray.join("");
    }

    if (delShutInterface === "default") {
      scriptArray.push(`default interfaceCable${context.interfaceCable}\n`);
      context.script.scriptDelShutInterface = scriptArray.join("");
    }
    setInputText(scriptArray.join(""));
  };

  return (
    <div className="flex flex-col w-full h-full">
      <textarea
        rows={20}
        cols={64}
        value={context.script.scriptDelShutInterface ? context.script.scriptDelShutInterface : ''}
        placeholder="delete/shutdown Interface-Cable"
        className="place-self-center border-2 w-full resize-none rounded-md my-4 text-sm"
        onChange={(event)=> {
            setInputText(event.target.value);
            context.script.scriptDelShutIntegrated = event.target.value;
        }}
    />
      <div className="flex justify-end gap-1">
        <select
          name="Select"
          id="deleteInterface"
          className="primary-select border-2 w-32 h-8 rounded-md"
          onChange={(event) => {
            setDelShutInterface(event.target.value);
          }}
        >
          <option value="clear">clear</option>
          <option value="shutdown">shutdown</option>
          <option value="downstream">downstream</option>
          <option value="upstream">upstream</option>
          <option value="default">default</option>
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
          onClick={() => {
            copy(context.script.scriptDelShutInterface);
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default DelShutInterfaceScript;
