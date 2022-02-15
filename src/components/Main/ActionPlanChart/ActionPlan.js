import Title from '../../StyledComponents/Title'
import Header from '../../StyledComponents/Header'
import CardContainer from '../../StyledComponents/CardContainer';

import './style.scss'

import ActionPlanChart from './ActionPlanChart'

import { FiSettings } from "react-icons/fi";

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

            <div className='chart'>
                <ActionPlanChart />
            </div>
        </CardContainer>
    )
}