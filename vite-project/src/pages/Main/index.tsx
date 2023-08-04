import { CountDown, FormContainer, HomeContainer, MinutsInput, Separator, StartCount, TaskInput } from "./styled"
import { Play } from "@phosphor-icons/react";
import { useForm } from 'react-hook-form'

export default function Main() {
  const {register, handleSubmit, watch} = useForm()

  function handleNewSubmit(data:any) {
    console.log(data)
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
          {...register('minutsAmmout')}
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

