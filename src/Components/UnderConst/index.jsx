import constMan from '../../Assets/icons8-const-man.png';
import underConst from '../../Assets/icons8-under-const.png';

const UnderConst = () => {

    return (
        <div className="border-x-2 h-screen w-3/4 flex flex-col items-center-center px-12">
            <h3 className="text-center my-4 font-bold">
                THIS PAGE IS UNDER CONSTRUCTION
            </h3>
            <div className="flex my-4 justify-center">
                <figure>
                    <img src={constMan} alt="Construction man image" />
                </figure>
                <figure>
                    <img src={underConst} alt="Under contruction image" />
                </figure>                
            </div>
        </div>
    )

}

export default UnderConst;