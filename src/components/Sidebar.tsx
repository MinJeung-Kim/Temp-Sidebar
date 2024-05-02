import { useState } from "react";
import {
  CategoryIcon,
  DashboardIcon,
  DownArrowIcon,
  MenuIcon,
  DefaultLogoIcon,
} from "@src/utils/icons";
import Profile from "./Profile";
import SubMenu from "./SubMenu";
import { S } from "./Style";

export type MenuType = {
  id: string;
  name: string;
  icon: JSX.Element;
  children?: string[];
};

const menu: MenuType[] = [
  { id: "1", name: "Dashboard", icon: <DashboardIcon /> },
  {
    id: "2",
    name: "Category",
    icon: <CategoryIcon />,
    children: ["Web Design", "Login Form", "Card Design"],
  },
  {
    id: "3",
    name: "Posts",
    icon: <CategoryIcon />,
    children: ["HTML", "CSS", "JavaScript & PHP"],
  },
];

export default function SideBar() {
  const [openSubMenu, setOpenSubMenu] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <S.Sidebar>
      <S.LogoDetails>
        <i>
          <DefaultLogoIcon />
        </i>
        <S.LogoName>CodingLab</S.LogoName>
      </S.LogoDetails>
      <S.NavLinks $isSub={openMenu}>
        {menu.map(({ id, icon, name, children }) => (
          <li key={id}>
            {children ? (
              <S.IocnLink onClick={() => toggleSubMenu(name)}>
                <a href="">
                  <i>{icon}</i>
                  <S.LinkName>{name}</S.LinkName>
                </a>
                <S.ArrowIcon $close={!openSubMenu[name]}>
                  <DownArrowIcon />
                </S.ArrowIcon>
              </S.IocnLink>
            ) : (
              <a href="">
                <i>{icon}</i>
                <S.LinkName>{name}</S.LinkName>
              </a>
            )}
            <SubMenu
              openMenu={openMenu}
              openSubMenu={openSubMenu}
              children={children}
              name={name}
            />
          </li>
        ))}
        <li>
          <Profile />
        </li>
      </S.NavLinks>
      <S.HomeSection>
        <S.HomeContent>
          <i>
            <MenuIcon />
          </i>
          <S.Text>Drop Down Sidebar</S.Text>
        </S.HomeContent>
      </S.HomeSection>
    </S.Sidebar>
  );
}
