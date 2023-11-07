import { useContext, useState } from "react";
import { Context } from "../../Context";
import copy from "copy-to-clipboard";

const RightCbr8 = () => {
  const context = useContext(Context);
  const [inputText, setInputText] = useState('');
  const scriptArray = [];

  const script = () => {
    scriptArray.push(
      `show cable modem summary Cable${context.script.card}/0/${context.script.dsConn} total\n`
    );
    scriptArray.push(
      `show cable mac-domain Cable${context.script.card}/0/${context.script.dsConn} rcc\n`
    );
    scriptArray.push(
      `show cable mac-domain Cable${context.script.card}/0/${context.script.dsConn} cgd\n`
    );
    scriptArray.push(
      `show controllers Cable${context.script.card}/0/${context.script.dsConn} upstream | include Frequency\n`
    );
    scriptArray.push(
      `show controllers Cable${context.script.card}/0/${context.script.dsConn} downstream | include Frequency\n`
    );
    scriptArray.push(
      `show cable modem Cable${context.script.card}/0/${context.script.dsConn} partial-mode\n`
    );
    setInputText(scriptArray.join(""));
    context.script.verifCommands = scriptArray.join("");
  };

  return (
    <div className="pl-12 mt-4 overflow-y-auto inside-bar border-t-2 p-2 grid gap-4">
      <div className="col-start-1 row-start-1">
        <textarea
          rows={8}
          cols={60}
          value={context.script.verifCommands ? context.script.verifCommands : ''}
          placeholder="Verification commands"
          className="border-2 resize-none rounded-md text-sm mb-4"
          onChange={(event) => {
            setInputText(event.target.value);
            context.script.verifCommands = event.target.value;
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
          value={context.script.verifBefore ? context.script.verifBefore : ''}
          placeholder="Before"
          className="border-2 resize-none rounded-md text-sm mb-4"
          onChange={(event) => {
            setInputText(event.target.value);
            context.script.verifBefore = event.target.value;
          }}
        />
        <div className="flex justify-end gap-1 mb-4">
          <button
            className="primary-button rounded-md w-20 h-8 border-2"
            onClick={() => {
              navigator.clipboard.readText().then((clipText) => {
                setInputText(clipText);
                context.script.verifBefore = clipText;
              });
            }}
          >
            Paste
          </button>
          <button
            className="primary-button rounded-md w-20 h-8 border-2 place-self-end"
            onClick={() => {
              context.script.verifBefore = '';
              setInputText('');
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
          value={context.script.verifAfter ? context.script.verifAfter : ''}
          placeholder="After"
          className="border-2 resize-none rounded-md text-sm mb-4"
          onChange={(event) => {
            setInputText(event.target.value);
            context.script.verifAfter = event.target.value;
          }}
        />
        <div className="flex justify-end gap-1 mb-4">
          <button
            className="primary-button rounded-md w-20 h-8 border-2"
            onClick={() => {
              navigator.clipboard.readText().then((clipText) => {
                setInputText(clipText);
                context.script.verifAfter = clipText;
              });
            }}
          >
            Paste
          </button>
          <button
            className="primary-button rounded-md w-20 h-8 border-2 place-self-end"
            onClick={() => {
              setInputText('');
              context.script.verifAfter = '';
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
