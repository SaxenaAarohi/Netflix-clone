import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-16 py-20">
      <div className="flex justify-center space-x-16 mb-14 text-3xl md:text-7xl">
        <FaFacebookF className="hover:text-white cursor-pointer transition duration-300" />
        <FaInstagram className="hover:text-white cursor-pointer transition duration-300" />
        <FaTwitter className="hover:text-white cursor-pointer transition duration-300" />
        <FaYoutube className="hover:text-white cursor-pointer transition duration-300" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-2xl md:text-4xl text-center md:text-left">
        <div className="space-y-5">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </div>
        <div className="space-y-5">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>
        <div className="space-y-5">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
        <div className="space-y-5">
          <p>Media Centre</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
}
