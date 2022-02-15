import Sidebar from '../components/Sidebar/Sidebar'
import EventHistory from '../components/Main/EventHistory/EventHistory'
import Inspections from '../components/Main/Inspections/Inspections'
import Schedule from '../components/Main/Schedule/Schedule'
import ActionPlansTable from '../components/Aside/ActionPlanTable/ActionPlansTable'
import ActionPlan from '../components/Main/ActionPlanChart/ActionPlan'
import AsideActionPlan from '../components/Aside/ActionPlanChart/AsideActionPlans'


import '../styles/home.scss'

export default function Home() {
    return (
        <div className='container'>
            <Sidebar />
            <main>
                <h1>Painel de controle</h1>
                <div className='event-history'>
                    <EventHistory />
                </div>

                <div className='cards'>
                    <Inspections />
                    <ActionPlan />
                </div>

                <div className='schedule'>
                    <Schedule />
                </div>
            </main>
            
            <aside>
                <div className='action-plan-chart'>
                    <AsideActionPlan />
                </div>
                <div className='action-plan-table'>
                    <ActionPlansTable />
                </div>
            </aside>
        </div>
    )
}