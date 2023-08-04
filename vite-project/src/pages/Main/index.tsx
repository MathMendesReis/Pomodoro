import { CountDown, FormContainer, HomeContainer, MinutsInput, Separator, StartCount, TaskInput } from "./styled"
import { Play } from "@phosphor-icons/react";
import { useForm } from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import  {z}  from 'zod'


const newTaskSchemma = z.object({
  task:z.string().min(1, 'Informe a tarefa'),
  minutsAmmout:z.number().min(5).max(60)
})




export default function Main() {
  const {register, handleSubmit, watch, reset, formState:{errors}} = useForm<newTask>({
    resolver: zodResolver(newTaskSchemma),
    defaultValues:{
      task:'',
      minutsAmmout:0
    }
  })


  type newTask = z.infer<typeof newTaskSchemma>

  function handleNewSubmit(data:newTask) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

    return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleNewSubmit)} action="">
        <FormContainer>
        <label htmlFor="task"> vou trabalhar em
          <TaskInput
            {...register('task')}
            placeholder="Dê um nome para o seu projeto"
            type="text"
            list="tasks-sugestoes"
            id="task" />


            <datalist
            id="tasks-sugestoes"
            >
              <option value="banana"></option>
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
           id="minutesAmmount" />
        </label>
        </FormContainer>

        <span>minutes</span>
        <CountDown>
          <span>0</span>
          <span>0</span>
           <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDown>

      <StartCount
        disabled={isSubmitDisable}
        type="submit">
        <Play/> começar
      </StartCount>
      </form>
    </HomeContainer>
    )
}

