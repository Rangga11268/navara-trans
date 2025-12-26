import React from "react";
import { Shield, Award, Users, Clock, Target, Lightbulb } from "lucide-react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Navara Trans, your trusted partner for premium bus charter services."
      />
      <div className="bg-brand-gray min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="inline-block py-1 px-3 rounded-full bg-brand-black/5 border border-brand-black/10 text-brand-black text-xs font-bold uppercase tracking-widest mb-6"
            >
              Tentang Kami
            </motion.span>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="font-display font-black text-5xl md:text-7xl text-brand-black mb-8 uppercase tracking-tight leading-none"
            >
              Partner Perjalanan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-black">
                Terpercaya Kamu.
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-brand-black/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Navara Trans adalah penyedia layanan transportasi pariwisata
              berbasis di Surabaya. Kami berdedikasi untuk memberikan pengalaman
              perjalanan yang{" "}
              <span className="text-brand-black font-bold">aman</span>,
              <span className="text-brand-black font-bold">nyaman</span>, dan{" "}
              <span className="text-brand-black font-bold">tak terlupakan</span>
              .
            </motion.p>
          </div>
        </section>

        {/* Features Grid (Bento Style) */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: Shield,
                  title: "Safety First",
                  desc: "Standar keamanan tinggi untuk ketenangan hati Anda.",
                },
                {
                  icon: Award,
                  title: "Premium Service",
                  desc: "Layanan kelas satu dari awal hingga akhir perjalanan.",
                },
                {
                  icon: Users,
                  title: "Expert Crew",
                  desc: "Driver dan crew berpengalaman yang ramah & profesional.",
                },
                {
                  icon: Clock,
                  title: "On Time",
                  desc: "Ketepatan waktu adalah prioritas utama kami.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-8 bg-brand-gray rounded-[2rem] border border-brand-black/5 hover:border-brand-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-black mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-black mb-3 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-brand-black/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Visi Misi Section */}
        <section className="py-24 bg-brand-black text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/assets/img/pattern.png')] bg-repeat" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
                  <img
                    src="/assets/img/hero2.jpg"
                    alt="Navara Team"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />

                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-[2px] w-12 bg-brand-primary" />
                      <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">
                        Our Philosophy
                      </span>
                    </div>
                    <p className="text-2xl font-display font-bold text-white leading-tight">
                      "Melayani dengan hati, mengantar dengan sepenuh jiwa."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-5xl md:text-6xl font-display font-black mb-6 uppercase">
                    Visi & <br />{" "}
                    <span className="text-stroke text-stroke-white text-transparent">
                      Misi Kami
                    </span>
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed max-w-md">
                    Komitmen kami untuk terus berkembang dan memberikan yang
                    terbaik bagi setiap perjalanan Anda.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-brand-primary/50 transition-colors group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-white/10 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <Target size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-white mb-3">
                          Visi
                        </h3>
                        <p className="text-white/60 leading-relaxed">
                          Menjadi perusahaan transportasi pariwisata terdepan di
                          Indonesia yang menjadi tolak ukur standar kenyamanan
                          dan keselamatan.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-brand-primary/50 transition-colors group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-white/10 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <Lightbulb size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-white mb-3">
                          Misi
                        </h3>
                        <ul className="space-y-2 text-white/60 list-disc list-inside">
                          <li>Menyediakan armada terbaru dan terawat prima.</li>
                          <li>
                            Mengutamakan <i>safety driving</i> di setiap
                            perjalanan.
                          </li>
                          <li>Memberikan pelayanan yang ramah dan solutif.</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
