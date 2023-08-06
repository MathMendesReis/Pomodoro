import styled from "styled-components";


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

