import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "../../components/layout";
import Testimonials from "../../components/Why-usComponents/Testimonials";
import Topics from "../../components/Why-usComponents/Topics";

const WhyUs = () => {
  return (
    <Layout title="Why us?" noLayout={true}>
      <NavBar /> 
      <Topics/>
      <Testimonials/>
      <Footer />
    </Layout>
  );
};

export default WhyUs;
