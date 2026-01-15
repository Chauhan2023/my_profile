"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { information } from "@/app/personal/personal";

const LatestWork = () => {
  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Projects</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {information.projects.slice(0, 4).map((value, index) => {
                // Use image from personal.tsx, fallback to placeholder if not found
                const projectImage =
                  value.image || `/images/work/work-img-${(index % 6) + 1}.jpg`;
                const projectLink = value.links[0].startsWith("http")
                  ? value.links[0]
                  : `https://${value.links[0]}`;

                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-video">
                      <Image
                        src={getImgPath(projectImage)}
                        alt={value.name}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Link
                        href={projectLink}
                        target="_blank"
                        className="absolute top-0 left-0 backdrop-blur-sm bg-black/40 w-full h-full hidden group-hover:flex rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <span className="flex justify-center items-center p-5 w-full">
                          <div className="bg-primary/90 p-4 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </span>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-0 xl:gap-2">
                      <div className="flex items-center justify-between group-hover:text-primary transition-colors duration-300">
                        <Link href={projectLink} target="_blank">
                          <h5 className="font-bold text-xl">{value.name}</h5>
                        </Link>
                        <Image
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="right-arrow-icon"
                          width={30}
                          height={30}
                          className="transform group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                      <p className="line-clamp-2 text-sm text-secondary font-medium">
                        {value.description[0]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/my-all-latest-work"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm font-semibold"
              >
                See More Projects
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
