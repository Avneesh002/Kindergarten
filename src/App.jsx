import "./App.css";
import Nav from "./components/navbar";
import { useMediaQuery } from "@chakra-ui/react";
// import { useState } from "react";
import Welcome from "./components/welcome";
import ClassesOffer from "./components/classes";
import Teachers from "./components/teachers";
import Footer from "./components/footer";

function App() {
  const [small] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Nav small={small} />
      <Welcome small={small} />
      <ClassesOffer small={small} />
      <Teachers small={small} />
      <Footer small={small} />
    </>
  );
}

export default App;
