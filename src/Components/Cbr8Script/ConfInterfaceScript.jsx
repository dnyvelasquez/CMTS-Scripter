import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const ConfInterfaceScript = () => {

  const context = useContext(Context);
  const [confInterface, setConfInterface] = useState("clear");
  const [scriptConfInterface, setScriptConfInterface] = useState("");
  const scriptArray = [];

  const downstream = () => {
    context.script.dsChan?.map((item) =>
      context.script.dsPrim[item] === "PRIMARIO" ||
      context.script.dsPrim[item] === "PRIMARIA"
        ? scriptArray.push(
            `  downstream Integrated-Cable ${context.interfaceCable} rf-channel ${item}\n`
          )
        : false
    );
  };

  const upstream = () => {
    context.script.usChanA?.map((item) =>
      item !== ""
        ? scriptArray.push(
            `  upstream ${item} Upstream-Cable ${context.script.card}/0/${context.script.usConnA} us-channel ${item}\n`
          )
        : false
    );
    context.script.usChanB?.map((item) =>
      item !== ""
        ? scriptArray.push(
            `  upstream ${item} Upstream-Cable ${context.script.card}/0/${
              context.script.usConnB
            } us-channel ${context.script.usChanB.indexOf(item)}\n`
          )
        : false
    );

    if (
      context.script.usFreqA[0] === "30" &&
      (context.script.usWidthA[0] === "6.4" || context.script.usWidthA[0] === "6,4")
    ) {
      scriptArray.push(`  cable upstream bonding-group 2\n`);
      scriptArray.push(`    upstream 0\n`);
      scriptArray.push(`    upstream 1\n`);
      scriptArray.push(`    attributes 80000000\n`);
      scriptArray.push(`  exit\n`);
      scriptArray.push(`  cable upstream bonding-group 3\n`);
      scriptArray.push(`    upstream 2\n`);
      scriptArray.push(`    upstream 3\n`);
      scriptArray.push(`    upstream 4\n`);
      scriptArray.push(`    upstream 5\n`);
      scriptArray.push(`    attributes 80000000\n`);
      scriptArray.push(`  exit\n`);
    } else if (
      context.script.usFreqA[0] === "27" &&
      (context.script.usWidthA[0] === "3.2" || context.script.usWidthA[0] === "3,2")
    ) {
      scriptArray.push(`  cable upstream bonding-group 2\n`);
      scriptArray.push(`    upstream 0\n`);
      scriptArray.push(`    upstream 1\n`);
      scriptArray.push(`    upstream 2\n`);
      scriptArray.push(`    upstream 3\n`);
      scriptArray.push(`    attributes 80000000\n`);
      scriptArray.push(`  exit\n`);
    } else if (
      (context.script.usFreqA[0] === "24,2" ||
      context.script.usFreqA[0] === "24.2") &&
      (context.script.usWidthA[0] === "6.4" || context.script.usWidthA[0] === "6,4")
    ) {
      scriptArray.push(`  cable upstream bonding-group 2\n`);
      scriptArray.push(`    upstream 0\n`);
      scriptArray.push(`    upstream 1\n`);
      scriptArray.push(`    upstream 2\n`);
      scriptArray.push(`    attributes 80000000\n`);
      scriptArray.push(`  exit\n`);
    }

    if (
      context.script.usFreqB[0] === "30" &&
      (context.script.usWidthB[0] === "6.4" || context.script.usWidthB[0] === "6,4")
    ) {
      scriptArray.push(`  cable upstream bonding-group 4\n`);
      scriptArray.push(`    upstream 8\n`);
      scriptArray.push(`    upstream 9\n`);
      scriptArray.push(`    attributes 80000000\n`);
      scriptArray.push(`  exit\n`);
      scriptArray.push(`  cable upstream bonding-group 5\n`);
      scriptArray.push(`    upstream 2\n`);
      scriptArray.push(`    upstream 3\n`);
      scriptArray.push(`    upstream 4\n`);
      scriptArray.push(`    upstream 5\n`);
      scriptArray.push(`    attributes 80000000\n`);
      scriptArray.push(`  exit\n`);
    } else if (
      context.script.usFreqB[0] === "27" &&
      (context.script.usWidthB[0] === "3.2" || context.script.usWidthB[0] === "3,2")
    ) {
      scriptArray.push(`  cable upstream bonding-group 4\n`);
      scriptArray.push(`    upstream 0\n`);
      scriptArray.push(`    upstream 1\n`);
      scriptArray.push(`    upstream 2\n`);
      scriptArray.push(`    upstream 3\n`);
      scriptArray.push(`    attributes 80000000\n`);
      scriptArray.push(`  exit\n`);
    } else if (
      (context.script.usFreqB[0] === "24,2" ||
      context.script.usFreqB[0] === "24.2") &&
      (context.script.usWidthB[0] === "6.4" || context.script.usWidthB[0] === "6,4")
    ) {
      scriptArray.push(`  cable upstream bonding-group 4\n`);
      scriptArray.push(`    upstream 0\n`);
      scriptArray.push(`    upstream 1\n`);
      scriptArray.push(`    upstream 2\n`);
      scriptArray.push(`    attributes 80000000\n`);
      scriptArray.push(`  exit\n`);
    }

    if (
      context.script.usFreqA[0] === "30" &&
      (context.script.usWidthA[0] === "6.4" || context.script.usWidthA[0] === "6,4")
    ) {
      context.script.usChanA?.map((item) =>
        item !== ""
          ? scriptArray.push(
              `  cable upstream ${item} power-adjust continue 6\n`
            )
          : false
      );
    }

    if (
      context.script.usFreqB[0] === "30" &&
      (context.script.usWidthB[0] === "6.4" || context.script.usWidthB[0] === "6,4")
    ) {
      context.script.usChanB?.map((item) =>
        item !== ""
          ? scriptArray.push(
              `  cable upstream ${item} power-adjust continue 6\n`
            )
          : false
      );
    }
  };

  const script = () => {
    if (confInterface === "clear") {
      context.script.scriptConfInterface = '';  
      setScriptConfInterface('');  
    }

    if (confInterface === "no shutdown") {
      scriptArray.push(`interfaceCable${context.interfaceCable}\n`);
      scriptArray.push(`  no shutdown\n`);
      scriptArray.push(`exit\n`);
      context.script.scriptConfInterface = scriptArray.join('');  
      setScriptConfInterface(scriptArray.join(''));  
    }

    if (confInterface === "description") {
      scriptArray.push(`interfaceCable${context.interfaceCable}\n`);
      scriptArray.push(`  description ${context.script.description}\n`);
      scriptArray.push(`  no shutdown\n`);
      scriptArray.push(`exit\n`);
      context.script.scriptConfInterface = scriptArray.join('');  
      setScriptConfInterface(scriptArray.join(''));  
    }

    if (confInterface === "downstream") {
      scriptArray.push(`interfaceCable${context.interfaceCable}\n`);
      downstream();
      scriptArray.push(`  no shutdown\n`);
      scriptArray.push(`exit\n`);
      context.script.scriptConfInterface = scriptArray.join('');  
      setScriptConfInterface(scriptArray.join(''));  
    }

    if (confInterface === "upstream") {
      scriptArray.push(`interfaceCable${context.interfaceCable}\n`);
      upstream();
      scriptArray.push(`  no shutdown\n`);
      scriptArray.push(`exit\n`);
      context.script.scriptConfInterface = scriptArray.join('');  
      setScriptConfInterface(scriptArray.join(''));  
    }

    if (confInterface === "configure") {
      scriptArray.push(`interfaceCable${context.script.interfaceCable}\n`);
      scriptArray.push(`  load-interval 30\n`);
      scriptArray.push(`  description ${context.script.description}\n`);
      downstream();
      scriptArray.push(`  cable upstream balance-scheduling\n`);
      upstream();
      scriptArray.push(`  cable dynamic-secret reject\n`);
      scriptArray.push(`  cable enable-trap cmonoff-notification\n`);
      scriptArray.push(`  cable enable-trap cmonoff-interval 1200\n`);
      scriptArray.push(`  cable registration-timeout 2\n`);
      scriptArray.push(`  cable privacy mandatory\n`);
      scriptArray.push(`  cable privacy bpi-plus-policy capable-enforcement\n`);
      scriptArray.push(`  hold-queue 2048 in\n`);
      scriptArray.push(`  hold-queue 2048 out\n`);
      scriptArray.push(`  no shutdown\n`);
      scriptArray.push(`exit\n`);
      context.script.scriptConfInterface = scriptArray.join('');  
      setScriptConfInterface(scriptArray.join(''));  
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <textarea
        rows={20}
        cols={72}
        value={scriptConfInterface}
        placeholder="configure Interface-Cable"
        className="border-2 w-full resize-none rounded-md my-4 text-sm"
        onChange={(event) => {
          context.script.scriptConfInterface = event.target.value;
          setScriptConfInterface(event.target.value);
        }}
      />

      <div className="flex justify-end gap-1">
        <select
          name="Select"
          id="ConfigureInterface"
          className="primary-select border-2 w-32 h-8 rounded-md"
          onChange={(event) => {
            setConfInterface(event.target.value);
          }}
        >
          <option value="clear">clear</option>
          <option value="no shutdown">no shutdown</option>
          <option value="description">description</option>
          <option value="downstream">downstream</option>
          <option value="upstream">upstream</option>
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
          onClick={() => {
            copy(context.script.scriptConfInterface);
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default ConfInterfaceScript;
