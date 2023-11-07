import { useContext, useState} from 'react';
import { Context } from '../../Context';
import copy from "copy-to-clipboard";

const LeftCbr8 = () => {

    const context = useContext(Context);
    const [inputText, setInputText] = useState('');

    return(
        <div className='pr-8 mt-4 overflow-y-auto inside-bar border-t-2 p-2'>
            <textarea
                rows={20}
                cols={60}
                value={context.script.startInterface ? context.script.startInterface : ''}
                placeholder="Interface-Cable"
                className="border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    setInputText(event.target.value);
                    context.script.startInterface = event.target.value;
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setInputText(clipText)
                            context.script.startInterface = clipText
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
                    onClick={() => {
                        context.script.startInterface = ''
                        setInputText('');
                    }}                        
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={20}
                cols={60}
                value={context.script.startIntegrated ? context.script.startIntegrated : ''}
                placeholder="Integrated-Cable"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    setInputText(event.target.value);
                    context.script.startIntegrated = event.target.value;
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            context.script.startIntegrated = clipText
                            setInputText(clipText);
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
                    onClick={() => {
                        setInputText('');
                        context.script.startIntegrated = ''
                    }}                        
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={20}
                cols={60}
                value={context.script.startUpstreamA ? context.script.startUpstreamA : ''}
                placeholder="Upstream-Cable (Seg A)"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    setInputText(event.target.value);
                    context.script.startUpstreamA = event.target.value;
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setInputText(clipText);
                            context.script.startUpstreamA = clipText;
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
                    onClick={() => {
                        setInputText('')
                        context.script.startUpstreamA = '';
                    }}                        
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={20}
                cols={60}
                value={context.script.startUpstreamB ? context.script.startUpstreamB : ''}
                placeholder="Upstream-Cable (Seg B)"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    setInputText(event.target.value);
                    context.script.startUpstreamB = event.target.value;
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setInputText(clipText);
                            context.script.startUpstreamB = clipText;
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
                    onClick={() => {
                        setInputText('');
                        context.script.startUpstreamB = '';                        
                    }}                        
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={5}
                cols={60}
                value={context.script.startFiberNodeA ? context.script.startFiberNodeA :''}
                placeholder="Fiber-Node (Seg A)"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    setInputText(event.target.value);
                    context.script.startFiberNodeA = event.target.value;
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setInputText(clipText);
                            context.script.startFiberNodeA = clipText;
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
                    onClick={() => {
                        setInputText('');
                        context.script.startFiberNodeA = ''
                    } }
                >
                    Clear
                </button>
            </div>
            <textarea
                rows={5}
                cols={60}
                value={context.script.startFiberNodeB ? context.script.startFiberNodeB : ''}
                placeholder="Fiber-Node (Seg B)"
                className="place-self-end border-2 resize-none rounded-md text-sm mb-4"
                onChange={(event) => {
                    setInputText(event.target.value);
                    context.script.startFiberNodeB = event.target.value;
                }}
            />
            <div className='flex justify-end gap-1 mb-4'>
                <button 
                    className='primary-button rounded-md w-20 h-8 border-2'
                    onClick={() => {
                        navigator.clipboard.readText().then((clipText) => {
                            setInputText(clipText);
                            context.script.startFiberNodeB = clipText;
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
                    onClick={() => {
                        setInputText('');
                        context.script.startFiberNodeB = '';
                    }}                       
                >
                    Clear
                </button>
            </div>
        </div>
    )
}

export default LeftCbr8;