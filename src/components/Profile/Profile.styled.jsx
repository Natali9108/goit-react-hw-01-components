import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0 auto;
  margin-bottom: 80px;

  width: 400px;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;

  flex-direction: column;
  gap: 10px;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.black};
`;

export const Tag = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.userTextColor};
`;

export const Location = Tag.withComponent('p');

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: ${props => props.theme.colors.statsBgColor};
`;

export const StatsItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 22px;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.userTextColor};
`;

export const Quantity = styled.span`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.black};
`;
