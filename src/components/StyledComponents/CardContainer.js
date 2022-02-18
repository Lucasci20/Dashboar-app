import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 48%;
    height: 370px;

    padding-top: 13px;
    padding-bottom: 30px;
    padding-left: 14px;
    padding-right: 19px;

    background: #FFFFFF;
    border: 0.5px solid #E4E4E4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    .chart {
    height: 230px;

    .apexcharts-legend.apx-legend-position-right {
        display: none;
    }
}

    @media(max-width: 1320px) {
        margin-top: 15px;
    }

    @media(max-width: 850px) {
        width: 100%;
    }
    @media(max-width: 440px) {
        height: 380px;
    }
`
