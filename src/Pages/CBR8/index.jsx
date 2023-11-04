import { useContext } from "react";
import { Context } from "../../Context";
import Layout from "../../Components/Layout";
import LeftSideBar from "../../Components/leftSideBar";
import RightSideBar from "../../Components/RightSideBar";
import Cbr8Script from "../../Components/Cbr8Script";
import Cbr8Design from "../../Components/Cbr8Design";

const Cbr8 = () => {
  const context = useContext(Context);

  return (
    <Layout>
      <LeftSideBar />
      <RightSideBar />
      <div
        className={`${
          context.isLeftSideBarOpen || context.isRightSideBarOpen
            ? "opacity-50"
            : false
          } flex flex-col items-center w-full card relative`}
      >
        <h1 className="font-bold">OC: {context.oc} - CBR8</h1>
        <div>
          <button
            className="primary-button border-y-2 border-l-2 w-auto h-8 mt-2 mb-2 px-2 rounded-l-md"
          >
            {'<'}
          </button>
          <button
              className="primary-button border-y-2 w-auto h-8 mt-2 mb-2"
            >|
            </button>
          <button
            className="primary-button border-y-2 w-auto h-8 mt-2 mb-2 px-4"
            onClick={() => {context.setIsScript(!context.isScript)}}
            >
              {`${!context.isScript ? "<< Script" : "Design"} interfaceCable ${context.interfaceCable} ${context.isScript ? " >>" :  ""}`}
            </button>
            <button
              className="primary-button border-y-2 w-auto h-8 mt-2 mb-2"
            >|
            </button>
            <button
            className="primary-button border-y-2 border-r-2 w-auto h-8 mt-2 mb-2 px-2 rounded-r-md"
          >
            {'>'}
          </button>
          </div>
          <Cbr8Script />
          <Cbr8Design />
      </div>
    </Layout>
  );
};

export default Cbr8;
