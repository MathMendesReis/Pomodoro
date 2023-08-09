import styled from "styled-components";

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
@media (max-width: 634px) {
  font-size: 6rem;
}

@media (max-width: 500px) {
  font-size: 4rem;
}

@media (max-width: 400px) {
  font-size: 1.7rem;
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









;
