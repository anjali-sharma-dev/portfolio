import React, { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
const Home = lazy(() => import("./components/Home"));
// const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Project = lazy(() => import("./components/Project"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
import Layout from "./components/Layout";



function App() {
  return (
    <>
        <Layout>
        <Suspense fallback={<div className="text-white p-6">Loading...</div>}>
          <Home />
          {/* <Education /> */}
          <Skills/>
          <Project/>
          <Contact />
          <Footer />
        </Suspense>
      </Layout>
   
    </>
  );
}

export default App;
