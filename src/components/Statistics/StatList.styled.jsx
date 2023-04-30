import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 5px;
  width: 80px;
  background-color: ${props => props.theme.colors.renderColor};
`;

export const StatsLabel = styled.span`
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.primaryBlack};
`;

export const StatsPercentage = styled.span`
  font-weight: 700;
  font-size: 22px;
  color: ${props => props.theme.colors.primaryBlack};
`;
