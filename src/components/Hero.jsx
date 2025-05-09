import styles from "../style";
import { discount, robot } from "../assets";
import robott from "../assets/robott.png";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col md:px-16 py-5`}>
      <div className={`flex-1 ${styles.flexStart} flex-col px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[30px] text-white ss:leading-[100.8px] leading-[50px]">
            Access Your <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Digital Wallets</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[30px] text-white ss:leading-[100.8px] leading-[50px] w-full">
          with Confidence
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Securely explore, connect, and manage your cryptocurrency wallets
          using your 12-word recovery phrase.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robott}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
