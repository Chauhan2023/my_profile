import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Illustration */}
        <div className="relative w-full max-w-md mx-auto mb-12 animate-fade-in-up">
          <svg
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            aria-labelledby="illustration-title"
            role="img"
          >
            <title id="illustration-title">
              404 Page Not Found Illustration
            </title>

            {/* Background blobs */}
            <circle
              cx="200"
              cy="150"
              r="120"
              className="fill-softGray/50 dark:fill-gray/20"
            />
            <circle cx="280" cy="100" r="40" className="fill-primary/10" />

            {/* 404 Text Graphic */}
            <text
              x="200"
              y="160"
              textAnchor="middle"
              className="text-[120px] font-bold fill-black dark:fill-white font-sans"
              style={{ fontSize: "120px", fontWeight: "bold" }}
            >
              404
            </text>

            {/* Decorative elements */}
            <path
              d="M100 220 Q 200 250 300 220"
              stroke="#FE4300"
              strokeWidth="4"
              strokeLinecap="round"
              className="wave"
              style={{ transformOrigin: "center" }}
            />

            {/* Abstract geometric shapes matching site theme */}
            <rect
              x="50"
              y="50"
              width="20"
              height="20"
              rx="4"
              className="fill-secondary rotate-12"
            />
            <rect
              x="330"
              y="200"
              width="30"
              height="30"
              rx="15"
              className="fill-primary/20"
            />
            <path
              d="M350 80 L360 100 L340 100 Z"
              className="fill-black dark:fill-white rotate-45"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Oops! It seems the page you are looking for has vanished into the
            digital void. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            {/* Primary Action */}
            <Link
              href="/"
              className="btn-animated relative overflow-hidden cursor-pointer w-fit py-3 px-8 border border-primary rounded-full group inline-block"
            >
              <span className="relative z-10 text-lg font-medium text-black group-hover:text-white transition-colors duration-300">
                Back to Home
              </span>
            </Link>

            {/* Secondary Action */}
            <Link
              href="/"
              className="text-black dark:text-white font-medium hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary pb-1"
            >
              Contact Support
            </Link>
          </div>

          {/* Search Suggestion (Optional visual element) */}
          <div className="mt-16 pt-10 border-t border-softGray max-w-lg mx-auto">
            <p className="text-sm text-secondary mb-4">
              Looking for something specific?
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search site..."
                className="w-full py-3 px-6 rounded-full bg-softGray focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                disabled
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
