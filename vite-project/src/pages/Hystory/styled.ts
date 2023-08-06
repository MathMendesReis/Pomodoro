import styled from "styled-components";


export const HystoryContainer = styled.main`
flex: 1;
padding: 3.5rem;
display: flex;
flex-direction: column;

h1{
  font-size: 1.5rem;
  color: ${({theme})=>theme.colors.gray100};
}



`;

export const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table{
    width: 100%;
    border-collapse:collapse;
    min-width: 600px;

    th{
      background-color:  ${({theme})=>theme.colors.gray800};
      padding: 1rem;
      text-align: left;
      color:  ${({theme})=>theme.colors.gray100};
      font-size: 0.875rem;
      line-height: 1. 6;

      &:first-child{
        border-top-left-radius:8px;
        padding-left: 1.5rem;
      }
      &:last-child{
        border-bottom-right-radius:8px;
        padding-right: 1.5rem;
      }
    }


    td{
      background-color:  ${({theme})=>theme.colors.gray800};
      padding: 1rem;
      text-align: left;
      color:  ${({theme})=>theme.colors.gray100};
      font-size: 0.875rem;
      line-height: 1. 6;
      border-top: 3px solid ${({theme})=>theme.colors.gray600};
      &:first-child{
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child{
        padding-right: 1.5rem;
      }
    }
  }

`;

interface StatusProps{
  statuscolor:'yellow' | 'red' | 'green'
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before{
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props)=>props.theme.colors[props.statuscolor]};
  }
`;
