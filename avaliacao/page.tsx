
"use client";

import { useState } from "react";

const sports = [
  "Corrida de rua",
  "Futebol",
  "Futsal",
  "Futevôlei",
  "Musculação",
  "Ciclismo",
  "Outro esporte",
  "Ainda não pratico esportes",
];

const goals = [
  "Ganhar força",
  "Melhorar resistência",
  "Desenvolver velocidade",
  "Ganhar explosão",
  "Melhorar meu desempenho esportivo",
  "Desenvolvimento atlético completo",
];

const programs = [
  {
    name: "Comece a Treinar",
    description: "Construa sua base física e desenvolva suas capacidades.",
  },
  {
    name: "Corrida & Resistência",
    description: "Melhore seu condicionamento e rendimento na corrida.",
  },
  {
    name: "Performance Esportiva",
    description: "Desenvolva potência, velocidade e agilidade para seu esporte.",
  },
];

export default function AvaliacaoPage() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sport, setSport] = useState("");
  const [level, setLevel] = useState("");
  const [frequency, setFrequency] = useState("");
  const [goal, setGoal] = useState("");
  const [program, setProgram] = useState("");

  const steps = [
    "Identificação",
    "Perfil esportivo",
    "Objetivos",
    "Programa",
    "Pagamento",
  ];

  function next() {
    if (step === 0) {
      if (!name.trim() || !email.trim()) {
        alert("Preencha seu nome e e-mail.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Digite um e-mail válido.");
        return;
      }
    }

    if (step === 1 && (!sport || !level || !frequency)) {
      alert("Preencha todas as informações do seu perfil.");
      return;
    }

    if (step === 2 && !goal) {
      alert("Selecione seu principal objetivo.");
      return;
    }

    if (step === 3 && !program) {
      alert("Selecione um programa para continuar.");
      return;
    }

    setStep((current) => Math.min(current + 1, 4));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setStep((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-[#080D18] text-white">
      <header className="border-b border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-xl font-black">
            SONHO <span className="text-lime-400">DE ATLETA.</span>
          </a>

          <a
            href="/"
            className="text-sm text-gray-400 hover:text-lime-400"
          >
            Voltar ao início
          </a>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold tracking-widest text-lime-400">
              SUA JORNADA COMEÇA AQUI
            </span>

            <h1 className="mt-4 text-4xl font-black md:text-5xl">
              Descubra seu potencial.
            </h1>

            <p className="mt-4 text-gray-400">
              Vamos conhecer seu perfil para encontrar o melhor caminho
              para seu desenvolvimento atlético.
            </p>
          </div>

          <div className="mb-10">
            <div className="mb-3 flex justify-between text-xs text-gray-400">
              <span>ETAPA {step + 1} DE 5</span>
              <span>{Math.round(((step + 1) / 5) * 100)}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-lime-400 transition-all duration-300"
                style={{ width: `${((step + 1) / 5) * 100}%` }}
              />
            </div>

            <div className="mt-4 flex justify-between gap-2">
              {steps.map((item, index) => (
                <span
                  key={item}
                  className={`text-xs ${
                    index <= step ? "text-lime-400" : "text-gray-600"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101827] p-7 md:p-10">
            {step === 0 && (
              <>
                <p className="text-sm font-bold text-lime-400">
                  01 — IDENTIFICAÇÃO
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Primeiro, vamos nos conhecer.
                </h2>

                <label className="mt-8 block text-sm font-bold">
                  Nome completo
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#080D18] p-4 outline-none focus:border-lime-400"
                />

                <label className="mt-6 block text-sm font-bold">
                  E-mail
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@email.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#080D18] p-4 outline-none focus:border-lime-400"
                />
              </>
            )}

            {step === 1 && (
              <>
                <p className="text-sm font-bold text-lime-400">
                  02 — PERFIL ESPORTIVO
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Qual é sua relação com o esporte?
                </h2>

                <label className="mt-8 block text-sm font-bold">
                  Qual esporte você pratica?
                </label>

                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#080D18] p-4 text-white outline-none focus:border-lime-400"
                >
                  <option value="">Selecione seu esporte</option>
                  {sports.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <label className="mt-6 block text-sm font-bold">
                  Como você define seu nível atual?
                </label>

                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#080D18] p-4 outline-none focus:border-lime-400"
                >
                  <option value="">Selecione seu nível</option>
                  <option>Iniciante</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                  <option>Atleta competitivo</option>
                </select>

                <label className="mt-6 block text-sm font-bold">
                  Quantas vezes você treina por semana?
                </label>

                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#080D18] p-4 outline-none focus:border-lime-400"
                >
                  <option value="">Selecione a frequência</option>
                  <option>Não treino atualmente</option>
                  <option>1 a 2 vezes</option>
                  <option>3 a 4 vezes</option>
                  <option>5 a 6 vezes</option>
                  <option>Todos os dias</option>
                </select>
              </>
            )}

            {step === 2 && (
              <>
                <p className="text-sm font-bold text-lime-400">
                  03 — SEUS OBJETIVOS
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  O que você quer desenvolver?
                </h2>

                <p className="mt-3 text-sm text-gray-400">
                  Escolha seu principal objetivo neste momento.
                </p>

                <div className="mt-8 space-y-3">
                  {goals.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setGoal(item)}
                      className={`w-full rounded-xl border p-4 text-left transition ${
                        goal === item
                          ? "border-lime-400 bg-lime-400/10 text-lime-400"
                          : "border-white/10 bg-[#080D18] hover:border-white/30"
                      }`}
                    >
                      <span className="mr-3">
                        {goal === item ? "●" : "○"}
                      </span>
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="text-sm font-bold text-lime-400">
                  04 — SEU PROGRAMA
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Escolha seu caminho.
                </h2>

                <p className="mt-3 text-sm text-gray-400">
                  Selecione o programa que mais combina com seu objetivo.
                </p>

                <div className="mt-8 space-y-3">
                  {programs.map((item) => (
                    <button
                      type="button"
                      key={item.name}
                      onClick={() => setProgram(item.name)}
                      className={`w-full rounded-xl border p-5 text-left transition ${
                        program === item.name
                          ? "border-lime-400 bg-lime-400/10"
                          : "border-white/10 bg-[#080D18] hover:border-white/30"
                      }`}
                    >
                      <span className="font-bold text-lime-400">
                        {item.name}
                      </span>

                      <p className="mt-2 text-sm text-gray-400">
                        {item.description}
                      </p>

                      <p className="mt-3 text-xs font-bold">
                        {program === item.name
                          ? "✓ SELECIONADO"
                          : "SELECIONAR PROGRAMA"}
                      </p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <p className="text-sm font-bold text-lime-400">
                  05 — PAGAMENTO
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Sua jornada está quase começando, {name.split(" ")[0]}!
                </h2>

                <p className="mt-3 text-sm text-gray-400">
                  Confira os dados da sua avaliação e do programa escolhido.
                </p>

                <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-[#080D18] p-6">
                  <div>
                    <p className="text-xs text-gray-500">NOME</p>
                    <p className="mt-1 font-bold">{name}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">E-MAIL</p>
                    <p className="mt-1 font-bold">{email}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">ESPORTE</p>
                    <p className="mt-1 font-bold">{sport}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">NÍVEL</p>
                    <p className="mt-1 font-bold">{level}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">FREQUÊNCIA</p>
                    <p className="mt-1 font-bold">{frequency}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">OBJETIVO</p>
                    <p className="mt-1 font-bold text-lime-400">{goal}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">PROGRAMA</p>
                    <p className="mt-1 font-bold text-lime-400">{program}</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-lime-400/30 bg-lime-400/5 p-6">
                  <p className="text-sm font-bold text-lime-400">
                    SEU INVESTIMENTO
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Valor a definir
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    O valor será apresentado quando os planos e a plataforma
                    de pagamento forem configurados.
                  </p>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-gray-500">
                  Seus dados estão sendo exibidos apenas nesta página.
                  Ainda não foram enviados ou armazenados.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Sua avaliação foi concluída! A integração de pagamento será configurada na próxima etapa."
                    )
                  }
                  className="mt-6 w-full rounded-full bg-lime-400 px-5 py-4 font-black text-black transition hover:bg-lime-300"
                >
                  Finalizar avaliação →
                </button>
              </>
            )}

            <div className="mt-10 flex gap-3">
              {step > 0 && (
                <button
                  type="button"
                  onClick={back}
                  className="flex-1 rounded-full border border-white/20 px-5 py-4 font-bold hover:border-lime-400"
                >
                  Voltar
                </button>
              )}

              {step < 4 && (
                <button
                  type="button"
                  onClick={next}
                  className="flex-1 rounded-full bg-lime-400 px-5 py-4 font-black text-black transition hover:bg-lime-300"
                >
                  Continuar →
                </button>
              )}
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-600">
            SONHO DE ATLETA — SEU SONHO. SUA EVOLUÇÃO.
          </p>
        </div>
      </section>
    </main>
  );
}
