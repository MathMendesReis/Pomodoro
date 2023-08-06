import {HomeContainer, StopButton, StartCount } from "./styled"
import { Hand, Play } from "@phosphor-icons/react";
import {useContext} from "react";
import CountDownComponent from "./countDown";
import NewCycleForm from "./newCycleForm";
import  {z}  from 'zod'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cycle, CyclesContext } from "../../context/cyclesContext/cyclesContext";




export default function Main() {
  const {minMinuts, isActive, setIsActive,setCycles} = useContext(CyclesContext)

  const newTaskSchemma = z.object({
    task:z.string().min(minMinuts, 'Informe a tarefa'),
    minutsAmmout:z.number().min(1).max(60)
  })


  const newCycleForm = useForm<newTask>({
    resolver:zodResolver(newTaskSchemma),
    defaultValues:{
      task:'',
      minutsAmmout:0
    }
  })
type newTask = z.infer<typeof newTaskSchemma>
  const {handleSubmit, watch, reset} = newCycleForm
  //variaveis auxiliares
  const task = watch('task')
  const isSubmitDisable = !task
  //

  function handleNewSubmit(data:newTask) {
    const id = String(new Date().getTime())
    const newCycle :Cycle = {
      id,
      task:data.task,
      minutsAmmout:data.minutsAmmout,
      startDate:new Date(),
    }

    setCycles((state)=>[...state,newCycle])
    setIsActive(id)
    reset()
  }
  function handInterruptinCycle() {

    if (isActive !== null) {
      setCycles((state)=>
      state.map((cycle) => {
        if (cycle.id === isActive) {
          return { ...cycle, interruptDate: new Date() };
        } else {
          return cycle;
        }
      }));
    }

    setIsActive(null);

  }
 return (
    <HomeContainer>
        <FormProvider {...newCycleForm}>
          <form onSubmit={handleSubmit(handleNewSubmit)}>

            <NewCycleForm/>
            <CountDownComponent

            />

            {isActive?(
              <StopButton
                onClick={handInterruptinCycle}
                type="button">
                <Hand/> interromper
              </StopButton>
            )
            :
            (
              <StartCount
                disabled={isSubmitDisable}
                type="submit">
                <Play/> começar
              </StartCount>
            )
            }
        </form>
      </FormProvider>
    </HomeContainer>
    )
}

