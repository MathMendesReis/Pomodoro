import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutsInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../context/cyclesContext/cyclesContext'



export default function NewCycleForm() {
  const {isActive, minMinuts} = useContext(CyclesContext)
  const {register} = useFormContext()
  return (
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
       min={minMinuts}
       disabled={!!isActive}
       id="minutesAmmount" />
    </label>
    </FormContainer>
  )
}
