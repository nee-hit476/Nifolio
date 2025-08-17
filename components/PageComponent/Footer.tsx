import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col gap-3">
        {/* Line */}
        <div className="h-[2px] md:w-9/12 bg-gray-300/10"></div>
        {/* Text */}
        <div className="flex flex-row justify-between md:w-9/12">
            <div className="text-amber-50/70">
          © 2025 Nihit. All rights reserved.
        </div>
        <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhsLVFJDbThhFgtMfXmHVfrPCljfxtHCHTxslHDGcwtSRssHTjtqttdcHQJGqXxDMHpdC">
            <IoMail className="size-6 text-amber-50/70" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
