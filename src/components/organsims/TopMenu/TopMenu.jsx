import { Burger, Icon, Button, Avatar } from '../../atoms';
import { Notification } from '../../molecles';
import search from '../../../assets/icons/topMenu/search.png';
import arrowDown from '../../../assets/icons/topMenu/arrowDown.png';
import * as S from './style';
const TopMenu = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.ContainerGroup1>
          <Burger />
          <span>
            <img src={search} alt="search" />
          </span>
        </S.ContainerGroup1>
        <S.ContainerGroup2>
          <Button label="Add project" />
          <Icon name="messages" folder="topMenu" />
          <Notification badgeContent={3} />
          <Avatar.Image AvatarName="Yakir" size="medium" />
          <div
            style={{
              backgroundImage: `url(${arrowDown})`,
              width: '0.4375rem',
              height: '0.8125rem',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              marginLeft: '0.75rem',
            }}
          />
        </S.ContainerGroup2>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};
export default TopMenu;
