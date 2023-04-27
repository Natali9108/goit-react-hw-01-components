import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  background-color: ${props => props.theme.colors.renderColor};
`;
