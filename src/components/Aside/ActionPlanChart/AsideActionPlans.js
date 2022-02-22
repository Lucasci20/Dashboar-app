import Title from "../../StyledComponents/Title";
import Header from "../../StyledComponents/Header";

import CircleChart from "./CircleChart";

import "./style.scss";
import { FiSettings } from "react-icons/fi";

import "./style.scss";

export default function AsideActionPlans() {
  return (
    <div className="aside-action-plans-chart">
      <Header>
        <Title>
          Plano de ação
          <p>Status do dia</p>
        </Title>
        <i>
          <FiSettings />
        </i>
      </Header>

      <div className="chart">
        <CircleChart />
      </div>
    </div>
  );
}
