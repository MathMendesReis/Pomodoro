import { useContext } from "react";
import { HystoryContainer, Status, TableContainer } from "./styled";
import { CyclesContext } from "../../context/cyclesContext/cyclesContext";
import {formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";

export default function Hystory() {
    const {cycles} = useContext(CyclesContext)
    return (
   <HystoryContainer>
    <h1>Meu histórico</h1>

    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Inicio</th>
            <th>Concluido</th>
          </tr>
        </thead>
        <tbody>
          {cycles.map(cycle => (
          <tr>
            <td>{cycle.task}</td>
            <td>{cycle.minutsAmmout} minutos</td>
            <td>{formatDistanceToNow(cycle.startDate, {
              addSuffix: true,
              locale:ptBR
            })}</td>
            <td>
            {cycle.finishedDate && <Status statuscolor="green" >concluido</Status>}
            {cycle.interruptDate && <Status statuscolor="red" >interrompido</Status>}
            {!cycle.finishedDate && !cycle.interruptDate  && <Status statuscolor="yellow" >em andamento</Status>}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
   </HystoryContainer>
    )
}

