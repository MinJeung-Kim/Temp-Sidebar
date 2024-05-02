import { S, SubMenuStyle } from "./Style";

type Props = {
  openMenu: boolean;
  openSubMenu: { [key: string]: boolean };
  children?: string[];
  name: string;
};

export default function SubMenu({
  openMenu,
  openSubMenu,
  children,
  name,
}: Props) {
  return (
    <SubMenuStyle $close={!openSubMenu[name]} $isSub={openMenu}>
      {openMenu && (
        <li>
          <S.SubLinkName $isSub={openMenu}>{name}</S.SubLinkName>
        </li>
      )}
      <li>
        {children?.map((sub) => (
          <a href="#" key={sub}>
            <S.SubLinkName $isSub={openMenu}>{sub}</S.SubLinkName>
          </a>
        ))}
      </li>
    </SubMenuStyle>
  );
}
