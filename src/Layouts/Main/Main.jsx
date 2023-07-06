import Header from "../../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className='w-full'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
