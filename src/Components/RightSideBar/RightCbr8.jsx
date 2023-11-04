import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const RightCbr8 = () => {
  const context = useContext(Context);
  const [verifCommands, setVerifCommands] = useState('')
  const [verifBefore, setVerifBefore] = useState('')
  const [verifAfter, setVerifAfter] = useState('')
  const scriptArray = [];

  const script = () => {
    scriptArray.push(
      `show cable modem summary Cable${context.interfaceCable} total\n`
    );
    scriptArray.push(
      `show cable mac-domain Cable${context.interfaceCable} rcc\n`
    );
    scriptArray.push(
      `show cable mac-domain Cable${context.interfaceCable} cgd\n`
    );
    scriptArray.push(
      `show controllers Cable${context.interfaceCable} upstream | include Frequency\n`
    );
    scriptArray.push(
      `show controllers Cable${context.interfaceCable} downstream | include Frequency\n`
    );
    scriptArray.push(
      `show cable modem Cable${context.interfaceCable} partial-mode\n`
    );
    context.script.verifCommands = scriptArray.join("");
    setVerifCommands(scriptArray.join(""));
  };

  return (
    <div className="pl-12 mt-4 overflow-y-auto inside-bar border-t-2 p-2 grid gap-4">
      <div className="col-start-1 row-start-1">
        <textarea
          rows={8}
          cols={60}
          value={verifCommands}
          placeholder="Verification commands"
          className="border-2 resize-none rounded-md text-sm mb-4"
          onChange={(event) => {
            context.script.verifCommands = event.target.value;
            setVerifCommands(event.target.value);
          }}
        />
        <div className="flex justify-end gap-1 mb-4">
          <button
            className="primary-button rounded-md w-20 h-8 border-2"
            onClick={() => {
              script();
            }}
          >
            Script
          </button>
          <button
            className="primary-button rounded-md w-20 h-8 border-2 place-self-end"
            onClick={() => {
              copy(context.script.verifCommands);
            }}
          >
            Copy
          </button>
        </div>
      </div>

      <div className="col-start-1 row-start-2">
        <textarea
          rows={20}
          cols={60}
          value={verifBefore}
          placeholder="Before"
          className="border-2 resize-none rounded-md text-sm mb-4"
          onChange={(event) => {
            context.script.verifBefore = event.target.value;
            setVerifBefore(event.target.value);
          }}
        />
        <div className="flex justify-end gap-1 mb-4">
          <button
            className="primary-button rounded-md w-20 h-8 border-2"
            onClick={() => {
              navigator.clipboard.readText().then((clipText) => {
                setVerifBefore(clipText);
              });
            }}
          >
            Paste
          </button>
          <button
            className="primary-button rounded-md w-20 h-8 border-2 place-self-end"
            onClick={() => {
              setVerifBefore("");
            }}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="col-start-2 row-start-2">
        <textarea
          rows={20}
          cols={60}
          value={verifAfter}
          placeholder="After"
          className="border-2 resize-none rounded-md text-sm mb-4"
          onChange={(event) => {
            context.script.verifAfter = event.target.value;
            setVerifAfter(event.target.value);
          }}
        />
        <div className="flex justify-end gap-1 mb-4">
          <button
            className="primary-button rounded-md w-20 h-8 border-2"
            onClick={() => {
              navigator.clipboard.readText().then((clipText) => {
                setVerifAfter(clipText);
              });
            }}
          >
            Paste
          </button>
          <button
            className="primary-button rounded-md w-20 h-8 border-2 place-self-end"
            onClick={() => {
              setVerifAfter("");
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCbr8;
