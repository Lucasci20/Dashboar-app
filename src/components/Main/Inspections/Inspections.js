import Title from "../../StyledComponents/Title";
import Header from "../../StyledComponents/Header";
import { CardContainer } from "../../StyledComponents/CardContainer";
import Span from "../../StyledComponents/Span";
import { CardInfo } from "../../StyledComponents/CardInfo";

import InspectionsChart from "./InspectionsChart";

import { FiSettings } from "react-icons/fi";
import { CgShapeCircle } from "react-icons/cg";

export default function Inspections() {
  return (
    <CardContainer>
      <Header>
        <Title>
          Inspeções
          <p>Status do dia</p>
        </Title>
        <i>
          <FiSettings />
        </i>
      </Header>

      <div className="chart">
        <InspectionsChart />
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
    </CardContainer>
  );
}
