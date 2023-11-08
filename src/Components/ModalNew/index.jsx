import React, { useContext } from "react";
import { Context } from "../../Context";
import { NavLink } from "react-router-dom";

const ModalNew = () => {
  const context = useContext(Context);

  return (
    <>
      {context.isModalNewOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Please, input the OC number
                  </h3>
                </div>
                <div className="relative p-6 flex-auto center">
                  <input id="ocNumber" 
                    type="text" 
                    autoFocus
                    className="self-auto border-2 rounded-md"
                  />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => context.closeModalNew()}
                  >
                    Close
                  </button>
                    <NavLink to={`/${context.script.cmts}`}>
                        <button id="createButton"
                            className="primary-button border-2 w-20 h-8 rounded-md"
                            onClick={() => {
                                context.closeModalNew();
                                context.setIsScript(false);                   
                                context.script.oc = ocNumber.value;    
                            }}
                        >
                            Create
                        </button>
                    </NavLink>
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

export default ModalNew;