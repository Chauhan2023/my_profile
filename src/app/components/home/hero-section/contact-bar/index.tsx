"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { information } from "@/app/personal/personal";

const ContactBar = () => {
  const contactItems = [
    {
      type: "email",
      label: information.personal_information.email,
      icon: "/images/icon/mail-icon.svg",
      link: `mailto:${information.personal_information.email}`,
    },
    {
      type: "phone",
      label: information.personal_information.phone,
      icon: "/images/icon/call-icon.svg",
      link: `tel:${information.personal_information.phone}`,
    },
  ];

  const getSocialIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("linkedin")) return "/images/icon/linkedin-icon.svg";
    if (lowerName.includes("facebook")) return "/images/icon/facebook-icon.svg";
    if (lowerName.includes("dribbble")) return "/images/icon/dribble-icon.svg";
    return "/images/icon/web-icon.svg";
  };

  return (
    <section>
      <div className="border-t border-softGray bg-white/50 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 md:py-6">
            {/* Contact Items */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
              {contactItems.map((value, index) => (
                <Link
                  key={index}
                  href={value.link}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <Image
                      src={getImgPath(value.icon)}
                      alt={value.type}
                      width={14}
                      height={14}
                      className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>

                  <h6 className="text-sm md:text-base font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                    {value.label}
                  </h6>
                </Link>
              ))}
            </div>

            {/* Social Items */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              {information.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  className="group"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary transition-all duration-300 hover:-translate-y-1">
                    <Image
                      src={getImgPath(getSocialIcon(social.name))}
                      alt={social.name}
                      width={16}
                      height={16}
                      className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
