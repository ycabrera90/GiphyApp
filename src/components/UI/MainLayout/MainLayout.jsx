import MainHeader from '../../MainHeader/MainHeader'
import InfoBar from '../../InfoBar/InfoBar'



const MainLayout = ({ children }) => {

  return (
    <>
      <MainHeader />
      <InfoBar />
      {children}
    </>
  );
};



export default MainLayout