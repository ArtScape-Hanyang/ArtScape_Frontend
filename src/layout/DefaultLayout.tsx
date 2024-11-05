import Header from "../components/header";
import { useState } from "react";

const DefaultLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      {children}
    </>
  );
};

export default DefaultLayout;
