import { FiSettings } from "react-icons/fi";

import Title from "../../StyledComponents/Title";
import Select from "../../StyledComponents/Select";
import Input from '../../StyledComponents/Input'
import Header from '../../StyledComponents/Header'
import Divider from '../../StyledComponents/Divider'

import './style.scss'

export default function Schedule() {
    return (
        <div className="schedule-container">
            <Header>
                <Title>
                    Inspeções agendadas
                </Title>
                <div className="select">
                    <Select>
                        <option>Diário</option>
                    </Select>
                </div>
            </Header>
            <div className="input">
                <Input />
            </div>

            <table className="table">
                <thead>
                    <th className="name">Nome</th>
                    <tr>
                        <th>planejado</th>
                        <th>realizado</th>
                        <th>Última atualização</th>
                    </tr>
                </thead>

            </table>
        </div>
    )
}