import { CountDown, FormContainer, HomeContainer, MinutsInput, Separator, StartCount, TaskInput } from "./styled"
import { Play } from "@phosphor-icons/react";


export default function Main() {
    return (
    <HomeContainer>
      <form action="">
        <FormContainer>
        <label htmlFor="task"> vou trabalhar em
          <TaskInput
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

      <StartCount type="submit"> <Play/> começar </StartCount>
      </form>
    </HomeContainer>
    )
}

