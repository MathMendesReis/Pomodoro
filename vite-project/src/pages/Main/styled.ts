import styled from "styled-components";

export const HomeContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=>theme.colors.gray800};


  form{
    display: flex ;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;

  }
`;




export const BaseButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  font-weight: bold;
  cursor: pointer;
  color: ${({theme})=>theme.colors.gray100};

  &:disabled{
    cursor: not-allowed;
    opacity: 0.7;
  }
`



export const StartCount = styled(BaseButton)`
  background-color:  ${({theme})=>theme.colors.brand100};
  &:hover:not(:disabled){
    background-color:  ${({theme})=>theme.colors.brand300};;
  }


`
export const StopButton = styled(BaseButton)`
background-color:  ${({theme})=>theme.colors.darkRed};
  &:hover:not(:disabled){
    background-color:  ${({theme})=>theme.colors.red};;
  }
`

