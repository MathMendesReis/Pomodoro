import {HomeContainer, StopButton, StartCount } from "./styled"
import { Hand, Play } from "@phosphor-icons/react";
import {useContext} from "react";
import CountDownComponent from "./countDown";
import NewCycleForm from "./newCycleForm";
import  {nan, z}  from 'zod'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cycle, CyclesContext } from "../../context/cyclesContext/cyclesContext";

const newTaskSchemma = z.object({
  task:z.string().min(1, 'Informe a tarefa'),
  minutsAmmout:z.number().min(1).max(60)
})

export type newTask = z.infer<typeof newTaskSchemma>

export default function Main() {
  const {handleNewSubmitAction, dispatch,handInterruptinCycle, activeCycle} = useContext(CyclesContext)




  const newCycleForm = useForm<newTask>({
    resolver:zodResolver(newTaskSchemma),
    defaultValues:{
      task:'',
      minutsAmmout:0
    }
  })
  const {handleSubmit, watch, reset} = newCycleForm
  //variaveis auxiliares
  const task = watch('task')
  const isSubmitDisable = !task
  //

  function handleNewSubmit(data:newTask) {
    handleNewSubmitAction(data)
  }

 return (
    <HomeContainer>
        <FormProvider {...newCycleForm}>
          <form onSubmit={handleSubmit(handleNewSubmit)}>
            <NewCycleForm/>
            <CountDownComponent
            />
            {activeCycle?(
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

