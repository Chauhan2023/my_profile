"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { information } from "@/app/personal/personal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm currently available for freelance work and open to new
            opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Email Card */}
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Image
                src={getImgPath("/images/icon/mail-icon.svg")}
                alt="email"
                width={32}
                height={32}
                className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Email Me</h3>
            <p className="text-gray-500 mb-6 text-sm">
              For project inquiries and collaborations.
            </p>
            <a
              href={`mailto:${information.personal_information.email}`}
              className="text-lg font-medium text-primary hover:text-orange-700 transition-colors break-all"
            >
              {information.personal_information.email}
            </a>
          </div>

          {/* Phone Card */}
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Image
                src={getImgPath("/images/icon/call-icon.svg")}
                alt="phone"
                width={32}
                height={32}
                className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Call Me</h3>
            <p className="text-gray-500 mb-6 text-sm">
              Available during working hours.
            </p>
            <a
              href={`tel:${information.personal_information.phone}`}
              className="text-lg font-medium text-primary hover:text-orange-700 transition-colors"
            >
              {information.personal_information.phone}
            </a>
          </div>

          {/* Location/Socials Card */}
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <Image
                src={getImgPath("/images/icon/web-icon.svg")}
                alt="socials"
                width={32}
                height={32}
                className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Follow Me</h3>
            <p className="text-gray-500 mb-6 text-sm">
              {information.personal_information.location}
            </p>
            <div className="flex gap-4">
              {information.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
