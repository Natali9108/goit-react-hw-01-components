import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.colors.primaryWhite};
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.children ? '#008000' : '#ff0000')};
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.01em;
`;
