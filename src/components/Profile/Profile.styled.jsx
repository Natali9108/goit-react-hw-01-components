import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0 auto;
  margin-bottom: 80px;

  width: 348px;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: ${props => props.theme.colors.primaryWhite};
`;

export const ProfileDescription = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;

  flex-direction: column;
  gap: 10px;
`;

export const ProfileAvatar = styled.img`
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const ProfileUserName = styled.p`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.black};
`;

export const ProfileTag = styled.p`
  display: flex;
  align-items: center;
  font-size: 22px;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.userTextColor};
`;

export const ProfileLocation = ProfileTag.withComponent('p');

export const StatsList = styled.ul`
  display: flex;
  height: 100px;
  background-color: ${props => props.theme.colors.statsBgColor};
`;

export const StatsItem = styled.li`
  display: flex;
  width: 116px;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-right: 1px solid
    ${props => props.theme.colors.statsBorderColor}};

  StatsItem:last-child {
    border: none;
  }
`;

export const StatsLabel = styled.span`
  font-size: 20px;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.userTextColor};
`;

export const StatsQuantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.black};
`;
