import styled from 'styled-components'

export const Button = styled.button`
  display: block;
  width: ${props => (props.small ? 'auto' : '100%')};
  border: solid 1px rgba(184, 181, 192, 1);
  background-color: rgba(184, 181, 192, 0.7);
  color: #333;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  padding: ${props => (props.small ? '5px' : '10px 20px')};
  margin: 10px 0;

  &:hover {
    background-color: rgba(184, 181, 192, 1);
  }
`
