import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              const publishedAtRelativeToNow = formatDistanceToNow(
                cycle.startDate,
                {
                  locale: ptBR,
                  addSuffix: true,
                },
              );

              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{publishedAtRelativeToNow}</td>
                  <td>
                    {cycle.interrupedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {!cycle.interrupedDate && !cycle.finishedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}

                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
