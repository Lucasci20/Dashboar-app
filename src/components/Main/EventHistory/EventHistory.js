import Title from '../../StyledComponents/Title'
import Select from '../../StyledComponents/Select'
import Header from '../../StyledComponents/Header'

import EventHistoryChart from './EventHistoryChart'

import './style.scss'
import { FiSettings } from "react-icons/fi";

export default function EventHistory() {
    return (
        <div className='event-history-container'>
            <Header>
                <Title>
                    Histórico de eventos
                </Title>
                <div>
                    <Select>
                        <option>diário</option>
                    </Select>
                    <i>
                        <FiSettings />
                    </i>
                </div>
            </Header>

            <div className='chart'>
                <EventHistoryChart />
            </div>
        </div>
    )
}