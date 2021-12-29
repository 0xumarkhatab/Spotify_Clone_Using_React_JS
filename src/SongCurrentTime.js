import React,{useEffect,useState} from 'react'

let Time=0;
function SongCurrentTime({audioElement,progressValue}) {
    Time=[Math.floor(audioElement.currentTime)];
    const [reloader,setReloader]=useState(false);

    console.log("initial time state := ", Time,"duration is ",Math.floor(audioElement.duration) );

    useEffect(() => {

        setInterval(()=>{
            console.log("inside Interval ",Time);
            
            if(Time[0] === Math.floor(audioElement.duration)){
                Time[0]=0;
                audioElement.currentTime=0;
                audioElement.play();
                console.clear();
                console.log("played again");

                
            }        
            Time++;
            setReloader(prev => !prev);
        },1000);

        
    
    }, {});

    console.log("time outside use effect ",Time);

    function returnMinutes(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor((d % 3600) / 60);
        var s = Math.floor((d % 3600) % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? ":" : "") : "00:";
        var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "00:";
        var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "00";
        return hDisplay + mDisplay + sDisplay;
      }
          
// useEffect(() => {
    
//     setTime(audioElement.currentTime);
//     console.log(audioElement.currentTime," is in SongCurrentTime Effect");

// }, [Time] );


    return (
        <div>
               <p style={{color:"white"}}>{returnMinutes(Time)}</p>

        </div>
    )
}

export default SongCurrentTime
