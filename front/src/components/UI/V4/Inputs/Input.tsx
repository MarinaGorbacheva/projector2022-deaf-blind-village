import styled from 'styled-components/macro';

export const Input = styled.input`
  width: 100%;
  max-width: 340px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  padding: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  background: ${(props) => props.theme.v2.cover};
  border: 1px solid ${(props) => props.theme.v2.dropdownBorder};
  color: ${(props) => props.theme.v2.blackText};
  
  &:placeholder {
    color: #edf0f6;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }
`;
