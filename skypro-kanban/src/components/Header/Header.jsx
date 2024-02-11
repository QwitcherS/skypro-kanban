import { useState } from "react";
import { Container } from "../Common/Common.styled";
import {
  HeaderBlock,
  HeaderBtnMainNew,
  HeaderLogo,
  HeaderLogoDark,
  HeaderLogoImg,
  HeaderNav,
  HeaderPopUserSet,
  HeaderStyle,
  HeaderUser,
  PopUserSetButton,
  PopUserSetButtonA,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  PopUserSetThemeInput,
  PopUserSetThemeP,
} from "./Header.styled";
function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);

  function togglePopUp() {
    setIsOpened((prev) => !prev);
  }
  return (
    <HeaderStyle>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
            <HeaderLogoImg src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogoDark>
            <a href="" target="_self">
              <HeaderLogoImg  src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogoDark>
          <HeaderNav>
            <HeaderBtnMainNew 
              id="btnMainNew"
              onClick={addCard}>
              Создать новую задачу
            </HeaderBtnMainNew>
            <HeaderUser href="# onClick={togglePopUp}>
              Ivan Ivanov
            </HeaderUser>
            {isOpened &&
              <HeaderPopUserSet className=" pop-user-set" id="user-set-target">
              <PopUserSetName>Ivan Ivanov</PopUserSetName>
              <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
              <PopUserSetTheme>
                <PopUserSetThemeP>Темная тема</PopUserSetThemeP>
                <PopUserSetThemeInput type="checkbox" className="checkbox" name="checkbox" />
                </PopUserSetTheme>
              <PopUserSetButton type="button" className="_hover03">
                <PopUserSetButtonA href="#popExit">Выйти</PopUserSetButtonA>
              </PopUserSetButton>
              </HeaderPopUserSet>
            }
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderStyle>
  );
}
export default Header;
