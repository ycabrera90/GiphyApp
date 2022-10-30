import { FC, memo } from "react";
import MainHeader from "../MainHeader/MainHeader";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => (
  <>
    <MainHeader />
    {children}
  </>
);

export default memo(MainLayout);
