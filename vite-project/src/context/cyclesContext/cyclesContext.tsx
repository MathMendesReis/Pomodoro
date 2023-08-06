import { ReactNode, createContext, useState } from "react";

export interface Cycle {
  id:string
  task:string
  minutsAmmout:number
  startDate: Date
  interruptDate?:Date
  finishedDate?:Date

}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  isActive: string | null
  ammoutSeconds:number
  setAmmoutSeconds: React.Dispatch<React.SetStateAction<number>>;
  setCycles: React.Dispatch<React.SetStateAction<Cycle[]>>
  setIsActive: React.Dispatch<React.SetStateAction<string | null>>;
  minMinuts:number
  cycles:Cycle[]


}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProps {
  children:ReactNode
}
export function CyclesContextProvider({ children }:CyclesContextProps) {
    //states
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [isActive, setIsActive] = useState<string | null>(null)
    const [ammoutSeconds , setAmmoutSeconds] = useState<number>(0)
    //state
    const activeCycle = cycles.find((cycles)=> cycles.id === isActive)
    const minMinuts:number = 1

  return(
    <CyclesContext.Provider value={{
      activeCycle,
      isActive,
      ammoutSeconds,
      setAmmoutSeconds,
      setCycles,
      setIsActive,
      minMinuts,
      cycles
      }}>
        {children}
      </CyclesContext.Provider>

  )
}
