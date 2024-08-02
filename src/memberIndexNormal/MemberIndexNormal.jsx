import NavBarShop from "../components/NavBarShop";
import MemberSideBar from "../components/MemberSideBar";
import SubTitleYellow from "../components/SubTitleYellow";
import MemberForm from "../components/MemberForm";
import ChatBtn from "../components/ChatBtn";
import Footer from "../components/Footer";
const MemberIndexNormal = () => {
  return (
    <>
      <NavBarShop />
      <div class="row mw-100 bg-white">
        <div className="col-3  border-end border-3">
          <MemberSideBar />
        </div>
        <div className="col-9 ">
          <SubTitleYellow title="會員資料" />
          <MemberForm />
          <ChatBtn />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberIndexNormal;
