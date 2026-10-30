/* =========================================================
   PORTFÓLIO PEDRO LOPES GOUVEA — JavaScript (script.js)
   Aulas 1 a 5 (Bootcamp / Fundamentos de Front-End)
   
   aula 1 — a página fala: variáveis e template string
   aula 2 — a página responde: if, datas e cliques
   aula 3 — organizando o código: funções, modo escuro e menu
   aula 4 — listas: as habilidades nascem de arrays
   aula 5 — os dados mandam: objetos, projetos e formulário

   Este arquivo é simples, limpo e comentado para iniciantes.
   Cada função faz apenas uma coisa, usando querySelector,
   addEventListener e classList.
   ========================================================= */

/* =========================================================
   PARTE 1 — AULA 1: a página fala (variáveis e dados)
   ========================================================= */

// Informações principais do Pedro
const nome = "Pedro Lopes Gouvea";
const profissao = "Desenvolvedor Front-End em formação";
const cidade = "Curitiba";
const anoAtual = 2026;
const anoInicioEstudos = 2025;

// Cálculo simples de tempo de estudo
const mesesEstudo = (anoAtual - anoInicioEstudos) * 12;

// Frase de apresentação (bio)
const bio = "Sou o Pedro e estou desenvolvendo minhas habilidades em tecnologia e criação de experiências digitais. Gosto de aprender na prática e transformar ideias em projetos. Quero continuar evoluindo e construir um portfólio com trabalhos reais.";

// Escreve os dados no topo da página
document.querySelector(".hero-nome").textContent = nome;
document.querySelector(".hero-cargo").textContent = `${profissao} · ${cidade}`;
document.querySelector(".hero-bio").textContent = bio;


/* =========================================================
   PARTE 2 — AULA 2: a página responde (data, hora e saudação)
   ========================================================= */

// Pega a hora do relógio do computador
const agora = new Date();
const hora = agora.getHours();
const dia = agora.getDate();
const mes = agora.getMonth() + 1;
const ano = agora.getFullYear();

// Função que devolve a saudação de acordo com o horário
function montarSaudacao(horaAtual) {
  if (horaAtual < 12) {
    return "Bom dia";
  } else if (horaAtual < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

// Coloca a saudação no Hero
document.querySelector(".hero-saudacao").textContent = `${montarSaudacao(hora)}! Seja bem-vindo ao meu portfólio.`;

// Atualiza o rodapé com o ano e a data
document.querySelector(".rodape-autor").textContent = nome;
document.querySelector(".rodape-data").textContent = `Atualizado em ${dia}/${mes}/${ano} · Feito com HTML, CSS e JavaScript`;


/* =========================================================
   PARTE 3 — AULA 3: organizando o código (funções, tema e menu)
   ========================================================= */

/* ---------------------------------------------------------
   1. MODO ESCURO E CLARO
   O site começa escuro (#080B12). O botão alterna as cores.
   Usamos ícones do Font Awesome (nunca emojis).
   --------------------------------------------------------- */
const pagina = document.body;
const botaoTema = document.querySelector(".botao-tema");

function alternarTema() {
  pagina.classList.toggle("modo-claro");

  if (pagina.classList.contains("modo-claro")) {
    botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    botaoTema.setAttribute("aria-label", "Ativar modo escuro");
  } else {
    botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    botaoTema.setAttribute("aria-label", "Ativar modo claro");
  }
}

botaoTema.addEventListener("click", alternarTema);


/* ---------------------------------------------------------
   2. MENU DO CELULAR (Responsivo)
   Abre e fecha o menu em telas pequenas.
   --------------------------------------------------------- */
const botaoMenu = document.querySelector(".botao-menu");
const menuNavegacao = document.querySelector(".topo nav");

function abrirMenu() {
  menuNavegacao.classList.add("aberto");
  botaoMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  botaoMenu.setAttribute("aria-expanded", "true");
}

function fecharMenu() {
  menuNavegacao.classList.remove("aberto");
  botaoMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
  botaoMenu.setAttribute("aria-expanded", "false");
}

function alternarMenu() {
  if (menuNavegacao.classList.contains("aberto")) {
    fecharMenu();
  } else {
    abrirMenu();
  }
}

botaoMenu.addEventListener("click", alternarMenu);

// Fecha o menu ao clicar em qualquer link da página
const linksDoMenu = document.querySelectorAll(".topo nav a");

for (const link of linksDoMenu) {
  link.addEventListener("click", fecharMenu);
}


/* =========================================================
   PARTE 4 — AULA 4: listas (as habilidades nascem de arrays)
   ========================================================= */

// Listas com as tecnologias estudadas pelo Pedro
const skillsFront = [
  "HTML5 semântico e acessibilidade",
  "CSS3 moderno (Flexbox e Grid)",
  "JavaScript puro (DOM e eventos)"
];

const skillsFerramentas = [
  "Git e GitHub (controle de versão)",
  "Python (lógica e automações)",
  "UI/UX e design de interfaces"
];

// Função que monta a lista no HTML com for...of
function montarLista(seletor, itens) {
  let html = "";

  for (const item of itens) {
    html = html + `<li><i class="fa-solid fa-check"></i> <span>${item}</span></li>`;
  }

  document.querySelector(seletor).innerHTML = html;
}

// Executa a montagem das duas listas
montarLista("#lista-front", skillsFront);
montarLista("#lista-ferramentas", skillsFerramentas);


/* =========================================================
   PARTE 5 — AULA 5: os dados mandam (cards de projetos com objetos)
   ========================================================= */

// Lista com os projetos práticos do Pedro
const projetos = [
  {
    nome: "Revista Tipográfica Digital",
    descricao: "Layout editorial focado em leitura confortável e ritmo visual com CSS Grid.",
    tecnologias: "HTML5, CSS3, CSS Grid",
    imagem: "img/projeto-revista.svg",
    linkProjeto: "#",
    linkCodigo: "[link do GitHub]"
  },
  {
    nome: "Gerenciador de Tarefas",
    descricao: "Aplicação interativa para registro de metas com armazenamento no navegador.",
    tecnologias: "JavaScript, DOM, LocalStorage",
    imagem: "img/projeto-tarefas.svg",
    linkProjeto: "#",
    linkCodigo: "[link do GitHub]"
  },
  {
    nome: "Organizador de Arquivos",
    descricao: "Script em Python para triagem e organização rápida de diretórios desordenados.",
    tecnologias: "Python, Automação, Arquivos",
    imagem: "img/projeto-python.svg",
    linkProjeto: "#",
    linkCodigo: "[link do GitHub]"
  }
];

// Função que monta os cards de projetos no HTML
function montarProjetos(lista) {
  let html = "";

  for (const projeto of lista) {
    html = html + `
      <article class="cartao-projeto">
        <div class="capa-projeto">
          <img src="${projeto.imagem}" alt="Prévia ilustrada do projeto ${projeto.nome}" class="foto-projeto">
          <span class="etiqueta-ficticio">Projeto fictício</span>
        </div>
        <div class="conteudo-projeto">
          <h3>${projeto.nome}</h3>
          <p>${projeto.descricao}</p>
          <h4>Tecnologias</h4>
          <p class="projeto-techs">${projeto.tecnologias}</p>
          <div class="links-projeto">
            <a href="${projeto.linkProjeto}" class="link-acao">Ver projeto</a>
            <a href="${projeto.linkCodigo}" class="link-acao link-secundario" target="_blank" rel="noopener noreferrer">Código no GitHub</a>
          </div>
        </div>
      </article>`;
  }

  document.querySelector("#lista-projetos").innerHTML = html;
}

montarProjetos(projetos);


/* =========================================================
   PARTE 6 — FORMULÁRIO DE CONTATO (Validação simples)
   ========================================================= */

const formContato = document.querySelector("#formulario-contato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const avisoFormulario = document.querySelector("#aviso-formulario");

// Funções de validação (uma regra por função)
function validarNome(valor) {
  if (valor === "") {
    return "Por favor, digite seu nome.";
  } else if (valor.length < 3) {
    return "O nome precisa ter pelo menos 3 caracteres.";
  }
  return "";
}

function validarEmail(valor) {
  if (valor === "") {
    return "Por favor, digite seu e-mail.";
  } else if (valor.includes("@") === false || valor.includes(".") === false) {
    return "Por favor, insira um e-mail válido.";
  }
  return "";
}

function validarAssunto(valor) {
  if (valor === "") {
    return "Por favor, digite o assunto.";
  } else if (valor.length < 3) {
    return "O assunto precisa ter pelo menos 3 caracteres.";
  }
  return "";
}

function validarMensagem(valor) {
  if (valor === "") {
    return "Por favor, escreva sua mensagem.";
  } else if (valor.length < 10) {
    return "A mensagem precisa ter pelo menos 10 caracteres.";
  }
  return "";
}

// Exibe mensagem de aviso com classe visual
function mostrarAviso(texto, tipo) {
  avisoFormulario.textContent = texto;
  avisoFormulario.classList.remove("aviso-erro");
  avisoFormulario.classList.remove("aviso-sucesso");
  avisoFormulario.classList.add(tipo);
  avisoFormulario.classList.add("visivel");
}

// Envio do formulário
function processarEnvio(evento) {
  evento.preventDefault();

  const nomeValor = campoNome.value.trim();
  const emailValor = campoEmail.value.trim();
  const assuntoValor = campoAssunto.value.trim();
  const mensagemValor = campoMensagem.value.trim();

  const erroNome = validarNome(nomeValor);
  const erroEmail = validarEmail(emailValor);
  const erroAssunto = validarAssunto(assuntoValor);
  const erroMensagem = validarMensagem(mensagemValor);

  if (erroNome !== "") {
    mostrarAviso(erroNome, "aviso-erro");
  } else if (erroEmail !== "") {
    mostrarAviso(erroEmail, "aviso-erro");
  } else if (erroAssunto !== "") {
    mostrarAviso(erroAssunto, "aviso-erro");
  } else if (erroMensagem !== "") {
    mostrarAviso(erroMensagem, "aviso-erro");
  } else {
    mostrarAviso(`Mensagem enviada com sucesso! Obrigado, ${nomeValor}. Entrarei em contato.`, "aviso-sucesso");
    formContato.reset();
  }
}

formContato.addEventListener("submit", processarEnvio);


/* ---------------------------------------------------------
   BOTÃO COPIAR E-MAIL
   --------------------------------------------------------- */
const botaoCopiar = document.querySelector("#botao-copiar");
const textoEmail = document.querySelector("#texto-email");
const avisoCopia = document.querySelector("#aviso-copia");

function copiarEmail() {
  const email = textoEmail.textContent.trim();

  navigator.clipboard.writeText(email).then(function () {
    avisoCopia.classList.add("visivel");
    setTimeout(function () {
      avisoCopia.classList.remove("visivel");
    }, 3000);
  });
}

if (botaoCopiar) {
  botaoCopiar.addEventListener("click", copiarEmail);
}
