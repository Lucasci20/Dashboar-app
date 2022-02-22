import Title from "../../StyledComponents/Title";
import Subtitle from "../../StyledComponents/Subtitle";
import Input from "../../StyledComponents/Input";
import Select from "../../StyledComponents/Select";
import TitleH3 from "../../StyledComponents/TitleH3";
import Status from "../../StyledComponents/Status";
import Header from "../../StyledComponents/Header";

import { ContainerData } from "./ContainerData";

import { BsChevronRight } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import "./style.scss";

export default function ActionPlansContainer() {
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
        {ContainerData.map((item, index) => {
          return (
            <div key={index} className="action-plan-status">
              <div className="name">
                <TitleH3>
                  {item.name}
                  <p>responsável: {item.responsible}</p>
                </TitleH3>
              </div>
              <div className="date">
                <div className="buttons">
                  <Status className={item.class}>Pendente</Status>
                  <span className={item.class}>
                    <BsChevronRight />
                  </span>
                  <Status>Realizado</Status>
                  <Subtitle>10:45 10/10/10</Subtitle>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
