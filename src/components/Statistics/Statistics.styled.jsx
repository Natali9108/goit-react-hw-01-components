import styled from '@emotion/styled';

export const StatContainer = styled.section`
  padding-top: 30px;

  width: 400px;
  margin: 0 auto;
  background-color: white;
`;

export const StatTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.userTextColor};
`;
