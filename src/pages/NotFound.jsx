import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
      />
      <div className="min-h-screen bg-brand-gray flex items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-black/5 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none"></div>

        <div className="text-center relative z-10">
          <h1 className="font-display font-black text-[10rem] md:text-[15rem] leading-none text-brand-black/5 select-none">
            404
          </h1>
          <div className="mt-[-4rem] md:mt-[-6rem]">
            <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black uppercase mb-4">
              Oops! Tersesat?
            </h2>
            <p className="text-brand-black/60 text-lg mb-8 max-w-md mx-auto">
              Halaman yang kamu cari gak ketemu nih. Mungkin salah ketik atau
              halamannya udah pindah.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-brand-black text-white px-8 py-4 rounded-full font-display font-bold uppercase tracking-wider hover:bg-brand-red transition-all duration-300 shadow-xl"
            >
              <Home size={18} />
              Balik ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
