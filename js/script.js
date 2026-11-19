// ============ DADOS ============

const personagens = [
  {
    foto: "img/simba.jpg",
    emoji: "🦁",
    nome: "Simba",
    papel: "Protagonista — Príncipe e futuro Rei",
    teaser: "O filhote que precisa aprender a se tornar o rei que estava destinado a ser.",
    personalidade: "Corajoso, brincalhão e impulsivo quando jovem; amadurece após o exílio, tornando-se responsável e justo.",
    curiosidade: "Na versão original, Simba filhote foi dublado por Jonathan Taylor Thomas e, adulto, por Matthew Broderick.",
    frase: "Eu vou ser rei, então esse lugar todo é... o que essa sombra vai tocar?"
  },
  {
    foto: "img/mufasa.jpg",
    emoji: "👑",
    nome: "Mufasa",
    papel: "Rei das Terras do Orgulho — Pai de Simba",
    teaser: "O rei sábio e amoroso que ensina Simba sobre o Ciclo da Vida.",
    personalidade: "Nobre, protetor e sábio. Trata seu reino e sua família com responsabilidade e compaixão.",
    curiosidade: "Foi dublado na versão original por James Earl Jones, a mesma voz icônica de Darth Vader em Star Wars.",
    frase: "Lembre-se de quem você é."
  },
  {
    foto: "img/scar.jpg",
    emoji: "😈",
    nome: "Scar",
    papel: "Antagonista — Irmão de Mufasa",
    teaser: "Ambicioso e ressentido, arma um plano traiçoeiro para tomar o trono.",
    personalidade: "Inteligente, sarcástico e manipulador. Seu ciúme do irmão o consome por completo.",
    curiosidade: "No filme 'Mufasa: O Rei Leão' (2024), é revelado que o nome original de Scar era Taka.",
    frase: "Vida não é justa, não é mesmo, meu jovem príncipe?"
  },
  {
    foto: "img/nala.jpg",
    emoji: "🦁",
    nome: "Nala",
    papel: "Amiga de infância e futura rainha",
    teaser: "Corajosa e independente, reencontra Simba anos depois e o ajuda a enxergar seu destino.",
    personalidade: "Determinada, leal e forte. Não hesita em desafiar Simba quando ele foge de suas responsabilidades.",
    curiosidade: "Foi dublada na fase adulta por Moira Kelly e, quando filhote, por Niketa Calame.",
    frase: "Simba, é o que você faz que mostra quem você é."
  },
  {
    foto: "img/timao.jpg",
    emoji: "🦡",
    nome: "Timão",
    papel: "Suricato, amigo e aliviador cômico",
    teaser: "Junto com Pumba, resgata Simba e o apresenta ao estilo de vida 'Hakuna Matata'.",
    personalidade: "Engraçado, despreocupado e leal aos amigos, apesar do jeito egoísta às vezes.",
    curiosidade: "Foi dublado na versão original por Nathan Lane, ator de teatro musical premiado.",
    frase: "Hakuna Matata! Que frase maravilhosa!"
  },
  {
    foto: "img/pumba.jpg",
    emoji: "🐗",
    nome: "Pumba",
    papel: "Javali, amigo e aliviador cômico",
    teaser: "Gentil e sensível apesar da aparência assustadora, torna-se um segundo pai para Simba.",
    personalidade: "Bondoso, leal e um pouco inseguro sobre seu próprio cheiro e gases.",
    curiosidade: "Foi um dos primeiros personagens da Disney a ter piadas explícitas sobre flatulência no cinema.",
    frase: "Às vezes eu como bicho-pau e camarão... mas nunca perco o apetite!"
  },
  {
    foto: "img/rafiki.jpg",
    emoji: "🐒",
    nome: "Rafiki",
    papel: "Xamã, mandril sábio",
    teaser: "O guia espiritual da savana, guarda as memórias de Mufasa e ajuda Simba a encontrar seu caminho.",
    personalidade: "Excêntrico, sábio e misterioso — enxerga além do que os olhos comuns veem.",
    curiosidade: "Foi dublado na versão original por Robert Guillaume. Seu nome significa 'amigo' em suaíli.",
    frase: "O passado pode doer. Mas do jeito que eu vejo, você pode fugir dele ou aprender com ele."
  },
  {
    foto: "img/zazu.jpg",
    emoji: "🦜",
    nome: "Zazu",
    papel: "Calau, mordomo real",
    teaser: "Conselheiro leal de Mufasa e depois de Simba, sempre pronto com um comentário sarcástico.",
    personalidade: "Formal, leal e um tanto ansioso, mas corajoso quando é preciso proteger a família real.",
    curiosidade: "Foi dublado na versão original pelo comediante britânico Rowan Atkinson, o Mr. Bean.",
    frase: "Só porque eu digo o que acham não significa que eu não penso o que digo!"
  },
  {
    foto: "img/sarabi.jpg",
    emoji: "🦴",
    nome: "Sarabi",
    papel: "Rainha das Terras do Orgulho — Mãe de Simba",
    teaser: "Rainha forte que enfrenta Scar diretamente durante a seca que assola o reino.",
    personalidade: "Corajosa, digna e resiliente diante das adversidades trazidas pelo reinado de Scar.",
    curiosidade: "Foi dublada na versão original por Madge Sinclair, atriz jamaicana premiada.",
    frase: "Um verdadeiro rei governa com bondade."
  },
  {
    foto: "img/hienas.jpg",
    emoji: "🐺",
    nome: "Shenzi, Banzai e Ed",
    papel: "Trio de hienas, aliadas de Scar",
    teaser: "Vivem no cemitério de elefantes e são recrutadas por Scar em troca de comida.",
    personalidade: "Shenzi é a líder astuta, Banzai é o impulsivo e Ed apenas ri sem parar.",
    curiosidade: "Shenzi foi dublada na versão original por Whoopi Goldberg e Banzai por Cheech Marin.",
    frase: "Nós vamos comer bem hoje à noite!"
  }
];

const curiosidades = [
  {
    icon:"🎭",
    titulo:"Inspirado em Shakespeare",
    texto:"A trama tem forte influência de Hamlet, de William Shakespeare — um príncipe que perde o pai e precisa vingar sua morte para reivindicar o trono."
  },
  {
    icon:"🎬",
    titulo:"Abertura sem cortes",
    texto:"A cena de abertura 'Circle of Life' é uma das sequências mais aclamadas da animação, sincronizada ao nascer do sol e apresentando praticamente todos os animais da savana."
  },
  {
    icon:"🎼",
    titulo:"Trilha vencedora do Oscar",
    texto:"Hans Zimmer venceu o Oscar de Melhor Trilha Sonora, e 'Can You Feel the Love Tonight', de Elton John e Tim Rice, venceu Melhor Canção Original em 1995."
  },
  {
    icon:"🗣️",
    titulo:"Hakuna Matata é real",
    texto:"A expressão suaíli 'Hakuna Matata' realmente existe e significa 'sem problemas' ou 'não se preocupe', usada no dia a dia no leste da África."
  },
  {
    icon:"🌍",
    titulo:"Pesquisa de campo na África",
    texto:"Roteiristas e animadores viajaram ao Quênia para observar de perto a paisagem, a luz e os animais reais que inspiraram cada cenário do filme."
  },
  {
    icon:"🏆",
    titulo:"Maior bilheteria da animação tradicional",
    texto:"Por muitos anos, O Rei Leão foi o filme de animação desenhada à mão de maior bilheteria da história do cinema."
  },
  {
    icon:"🎟️",
    titulo:"Sucesso na Broadway",
    texto:"O musical estreou em 1997, dirigido por Julie Taymor, com fantasias e máscaras premiadas, e segue em cartaz como um dos maiores sucessos de todos os tempos."
  },
  {
    icon:"🦁",
    titulo:"Retorno de James Earl Jones",
    texto:"James Earl Jones voltou a dar voz a Mufasa 25 anos depois, no remake fotorrealista de 2019, dirigido por Jon Favreau."
  },
  {
    icon:"📜",
    titulo:"O nome secreto de Scar",
    texto:"O prelúdio 'Mufasa: O Rei Leão' (2024), dirigido por Barry Jenkins, revelou que Scar se chamava Taka antes de ganhar sua cicatriz."
  }
];

const momentos = [
  {
    titulo:"Circle of Life — A Apresentação de Simba",
    texto:"Ao nascer do sol, todos os animais das Terras do Orgulho se reúnem em Pride Rock para saudar o novo príncipe, Simba, erguido por Rafiki diante do reino."
  },
  {
    titulo:"A lição no topo de Pride Rock",
    texto:"Mufasa mostra a Simba tudo o que a luz toca, explicando o equilíbrio da natureza e o significado de ser rei — e o que fica além das fronteiras do reino."
  },
  {
    titulo:"A estampida e a morte de Mufasa",
    texto:"Scar arma uma armadilha fatal: provoca uma debandada de gnus no desfiladeiro e, ao 'salvar' Simba, deixa Mufasa cair para a morte — um dos momentos mais marcantes do cinema infantil.",
  },
  {
    titulo:"O exílio de Simba",
    texto:"Convencido por Scar de que a morte do pai foi culpa sua, Simba foge para sempre das Terras do Orgulho, deixando seu destino de rei para trás."
  },
  {
    titulo:"Hakuna Matata",
    texto:"Timão e Pumba resgatam Simba e o ensinam sua filosofia de vida sem preocupações, enquanto o filhote cresce despreocupado na floresta."
  },
  {
    titulo:"O reencontro com Nala",
    texto:"Já adulto, Simba reencontra Nala, que o desafia a retornar e assumir seu lugar como rei — reacendendo memórias que ele tentou esquecer."
  },
  {
    titulo:"'Can You Feel the Love Tonight'",
    texto:"Sob o céu estrelado, Simba e Nala redescobrem seus sentimentos um pelo outro nesta canção romântica vencedora do Oscar."
  },
  {
    titulo:"A visão de Mufasa nas nuvens",
    texto:"Rafiki leva Simba a confrontar o passado, e o espírito de Mufasa aparece nas nuvens, lembrando-o de quem ele realmente é: 'Lembre-se quem você é'."
  },
  {
    titulo:"O confronto final com Scar",
    texto:"Simba retorna a Pride Rock em meio a uma tempestade, confronta Scar, revela a verdade sobre a morte de Mufasa e retoma seu trono legítimo."
  },
  {
    titulo:"O novo Ciclo da Vida",
    texto:"Simba assume seu lugar como rei ao lado de Nala, e o filme termina como começou: Rafiki apresenta o filhote deles ao reino, fechando o Círculo da Vida."
  }
];

const frases = [
  { texto:"Lembre-se de quem você é.", autor:"Mufasa" },
  { texto:"Hakuna Matata — significa sem preocupações, pelo resto dos seus dias.", autor:"Timão e Pumba" },
  { texto:"O passado pode doer, mas do jeito que eu vejo, você pode fugir dele ou aprender com ele.", autor:"Rafiki" },
  { texto:"Tudo o que a luz toca é o nosso reino.", autor:"Mufasa" },
  { texto:"É o que você faz que mostra quem você é, não o que você diz que é.", autor:"Nala (adaptado)" },
  { texto:"Os reis do passado olham para nós dessas estrelas.", autor:"Mufasa" },
  { texto:"Vida não é justa, não é mesmo, meu jovem príncipe?", autor:"Scar" },
  { texto:"Enquanto o sol nascer, nós vamos estar aqui.", autor:"Simba" }
];

const quizPerguntas = [
  {
    pergunta:"Quem é o irmão de Mufasa e vilão da história?",
    opcoes:["Zazu","Scar","Rafiki","Banzai"],
    correta:1
  },
  {
    pergunta:"O que significa 'Hakuna Matata' em suaíli?",
    opcoes:["Longa vida ao rei","Coragem e força","Sem preocupações","Círculo da vida"],
    correta:2
  },
  {
    pergunta:"Quem é o mandril sábio que guia Simba?",
    opcoes:["Pumba","Timão","Rafiki","Zazu"],
    correta:2
  },
  {
    pergunta:"Como Scar engana Simba sobre a morte de Mufasa?",
    opcoes:[
      "Diz que foi um acidente causado pelas hienas",
      "Convence Simba de que a culpa foi dele",
      "Diz que Mufasa fugiu do reino",
      "Culpa Zazu pela estampida"
    ],
    correta:1
  },
  {
    pergunta:"Qual canção venceu o Oscar de Melhor Canção Original?",
    opcoes:["Hakuna Matata","Circle of Life","Can You Feel the Love Tonight","I Just Can't Wait to Be King"],
    correta:2
  },
  {
    pergunta:"Quem ajuda Simba a reencontrar seu destino no meio da floresta?",
    opcoes:["Sarabi","Nala","Zazu","Os elefantes"],
    correta:1
  },
  {
    pergunta:"Qual era o nome original de Scar, revelado no filme 'Mufasa' (2024)?",
    opcoes:["Kovu","Taka","Ahadi","Simba"],
    correta:1
  },
  {
    pergunta:"Quem compôs a trilha sonora vencedora do Oscar?",
    opcoes:["Alan Menken","Hans Zimmer","John Williams","Tim Rice"],
    correta:1
  }
];

// ============ RENDER: PERSONAGENS ============
const cardsGrid = document.getElementById('cardsGrid');
personagens.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'char-card';
  card.innerHTML = `
    <div class="char-avatar">
      <img src="${p.foto}" alt="Foto real do animal que inspirou ${p.nome}" loading="lazy">
      <span class="char-badge">${p.emoji}</span>
    </div>
    <div class="char-info">
      <div class="char-name">${p.nome}</div>
      <div class="char-role">${p.papel}</div>
      <div class="char-teaser">${p.teaser}</div>
      <div class="char-more">Saiba mais →</div>
    </div>
  `;
  card.addEventListener('click', () => openModal(i));
  cardsGrid.appendChild(card);
});

// ============ MODAL ============
const modalOverlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');

function openModal(i){
  const p = personagens[i];
  modalBox.innerHTML = `
    <button class="modal-close" id="modalClose">✕</button>
    <div class="modal-avatar">
      <img src="${p.foto}" alt="Foto real do animal que inspirou ${p.nome}" loading="lazy">
      <span class="char-badge">${p.emoji}</span>
    </div>
    <div class="modal-name">${p.nome}</div>
    <div class="modal-role">${p.papel}</div>
    <div class="modal-section">
      <h4>Personalidade</h4>
      <p>${p.personalidade}</p>
    </div>
    <div class="modal-section">
      <h4>Curiosidade</h4>
      <p>${p.curiosidade}</p>
    </div>
    <div class="modal-quote">"${p.frase}"</div>
  `;
  modalOverlay.classList.add('active');
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});

// ============ RENDER: CURIOSIDADES ============
const curioGrid = document.getElementById('curioGrid');
curiosidades.forEach(c => {
  const div = document.createElement('div');
  div.className = 'curio-card';
  div.innerHTML = `
    <div class="curio-icon">${c.icon}</div>
    <div class="curio-title">${c.titulo}</div>
    <div class="curio-text">${c.texto}</div>
  `;
  curioGrid.appendChild(div);
});

// ============ RENDER: TIMELINE ============
const timeline = document.getElementById('timeline');
momentos.forEach((m, i) => {
  const item = document.createElement('div');
  item.className = 'tl-item';
  item.innerHTML = `
    <div class="tl-dot"></div>
    <div class="tl-card">
      <div class="tl-num">CENA ${i+1}</div>
      <div class="tl-title">${m.titulo}</div>
      <div class="tl-text">${m.texto}</div>
    </div>
  `;
  timeline.appendChild(item);
});

// ============ FRASES CAROUSEL ============
const frasesCarousel = document.getElementById('frasesCarousel');
const frasesDots = document.getElementById('frasesDots');
let fraseAtual = 0;
let fraseTimer = null;

frases.forEach((f, i) => {
  const slide = document.createElement('div');
  slide.className = 'frase-slide' + (i === 0 ? ' active' : '');
  slide.innerHTML = `<div class="frase-quote">"${f.texto}"</div><div class="frase-author">— ${f.autor}</div>`;
  frasesCarousel.appendChild(slide);

  const dot = document.createElement('div');
  dot.className = 'frase-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => showFrase(i));
  frasesDots.appendChild(dot);
});

function showFrase(i){
  const slides = frasesCarousel.querySelectorAll('.frase-slide');
  const dots = frasesDots.querySelectorAll('.frase-dot');
  slides[fraseAtual].classList.remove('active');
  dots[fraseAtual].classList.remove('active');
  fraseAtual = (i + frases.length) % frases.length;
  slides[fraseAtual].classList.add('active');
  dots[fraseAtual].classList.add('active');
  resetFraseTimer();
}
function resetFraseTimer(){
  clearInterval(fraseTimer);
  fraseTimer = setInterval(() => showFrase(fraseAtual + 1), 6000);
}
document.getElementById('prevFrase').addEventListener('click', () => showFrase(fraseAtual - 1));
document.getElementById('nextFrase').addEventListener('click', () => showFrase(fraseAtual + 1));
resetFraseTimer();

// ============ QUIZ ============
const quizContent = document.getElementById('quizContent');
const quizProgressFill = document.getElementById('quizProgressFill');
let quizIndex = 0;
let quizScore = 0;

function renderQuizQuestion(){
  const q = quizPerguntas[quizIndex];
  quizProgressFill.style.width = `${(quizIndex / quizPerguntas.length) * 100}%`;
  quizContent.innerHTML = `
    <div class="quiz-question">Pergunta ${quizIndex+1} de ${quizPerguntas.length}: ${q.pergunta}</div>
    <div class="quiz-options" id="quizOptions"></div>
    <div class="quiz-footer">
      <span class="quiz-score">Pontuação: ${quizScore} / ${quizPerguntas.length}</span>
      <button class="quiz-next" id="quizNext">Próxima →</button>
    </div>
  `;
  const optsDiv = document.getElementById('quizOptions');
  q.opcoes.forEach((op, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = op;
    btn.addEventListener('click', () => selectAnswer(i));
    optsDiv.appendChild(btn);
  });
}

function selectAnswer(i){
  const q = quizPerguntas[quizIndex];
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach(b => b.disabled = true);
  if(i === q.correta){
    buttons[i].classList.add('correct');
    quizScore++;
  } else {
    buttons[i].classList.add('wrong');
    buttons[q.correta].classList.add('correct');
  }
  document.querySelector('.quiz-score').textContent = `Pontuação: ${quizScore} / ${quizPerguntas.length}`;
  document.getElementById('quizNext').classList.add('show');
}

document.addEventListener('click', (e) => {
  if(e.target && e.target.id === 'quizNext'){
    quizIndex++;
    if(quizIndex < quizPerguntas.length){
      renderQuizQuestion();
    } else {
      renderQuizResult();
    }
  }
  if(e.target && e.target.id === 'quizRestart'){
    quizIndex = 0;
    quizScore = 0;
    renderQuizQuestion();
  }
});

function renderQuizResult(){
  quizProgressFill.style.width = '100%';
  const pct = quizScore / quizPerguntas.length;
  let emoji, titulo, texto;
  if(pct === 1){
    emoji = '👑'; titulo = 'Você é o verdadeiro Rei da Savana!';
    texto = `Acertou ${quizScore} de ${quizPerguntas.length}. Conhecimento digno de Pride Rock!`;
  } else if(pct >= 0.6){
    emoji = '🦁'; titulo = 'Muito bem, jovem príncipe!';
    texto = `Acertou ${quizScore} de ${quizPerguntas.length}. Você conhece bem as Terras do Orgulho.`;
  } else {
    emoji = '🐾'; titulo = 'Hakuna Matata, tente novamente!';
    texto = `Acertou ${quizScore} de ${quizPerguntas.length}. Que tal rever os personagens e curiosidades acima?`;
  }
  quizContent.innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-emoji">${emoji}</div>
      <div class="quiz-result-title">${titulo}</div>
      <div class="quiz-result-text">${texto}</div>
      <button class="quiz-restart" id="quizRestart">Jogar novamente</button>
    </div>
  `;
}

renderQuizQuestion();

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = `${(window.scrollY / h) * 100}%`;
});

// ============ MOBILE NAV TOGGLE ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ============ THEME TOGGLE (DIA / NOITE) ============
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('night');
  themeToggle.textContent = document.body.classList.contains('night') ? '☀️' : '🌙';
});
