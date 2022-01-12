import React from "react";
import Footer from "./Footer2";
import HeaderNav from "./HeaderNav2";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function MainPage() {
  return (
    <div>
      <HeaderNav />

      <div className="bodyContainer sectionOne">
        <Section1 />
      </div>

      <div className="bodyContainer sectionTwo">
        <Section2 />
      </div>

      <div className="bodyContainer sectionThree">
        <Section3 />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
