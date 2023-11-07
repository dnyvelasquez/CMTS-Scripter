import { useContext } from "react";
import { Context } from "../../Context";

const Card = (data) => {
  const context = useContext(Context);
  return (
    <div className="h-128 w-64 group relative block overflow-hidden rounded-lg shadow-lg bg-white">
      <img
        src={data.data.img}
        alt={data.data.name}
        className="h-full w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
      />
      <div className="relative bg-white p-6">
        <h3 className="mt-4 text-lg font-medium text-gray-900">{data.data.name}</h3>
        <div className="mt-4">
          <button 
            className="primary-button border-2 block w-full rounded-md  p-4 text-sm font-medium transition hover:scale-105"
            onClick={() => {
              context.openModalNew();
              context.script.cmts = data.data.route;
            }}
          >
            New script
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
