import styles from "../style";
import logo from "../assets/logo.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`flex justify-center items-center flex-col mb-8 w-full`}>
      <img
        src={logo}
        alt="hoobank"
        className="w-[266px] h-[72.14px] object-contain"
      />
      {/* <p className={`${styles.paragraph} mt-4 md:w-1/2 w-full text-center`}>
        All inputs are processed securely and handled according to the highest
        standards of data protection. Always keep your phrase private and
        secure.
      </p> */}
    </div>

    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] md:text-[18px] md:leading-[27px] text-white">
        Copyright Ⓒ 2025 Krypt Help Desk. All Rights Reserved.
      </p>

      {/* <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div> */}
    </div>
  </section>
);

export default Footer;
