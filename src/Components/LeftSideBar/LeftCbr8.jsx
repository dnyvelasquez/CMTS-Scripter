import { useContext, useState} from 'react';
import { Context } from '../../Context';
import copy from "copy-to-clipboard";
import './styles.css';

const LeftCbr8 = () => {

    const context = useContext(Context);
    const [startInterface, setStartInterface] = useState("");
    const [startIntegrated, setStartIntegrated] = useState("");
    const [startUpstreamA, setStartUpstreamA] = useState("");
    const [startUpstreamB, setStartUpstreamB] = useState("");
    const [startFiberNodeA, setStartFiberNodeA] = useState("");
    const [startFiberNodeB, setStartFiberNodeB] = useState("");

    return(
        <div className='pr-8 mt-4 overflow-y-auto inside-bar border-t-2 p-2'>
            <textarea
                rows={20}
                cols={60}
                value={startInterface}
                placeholder="Interface-Cable"
                className="border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    context.script.startInterface = event.target.value;
                    setStartInterface(event.target.value);
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setStartInterface(clipText)
                        })
                    }}    
                >
                    Paste
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {copy(context.script.startInterface)}}                
                >
                    Copy
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {setStartInterface('')}}                        
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={20}
                cols={60}
                value={startIntegrated}
                placeholder="Integrated-Cable"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    context.script.startIntegrated = event.target.value;
                    setStartIntegrated(event.target.value);
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setStartIntegrated(clipText)
                        })
                    }}    
                >
                    Paste
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {copy(context.script.startIntegrated)}}                
                >
                    Copy
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {setStartIntegrated('')}}                        
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={20}
                cols={60}
                value={startUpstreamA}
                placeholder="Upstream-Cable (Seg A)"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    context.script.startUpstreamA = event.target.value;
                    setStartUpstreamA(event.target.value);
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setStartUpstreamA(clipText)
                        })
                    }}    
                >
                    Paste
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {copy(context.script.startUpstreamA)}}                
                >
                    Copy
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {setStartUpstreamA('')}}                        
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={20}
                cols={60}
                value={startUpstreamB}
                placeholder="Upstream-Cable (Seg B)"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    context.script.startUpstreamB = event.target.value;
                    setStartUpstreamB(event.target.value);
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setStartUpstreamB(clipText)
                        })
                    }}    
                >
                    Paste
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {copy(context.script.startUpstreamB)}}                
                >
                    Copy
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {setStartUpstreamB('')}}                        
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={5}
                cols={60}
                value={startFiberNodeA}
                placeholder="Fiber-Node (Seg A)"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    context.script.startFiberNodeA = event.target.value;
                    setStartFiberNodeA(event.target.value);
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setStartFiberNodeA(clipText)
                        })
                    }}    
                >
                    Paste
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {copy(context.script.startFiberNodeA)}}                
                >
                    Copy
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {setStartFiberNodeA('')}}                        
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={5}
                cols={60}
                value={startFiberNodeB}
                placeholder="Fiber-Node (Seg B)"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    context.script.startFiberNodeB = event.target.value;
                    setStartFiberNodeB(event.target.value);
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setStartFiberNodeB(clipText)
                        })
                    }}    
                >
                    Paste
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {copy(context.script.startFiberNodeB)}}                
                >
                    Copy
                </button>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2 place-self-end'
                    onClick={() => {setStartFiberNodeB('')}}                       
                >
                    Clear
                </button>
            </div>
        </div>
    )
}

export default LeftCbr8;