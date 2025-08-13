const app = document.getElementById('app');

let currentTheme = '';
let currentQuestion = 0;
let userAnswers = [];
const scores = {};
const themeTitles = {
  Biodiversité: 'Biodiversité et enjeux',
  eau: 'L’eau indispensable à la vie',
  espaces: 'Les espaces vitaux des espèces ',
  environnement: 'Environnement et paysages ',
  abeilles: 'Les abeilles'
};

const themes = {
  Biodiversité: {
    image: 'assets/lake-7107210_1280.jpg',
    intro: {
      text: "Les 31 communes du territoire Carmausin-Ségala se sont lancées à l’échelle intercommunale dans la création d’un atlas de la biodiversité.<br>Atlas et biodiversité, 2 mots complexes !<br><br> D’ailleurs, pourquoi mener cette démarche alors que partout autour de nous la nature est présente ?",
      image: 'assets/carte.png'
    },
    questions: [
      {
        question: "Pour vous à quoi correspond un atlas de la biodiversité à l’échelle intercommunale du Carmausin-Ségala?",
        options: [
          "Un dictionnaire de la variété des espèces uniquement animales en Carmausin-Ségala",
          "Un inventaire de la variété de la vie sur le territoire Carmausin-Ségala",
          "Une cartographie des enjeux sur les espèces, habitats, écosystèmes en Carmausin-Ségala",
          "Une identification des enjeux uniquement sur les forêts de châtaigniers et de feuillus",
          "Une identification et une évaluation du devenir des océans "
        ],
        answers: [1, 2],
        info: "La biodiversité désigne l’ensemble des êtres vivants (plantes, animaux, micro-organismes) ainsi que les écosystèmes dans lesquels ils vivent et interagissent. Aujourd’hui, le constat est sans appel, la biodiversité est en chute libre...",
        image: "assets/lake-7107210_1280.jpg"
      },
      {
        question: "Quel est l’objectif principal d’un atlas de la biodiversité sur un territoire intercommunal comme le Carmausin-Ségala?",
        options: [
          "Créer des parcs d’attractions",
          "Augmenter le nombre de routes rurales",
          "Favoriser la connaissance et la préservation de la biodiversité locale",
          "Sensibiliser et mobiliser les citoyens, les décideurs locaux autour de la biodiversité locale",
          "A terme, intégrer les enjeux de biodiversité et une évaluation des impacts des aménagements au sein des politiques publiques locales",
          "Remplacer les inventaires forestiers"
        ],
        answers: [2, 3, 4],
        info: "Un atlas de la biodiversité est un outil au service des élus et des citoyens...",
        image: "assets/atlas.png"
      }
    ]
  },
  eau: {
    image: 'assets/eau.jpg',
    intro: {
      text: "Le territoire de la Communauté de Communes Carmausin-Ségala dispose d’une grande variété de milieux aquatiques et humides. Testez vos connaissances sur l’eau .",
      image: 'assets/eau.jpg'
    },
    questions: [
      {
        question: "Qu’est-ce qu’un bassin versant ?",
        options: ["Un lac formé par les pluies ",
           "Une réserve d’eau souterraine", 
           "Une zone géographique délimitée par des lignes de crêtes et où tous les cours d’eaux convergent en un point ",
            "Une zone géographique plate où l’eau stagne naturellement "],
        answer: 2,
        info: "Un bassin versant est une zone délimitée naturellement par des lignes de crête où toutes les eaux de pluie, de ruissellement et des rivières convergent vers un même exutoire (chez nous plutôt des rivières, des ruisseaux, des lacs). C’est une unité hydrologique essentielle pour la gestion de l’eau. Sans eau, il ne peut pas y avoir de vie ! Et notre santé dépend de la qualité de l’eau que nous consommons. C’est pourquoi il est essentiel de préserver les bassins versants des rivières, des ruisseaux ou des lacs de toute pollution que nous pourrions introduire y compris accidentellement ou de tout frein à leur approvisionnement.",
        image: "assets/bassin-v.jpg"
      },
      {
        question: "Quels sont pour vous les lacs alimentant en eau potable les communes de la Communauté de Communes Carmausin-Ségala ?",
        options: ["Le lac du barrage de la Roucarié",
           "Le lac des Homps",
            "Le plan d’eau de Fourogue ", 
            "Le barrage de Thuriès",
            "Le Barrage de Fontbonne",
            "Le bassin de Cap Découverte"],
        answers: [0,3,4],
        info: "Le territoire de la Communauté de Communes Carmausin-Ségala a la chance d’être doté de 3 bassins réservoirs pour l’alimentation en eau potable autour des barrages de la Roucarié, de Thuries et de Fontbonne. Tous 3 alimentent en eau potable 16537 abonnés. La rivière « Le Céret » alimente les réservoirs de Fontbonne et de la Roucarié et la rivière « Viaur ».celui de Thuriès. L'enjeu pour les années à venir consiste à préserver ces espaces de captage, véritables réservoirs de biodiversité animale et végétale, des nuisances et pollutions pour assurer une alimentation en eau potable pour tous.",
        image: "assets/bassin-v.jpg"
      },
      
    ]
  },

  espaces : {
    image: 'assets/biodiversité.jpg',
    intro: {
      text: "Comme pour l’Homme, les espèces végétales ou animales ont des besoins vitaux à satisfaire comme se nourrir ou se reproduire. Pour cela, ils doivent pouvoir se déplacer sur un territoire vital à leur espèce qui peut avoir plusieurs échelles. Le maintien ou la restauration des continuités écologiques (connectivités ou connexions) permettent de répondre à ces besoins. Testez vos connaissances au travers de 2 questions",
      image: 'assets/biodiversité.jpg'
    },
    questions: [
      {
        question: "Quels éléments du paysage peuvent limiter le déplacement des animaux en créant des barrières ?",
        options: [" Une autoroute ",
           " Une haie ", 
           "Une zone humide  ",
           " Un barrage ",
            "Les lumières nocturnes "],
        answers: [0,3,4],
        info: "Les continuités écologiques sont constituées à la fois de réservoirs de biodiversité qui assurent aux espèces la possibilité de réaliser tout ou partie de leur cycle de vie, mais également de corridors écologiques qui permettent aux espèces de se déplacer entre ces réservoirs. L’urbanisation (constructions), les infrastructures de transport comme les routes ou encore la pollution lumineuse ou sonore réduisent la surface des espaces naturels ..[texte]",
        image: "assets/biodiversité.jpg"
      },
      {
        question: "Quels rôles peut jouer la haie champêtre ?",
        options: ["Un filtre naturel ",
           "Un parasol et un parapluie ",
            "Une barrière infranchissable  ", 
            "Un hôtel et un garde-manger ",
            "Hulk dans le prochain Avengers "],
        answers: [0,1,3],
        info: "Les haies champêtres composées d’essences locales (cornouillers sanguin, pruneliers, aubépines, chênes ,….) sont de « véritables couteaux-suisse » aux services de l’environnement et de l’agriculture. Elles limitent l’érosion et protègent les sols. Elles filtrent l’eau et limitent l’augmentation des températures. Elles sont également un refuge pour les animaux qui pourront y trouver le gîte et le couvert. Elles participent aussi à la qualité du paysage et peuvent être une ressource en bois, en fruits, en fleurs pour les pollinisateurs dont les abeilles domestiques productrices de miel. Depuis ces dernières années, de nombreuses exploitations agricoles ou communes se sont lancées dans des actions de replantation.",
        image: "assets/biodiversité.jpg"
      },
      
    ]
  },

  environnement : {
    image: 'assets/environnement.jpg',
    intro: {
      text: "Le territoire couvert par la Communauté de Communes Carmausin-Ségala se caractérise par une remarquable diversité paysagère, regroupée sous des caractéristiques communes (unités). Il se compose de 4 grandes unités paysagères mais les connaissez-vous ?",
      image: 'assets/environnement.jpg'
    },
    questions: [
      {
        question: "Nous sommes sûrs que vous les avez déjà traversées. Donc, pour vous, quelles sont les 4 grandes unités paysagères majeures couvrant le territoire intercommunal du Carmausin-Ségala ?",
        options: [" Le plateau calcaire et ses petites vallées ",
           " La vallée du Tarn ", 
           "Les vallées, plateaux et bocages du Ségala   ",
           " Le cœur du vignoble gaillacois  ",
           " La vallée escarpée du Viaur   ",
           " Les causses et massifs de la Grésigne  ",
           " L’ancien bassin minier   ",
            "Les lacs du Lévézou  "],
        answers: [0,2,4,6],
        info: "Le territoire de la Communauté de Communes Carmausin-Ségala est composé d’une grande biodiversité qui varie en fonction des unités paysagères qui constituent des supports de vie et d’habitats variés. En effet, il abrite 4 grandes unités paysagères, socle de son patrimoine vivant  : au nord et à l’est, on trouve la biodiversité liée aux vallées, plateaux et bocages du Ségala, avec celle de la vallée escarpée du Viaur. Sur son centre, l’unité paysagère urbaine de l’ancien bassin minier. Et enfin au sud-ouest, le plateau calcaire relié au Cordais et l’extrême limite du vignoble du gaillacois. Le maintien de ces 4 ensembles paysagers, de ses habitats, de sa vie et des interactions entre ses écosystèmes représente un des futurs grands enjeux forts de préservation patrimoniale pour le territoire du Carmausin-Ségala.",
        image: "assets/environnement.jpg"
      },
      {
        question: "Pépites de ses richesses patrimoniales vivantes qui ont façonnées depuis des décennies ses paysages, pourriez-vous nous citer les formations boisées les plus remarquables et imposantes du territoire Carmausin-Ségala ?",
        options: ["Les boisements de purs châtaigniers  ",
           "Les boisements de feuillus mixtes( charmes, chênes, érables, frênes, hêtres …) ",
            "Les boisements de purs conifères (pins, sapins, épicéas, cèdres…)  ", 
            "Les boisements de purs peupliers",
            "Les boisements majoritaires de chênes ("],
        answers: [0,1,4],
        info: "Le territoire du Carmausin-Ségala est constitué de plusieurs sortes de formations boisées. Les plus importantes sont celles de feuillus mixtes, de chênes et de châtaigniers (surtout sur sa partie nord). Aujourd’hui, le changement climatique et l’appauvrissement de la biodiversité végétale fait peser de fortes menaces sur la préservation du patrimoine boisé. Avec la déprise agricole, les châtaigneraies, patrimoine fruitier et paysager du Ségala, se délitent. C’est tout un pan de notre histoire vivante qui disparait. C’est pourquoi l’association Aveyron Conservatoire Régional du Châtaignier propose aux propriétaires intéressés de les aider à rénover leurs châtaigniers en apportant un appui technique.",
        image: "assets/environnement.jpg"
      },
      
    ]
  },


  abeilles: {
    image: 'assets/abeille.jpg',
    intro: {
      text: "L’abeille est une petite bête précieuse. Vous la connaissez c’est sûr. Testez vos connaissances autour de 2 questions.",
      image: 'assets/abeille.jpg'
    },
    questions: [
      {
        question: "Les abeilles sont en voie de disparition. Leur rôle est pourtant très important pour la nature et pour nous les Hommes. On parle souvent d'abeilles domestiques et abeilles sauvages, mais savez-vous quelles sont les différences entre ces deux types d'insectes ?",
        options: ["Les abeilles domestiques ne trouvent refuge que dans des ruches intégrées par l’homme dont les apiculteurs",
           "Les abeilles sauvages comme les abeilles domestiques vivent uniquement en colonies dans des ruches ",
            "Il existe dans la nature plus de variétés d’abeilles sauvages que d’abeilles domestiques ",
             "Seules les abeilles domestiques pollinisent les fleurs"],
        answer: 2,
        info: "À l’origine, toutes les abeilles sont sauvages. Une colonie d’abeilles peut s’installer partout. Certaines d’entre elles, abeilles domestiques, sont élevées par l’Homme depuis plusieurs milliers d’années pour leur capacité à produire notamment du miel. Les abeilles domestiques sont des insectes sociaux qui vivent en colonies à la principale différence des abeilles sauvages, pour la plupart solitaires. Il existe plus de 1 000 variétés d’abeilles en France, toutes gravement menacées avec un taux d’extinction « 100 à 1000 fois plus élevé que la normale ». Capables de butiner le pollen de 250 fleurs par heure en stockant, sur une seule patte, environ 500 000 grains de pollen, l'abeille est un des premiers insectes pollinisateurs qui aide bon nombre de végétaux à se reproduire .C’est un maillon essentiel dans le maintien de la biodiversité et de la production alimentaire sur un territoire",
        image: "assets/abeille.jpg"
      },
      {
        question: "Quels sont les principaux prédateurs des abeilles sur le territoire du Carmausin-ségala ?",
        options: ["Le frelon asiatique ",
           "Le varroa ", 
           "L’homme dans ses pratiques",
           "Les maladies",
           "Le changement climatique",
            "L’ours"],
        answers: [0,1,2,3,4],
        info: "Les abeilles sont comme toutes les espèces vivantes touchées par les effets du changement climatique et tentent de lutter pour leur survie. Par le transport des marchandises, l’homme a introduit des espèces comme le frelon asiatique, doté d’un très gros appétit en se nourrissant voracement d’abeilles. Le varroa, originaire de l’Asie du sud-est, espèce d'acariens parasites de l'abeille adulte ainsi que des larves et des nymphes, représente également un danger. L’abeille peut aussi contracter des maladies comme la loque américaine, terriblement contagieuse entre ruches. Mais malheureusement le danger le plus terrible pour les abeilles vient de l’Homme au travers de ses pratiques quotidiennes : utilisation d’engrais, de pesticides, course à la construction et à la bétonnisation au détriment des espaces naturels, agricoles ou forestiers... [texte]",
        image: "assets/abeille.jpg"
      },
      
    ]
  }
};

function fadeToContent(callback) {
  // Pour simplifier, on exécute directement le callback sans effet visuel
  callback();
}


function renderHome() {
  fadeToContent(() => {
    app.innerHTML = `
      <header class="header">
        <img src="assets/Logo ATLAS BIODIVERSITE Carmausin-Ségala.png" alt="Logo Communauté" class="header-logo">
        <img src="assets/Office-Francais-de-la-Biodiversite-OFB_large.png" alt="Logo Communauté" class="header-logo">
        <img src="assets/logo (2).png" alt="Logo perso" class="header-logo1">
      </header>

      <div class="home-screen">
        <h1 class="quiz-title">Quiz de la biodiversité</h1>
        <button class="start-btn" onclick="renderThemes()">Commencer</button>
      </div>
    `;
  });
}

function renderThemes() {
  let html = '<h2>Choisissez un thème :</h2><div class="themes-container" style="display:flex; flex-direction:column; gap:20px; max-width:400px; margin-top:15%;">';

  for (const key in themes) {
    const theme = themes[key];
    const score = scores[key];
    html += `
      <button onclick="startQuiz('${key}')" style="
        display:flex;
        align-items:center;
        gap:15px;
        padding:10px 20px;
        font-size:16px;
        cursor:pointer;
        border: 2px solid #216408ff;
        border-radius: 8px;
        background: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        position: relative;
      ">
        <img src="${theme.image}" alt="${themeTitles[key] || key}" style="width:60px; height:60px; object-fit:cover; border-radius:8px;"/>
        <span style="flex-grow:1;">${themeTitles[key] || key}</span>
        ${score !== undefined ? `<span style="font-weight:bold; color:#28a745;">Score : ${score}/${theme.questions.length}</span>` : ''}
      </button>
    `;
  }

  html += '</div>';

  // Ajout du score total cumulé
  const totalScore = Object.values(scores).reduce((acc, val) => acc + val, 0);
  const totalQuestions = Object.keys(scores).reduce((acc, key) => acc + themes[key].questions.length, 0);

  html += `
    <div style="max-width:400px; margin:20px auto; font-size:18px; font-weight:bold; color:#333; text-align:center;">
      Score total cumulé : ${totalScore} / ${totalQuestions}
    </div>
  `;

  app.innerHTML = html;
}


function startQuiz(themeKey) {
  fadeToContent(() => {
    currentTheme = themeKey;
    currentQuestion = 0;
    userAnswers = [];
    renderIntro(); // ← nouvelle fonction à afficher l'introduction du thème
  });
}


function renderQuestion() {
  fadeToContent(() => {
    const q = themes[currentTheme].questions[currentQuestion];
    const isMultiple = Array.isArray(q.answers);

    let html = `
      <div class="quiz-screen">
        <div class="progress-container">
          <div class="progress-bar" style="width:${((currentQuestion + 1) / themes[currentTheme].questions.length) * 100}%"></div>
        </div>
        <h3>${q.question}</h3>
        ${isMultiple ? '<p>(Plusieurs réponses possibles)</p>' : ''}
        <div class="options-container">`;

    q.options.forEach((opt, i) => {
      html += `<div class="option" data-index="${i}">${opt}</div>`;
    });

    html += `
        </div>
        ${isMultiple ? '<button class="next-btn" id="validateBtn" disabled>Valider</button>' : ''}
      </div>`;

    app.innerHTML = html;

    const selected = new Set();

    document.querySelectorAll('.option').forEach(option => {
      option.addEventListener('click', () => {
        const index = parseInt(option.dataset.index);
        if (isMultiple) {
          option.classList.toggle('selected');
          selected.has(index) ? selected.delete(index) : selected.add(index);
          document.getElementById('validateBtn').disabled = selected.size === 0;
        } else {
          handleAnswer(index);
        }
      });
    });

    if (isMultiple) {
      document.getElementById('validateBtn').addEventListener('click', () => {
        handleAnswer(Array.from(selected));
      });
    }
  });
}

function renderIntro() {
  const intro = themes[currentTheme].intro;

  app.innerHTML = `
    <div class="theme-intro">
      <img src="${intro.image}" alt="Illustration" class="intro-img" />
      <p>${intro.text}</p>
      <button class="start-btn" onclick="renderQuestion()">Commencer le quiz</button>
    </div>
  `;
}


function handleAnswer(selected) {
  const q = themes[currentTheme].questions[currentQuestion];
  const correctAnswers = Array.isArray(q.answers) ? q.answers : [q.answer];
  const options = document.querySelectorAll('.option');

  let allCorrect = true;

  options.forEach((opt, i) => {
    opt.onclick = null;
    const isSelected = Array.isArray(selected) ? selected.includes(i) : selected === i;
    const isCorrect = correctAnswers.includes(i);

    if (isCorrect) opt.classList.add('correct');
    if (isSelected && !isCorrect) opt.classList.add('wrong');

    if (isSelected && !isCorrect) allCorrect = false;
    if (!isSelected && isCorrect && Array.isArray(selected)) allCorrect = false;
  });

  userAnswers.push(allCorrect);

  const btn = document.createElement('button');
  btn.className = 'next-btn';
  btn.textContent = currentQuestion + 1 < themes[currentTheme].questions.length ? "Suivant" : "Voir le score";
  btn.onclick = showInfo;
  app.appendChild(btn);
}

function showInfo() {
  fadeToContent(() => {
    const q = themes[currentTheme].questions[currentQuestion];
    const isLast = currentQuestion === themes[currentTheme].questions.length - 1;

    app.innerHTML = `
      <img src="${q.image}" class="answer-img" alt="" />
      <p>${q.info}</p>
      <button class="next-btn" id="nextBtn">
        ${isLast ? 'Voir le score' : 'Prochaine question'}
      </button>
    `;

    document.getElementById('nextBtn').addEventListener('click', () => {
      if (isLast) {
        finishQuiz();
      } else {
        nextQuestion();
      }
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  renderQuestion();
}

function finishQuiz() {
  fadeToContent(() => {
    const themeLength = themes[currentTheme].questions.length;
    const score = userAnswers.filter((v) => v).length;
    scores[currentTheme] = score;

    const isPerfect = score === themeLength;

    app.innerHTML = `
      <h2>Quiz ${themeTitles[currentTheme] || currentTheme} terminé !</h2>
      <p>Score : ${score}/${themeLength}</p>
      <button class="start-btn" onclick="renderThemes()">Retour aux thèmes</button>
    `;

    if (isPerfect && typeof confetti === 'function') {
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
      const end = Date.now() + 2000;
      (function frame() {
        confetti({ particleCount: 6, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 6, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  });
}

// Lancement initial
renderHome();
