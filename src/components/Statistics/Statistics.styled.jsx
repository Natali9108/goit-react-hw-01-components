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
