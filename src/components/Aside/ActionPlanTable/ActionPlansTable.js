import Title from "../../StyledComponents/Title";
import Subtitle from "../../StyledComponents/Subtitle";
import Input from "../../StyledComponents/Input";
import Select from "../../StyledComponents/Select";
import TitleH3 from "../../StyledComponents/TitleH3";
import Status from "../../StyledComponents/Status";
import Divider from "../../StyledComponents/Divider";
import Header from "../../StyledComponents/Header";

import { BsChevronRight } from "react-icons/bs"
import { FiSettings } from "react-icons/fi";
import "./style.scss";

export default function ActionPlansTable() {
  return (
    <div className="action-container">
      <Header>
        <Title>
          Planos de ação
          <p>atualizações</p>
        </Title>
        <i>
          <FiSettings />
        </i>
      </Header>
      <div className="input">
        <Input />
        <Select>
          <option>pendente</option>
        </Select>
      </div>

      <section className="content">
        <div className="action-plan-status">
          <div className="name">
            <TitleH3>
              Nome do plano de ação
            <p>responsável: Bruno Barros</p>
            </TitleH3>
          </div>
          <div className="date">
            <Status>
              Realizado
            </Status>
            <Subtitle>10:45 10/10/10</Subtitle>
          </div>
        </div>

        <Divider />

        <div className="action-plan-status">
          <div className="name">
          <TitleH3>
              Nome do plano de ação
            <p>responsável: Bruno Barros</p>
          </TitleH3>
          </div>
          <div className="date">
            <Status>Realizado</Status>
            <Subtitle>10:45 10/10/10</Subtitle>
          </div>
        </div>

        <Divider />

        <div className="action-plan-status">
          <div className="name">
          <TitleH3>
              Nome do plano de ação
            <p>responsável: Bruno Barros</p>
            </TitleH3>
          </div>
          <div className="date">
            <Status>Realizado</Status>
            <Subtitle>10:45 10/10/10</Subtitle>
          </div>
        </div>

        <Divider />

        <div className="action-plan-status">
          <div className="name">
          <TitleH3>
              Nome do plano de ação
            <p>responsável: Bruno Barros</p>
            </TitleH3>
          </div>
          <div className="date">
            <Status>Realizado</Status>
            <Subtitle>10:45 10/10/10</Subtitle>
          </div>
        </div>

        <Divider />

        <div className="action-plan-status">
          <div className="name">
          <TitleH3>
              Nome do plano de ação
            <p>responsável: Bruno Barros</p>
            </TitleH3>
          </div>
          <div className="date">
            <Status>Realizado</Status>
            <Subtitle>10:45 10/10/10</Subtitle>
          </div>
        </div>

        <Divider />

        <div className="action-plan-status">
          <div className="name">
          <TitleH3>
              Nome do plano de ação
            <p>responsável: Bruno Barros</p>
            </TitleH3>
          </div>
          <div className="date">
            <Status>Realizado</Status>
            <Subtitle>10:45 10/10/10</Subtitle>
          </div>
        </div>

        <Divider />

        <div className="action-plan-status">
          <div className="name">
          <TitleH3>
              Nome do plano de ação
            <p>responsável: Bruno Barros</p>
            </TitleH3>
          </div>
          <div className="date">
            <Status>Realizado</Status>
            <Subtitle>10:45 10/10/10</Subtitle>
          </div>
        </div>

        <Divider />

        <div className="action-plan-status">
          <div className="name">
          <TitleH3>
              Nome do plano de ação
            <p>responsável: Bruno Barros</p>
            </TitleH3>
          </div>
          <div className="date">
            <Status>Realizado</Status>
            <Subtitle>10:45 10/10/10</Subtitle>
          </div>
        </div>
      </section>
    </div>
  );
}
