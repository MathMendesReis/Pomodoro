import { useContext, useEffect } from "react"
import { CountDown, Separator } from "./styled"
import { differenceInSeconds } from "date-fns"
import { CyclesContext } from "../../../context/cyclesContext/cyclesContext"


export default function CountDownComponent() {
  const {activeCycle,activeCycleId, ammoutSeconds, setAmmoutSeconds,handFinishCycle} = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutsAmmout * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - ammoutSeconds : 0
  const minutsAmmout = Math.floor(currentSeconds / 60)
  const secondsAmmout = currentSeconds % 60
  const minuts = String(minutsAmmout).padStart(2,'0')
  const seconds = String(secondsAmmout).padStart(2,'0')

  useEffect(()=>{
    let interval: number;
    if (activeCycleId && activeCycle!== undefined ) {
      interval = setInterval(()=>{
        const secondsDifference = differenceInSeconds(new Date(),activeCycle.startDate)
        //
        if(secondsDifference > totalSeconds){
          handFinishCycle()
          clearInterval(interval);
        }else{
          setAmmoutSeconds(secondsDifference)
        }
      },1000)
    }
    return ()=>{
      clearInterval(interval)
      setAmmoutSeconds(0)
    }
  },[activeCycle])

  useEffect(()=>{
     if(activeCycleId){
     document.title = `${minuts}:${seconds}`
     }
  },[minuts, seconds, activeCycle])

  return (
  <CountDown>
    <span>{minuts[0]}</span>
    <span>{minuts[1]}</span>
     <Separator>:</Separator>
    <span>{seconds[0]}</span>
    <span>{seconds[1]}</span>
  </CountDown>
  )
}
