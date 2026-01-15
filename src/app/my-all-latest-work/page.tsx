"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { information } from "@/app/personal/personal";

const MyAllLatestWork = () => {
  return (
    <main className="min-h-screen bg-softGray py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My All Latest Work
          </h1>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            A showcase of my recent project mockups and designs.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-orange-700 transition-colors font-medium"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
          {information.projects.map((value, index) => {
            const firstLink = value.links && value.links.length > 0 ? value.links[0] : "#";
            const projectLink = 
              firstLink === "#" || firstLink.startsWith("http")
                ? firstLink
                : `https://${firstLink}`;

            return (
              <div key={index} className="group flex flex-col gap-3 xl:gap-6">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <Image
                    src={getImgPath(value.image)}
                    alt={value.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
      </div>
    </main>
  );
};

export default MyAllLatestWork;
