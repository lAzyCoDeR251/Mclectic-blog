import ContactTop from "../components/files/ContactTop";
import FAQ from "../components/files/FAQ";
import BottomFooter from "../components/Header_footer/BottomFooter";
import { Divider } from "@mui/material";

const Contact = () => {
  return (
    <div className="bg-fixed-contact h-[200vh]">
      <ContactTop />
      <Divider className="relative top-96 mt-32" />
      <FAQ />
      <BottomFooter />
    </div>
  );
};

export default Contact;
