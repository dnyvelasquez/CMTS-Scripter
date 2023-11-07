import { useContext } from "react";
import { Context } from "../../Context";
import DelShutInterfaceScript from './DelShutInterfaceScript'
import ConfInterfaceScript from './ConfInterfaceScript'
import DelShutIntegratedScript from './DelShutIntegratedScript'
import ConfIntegratedScript from './ConfIntegratedScript'
import DelShutUpstreamAScript from './DelShutUpstreamAScript'
import ConfUpstreamAScript from './ConfUpstreamAScript'
import DelShutUpstreamBScript from './DelShutUpstreamBScript'
import ConfUpstreamBScript from './ConfUpstreamBScript'
import DelShutFiberNodeAScript from './DelShutFiberNodeAScript'
import ConfFiberNodeAScript from './ConfFiberNodeAScript'
import DelShutFiberNodeBScript from './DelShutFiberNodeBScript'
import ConfFiberNodeBScript from './ConfFiberNodeBScript'
import ConfLoadScript from './ConfLoadScript'

const Cbr8Script = () => {
  
  const context = useContext(Context);

  return (
    <div className={`w-4/6 grid grid-cols-auto grid-rows-auto gap-4 mb-4 absolute top-20 pb-8
      ${context.isScript ? "face-a" : "face-b"}`}>
      <h2 className="place-self-center font-bold col-start-1 row-start-1 mt-4 text-sm">
        DELETE/SHUTDOWN INTERFACES
      </h2>
      <h2 className="place-self-center font-bold col-start-2 row-start-1 mt-4 text-sm">
        CONFIGURE INTERFACES
      </h2>
      <div className="flex place-self-center col-start-1 row-start-2">
        <DelShutInterfaceScript />
      </div>
      <div className="flex place-self-center col-start-2 row-start-2">
        <ConfInterfaceScript />
      </div>
      <div className="flex place-self-center col-start-1 row-start-3">
        <DelShutIntegratedScript />
      </div>
      <div className="flex place-self-center col-start-2 row-start-3">
        <ConfIntegratedScript />
      </div>
      <div className="flex place-self-center col-start-1 row-start-4">
        <DelShutUpstreamAScript />
      </div>
      <div className="flex place-self-center col-start-2 row-start-4">
        <ConfUpstreamAScript />
      </div>
      <div className="flex place-self-center col-start-1 row-start-5">
        <DelShutUpstreamBScript />
      </div>
      <div className="flex place-self-center col-start-2 row-start-5">
        <ConfUpstreamBScript />
      </div>
      <div className="flex place-self-center col-start-1 row-start-6">
        <DelShutFiberNodeAScript />
      </div>
      <div className="flex place-self-center col-start-2 row-start-6">
        <ConfFiberNodeAScript />
      </div>
      <div className="flex place-self-center col-start-1 row-start-7">
        <DelShutFiberNodeBScript />
      </div>
      <div className="flex place-self-center col-start-2 row-start-7">
        <ConfFiberNodeBScript />
      </div>
      <div className="flex place-self-center col-start-2 row-start-8">
        <ConfLoadScript />
      </div>
    </div>
  );
};

export default Cbr8Script;
