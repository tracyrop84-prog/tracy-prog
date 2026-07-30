import Navigation from "./Navigation";
import MainSection from "./MainSection";
import SideBar from "./SideBarSection";
import "./index.css";

function AmazonPage() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div style={{display:"flex"}}>
        <SideBar />
        <MainSection></MainSection>
      </div>
    </div>
  );
}
export default AmazonPage;
