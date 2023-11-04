import { useContext } from 'react';
import { Context } from '../../Context';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import LeftCbr8 from './LeftCbr8';

const LeftSideBar = () => {
    const context = useContext(Context);
    return(
        <aside className= {`${context.isLeftSideBarOpen ? 'left-side-bar--wide' : 'left-side-bar--narrow'} 
            left-side-bar fixed border-r-2 shadow-lg shadow-gray-500 place-items-end p-2 z-30 flex flex-col`}>         
            <div className='flex flex-col'>
                <ArrowRightCircleIcon 
                    className={`place-self-end ${context.isLeftSideBarOpen ? 'left-left-arrow' : 'left-right-arrow'} h-6 w-6 cursor-pointer text-black`}
                    onClick={() => {context.isLeftSideBarOpen ? context.closeLeftSideBar() : context.openLeftSideBar()}}/>
                <p className='place-self-end font-bold text-xs'>Start</p>
                <p className='place-self-end font-bold text-xs'>Conf</p>
            </div>
            {context.cmts === 'cbr8' ? <LeftCbr8 /> : false}
        </aside>
    )
}

export default LeftSideBar;