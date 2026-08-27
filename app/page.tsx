export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050608] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#07090d]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div>
            <h1 className="text-2xl font-black tracking-[0.2em] text-white">
              VANTA
            </h1>
            <p className="text-[9px] font-semibold tracking-[0.2em] text-blue-400">
              GAME TOP-UP & DIGITAL SERVICES
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#" className="transition hover:text-blue-400">
              Home
            </a>
            <a href="#" className="transition hover:text-blue-400">
              Games
            </a>
            <a href="#" className="transition hover:text-blue-400">
              Services
            </a>
            <a href="#" className="transition hover:text-blue-400">
              Offers
            </a>
          </nav>

          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:border-blue-400/50 hover:bg-blue-500/10">
            Login
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
              ⚡ PREMIUM DIGITAL STORE
            </div>

            <h2 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              LEVEL UP
              <span className="block text-blue-400">YOUR GAME.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              شحن ألعاب وخدمات رقمية بسرعة وأمان.
              <br />
              كل ما تحتاجه في مكان واحد.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Official Store of CONKER on Telegram
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#games"
                className="rounded-xl bg-blue-500 px-7 py-4 text-center font-bold transition hover:bg-blue-400"
              >
                Explore Games
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center font-bold transition hover:border-white/20 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Gaming
          </p>
          <h3 className="mt-2 text-3xl font-black sm:text-4xl">
            Popular Games
          </h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "PUBG Mobile",
            "PUBG Korea",
            "PUBG Vietnam",
            "eFootball",
            "Free Fire",
            "Roblox",
          ].map((game) => (
            <div
              key={game}
              className="group rounded-2xl border border-white/10 bg-[#0d1015] p-6 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#11161e]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                🎮
              </div>

              <h4 className="text-xl font-bold">{game}</h4>

              <p className="mt-2 text-sm text-gray-500">
                Game top-up
              </p>

              <button className="mt-6 w-full rounded-xl border border-white/10 py-3 text-sm font-semibold transition group-hover:border-blue-400/30 group-hover:bg-blue-500/10">
                View Products
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-white/5 bg-[#080a0f]">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
              Digital Services
            </p>
            <h3 className="mt-2 text-3xl font-black sm:text-4xl">
              Our Services
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "TikTok Coins",
              "TikTok Promotion",
              "Fawry Pay",
              "Internet & Wi-Fi",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-[#0d1015] p-6"
              >
                <div className="mb-6 text-3xl">⚡</div>
                <h4 className="font-bold">{service}</h4>
                <p className="mt-2 text-sm text-gray-500">
                  Fast digital service
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-sm text-gray-500">
          <p className="font-bold tracking-[0.2em] text-white">VANTA</p>
          <p>Official Store of CONKER on Telegram</p>
          <p>© {new Date().getFullYear()} VANTA. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
              }
