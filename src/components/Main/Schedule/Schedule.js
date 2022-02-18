import { FiSettings } from "react-icons/fi";

import Title from "../../StyledComponents/Title";
import Select from "../../StyledComponents/Select";
import Input from '../../StyledComponents/Input'
import Header from '../../StyledComponents/Header'

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
                    
                </thead>
            </table>
        </div>
    )
}