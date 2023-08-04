import { CountDown, FormContainer, HomeContainer, MinutsInput, Separator, StopButton, StartCount, TaskInput } from "./styled"
import { Hand, Play } from "@phosphor-icons/react";
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import  {z}  from 'zod'
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";


const newTaskSchemma = z.object({
  task:z.string().min(1, 'Informe a tarefa'),
  minutsAmmout:z.number().min(5).max(60)
})

type newTask = z.infer<typeof newTaskSchemma>

interface Cycle {
  id:string
  task:string
  minutsAmmout:number
  startDate: Date
  interruptDate?:Date

}

export default function Main() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [isActive, setIsActive] = useState<string | null>(null)
  const [ammoutSeconds , setAmmoutSeconds] = useState(0)

  const {register, handleSubmit, watch, reset} = useForm<newTask>({
    resolver: zodResolver(newTaskSchemma),
    defaultValues:{
      task:'',
      minutsAmmout:0
    }
  })
  const activeCycle = cycles.find((cycles)=> cycles.id === isActive)
  const totalSeconds = activeCycle ? activeCycle.minutsAmmout * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - ammoutSeconds : 0
  const minutsAmmout = Math.floor(currentSeconds / 60)
  const secondsAmmout = currentSeconds % 60
  const minuts = String(minutsAmmout).padStart(2,'0')
  const seconds = String(secondsAmmout).padStart(2,'0')
  useEffect(()=>{
    let interval: number;

    if (isActive && activeCycle !== undefined) {
      interval = setInterval(()=>{
        setAmmoutSeconds(
          differenceInSeconds(new Date(),activeCycle.startDate)
        )
      },1000)
    }
    return ()=>{
      clearInterval(interval)
      setAmmoutSeconds(0)
    }
  },[activeCycle])


  useEffect(()=>{
    if(isActive){
    document.title = `${minuts}:${seconds}`
    }
  },[minuts, seconds, activeCycle])


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

  const task = watch('task')
  const isSubmitDisable = !task


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
      <form onSubmit={handleSubmit(handleNewSubmit)}>
        <FormContainer>
        <label htmlFor="task"> vou trabalhar em
          <TaskInput
            {...register('task')}
            placeholder="Dê um nome para o seu projeto"
            type="text"
            list="tasks-sugestoes"
            disabled={!!isActive}
            id="task" />
            <datalist
            id="tasks-sugestoes"
            >
              <option value="projeto 1"></option>
            </datalist>
        </label>
        <label
          htmlFor="minutesAmmount"> durante
          <MinutsInput
          {...register('minutsAmmout', {valueAsNumber: true})}
           type="number"
           placeholder="00"
           size={5}
           max={60}
           min={5}
           disabled={!!isActive}
           id="minutesAmmount" />
        </label>
        </FormContainer>

        <span>minutes</span>
        <CountDown>
          <span>{minuts[0]}</span>
          <span>{minuts[1]}</span>
           <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountDown>

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
    </HomeContainer>
    )
}

