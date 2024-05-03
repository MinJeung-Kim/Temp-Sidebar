import { useContext, useRef, useState } from "react";
import { ThemeContext } from "@src/App";
import { avatar2 } from "@src/utils/images";
import {
  AnalyticsIcon,
  ApartmentIcon,
  HomeIcon,
  LogOutIcon,
  PeopleIcon,
  SearchIcon,
  SettingIcon,
  DownArrowIcon,
} from "@src/utils/icons";
import { S } from "./styles";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { setTheme, theme } = useContext(ThemeContext)!;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current?.focus();
    } else {
      // search functionality
    }
  };

  return (
    <S.Sidebar isOpen={sidebarOpen}>
      <S.SidebarButton
        isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p: boolean) => !p)}
      >
        <DownArrowIcon />
      </S.SidebarButton>
      <S.Logo>
        <img src={avatar2} alt="logo" />
      </S.Logo>
      <S.Search
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <S.SearchIcon>
          <SearchIcon />
        </S.SearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </S.Search>
      <S.Divider />
      <S.Nav isOpen={sidebarOpen}>
        {linksArray.map(({ icon, label, notification, to }) => (
          <S.LinkContainer key={label} isActive={pathname === to}>
            <S.Link
              to={to}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
              <S.LinkIcon>{icon}</S.LinkIcon>
              {sidebarOpen && (
                <>
                  <S.LinkLabel>{label}</S.LinkLabel>
                  {!!notification && (
                    <S.LinkNotification>{notification}</S.LinkNotification>
                  )}
                </>
              )}
            </S.Link>
          </S.LinkContainer>
        ))}
        <S.Divider />
        {secondaryLinksArray.map(({ label, icon, to }) => (
          <S.LinkContainer key={label} isActive={pathname === to}>
            <S.Link
              to={"/"}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
              <S.LinkIcon>{icon}</S.LinkIcon>
              {sidebarOpen && <S.LinkLabel>{label}</S.LinkLabel>}
            </S.Link>
          </S.LinkContainer>
        ))}
      </S.Nav>

      <S.Divider />
      <S.Theme>
        {sidebarOpen && <S.ThemeLabel>Dark Mode</S.ThemeLabel>}
        <S.ThemeToggler
          isActive={theme === "dark"}
          onClick={() =>
            setTheme((p: string) => (p === "light" ? "dark" : "light"))
          }
        >
          <S.ToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </S.ThemeToggler>
      </S.Theme>
    </S.Sidebar>
  );
}

const linksArray = [
  {
    label: "Home",
    icon: <HomeIcon />,
    to: "/",
    notification: 0,
  },
  {
    label: "Statistics",
    icon: <AnalyticsIcon />,
    to: "/statistics",
    notification: 3,
  },
  {
    label: "Customers",
    icon: <PeopleIcon />,
    to: "/customers",
    notification: 0,
  },
  {
    label: "Diagrams",
    icon: <ApartmentIcon />,
    to: "/diagrams",
    notification: 1,
  },
];

const secondaryLinksArray = [
  { label: "Settings", icon: <SettingIcon />, to: "/" },
  { label: "Logout", icon: <LogOutIcon />, to: "/" },
];
