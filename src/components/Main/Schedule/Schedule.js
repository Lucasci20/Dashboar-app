import Title from "../../StyledComponents/Title";
import Select from "../../StyledComponents/Select";
import Input from "../../StyledComponents/Input";
import Header from "../../StyledComponents/Header";

import { ScheduleData } from "./ScheduleData";

import "./style.scss";

export default function Schedule() {
  return (
    <div className="schedule-container">
      <Header>
        <Title>Inspeções agendadas</Title>
        <div className="select">
          <Select>
            <option>Diário</option>
          </Select>
        </div>
      </Header>
      <div className="input">
        <Input />
      </div>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th className="data">Planejado</th>
              <th className="data">Realizado</th>
              <th className="data">Última atualização</th>
            </tr>
          </thead>
          <tbody>
            {ScheduleData.map((item, index) => {
              return (
                <tr>
                  <td className="name" key={index}>
                    {item.name}
                  </td>
                  <td className="data">{item.planned}</td>
                  <td className="data">{item.accomplished}</td>
                  <td className="data">{item.lastUpdate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
