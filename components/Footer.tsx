import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/Data";
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
  return (
    <footer
      className="relative w-full pt-20 pb-10 overflow-hidden"
      id="contact"
    >
      {/* background grid */}
      <div className="absolute left-0 bottom-0 min-h-96 w-full pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <a href="/resume" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="View my Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="relative container flex mt-16 md:flex-row flex-col sm:justify-between justify-center gap-10 items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} KumarSatyaSriRam
        </p>

        <div className="flex gap-6 flex-wrap">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg bg-black-200 rounded-lg border border-black-300 hover:border-purple hover:scale-125 transition-all"
            >
              <a href={info.url} target="_blank" rel="noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};


export default Footer;
