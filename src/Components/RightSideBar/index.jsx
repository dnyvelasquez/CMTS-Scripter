import { useContext } from 'react';
import { Context } from '../../Context';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import RightCbr8 from './RightCbr8';
import './styles.css';

const RightSideBar = () => {
    const context = useContext(Context);
    return(
        <aside className= {`${context.isRightSideBarOpen ? 'right-side-bar--wide' : 'right-side-bar--narrow'} 
            right-side-bar fixed border-l-2 shadow-lg shadow-gray-500 place-items-start p-2 z-20 flex flex-col`}>
            <div className='flex flex-col'>
                <ArrowLeftCircleIcon 
                    className={`${context.isRightSideBarOpen ? 'right-left-arrow' : 'right-right-arrow'} h-6 w-6 cursor-pointer text-black`}
                    onClick={() => {context.isRightSideBarOpen ? context.closeRightSideBar() : context.openRightSideBar()}}/>
                <p className='font-bold text-xs'>Oper</p>
                <p className='font-bold text-xs'>state</p>
            </div>
            {context.cmts === 'cbr8' ? <RightCbr8 /> : false}
        </aside>
    )
}

export default RightSideBar;