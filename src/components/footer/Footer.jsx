import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="bg-[#060B2B] pt-36">
        <div className="w-9/12 mx-auto relative">
          <div className="absolute -top-72 left-1/2 -translate-x-1/2 w-full rounded-3xl border border-white/40 bg-[#1b1f35] p-3">
            <div className="rounded-3xl bg-gradient-to-r from-[#e8f8ff] via-[#ffffff] to-[#ffe3bf] py-16 px-6 md:px-14 text-center">
              <h2 className="text-4xl font-extrabold text-[#1a1a1a] mb-3">
                Subscribe to our Newsletter
              </h2>
              <p className="text-[#4a4a4a] mb-8">
                Get the latest updates and news right in your inbox!
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-[620px] mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-[420px] px-5 py-4 rounded-xl border border-gray-200 outline-none"
                />
                <button className="w-full md:w-auto px-8 py-4 rounded-xl font-semibold text-[#1d1d1d] bg-gradient-to-r from-[#f4a6d7] to-[#f8df69]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="pb-12">
            <div className="flex justify-center mb-12">
              <img src={footerLogo} alt="Cricket logo" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white/90">
              <div>
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="text-white/60 leading-8">
                  We are a passionate team dedicated to providing the best
                  services to our customers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-white/60">
                  <li>Home</li>
                  <li>Services</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                <p className="text-white/60 mb-5">
                  Subscribe to our newsletter for the latest updates.
                </p>
                <div className="flex rounded-xl overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-black bg-white outline-none"
                  />
                  <button className="px-6 py-3 font-semibold text-[#1d1d1d] bg-gradient-to-r from-[#f4a6d7] to-[#f8df69]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 text-center text-white/50">
          @2024 Your Company All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
