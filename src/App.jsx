import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#1f2a24]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-2xl font-semibold tracking-wide">
          NordLivAna
        </a>

        <a
          href="https://instagram.com/nordlivana/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#1f2a24]/20 px-5 py-2 text-sm transition hover:bg-[#1f2a24] hover:text-white"
        >
          Follow
        </a>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6f7f72]">
            Nordic inspired healthy lifestyle
          </p>

          <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-7xl">
            Live healthier.
            <br />
            Live balanced.
            <br />
            Live better.
          </h1>

          <p className="mb-4 max-w-xl text-lg leading-8 text-[#516157]">
            NordLivAna is a wellness lifestyle brand inspired by Nordic balance,
            created to support healthier habits through movement, nutrition,
            rest, and daily routines.
          </p>

          <p className="mb-8 max-w-xl text-lg leading-8 text-[#516157]" dir="rtl">
            أسلوب حياة صحي متوازن يجمع بين الحركة، التغذية، الراحة، والعادات
            اليومية.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#follow"
              className="rounded-full bg-[#1f2a24] px-6 py-3 text-white shadow-sm transition hover:bg-[#344239]"
            >
              Start Your Journey
            </a>

            <a
              href="https://instagram.com/nordlivana"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 shadow-sm transition hover:bg-[#eef3ec]"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#dfe7dc] p-8 shadow-sm">
          <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-[#f9faf6]">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#1f2a24] text-4xl font-bold text-white">
                NL
              </div>
              <p className="text-xl font-medium">NordLivAna</p>
              <p className="mt-2 text-[#6f7f72]">
                Healthy • Balanced • Nordic
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#6f7f72]">
          Our pillars
        </p>

        <h2 className="mb-10 text-4xl font-semibold">
          A balanced lifestyle, not a temporary phase.
        </h2>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            ['Movement', 'Strength, walking, mobility, and daily activity.'],
            ['Nutrition', 'Simple meals, protein, balance, and consistency.'],
            ['Rest', 'Sleep, recovery, calm routines, and mental clarity.'],
            ['Habits', 'Small daily actions that create long-term health.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="leading-7 text-[#516157]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="follow"
        className="mx-auto max-w-6xl px-6 py-20 text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6f7f72]">
          Coming soon
        </p>

        <h2 className="mb-6 text-4xl font-semibold">
          Follow the NordLivAna journey
        </h2>

        <p className="mx-auto mb-8 max-w-2xl leading-8 text-[#516157]">
          Content about fitness, nutrition, healthy habits, and a balanced
          lifestyle is coming soon.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://tiktok.com/@nordlivana"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#1f2a24] px-6 py-3 text-white transition hover:bg-[#344239]"
          >
            TikTok
          </a>
          <a
            href="https://instagram.com/nordlivana"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#1f2a24] px-6 py-3 text-white transition hover:bg-[#344239]"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@NordLivAna"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#1f2a24] px-6 py-3 text-white transition hover:bg-[#344239]"
          >
            YouTube
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="border-t border-[#d9ddd6] pt-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6f7f72]">
            What you'll find
          </p>

          <h2 className="mb-10 text-4xl font-semibold">
            Simple habits for a healthier everyday life.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              ✓ Healthy routines
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              ✓ Nutrition tips
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              ✓ Movement and exercise
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              ✓ Better sleep
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-[#6f7f72]">
        © 2026 NordLivAna. All rights reserved.
      </footer>
    </main>
  )
}

export default App