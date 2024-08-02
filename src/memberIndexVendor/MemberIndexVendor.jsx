import NavBarShop from "../components/NavBarShop";
import MemberVenderSideBar from "../components/MemberVenderSideBar";
import SubTitleYellow from "../components/SubTitleYellow";
import VendorForm from "../components/VendorForm";
import ChatBtn from "../components/ChatBtn";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MemberIndexVendor = () => {
  const [vendorData, setVendorData] = useState(null);
  const { vid } = useParams();

  console.log("User ID:", vid);

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3200/vendor/api/profile/1`
        );
        setVendorData(response.data);
        // console.log("Vendor Data:", response.data); // 數據首次被獲取時在控制台顯示
      } catch (error) {
        console.error("Error fetching vendor data:", error);
      }
    };

    fetchVendorData();
  }, []); // 空陣列表示這個效果只在組件首次渲染時運行

  return (
    <>
      <NavBarShop />
      <div class="row bg-white postion-relavive">
        <div className="col-3  border-end border-3">
          <MemberVenderSideBar />
        </div>
        <div className="col-9 ">
          <SubTitleYellow title="會員資料" />
          {vendorData ? <VendorForm profile={vendorData} /> : <p>Loading...</p>}
          <ChatBtn />
        </div>
      </div>
    </>
  );
};
export default MemberIndexVendor;
