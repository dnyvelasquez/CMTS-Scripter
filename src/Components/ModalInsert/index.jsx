import React, { useContext } from "react";
import { Context } from "../../Context";

const ModalInsert = () => {
  const context = useContext(Context);
  let inserted = '';

  return (
    <>
      {context.isModalInsertOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Paste here values from Excel table
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto center">
                    <textarea                       
                      rows={16} cols={16}                        
                      autoFocus
                      className="self-auto border-2 rounded-md text-center"
                      onChange={(event) => inserted = event.target.value}
                    />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => context.closeModalInsert()}
                  >
                    Close
                  </button>
                  <button 
                      className="primary-button border-2 w-20 h-8 rounded-md"
                      onClick={() => {
                          context.closeModalInsert();
                          if (context.insert === 'dsChan') {context.script.dsChan = inserted.split('\n')};
                          if (context.insert === 'dsFreq') {context.script.dsFreq = inserted.split('\n')};
                          if (context.insert === 'dsPow') {context.script.dsPow = inserted.split('\n')};
                          if (context.insert === 'dsPrim') {context.script.dsPrim = inserted.split('\n')};
                          if (context.insert === 'usChanA') {context.script.usChanA = inserted.split('\n\n')};
                          if (context.insert === 'usChanB') {context.script.usChanB = inserted.split('\n\n')};
                          if (context.insert === 'usFreqA') {context.script.usFreqA = inserted.split('\n\n')};
                          if (context.insert === 'usFreqB') {context.script.usFreqB = inserted.split('\n\n')};
                          if (context.insert === 'usWidthA') {context.script.usWidthA = inserted.split('\n\n')};
                          if (context.insert === 'usWidthB') {context.script.usWidthB = inserted.split('\n\n')};
                      }}
                  >
                      Insert
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ModalInsert;