import { useContext, useState } from 'react';
import { Context } from '../../Context';
import ModalInsert from '../ModalInsert'

const Cbr8Design = () => {
    const context = useContext(Context);
    const dsCh = Array.from({length: 48}, (_, index) => index + 1);
    const usChA = Array.from({length: 6}, (_, index) => index + 1);
    const usChB = Array.from({length: 6}, (_, index) => index + 1);
    const [inputText, setInputText] = useState('')
    
    return (

        <div className={`grid place-items-center gap-1 mt-4 absolute top-20
            ${context.isScript ? "face-b" : "face-a"}`}>
            
            <p className="col-start-1 row-start-1 text-xs font-bold">Card</p>
            <input                             
                type='text' 
                className="col-start-1 row-start-2 border-2 rounded-md w-12 text-center z-10 text-sm" 
                value={context.script.card ? context.script.card : ''}
                onChange={(event) => {
                    setInputText(event.target.value);
                    context.setInterfaceCable(`${event.target.value}/0/${context.script.dsConn ? $context.script.dsConn : ''}`)
                    context.script.card = event.target.value;
                }}
            />

            <p className="col-start-2 row-start-1 text-xs font-bold">DS Con</p>
            <input 
                type='text'
                className="col-start-2 row-start-2 border-2 rounded-md w-12 text-center z-10 text-sm" 
                value={context.script.dsConn ? context.script.dsConn : ''}
                onChange={(event) => {
                    setInputText(event.target.value);
                    context.setInterfaceCable(`${context.script.card ? context.script.card : ''}/0/${event.target.value}`)
                    context.script.dsConn = event.target.value;
                    context.script.usConnA = event.target.value * 2;
                    context.script.usConnB =  event.target.value * 2 + 1;
                }}
            />

            <p className="col-start-3 row-start-1 text-xs font-bold">Description</p>
            <input 
                type='text'                
                inputMode='none'
                className="col-start-3 row-start-2 border-2 rounded-md w-32 text-center z-10 text-sm" 
                value={context.script.description ? context.script.description : ''}
                onChange={(event) => {
                    setInputText(event.target.value);
                    context.script.description = event.target.value;
                }}
            />

            <p className="col-start-4 row-start-1 text-xs font-bold">DS Chan</p>
            {dsCh?.map((item) => 
                <input key={item} 
                    value={context.script.dsChan[item-1] ? context.script.dsChan[item-1] : ''}
                    style={{gridRowStart: item+1}} 
                    className={`col-start-4 border-2 rounded-md w-12 text-center z-10 text-sm`} 
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('dsChan');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />)
            }
            
            <p className="col-start-5 row-start-1 text-xs font-bold">DS Freq</p>
            {dsCh?.map((item) => 
                <input key={item} 
                    value={context.script.dsFreq[item-1] ? context.script.dsFreq[item-1] : ''}
                    style={{gridRowStart: item+1}} 
                    className={`col-start-5 border-2 rounded-md w-16 text-center z-10 text-sm`} 
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('dsFreq');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />)
            }
            
            <p className="col-start-6 row-start-1 text-xs font-bold">DS Pow</p>
            {dsCh?.map((item) => 
                <input key={item} 
                    value={context.script.dsPow[item-1] ? context.script.dsPow[item-1] : ''}               
                    style={{gridRowStart: item+1}}
                    className={`col-start-6 border-2 rounded-md w-12 text-center z-10 text-sm`} 
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('dsPow');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />)
            }

            <p className="col-start-7 row-start-1 text-xs font-bold">Primary</p>
            {dsCh?.map((item) => 
                <input 
                    key={item} 
                    value={context.script.dsPrim[item-1] ? context.script.dsPrim[item-1] : ''}          
                    style={{gridRowStart: item+1}}
                    className={`col-start-7 border-2 rounded-md w-28 text-center z-10 text-sm`} 
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('dsPrim');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />)
            }

            <div className='w-full col-start-1 col-end-8 row-start-2 row-end-4 bg-slate-300 rounded-md h-full z-0' style={{gridRowEnd: 50}}></div>

            {context.isModalInsertOpen ? <ModalInsert /> : false}

            <p className="col-start-8 row-start-1 text-xs font-bold">US Con</p>
            <input 
                type='text' 
                className="col-start-8 row-start-2 border-2 rounded-md w-12 text-center z-10 text-sm"
                value={context.script.usConnA ? context.script.usConnA : ''}
                onChange={(event) => {
                    setInputText(event.target.value)
                    context.script.usConnA = event.target.value;
                }}                
            />
            <input 
                type='text' 
                className="col-start-8 row-start-7 border-2 rounded-md w-12 text-center z-10 text-sm" 
                style={{gridRowStart: 8}}
                value={context.script.usConnB ? context.script.usConnB : ''}
                onChange={(event) => {
                    setInputText(event.target.value)
                    context.script.usConnB = event.target.value;
                }}
            />

            <p className="col-start-9 row-start-1 text-xs font-bold">US Desc</p>
            <input 
                type='text' 
                className="col-start-9 row-start-2 border-2 rounded-md w-32 text-center z-10 text-sm"
                value={context.script.usDescA ? context.script.usDescA : ''}
                onChange={(event) => {
                    setInputText(event.target.value)
                    context.script.usDescA = event.target.value;
                }}
            />
            <input 
                type='text' 
                className="col-start-9 border-2 rounded-md w-32 text-center resize-none z-10 text-sm" 
                value={context.script.usDescB ? context.script.usDescB : ''}
                style={{gridRowStart: 8}}
                onChange={(event) => {
                    setInputText(event.target.value)
                    context.script.usDescB = event.target.value;
                }}
            />

            <p className="col-start-10 row-start-1 text-xs font-bold">US Chan</p>
            {usChA?.map((item) => 
                <input 
                    key={item} 
                    value={context.script.usChanA[item-1] ? context.script.usChanA[item-1] : ''} 
                    style={{gridRowStart: item+1}}
                    className={`col-start-10 border-2 rounded-md w-12 text-center z-10 text-sm`}
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('usChanA');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />
            )}
            {usChB?.map((item) => 
                <input 
                    key={item} 
                    value={context.script.usChanB[item-1] ? context.script.usChanB[item-1] : ''} 
                    style={{gridRowStart: item+7}}
                    className={`col-start-10 border-2 rounded-md w-12 text-center z-10 text-sm`}
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('usChanB');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />
            )}

            <p className="col-start-11 row-start-1 text-xs font-bold">US Freq</p>
            {usChA?.map((item) => 
                <input 
                    key={item} 
                    value={context.script.usFreqA[item-1] ? context.script.usFreqA[item-1] : ''} 
                    style={{gridRowStart: item+1}}
                    className={`col-start-11 border-2 rounded-md w-16 text-center z-10 text-sm`} 
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('usFreqA');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />
            )}
            {usChB?.map((item) => 
                <input 
                    key={item} 
                    value={context.script.usFreqB[item-1] ? context.script.usFreqB[item-1] : ''} 
                    style={{gridRowStart: item+7}}
                    className={`col-start-11 border-2 rounded-md w-16 text-center z-10 text-sm`} 
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('usFreqB');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />
            )}

            <p className="row-start-1 text-xs font-bold" style={{gridColumnStart: 12}}>US ChW</p>
            {usChA?.map((item) => 
                <input 
                    key={item} 
                    value={context.script.usWidthA[item-1] ? context.script.usWidthA[item-1] : ''} 
                    style={{gridRowStart: item+1, gridColumnStart: 12}}
                    className='border-2 rounded-md w-12 text-center z-10 text-sm'
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('usWidthA');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />
            )}
            {usChB?.map((item) => 
                <input 
                    key={item} 
                    value={context.script.usWidthB[item-1] ? context.script.usWidthB[item-1] : ''} 
                    style={{gridRowStart: item+7, gridColumnStart: 12}}
                    className='border-2 rounded-md w-12 text-center z-10 text-sm'
                    onClick={() => {
                        context.openModalInsert();
                        context.setInsert('usWidthB');
                    }}
                    onChange={(event) => {setInputText(event.target.value)}}
                />
            )}

            <div className='w-full row-start-2 bg-slate-300 rounded-md h-full z-0' style={{gridColumnStart: 8, gridColumnEnd: 13, gridRowEnd: 8}}></div>
            <div className='w-full bg-slate-300 rounded-md h-full z-0' style={{gridColumnStart: 8, gridColumnEnd: 13, gridRowStart: 8, gridRowEnd: 14}}></div>

        </div>        
    );
}

export default Cbr8Design;