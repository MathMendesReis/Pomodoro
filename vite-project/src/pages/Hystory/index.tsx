import { HystoryContainer, Status, TableContainer } from "./styled";

export default function Hystory() {
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
          <tr>
            <td>tarefa</td>
            <td>duração</td>
            <td>inicio</td>
            <td><Status statusColor="green">Concluido</Status></td>
          </tr>
          <tr>
            <td>tarefa</td>
            <td>duração</td>
            <td>inicio</td>
            <td><Status statusColor="red">Concluido</Status></td>
          </tr>
          <tr>
            <td>tarefa</td>
            <td>duração</td>
            <td>inicio</td>
            <td><Status statusColor="yellow">Concluido</Status></td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
   </HystoryContainer>
    )
}

