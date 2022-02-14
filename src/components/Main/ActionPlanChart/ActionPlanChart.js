import Title from '../../StyledComponents/Title'
import Header from '../../StyledComponents/Header'
import CardContainer from '../../StyledComponents/CardContainer';

import { FiSettings } from "react-icons/fi";

export default function ActionPlanChart() {
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
                
            </div>
        </CardContainer>
    )
}