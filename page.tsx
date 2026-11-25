
const programs = [
  {
    number: "01",
    title: "Comece a Treinar",
    description:
      "Construa sua base física, desenvolva força, resistência e descubra seu potencial atlético.",
    tag: "PARA TODOS OS NÍVEIS",
  },
  {
    number: "02",
    title: "Corrida & Resistência",
    description:
      "Melhore seu condicionamento, sua velocidade e sua capacidade de superar distâncias.",
    tag: "CORRIDA",
  },
  {
    number: "03",
    title: "Performance Esportiva",
    description:
      "Desenvolva potência, agilidade, explosão e capacidades físicas para seu esporte.",
    tag: "ALTO DESEMPENHO",
  },
];

const qualities = [
  ["01", "Força", "Construa uma base física sólida."],
  ["02", "Velocidade", "Desenvolva rapidez e agilidade."],
  ["03", "Explosão", "Transforme força em potência."],
  ["04", "Resistência", "Vá mais longe sem perder rendimento."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D18] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-black tracking-tight">
            SONHO <span className="text-lime-400">DE ATLETA.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#inicio" className="hover:text-lime-400">Início</a>
            <a href="#programas" className="hover:text-lime-400">Programas</a>
            <a href="#metodologia" className="hover:text-lime-400">Metodologia</a>
            <a href="#sobre" className="hover:text-lime-400">Sobre nós</a>
          </nav>

          <a
            href="/avaliacao"
            className="rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
          >
            Começar agora ↗
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden px-6 py-28 md:py-40"
      >
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="mb-8 inline-flex rounded-full border border-lime-400/30 px-4 py-2 text-xs font-bold tracking-widest text-lime-400">
              MOVIMENTO • EVOLUÇÃO • PERFORMANCE
            </span>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Seu potencial
              <br />
              não tem limites.
              <br />
              <span className="text-lime-400">
                Seu sonho começa aqui.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              Uma nova forma de desenvolver atletas. Treinamento,
              ciência e dedicação para transformar pessoas comuns
              em pessoas extraordinárias.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/avaliacao"
                className="rounded-full bg-lime-400 px-8 py-4 font-bold text-black transition hover:scale-105"
              >
                Quero começar ↗
              </a>

              <a
                href="#metodologia"
                className="rounded-full border border-white/20 px-8 py-4 font-bold transition hover:border-lime-400"
              >
                Conhecer o projeto
              </a>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
            {[
              ["01", "Força"],
              ["02", "Velocidade"],
              ["03", "Resistência"],
              ["04", "Performance"],
            ].map(([number, label]) => (
              <div key={number}>
                <p className="text-3xl font-black text-lime-400">{number}</p>
                <p className="mt-2 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programas" className="bg-[#101827] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-widest text-lime-400">
            NOSSOS PROGRAMAS
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Sua evolução começa
            <br />com o primeiro passo.
          </h2>

          <p className="mt-5 max-w-xl text-gray-400">
            Programas desenvolvidos para diferentes objetivos,
            níveis de condicionamento e modalidades esportivas.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.number}
                className="group rounded-2xl border border-white/10 bg-[#080D18] p-8 transition hover:-translate-y-2 hover:border-lime-400/60"
              >
                <span className="text-4xl font-black text-lime-400">
                  {program.number}
                </span>

                <p className="mt-8 text-xs font-bold tracking-widest text-lime-400">
                  {program.tag}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {program.title}
                </h3>

                <p className="mt-4 min-h-20 leading-relaxed text-gray-400">
                  {program.description}
                </p>

                <a
                  href="/avaliacao"
                  className="mt-8 inline-block font-bold text-lime-400 group-hover:underline"
                >
                  Conhecer programa →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodologia" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-widest text-lime-400">
              NOSSA METODOLOGIA
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Não treinamos
              <br />
              apenas músculos.
              <br />
              <span className="text-lime-400">Desenvolvemos atletas.</span>
            </h2>

            <p className="mt-7 leading-relaxed text-gray-400">
              Acreditamos no desenvolvimento físico completo.
              Nosso método trabalha diferentes capacidades físicas
              para construir pessoas mais fortes, rápidas,
              resistentes e preparadas para os desafios.
            </p>

            <a
              href="/avaliacao"
              className="mt-9 inline-block rounded-full bg-lime-400 px-7 py-4 font-bold text-black"
            >
              Descubra seu potencial ↗
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {qualities.map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-[#101827] p-6"
              >
                <span className="text-sm font-bold text-lime-400">
                  {number}
                </span>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacao" className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-lime-400 p-10 text-black md:p-16">
          <p className="text-sm font-black tracking-widest">
            SEU PRIMEIRO PASSO
          </p>

          <h2 className="mt-5 max-w-2xl text-4xl font-black md:text-6xl">
            Todo atleta tem um ponto de partida.
          </h2>

          <p className="mt-6 max-w-xl text-lg text-black/70">
            Conheça seu nível atual, entenda seus objetivos
            e comece sua jornada de desenvolvimento atlético.
          </p>

          <a
            href="/avaliacao"
            className="mt-9 inline-block rounded-full bg-[#080D18] px-8 py-4 font-bold text-white transition hover:bg-[#172238]"
          >
            Quero fazer parte ↗
          </a>
        </div>
      </section>

      <section id="sobre" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-widest text-lime-400">
            SOBRE O SONHO DE ATLETA
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-black md:text-4xl">
            Acreditamos que todo mundo tem um atleta dentro de si.
          </h2>

          <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">
            O Sonho de Atleta nasce com o propósito de democratizar
            o desenvolvimento atlético, aproximando pessoas do
            movimento, do esporte e de uma vida com mais saúde,
            disciplina e performance.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p className="font-black">
            SONHO <span className="text-lime-400">DE ATLETA.</span>
          </p>

          <p className="text-sm text-gray-500">
            © 2026 Sonho de Atleta. Todos os direitos reservados.
          </p>

          <p className="text-sm text-gray-500">
            Seu sonho. Sua evolução. Seu movimento.
          </p>
        </div>
      </footer>
    </main>
  );
}
