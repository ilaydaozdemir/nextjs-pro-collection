import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#003d5b] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-2">
                Join our newsletter
              </h2>
              <p className="text-white/80">
                Get the latest products,promotions and tech news delivered to
                your inbox
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email adress"
                  className="px-5 py-3 transition-all rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#edae49] min-w-[240px]"
                />
                <button
                  type="submit"
                  className="bg-[#edae49] hover:bg-[#edae49]/90 text-white px-6 py-3 rounded-lg transition-all hover:scale-105 font-medium flex items-center justify-center"
                >
                  Subscribe <i className="bx bx-envelope ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols md:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center mb-6">
              <div className="text-[#003d5b] bg-[#edae49] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mr-2">
                SB
              </div>
              <span className="text-xl font-bold text-[#003d5b]">
                Store
                <span
                  className="text-[#edae49]
              "
                >
                  Brand
                </span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6">
              Elevating your tech experience with premium products and
              exeptional service.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map(
                (platform) => (
                  <a
                    href="#"
                    key={platform}
                    className="group flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-[#003d5b] transform hover:scale-110"
                  >
                    <i
                      className={`bx bxl-${platform} text-gray-500 group-hover:text-white text-xl transition-colors`}
                    ></i>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
