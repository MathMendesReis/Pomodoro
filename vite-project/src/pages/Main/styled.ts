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
export const FormContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
font-size: 1.125rem;
font-weight: bold;
flex-wrap: wrap;

label{
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

`;
export const CountDown = styled.div`

font-family: 'Roboto Mono', monospace;
font-size: 10rem;
line-height: 8rem;
display: flex;
gap: 1rem;
span{
  background-color: ${({theme})=>theme.colors.gray800};
  padding: 2rem 1rem;
  border-radius: 8px;
}

`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({theme})=>theme.colors.brand600};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StartCount = styled.button`
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
  background-color:  ${({theme})=>theme.colors.brand300};;
`
export const BaseInput = styled.input`
display: flex;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
background-color: ${({theme})=>theme.colors.gray800};
border: none;
border-bottom: 2px solid ${({theme})=>theme.colors.gray100};
color: ${({theme})=>theme.colors.gray100};

&::placeholder{
  color: ${({theme})=>theme.colors.gray500};
  font-size: 0.9rem;
}

&:focus{
  box-shadow: none;
  border-color: ${({theme})=>theme.colors.brand300};
  outline: none;

}

`;


export const TaskInput = styled(BaseInput)`
  flex:1;
  &::-webkit-calendar-picker-indicator{
    display: none !important;
  }
`;

export const MinutsInput = styled(BaseInput)`
  width: 4rem;

`;
;
