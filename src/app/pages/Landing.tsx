import DnDDemo from "@/assets/DnDDemo.mp4";
import planAndOrganizeHero from "@/assets/Group 68.svg";
import collaborateHero from "@/assets/Group 69.svg";
import getStartedHero from "@/assets/Group 70.svg";
import planIcon from "@/assets/Group 73.svg";
import collabIcon from "@/assets/Group.svg";
import team from "@/assets/team-add-svgrepo-com.svg";
import logo from "@/assets/Vector.svg";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";
import { FEATURE_CARDS } from "@/constants";
import { easeInOut, easeOut, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 3,
      delayChildre: 3,
    },
  },
};

const pulseGlow = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.2, 0.3, 0.2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

const viewport = {
  once: true,
  margin: "100px",
};

export default function Landing() {
  // TEMPORARY. REMOVE THIS WHEN AUTH IS FINALIZED, CLEAR CACHE WHEN USER LOGGED OUT
  // const queryClient = useQueryClient();

  // useEffect(() => {
  //   queryClient.clear();
  // }, [queryClient]);

  const featuresRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-w-screen min-h-screen bg-dark-bg scroll-smooth pb-60"
    >
      {/* Header */}
      <motion.header variants={itemVariants} className="p-4 flex justify-between">
        <div className="flex space-x-4 items-center">
          <motion.img
            src={logo}
            alt="grex logo"
            className="w-[30px] h-[46px]"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="uppercase font-k2d text-3xl text-dark-text">GREX</span>
        </div>

        <div className="flex space-x-4">
          <Link to="/auth/signin">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button className="px-6 py-5 text-lg font-normal text-dark-text bg-dark-surface hover:bg-black/60 border border-dark-muted border-t border-t-dark-subtle">
                Log in
              </Button>
            </motion.div>
          </Link>
          <Link to="/auth/signup">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button className="px-6 py-5 text-lg font-normal text-light-text bg-gradient-to-b from-brand-primary to-brand-dark border border-brand-light/60 border-t border-t-brand-soft hover:to-brand-primary">
                Sign up
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.header>

      {/* Main Hero Section */}
      <motion.div variants={staggerContainer} className="relative mt-32 mx-auto w-full max-w-[1300px] flex-col space-x-8">
        <motion.div variants={slideInLeft} className="flex-1 flex flex-col space-y-4">
          <motion.h1 className="max-w-[1200px] mx-auto text-dark-text text-center text-6xl font-semibold" variants={fadeInUp}>
            All-in-One Collaboration for Teams That
            <WordRotate
              className="text-[#D2FF28]" // fix this
              words={[
                "Achieve More",
                "Stay Aligned",
                "Move Faster",
                "Innovate Together",
                "Work Smarter",
                "Communicate Seamlessly",
              ]}
            />
          </motion.h1>
          <motion.p className="text-dark-subtle text-xl text-center max-w-[800px] mx-auto" variants={fadeInUp}>
            Plan projects, manage tasks, share files, and communicate in real time — all from one web-based platform, with smart
            assistance from @GrexAI.
          </motion.p>
          <motion.div className="flex space-x-4 mx-auto relative z-10" variants={fadeInUp}>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link to="/auth/signin">
                <Button className="px-8 py-7 text-lg font-normal transition-colors text-light-text bg-gradient-to-b from-brand-primary to-brand-dark border border-brand-light/40 border-t border-t-brand-soft hover:to-brand-primary">
                  Get Started for Free
                </Button>
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToFeatures}
                className="px-8 py-7 text-lg font-normal transition-colors text-dark-text bg-dark-surface hover:bg-black/60 border border-dark-muted border-t border-t-dark-subtle"
              >
                Explore Features
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col items-center"
        >
          <motion.video
            src={DnDDemo}
            autoPlay
            loop
            muted
            playsInline
            className="w-[800px] rounded-xl transition-shadow duration-300 shadow-[0_0px_100px_rgba(210,255,40,0.20)] hover:shadow-[0_0px_100px_rgba(210,255,40,0.40)]"
          />
        </motion.div>
      </motion.div>

      {/* Features Header */}
      <motion.div
        variants={fadeInUp}
        className="relative flex flex-col space-y-4 items-center justify-center max-w-[690px] mx-auto mt-72"
      >
        <motion.div
          variants={pulseGlow}
          initial="initial"
          animate="pulse"
          className="absolute -top-30 size-[400px] rounded-full bg-brand-primary opacity-20 blur-[70px] z-0"
        />
        <h1 className="text-dark-text text-5xl text-center font-semibold">Everything Your Team Needs, All in One Place</h1>
        <p className="text-dark-subtle text-center text-xl">
          From organizing tasks to tracking progress, Grex keeps your team aligned and productive.
        </p>
      </motion.div>

      {/* Process Flow Section */}
      <motion.div variants={staggerContainer} className="flex justify-center space-x-4 mt-40 max-w-[1400px] mx-auto">
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col items-end pt-52">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7 }}
              className="mb-4"
            >
              <h2 className="text-end font-semibold text-2xl text-dark-text">Kickstart Your Next Project with Grex</h2>
              <p className="text-end text-lg text-dark-subtle">
                Create a new workspace or import an existing project into Grex — and start collaborating instantly.
              </p>
            </motion.div>
            <motion.img
              src={getStartedHero}
              className="w-[600px]"
              alt="Get started hero"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="flex flex-col items-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7 }}
              className="mb-4"
            >
              <h2 className="text-end font-semibold text-2xl text-dark-text">Stay Connected, Work as One</h2>
              <p className="text-end text-lg text-dark-subtle">
                Chat, share files, and track progress in real time—stay connected and productive with your team, wherever you are.
              </p>
            </motion.div>
            <motion.img
              src={collaborateHero}
              className="w-[600px]"
              alt="Collaborate hero"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>

        {/* Center Timeline */}
        <motion.div className="flex flex-col justify-center items-center mx-auto">
          {/* Get Started Circle */}
          <motion.div
            className="size-60 bg-blue-800/20 rounded-full flex items-center justify-center mt-1"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="size-42 bg-blue-800/60 rounded-full flex flex-col space-y-2 items-center py-7">
              <motion.img src={team} alt="team icon" className="size-16" transition={{ duration: 0.5 }} />
              <span className="text-blue-400 font-semibold text-center text-lg">Get Started</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-0.5 h-40 bg-blue-600 blur-[4px] mt-1 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="size-10 rounded-full bg-gray-800 border border-blue-800"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="w-0.5 h-40 bg-blue-600 blur-[4px] mt-1 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          />

          {/* Plan & Organize Circle */}
          <motion.div
            className="size-60 bg-green-800/20 rounded-full flex items-center justify-center mt-1"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div className="size-42 bg-green-800/60 rounded-full flex flex-col space-y-2 items-center py-7">
              <motion.img src={planIcon} alt="team icon" className="size-16" transition={{ duration: 0.5 }} />
              <span className="text-green-400 font-semibold text-center text-lg">Plan & Organize</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-0.5 h-40 bg-green-600 blur-[4px] mt-1 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="size-10 rounded-full bg-gray-800 border border-green-800"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="w-0.5 h-40 bg-green-600 blur-[4px] mt-1 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          />

          {/* Collaborate Circle */}
          <motion.div
            className="size-60 bg-yellow-800/20 rounded-full flex items-center justify-center mt-1"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div className="size-42 bg-yellow-800/60 rounded-full flex flex-col space-y-2 items-center py-7">
              <motion.img src={collabIcon} alt="team icon" className="size-16" transition={{ duration: 0.5 }} />
              <span className="text-yellow-400 font-semibold text-center text-lg block w-[130px]">Collaborate in real-time</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-0.5 h-40 bg-yellow-600 blur-[4px] mt-1 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          />
          <motion.div
            className="size-10 rounded-full bg-gray-800 border border-yellow-800"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.4, delay: 0.9 }}
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="w-0.5 h-40 bg-yellow-600 blur-[4px] mt-1 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          />
        </motion.div>

        <div className="flex-1 flex flex-col justify-center pt-32">
          <div className="flex flex-col items-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7 }}
              className="mb-4"
            >
              <h2 className="font-semibold text-2xl text-dark-text">Plan & Organize Effortlessly</h2>
              <p className="text-lg text-dark-subtle">
                Create a new workspace or import an existing project into Grex — and start collaborating instantly.
              </p>
            </motion.div>
            <motion.img
              src={planAndOrganizeHero}
              className="w-[600px]"
              alt="Plan and organize hero"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Features Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col space-y-4 items-center justify-center max-w-[690px] mx-auto mt-60"
      >
        <motion.div
          variants={pulseGlow}
          initial="initial"
          animate="pulse"
          className="absolute -top-30 size-[400px] rounded-full bg-brand-primary opacity-20 blur-[70px] z-0"
        />
        <h1 className="text-dark-text text-5xl text-center font-semibold">Discover What Grex Can Do</h1>
        <p className="text-dark-subtle text-center text-xl">
          All the tools you need to plan, collaborate, and keep your team moving forward.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div ref={featuresRef} className="max-w-[800px] mx-auto flex flex-col justify-center gap-4 mt-32 font-inter">
        {FEATURE_CARDS.map((feature, index) => (
          <motion.section
            id="features"
            key={feature.description}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="bg-dark-surface/60 rounded border border-dark-muted p-8 cursor-pointer"
          >
            <motion.div className="size-14 rounded bg-brand-dark p-4 mb-4" transition={{ duration: 0.5 }}>
              <feature.icon className="size-6 text-brand-light" />
            </motion.div>
            <h2 className="text-dark-text text-xl font-medium">{feature.title}</h2>
            <p className="text-dark-subtle">{feature.description}</p>
          </motion.section>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col space-y-4 items-center justify-center max-w-[690px] mx-auto mt-60"
      >
        <motion.div
          variants={pulseGlow}
          initial="initial"
          animate="pulse"
          className="absolute -top-30 size-[400px] rounded-full bg-brand-primary opacity-20 blur-[70px] z-0"
        />
        <h1 className="text-dark-text text-5xl text-center font-semibold">
          Ready to supercharge your{" "}
          <motion.span
            className="text-brand-primary"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            team collaboration?
          </motion.span>
        </h1>
        <p className="text-dark-subtle text-center text-xl">
          Join thousands of teams already using Grex to streamline their projects and boost productivity.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="relative z-10 bg-brand-primary border border-brand-light border-t border-t-brand-soft px-12 py-6 text-light-text text-lg hover:bg-brand-primary/80 mt-4">
            Start Collaborating Now
          </Button>
        </motion.div>
      </motion.div>

      {/* Footer (MOCK, for filler lang muna ngayon)*/}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.7 }}
        className="mt-40 border-t border-dark-muted"
      >
        <div className="max-w-[1400px] mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info (MOCK)*/}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <motion.img src={logo} alt="grex logo" className="w-[24px] h-[36px]" />
                <span className="uppercase font-k2d text-2xl text-dark-text">GREX</span>
              </div>
              <p className="text-dark-subtle text-sm max-w-[250px]">
                All-in-one collaboration platform for teams that achieve more together.
              </p>
            </div>

            {/* Product Links (MOCK)*/}
            <div>
              <h3 className="text-dark-text font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Pricing", "Security", "Integrations", "Changelog"].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a href="#" className="text-dark-subtle hover:text-dark-text transition-colors text-sm">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company Links (MOCK)*/}
            <div>
              <h3 className="text-dark-text font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Careers", "Blog", "Press Kit", "Contact"].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a href="#" className="text-dark-subtle hover:text-dark-text transition-colors text-sm">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Resources (MOCK)*/}
            <div>
              <h3 className="text-dark-text font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Help Center", "Community", "API Reference", "Status"].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a href="#" className="text-dark-subtle hover:text-dark-text transition-colors text-sm">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section (MOCK)*/}
          <div className="mt-12 pt-8 border-t border-dark-muted flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-subtle text-sm">© {new Date().getFullYear()} Grex. All rights reserved.</p>

            {/* Legal Links (MOCK)*/}
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-dark-subtle hover:text-dark-text transition-colors text-sm"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}
