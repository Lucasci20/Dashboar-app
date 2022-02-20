import styled from "styled-components";

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .status {
    div {
      display: flex;
      align-items: center;
    }
  }

  .first {
    color: #7fc008;
  }
  .second {
    color: #db8c28;
  }

  .third {
    color: #eb5757;
  }

  .time {
    width: 40%;
    white-space: nowrap;
    p {
      margin-bottom: 5px;
    }
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
