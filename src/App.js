import React,{useEffect,useRef,useState} from 'react'
import '../src/index.css'
import GSAP from 'gsap'
import ethers from 'ethers'
import crackers from './play.mp4'
function Main(){
    let eff=useRef();
    let par=useRef();
    let prt=useRef();
    const [greet,setgreet]=useState('HI');
    const [connect,setconnect]=useState('Connect MetaMask');
    const [text,setText]=useState();
    const [fire,setfire]=useState(false);
    function mask(){
        let account;
        if(window.ethereum){
            window.ethereum.request({method:'eth_requestAccounts'}).then(accounts=>{
                account=accounts[0];
                setText(account);
                setconnect("Connected");
                setgreet("Happy Diwali");
                setfire(true);
                
            })
            
        }
        else{
            alert('Please Install MetaMask')
        }
        
    }
    useEffect(()=>{GSAP.from(eff,{opacity:0,y:40,duration:2})},[]);
    useEffect(()=>{GSAP.from(par,{opacity:0,y:-40,duration:2})});
    useEffect(()=>{GSAP.from(prt,{scale:10,x:40,duration:1})});
    return(
        <div className='Frame'>
            <div className={`${fire?'burst':'burn'}`}>
                <video height="100%" autoPlay loop muted>
                    <source src={crackers} type='video/mp4'></source>
                </video>
            </div>
            <div className='heading'>
                <h1 className='message' ref={el=>eff=el}>{greet}</h1>
            </div>
            <h2 ref={el=>prt=el}>{text}</h2>
            <div class='work'>
                <button className='button' ref={el=>par=el} onClick={mask}>{connect}</button>
            </div>
        </div>
    )
}
export default Main;