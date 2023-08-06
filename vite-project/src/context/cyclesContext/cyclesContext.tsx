import { ReactNode, createContext, useReducer, useState } from "react";

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
  state:{
    count:number
  }


}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProps {
  children:ReactNode
}
export function CyclesContextProvider({ children }:CyclesContextProps) {
    //states
    const [cycles, setCycles] = useState<Cycle[]>([])

    const initialState = {count: 0};

    function reducer(state: { count: number; }, action: { type: any; }) {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
    }
    const [state, dispatch] = useReducer(reducer,initialState);

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
      cycles,
      state
      }}>
        {children}
      </CyclesContext.Provider>

  )
}
