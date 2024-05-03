import Sidebar from "./Sidebar/Sidebar";
import { S } from "./styles";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <S.Layout>
      <Sidebar />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
}
