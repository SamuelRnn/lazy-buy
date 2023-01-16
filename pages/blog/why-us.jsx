import Layout from "../../components/MainLayout";
import { motion } from "framer-motion";
import Testimonials from "../../components/Elements/Testimonials";
import Topics from "../../components/Elements/Topics";

const WhyUs = () => {
  return (
    <Layout title="Why us?">
      <Topics />
      <Testimonials />
    </Layout>
  );
};

export default WhyUs;
