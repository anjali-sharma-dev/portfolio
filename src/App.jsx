import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Home />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
