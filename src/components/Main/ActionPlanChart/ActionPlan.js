import Title from "../../StyledComponents/Title";
import Header from "../../StyledComponents/Header";
import { CardContainer } from "../../StyledComponents/CardContainer";
import { CardInfo } from "../../StyledComponents/CardInfo";
import Subtitle from "../../StyledComponents/Subtitle";
import Span from "../../StyledComponents/Span";

import ActionPlanChart from "./ActionPlanChart";

import { FiSettings } from "react-icons/fi";
import { CgShapeCircle } from "react-icons/cg";

export default function ActionPlan() {
  return (
    <CardContainer>
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
        <ActionPlanChart />
      </div>
      <CardInfo>
        <div className="status">
          <div className="first">
            <CgShapeCircle />
            <Span>Realizados - 58.6%</Span>
          </div>
          <div className="second">
            <CgShapeCircle />
            <Span>Em aberto - 34.9%</Span>
          </div>
          <div className="third">
            <CgShapeCircle />
            <Span>Não Realizadas - 6.5%</Span>
          </div>
        </div>

        <div className="time">
          <Subtitle>Média de tempo</Subtitle>
          <div>
            <Span>Hoje</Span>
            <Span>10 min</Span>
          </div>
          <div>
            <Span>Últimos 7 dias</Span>
            <Span>10 min</Span>
          </div>
          <div>
            <Span>Últimos 30 dias</Span>
            <Span>10 min</Span>
          </div>
        </div>
      </CardInfo>
      <Title>Visualizar detalhes</Title>
    </CardContainer>
  );
}
