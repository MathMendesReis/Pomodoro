import { ReactNode, createContext, useReducer, useState } from "react";
import { newTask } from "../../pages/Main";

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
  activeCycleId: string | null
  ammoutSeconds:number
  setAmmoutSeconds: React.Dispatch<React.SetStateAction<number>>;
  dispatch: React.Dispatch<any>
  minMinuts:number
  cycles:Cycle[],
  handInterruptinCycle:()=>void,
  handFinishCycle:()=>void,
  handleNewSubmitAction:(data:newTask)=>void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProps {
  children:ReactNode
}

enum CycleActions {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  STOP_CYCLE_ACTIVE = "STOP_CYCLE_ACTIVE",
  FINISH_CYCLE= "FINISH_CYCLE"
}

interface AddNewCycleAction {
  type: CycleActions.ADD_NEW_CYCLE;
  payload: {
    newCycle: Cycle;
  };
}

interface stopCycleActive {
  type:CycleActions.STOP_CYCLE_ACTIVE;

}
interface finishCycleActive {
  type:CycleActions.FINISH_CYCLE;

}
type CycleAction = AddNewCycleAction | stopCycleActive | finishCycleActive

interface CycleState {
  cycles:Cycle[],
  activeCycleId: string | null
}




export function CyclesContextProvider({ children }:CyclesContextProps) {
    const [cycleState, dispatch] = useReducer((state: CycleState, action: CycleAction) => {
      switch (action.type) {
        case CycleActions.ADD_NEW_CYCLE:
          return {
            ...state,
            cycles:[...state.cycles,action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id
          }
          case CycleActions.STOP_CYCLE_ACTIVE:
          return {
            ...state,
            cycles: state.cycles.map((cycle) =>
              cycle.id === state.activeCycleId
                ? { ...cycle, interruptDate: new Date() }
                : cycle
            ),
            activeCycleId: null,
          };
          case CycleActions.FINISH_CYCLE:
          return {
            ...state,
            cycles: state.cycles.map((cycle) =>
              cycle.id === state.activeCycleId
                ? { ...cycle, finishedDate: new Date() }
                : cycle
            ),
            activeCycleId: null,
          };
        default:
          return state;
      }
    }, {
    cycles: [],
    activeCycleId: null,
    });
    const {cycles, activeCycleId} = cycleState;


    const [ammoutSeconds , setAmmoutSeconds] = useState<number>(0)
    const activeCycle = cycles.find((cycles)=> cycles.id === activeCycleId)
    const minMinuts:number = 1
    function handInterruptinCycle() {

      if (activeCycleId !== null) {
        dispatch({
          type:CycleActions.STOP_CYCLE_ACTIVE
        })
      }
    }
    function handFinishCycle() {
      dispatch({
        type:CycleActions.FINISH_CYCLE
      })
    }

    function handleNewSubmitAction(data:newTask) {
      const id = String(new Date().getTime())
      const newCycle :Cycle = {
        id,
        task:data.task,
        minutsAmmout:data.minutsAmmout,
        startDate:new Date(),
      }
      dispatch({
       type:CycleActions.ADD_NEW_CYCLE,
       payload:{
         newCycle
       }
      })
   }
  return(
    <CyclesContext.Provider value={{
      activeCycle,
      activeCycleId,
      ammoutSeconds,
      setAmmoutSeconds,
      dispatch,
      minMinuts,
      cycles,
      handInterruptinCycle,
      handleNewSubmitAction,
      handFinishCycle
      }}>
        {children}
      </CyclesContext.Provider>

  )
}
