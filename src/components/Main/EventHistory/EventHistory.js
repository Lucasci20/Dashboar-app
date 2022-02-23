import Title from "../../StyledComponents/Title";
import Select from "../../StyledComponents/Select";
import Header from "../../StyledComponents/Header";
import Span from "../../StyledComponents/Span";

import EventHistoryChart from "./EventHistoryChart";

import "./style.scss";
import { FiSettings } from "react-icons/fi";
import { CgShapeCircle } from "react-icons/cg";

export default function EventHistory() {
  return (
    <div className="event-history-container">
      <Header>
        <Title>Histórico de eventos</Title>
        <div>
          <Select>
            <option>diário</option>
          </Select>
          <i>
            <FiSettings />
          </i>
        </div>
      </Header>

      <div className="chart">
        <EventHistoryChart />
      </div>
      <div className="info">
        <div className="inspections">
          <i>
            <CgShapeCircle />
          </i>
          <Span>Inspeções realizadas</Span>
        </div>
        <div className="action-plans">
          <i>
            <CgShapeCircle />
          </i>
          <Span>Planos de ação criados</Span>
        </div>
      </div>
    </div>
  );
}
