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
          <Avatar AvatarName="Yakir" />
          <div
            style={{
              backgroundImage: `url(${arrowDown})`,
              width: '7px',
              height: '13px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              marginLeft: '12px',
            }}
          />
        </S.ContainerGroup2>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};
export default TopMenu;
