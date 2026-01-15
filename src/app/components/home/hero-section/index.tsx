import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { information } from "@/app/personal/personal";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>Hi, I am {information.personal_information.first_name}</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>
                {information.experience?.[0]?.role || "Full Stack Developer"}
              </h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Based in {information.personal_information.location}. Skilled in{" "}
              {information.technical_skills.frontend}. Contact:{" "}
              {information.personal_information.email}.
            </p>
            <a
              href="/resume/Rohit_Chauhan_Resume.pdf"
              download="Rohit_Chauhan_Resume.pdf"
              className="btn-animated relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
            >
              <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                Download PDF Resume
              </span>
            </a>
          </div>
          <Image
            src={getImgPath("/images/profile/profile_image.jpg")}
            alt="profile-image"
            width={685}
            height={650}
            className="block lg:hidden rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/profile/profile_image.jpg")}
          alt="profile-image"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1 rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default index;
