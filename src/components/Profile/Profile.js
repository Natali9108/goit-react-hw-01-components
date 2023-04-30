import PropTypes from 'prop-types';
import { BiAt } from 'react-icons/bi';
import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  ProfileUserName,
  ProfileTag,
  ProfileLocation,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt={username} />
        <ProfileUserName>{username}</ProfileUserName>

        <ProfileTag>
          <BiAt />
          {tag}
        </ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
