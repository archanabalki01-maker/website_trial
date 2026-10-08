import Image from "next/image";

export default function Home() {
  const stats = [
    { value: "100%", label: "Pass results" },
    { value: "4+", label: "Years of guidance" },
    { value: "CCTV", label: "Safe campus" },
    { value: "24/7", label: "Parent support" },
  ];

  const programs = [
    {
      title: "Typewriting Class",
      description:
        "Develop speed, accuracy, and professional keyboard skills with structured, hands-on practice for confidence and efficiency.",
    },
    {
      title: "Abacus Class",
      description:
        "Strengthen mental arithmetic, concentration, and logical thinking through engaging abacus-based learning methods.",
    },
    {
      title: "Morning Tuition",
      description:
        "Focused early learning support for academic improvement, discipline, and better concept clarity from the start of the day.",
    },
    {
      title: "Board & Exam Support",
      description:
        "Dedicated coaching and revision support to help students perform with confidence and achieve better academic outcomes.",
    },
  ];

  const highlights = [
    "Strong academic guidance and personal attention",
    "Typewriting and abacus programs for practical skill building",
    "Morning tuition classes for consistent progress",
    "100% pass results with focused exam preparation",
    "CCTV installed for safe and monitored environment",
    "Disciplined, supportive, and student-friendly learning culture",
  ];

  const galleryItems = [
    { title: "Classroom learning", accent: "from-blue-500 to-indigo-600" },
    { title: "Student confidence", accent: "from-amber-400 to-orange-500" },
    { title: "Academic focus", accent: "from-emerald-500 to-teal-600" },
    { title: "Safe environment", accent: "from-slate-700 to-slate-900" },
  ];

  const testimonials = [
    {
      quote:
        "The teaching is very disciplined and caring. My child has improved both in studies and in confidence after joining here.",
      name: "Mrs. Karthika",
      role: "Parent",
    },
    {
      quote:
        "The morning tuition and support classes are extremely helpful. The teachers guide students with patience and focus.",
      name: "Mr. Ramesh",
      role: "Parent",
    },
    {
      quote:
        "The school environment is safe and supportive. We feel comfortable knowing CCTV is installed and the staff is attentive.",
      name: "Mrs. Selvi",
      role: "Parent",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <a
        href="https://wa.me/918903608487?text=Hello%20Arivom%20Academic%20Institute%2C%20I%20want%20to%20know%20more%20about%20your%20classes."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-3xl shadow-[0_12px_30px_rgba(16,185,129,0.4)] transition hover:scale-105 hover:bg-emerald-600"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-900 text-lg font-black text-white shadow-lg shadow-blue-900/20">
              A
            </div>
            <div>
              <p className="text-base font-black tracking-tight text-slate-900">Arivom Academic Institute</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Learning • Excellence • Values</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#programs" className="transition hover:text-slate-900">Programs</a>
            <a href="#gallery" className="transition hover:text-slate-900">Gallery</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </div>

          <a
            href="tel:08903608487"
            className="rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Call Now
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.08),_transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-700">
                <span>🏫</span>
                About us
              </div>

              <h1 className="max-w-xl text-5xl font-black tracking-[-0.06em] text-slate-900 sm:text-6xl">
                A trusted learning space for strong academics and lasting values.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Arivom Academic Institute is a focused academic center that helps students build knowledge, discipline, and confidence through structured teaching, practical learning, and personal attention.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5">Typewriting Class</span>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5">Abacus Class</span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">Morning Tuition</span>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-blue-800"
                >
                  Enroll Today
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                    <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                    <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-10 rounded-full bg-blue-200/50 blur-3xl" />
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-100">Our focus</p>
                      <h2 className="mt-2 text-3xl font-black">Student success</h2>
                    </div>
                    <div className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-blue-50 backdrop-blur-sm">
                      2026-27
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-sm text-blue-100">Results</div>
                      <div className="mt-2 text-2xl font-black">100%</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-sm text-blue-100">Safety</div>
                      <div className="mt-2 text-2xl font-black">CCTV</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:col-span-2">
                      <div className="text-sm text-blue-100">Programs</div>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-50">
                        <span className="rounded-full bg-white/10 px-2.5 py-1">Typewriting</span>
                        <span className="rounded-full bg-white/10 px-2.5 py-1">Abacus</span>
                        <span className="rounded-full bg-white/10 px-2.5 py-1">Tuition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Programs</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">Skill-building programs for better learning outcomes.</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {programs.map((program, index) => (
                <div key={program.title} className="rounded-[2rem] border border-slate-700 bg-slate-800 p-6 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-xl text-blue-200">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{program.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Why parents trust us</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900">A supportive academic environment built on results and care.</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-700">✓</div>
                <div className="text-base font-medium text-slate-700">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="bg-[#edf5ff] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Gallery</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900">A glimpse into our learning environment.</h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {galleryItems.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                  <div className={`flex h-64 items-end justify-start bg-gradient-to-br ${item.accent} p-5`}>
                    <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                      {item.title}
                    </span>
                  </div>
                  <div className="p-5 text-base font-semibold text-slate-700">{item.title}</div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-slate-600">
              Add your real photos here later for a more personal gallery experience.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Testimonials</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900">Families trust Arivom for quality guidance and care.</h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((story) => (
                <div key={story.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                  <div className="text-xl text-amber-400">★★★★★</div>
                  <p className="mt-5 text-lg leading-8 text-slate-700">“{story.quote}”</p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <div className="font-bold text-slate-900">{story.name}</div>
                    <div className="text-sm text-slate-500">{story.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Contact us</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">Visit, call, or connect with us.</h2>
              <div className="mt-8 space-y-5 text-slate-200">
                <div>
                  <div className="text-sm uppercase tracking-[0.14em] text-slate-400">Address</div>
                  <p className="mt-2 max-w-sm text-base leading-7">
                    Sri Ram Garden Indian Oil Petrol Bunk, opposite Iduvai Road, near Kamatchi Amman School, Tiruppur, Iduvai, Tamil Nadu 641687
                  </p>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.14em] text-slate-400">Phone</div>
                  <a href="tel:08903608487" className="mt-2 inline-block text-xl font-bold text-white hover:text-blue-300">
                    08903608487
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-black tracking-[-0.05em] text-slate-900">Admissions open — begin the journey with confidence.</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Whether your child needs stronger fundamentals, skill-based learning, or a safe and supportive coaching environment, Arivom Academic Institute is ready to help.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:08903608487"
                  className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-blue-800"
                >
                  Call admissions
                </a>
                <a
                  href="https://maps.google.com/?q=37JW+P6+Tiruppur+Tamil+Nadu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="font-black text-slate-900">Arivom Academic Institute</div>
          <div className="flex items-center gap-6">
            <a href="#programs" className="hover:text-slate-900">Programs</a>
            <a href="#gallery" className="hover:text-slate-900">Gallery</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
          <div>© 2026 Arivom Academic Institute</div>
        </div>
      </footer>
    </div>
  );
}
