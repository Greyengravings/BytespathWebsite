import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  Rocket, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Mail,
  ArrowRight
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bytespath | Building Trustworthy AI for BFSI" },
      { name: "description", content: "Helping financial institutions implement AI responsibly and at scale." },
    ],
  }),
  component: About,
});

const founders = [
  {
    name: "Aniket Singh",
    role: "Co-Founder & CEO",
    bio: "Mr. Aniket Singh is the Co-Founder and CEO of Bytespath Global, leading the company’s mission to transform businesses through innovation, digital solutions, and cutting-edge technology. With a deep passion for technology, Aniket has spearheaded multiple initiatives in AI, software development, digital transformation, and international payment systems, positioning Bytespath as a trusted partner for enterprises across industries. His leadership is defined by a combination of strategic foresight, operational excellence, and a commitment to building sustainable, future-ready businesses.",
    image: `${import.meta.env.BASE_URL}aniket.jpeg`,  
  },
  {
    name: "Hitesh Nihalani",
    role: "Co-Founder & CTO",
    bio: "Mr. Hitesh Nihalani is the Co-Founder and Chief Technology Officer (CTO) of Bytespath Solutions, leading the company's technology vision, product innovation, and engineering strategy. He oversees the design and development of scalable digital solutions, ensuring the adoption of modern technologies and best engineering practices. With a strong focus on innovation, system architecture, and technical excellence, Hitesh drives the development of secure, high-performance solutions that empower businesses across the BFSI sector while fostering a culture of continuous learning and technological advancement.",
    image: `${import.meta.env.BASE_URL}hitesh.jpeg`,
  },
  {
    name: "Aditya Aher",
    role: "Co-Founder & COO",
    bio: "Mr. Aditya Aher is the Co-Founder and Chief Operating Officer (COO) of Bytespath Solutions, driving operational excellence, strategic execution, and client delivery across the organization. With a sharp focus on efficiency, scalability, and high-quality service delivery, Aditya ensures that Bytespath consistently meets and exceeds client expectations. He plays a key role in streamlining operations, managing global client engagements, and implementing best-in-class processes across all business functions. His leadership blends strategic vision with hands-on operational expertise, enabling Bytespath to deliver complex solutions seamlessly and at scale.",
    image: `${import.meta.env.BASE_URL}aditya.jpeg`,
  },
];

function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <SiteLayout>
      <div ref={containerRef} className="relative">
        
        {/* SECTION 1: HERO */}
        <section className="relative pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">Company</div>
            <h1 className="mt-6 mx-auto max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Building Trustworthy <span className="text-gradient">AI for BFSI</span>
            </h1>
            <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground">
              Helping financial institutions implement AI responsibly and at scale. We bridge the gap between cutting-edge intelligence and enterprise compliance.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2: VISION & MISSION */}
        <section className="py-40">
          <div className="container mx-auto px-6">
            <div className="grid gap-32 md:grid-cols-2">
              <div className="relative">
                <Target className="h-10 w-10 text-primary/60 mb-8" />
                <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight">Our Vision</h2>
                <p className="mt-8 text-2xl text-muted-foreground leading-relaxed font-light">
                  Enable every BFSI institution to leverage AI safely and effectively, creating a more resilient and inclusive financial ecosystem.
                </p>
              </div>

              <div className="relative">
                <Rocket className="h-10 w-10 text-primary/60 mb-8" />
                <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight">Our Mission</h2>
                <p className="mt-8 text-2xl text-muted-foreground leading-relaxed font-light">
                  Deliver secure, scalable and compliant AI implementation services from strategy to production, ensuring measurable business impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR INSPIRATION */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative h-[500px] overflow-hidden rounded-[2.5rem]">
                <motion.img 
                   style={{ 
                     y: useTransform(scrollYProgress, [0.2, 0.5], [0, -100]),
                     scale: 1.1 
                   }}
                   src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                   className="h-[120%] w-full object-cover" 
                   alt="Inspiration"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div>
                <div className="eyebrow">Our Inspiration</div>
                <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Built on Decades of <span className="text-gradient">Financial Expertise.</span>
                </h2>
                <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Bytespath was founded by a team who saw first-hand the challenges of implementing disruptive technology in highly regulated environments. 
                  </p>
                  <p>
                    We believe that AI shouldn't be a black box or a security risk. It should be the engine that drives the next generation of financial trust, transparency, and efficiency.
                  </p>
                  <div className="pt-4">
                     <Link to="/contact" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                       Learn about our founding story <ArrowRight className="h-4 w-4" />
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FOUNDERS */}
        <section className="py-24 bg-white/[0.01]">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <div className="eyebrow">Leadership</div>
              <h2 className="mt-4 font-display text-4xl font-semibold">Meet Our <span className="text-gradient">Founders</span></h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {founders.map((founder, i) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card-panel overflow-hidden p-0 transition-all duration-500 group-hover:ring-2 group-hover:ring-primary/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-display text-xl font-semibold">{founder.name}</h3>
                      <p className="text-sm font-medium text-primary uppercase tracking-widest mt-1">{founder.role}</p>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {founder.bio}
                      </p>
                      <div className="mt-6 flex gap-4">
                        <button className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></button>
                        <button className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></button>
                        <button className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: GLOBAL FOOTPRINT - Maximized distance and line thickness */}
        <section className="relative py-32 overflow-hidden bg-background">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,var(--background)_85%)] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
              alt="World Map Texture"
              className="h-full w-full object-cover opacity-25 grayscale mix-blend-luminosity"
            />
          </div>

          <div className="container mx-auto px-6 relative z-20">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <div className="eyebrow mb-6">Global Reach</div>
                <h2 className="font-display text-5xl md:text-7xl font-semibold mb-8">
                  Our Global <span className="text-gradient">Footprint</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12 max-w-lg">
                  Headquartered in Mumbai, with operations in Austin, we serve the world's most demanding BFSI markets.
                </p>
                
                <div className="space-y-10 mb-16">
                  <div className="group">
                    <div className="flex items-center gap-4 mb-2">
                       <MapPin className="h-5 w-5 text-primary" />
                       <h4 className="font-display text-2xl font-semibold">Mumbai, India</h4>
                    </div>
                    <p className="text-muted-foreground pl-9">Headquaters, Engineering Excellence Center & India Operations</p>
                  </div>
                  <div className="group">
                  <div className="flex items-center gap-4 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="font-display text-2xl font-semibold">Austin, Texas</h4>
                   </div>
                   <p className="text-muted-foreground pl-9">USA Operations</p>
                    </div>
                </div>

                <div className="flex gap-16 md:gap-24 border-t border-white/5 pt-12">
                   <div>
                      <div className="font-display text-5xl font-semibold text-primary">2+</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2 font-medium">Global Offices</div>
                   </div>
                   <div>
                      <div className="font-display text-5xl font-semibold text-primary">50+</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2 font-medium">BFSI Experts</div>
                   </div>
                </div>
              </div>

              <div className="relative aspect-square lg:h-[600px] flex items-center justify-center">
                <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-[0_0_60px_rgba(99,102,241,0.5)]">
                  {/* Extreme Path to show vast distance - Starting from Mumbai (Right) to Texas (Left) */}
                  <motion.path
                    d="M 940 450 Q 500 -250 60 300"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="12"
                    strokeDasharray="16 16"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Texas Hub - Maximized Left */}
                  <g transform="translate(60, 300)">
                    <circle r="12" fill="var(--primary)" />
                    <circle r="24" stroke="var(--primary)" strokeWidth="4" fill="none" className="animate-ping" />
                    <text y="-45" textAnchor="middle" className="fill-white text-[24px] font-extrabold uppercase tracking-widest shadow-black drop-shadow-2xl">Texas</text>
                  </g>

                  {/* Mumbai Hub - Maximized Right & Lowered */}
                  <g transform="translate(940, 450)">
                    <circle r="12" fill="var(--primary)" />
                    <circle r="24" stroke="var(--primary)" strokeWidth="4" fill="none" className="animate-ping" />
                    <text y="70" textAnchor="middle" className="fill-white text-[24px] font-extrabold uppercase tracking-widest shadow-black drop-shadow-2xl">Mumbai</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CONSULTATION CTA */}
        <section className="py-4 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="font-display text-6xl font-semibold md:text-8xl leading-[1.1] tracking-tight">
                Let’s Build Your <span className="text-gradient">AI Roadmap</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-2xl text-muted-foreground leading-relaxed font-light">
                Join the leading financial institutions already partnering with Bytespath for secure AI implementation.
              </p>
              <div className="mt-12">
                <Link to="/contact" className="btn-primary !py-3 !px-10 text-xl">Book Consultation</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
