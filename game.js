/* =========================================================
   MEMÓRIAS DO SÉCULO XX
   MOVIMENTO + COLISÃO PELO MOLDE AZUL

   NÃO ALTERA A INTERFACE.
   O arquivo colisao.png deve ser o molde que você pintou
   de azul. Azul = BLOQUEADO / qualquer outra cor = LIVRE.
========================================================= */

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const playButton = document.getElementById("playButton");
const freeModeButton = document.getElementById("freeModeButton");
const freeModeStatus = document.getElementById("freeModeStatus");
const saveSelect = document.getElementById("saveSelect");
const saveSlots = document.getElementById("saveSlots");
const saveBackButton = document.getElementById("saveBackButton");
const optionsButton = document.getElementById("optionsButton");
const exitButton = document.getElementById("exitButton");
const backButton = document.getElementById("backButton");
const pauseButton = document.getElementById("pauseButton");
const pauseButtonLabel = document.getElementById("pauseButtonLabel");
const returnMenuButton = document.getElementById("returnMenuButton");
const options = document.getElementById("options");
const blackScreen = document.getElementById("blackScreen");
const world = document.getElementById("world");
const player = document.getElementById("player");
const activePlayerSprite = document.getElementById("activePlayerSprite");
const volume = document.getElementById("volume");
const volumeNumber = document.getElementById("volumeNumber");
const languageSelect = document.getElementById("languageSelect");
const optionsTitle = document.getElementById("optionsTitle");
const volumeLabel = document.getElementById("volumeLabel");
const languageLabel = document.getElementById("languageLabel");
const controlsLabel = document.getElementById("controlsLabel");

const chapterHint = document.getElementById("chapterHint");
const chapterHintNumber = document.getElementById("chapterHintNumber");
const chapterHintTitle = document.getElementById("chapterHintTitle");
const chapterHintText = document.getElementById("chapterHintText");
const chapterHintPrompt = document.getElementById("chapterHintPrompt");
const chapterOnePanel = document.getElementById("chapterOnePanel");
const locationPanel = document.getElementById("locationPanel");
const exploreYes = document.getElementById("exploreYes");
const exploreNo = document.getElementById("exploreNo");
const locationBack = document.getElementById("locationBack");
const locationOptions = document.getElementById("locationOptions");
const sceneTransition = document.getElementById("sceneTransition");
const scenarioPanel = document.getElementById("scenarioPanel");
const scenarioImage = document.getElementById("scenarioImage");
const scenarioChapter = document.getElementById("scenarioChapter");
const scenarioTitle = document.getElementById("scenarioTitle");
const scenarioText = document.getElementById("scenarioText");
const scenarioLocations = document.getElementById("scenarioLocations");
const scenarioMuseum = document.getElementById("scenarioMuseum");
const chapterTwoPanel = document.getElementById("chapterTwoPanel");
const locationPanelTwo = document.getElementById("locationPanelTwo");
const exploreTwoYes = document.getElementById("exploreTwoYes");
const exploreTwoNo = document.getElementById("exploreTwoNo");
const locationBackTwo = document.getElementById("locationBackTwo");
const locationOptionsTwo = document.getElementById("locationOptionsTwo");
const chapterThreePanel = document.getElementById("chapterThreePanel");
const locationPanelThree = document.getElementById("locationPanelThree");
const exploreThreeYes = document.getElementById("exploreThreeYes");
const exploreThreeNo = document.getElementById("exploreThreeNo");
const startChapterThreePuzzle = document.getElementById("startChapterThreePuzzle");
const locationBackThree = document.getElementById("locationBackThree");
const locationOptionsThree = document.getElementById("locationOptionsThree");
const chapterFourPanel = document.getElementById("chapterFourPanel");
const locationPanelFour = document.getElementById("locationPanelFour");
const exploreFourYes = document.getElementById("exploreFourYes");
const exploreFourNo = document.getElementById("exploreFourNo");
const startChapterFourPuzzle = document.getElementById("startChapterFourPuzzle");
const locationBackFour = document.getElementById("locationBackFour");
const locationOptionsFour = document.getElementById("locationOptionsFour");
const adventurePuzzlePanel = document.getElementById("adventurePuzzlePanel");
const adventurePuzzleKicker = document.getElementById("adventurePuzzleKicker");
const adventurePuzzleTitle = document.getElementById("adventurePuzzleTitle");
const adventurePuzzleText = document.getElementById("adventurePuzzleText");
const adventurePuzzleProgress = document.getElementById("adventurePuzzleProgress");
const adventurePuzzleClues = document.getElementById("adventurePuzzleClues");
const adventurePuzzleFeedback = document.getElementById("adventurePuzzleFeedback");
const adventurePuzzleRestart = document.getElementById("adventurePuzzleRestart");
const adventurePuzzleContinue = document.getElementById("adventurePuzzleContinue");
const adventurePuzzleBack = document.getElementById("adventurePuzzleBack");
const startChapterTwoPuzzle = document.getElementById("startChapterTwoPuzzle");
const chapterOnePuzzle = document.getElementById("chapterOnePuzzle");
const startChapterOnePuzzle = document.getElementById("startChapterOnePuzzle");
const puzzleOptions = document.getElementById("puzzleOptions");
const puzzleFeedback = document.getElementById("puzzleFeedback");
const puzzleContinue = document.getElementById("puzzleContinue");
const puzzleBack = document.getElementById("puzzleBack");
const extraChapterPanel = document.getElementById("extraChapterPanel");
const extraChapterKicker = document.getElementById("extraChapterKicker");
const extraChapterTitle = document.getElementById("extraChapterTitle");
const extraChapterIntro = document.getElementById("extraChapterIntro");
const extraExplore = document.getElementById("extraExplore");
const extraPuzzle = document.getElementById("extraPuzzle");
const extraClose = document.getElementById("extraClose");
const extraLocationPanel = document.getElementById("extraLocationPanel");
const extraLocationKicker = document.getElementById("extraLocationKicker");
const extraLocationSubtitle = document.getElementById("extraLocationSubtitle");
const extraLocationOptions = document.getElementById("extraLocationOptions");
const extraLocationBack = document.getElementById("extraLocationBack");
const mysteryPuzzlePanel = document.getElementById("mysteryPuzzlePanel");
const mysteryKicker = document.getElementById("mysteryKicker");
const mysteryTitle = document.getElementById("mysteryTitle");
const mysteryIntro = document.getElementById("mysteryIntro");
const mysteryClues = document.getElementById("mysteryClues");
const mysteryFeedback = document.getElementById("mysteryFeedback");
const mysteryContinue = document.getElementById("mysteryContinue");
const mysteryBack = document.getElementById("mysteryBack");
const notebookButton = document.getElementById("notebookButton");
const notebookPanel = document.getElementById("notebookPanel");
const notebookEntries = document.getElementById("notebookEntries");
const notebookClose = document.getElementById("notebookClose");
const missionPanel = document.getElementById("missionPanel");
const missionKicker = document.getElementById("missionKicker");
const missionTitle = document.getElementById("missionTitle");
const missionText = document.getElementById("missionText");
const missionQuestion = document.getElementById("missionQuestion");
const missionQuestionText = document.getElementById("missionQuestionText");
const missionProgress = document.getElementById("missionProgress");
const missionAnswers = document.getElementById("missionAnswers");
const missionFeedback = document.getElementById("missionFeedback");
const missionContinue = document.getElementById("missionContinue");
const missionBack = document.getElementById("missionBack");
const finalReviewPanel = document.getElementById("finalReviewPanel");
const finalReviewFeedback = document.getElementById("finalReviewFeedback");
const finalPuzzleTitle = document.getElementById("finalPuzzleTitle");
const finalPuzzlePrompt = document.getElementById("finalPuzzlePrompt");
const finalTimelineBoard = document.getElementById("finalTimelineBoard");
const finalPuzzleCheck = document.getElementById("finalPuzzleCheck");
const finalPuzzleRestart = document.getElementById("finalPuzzleRestart");
const finalPuzzleBack = document.getElementById("finalPuzzleBack");
const finalDoorMarker = document.getElementById("finalDoorMarker");
const endingScreen = document.getElementById("endingScreen");
const endingControls = document.getElementById("endingControls");
const endingSpeedButton = document.getElementById("endingSpeedButton");
const endingSpeedOptions = document.getElementById("endingSpeedOptions");
const endingRoll = document.getElementById("endingRoll");
const endingFinish = document.getElementById("endingFinish");
const endingMenuButton = document.getElementById("endingMenuButton");

/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const SPEED = 230; // pixels por segundo
const PLAYER_W = 52;
const PLAYER_H = 76;

const menuMusic = "audio/The_Glass_Archive.mp3";
const musicPlaylist = ["audio/Patience_in_Amber.mp3", "audio/Gallery_of_Lost_Time.mp3", "audio/Gallery_of_Waning_Stars.mp3"];
const endingMusic = "audio/Closing_the_Solar_Archive.mp3";
const musicPlayer = new Audio();
let musicIndex = 0;
let musicMode = "menu";
let endingRollFinished = false;
musicPlayer.preload = "auto";
musicPlayer.autoplay = true;
musicPlayer.src = menuMusic;

function playNextTrack() {
    if (musicMode !== "game") return;
    musicIndex = (musicIndex + 1) % musicPlaylist.length;
    musicPlayer.src = musicPlaylist[musicIndex];
    musicPlayer.play().catch(() => {});
}

function startMenuMusic() {
    if (musicMode === "menu" && !musicPlayer.paused) return;
    musicMode = "menu";
    musicPlayer.src = menuMusic;
    musicPlayer.currentTime = 0;
    musicPlayer.play().catch(() => {});
}

function startGameplayMusic() {
    musicMode = "game";
    musicIndex = 0;
    musicPlayer.src = musicPlaylist[musicIndex];
    musicPlayer.currentTime = 0;
    musicPlayer.play().catch(() => {});
}

function stopMusic() {
    musicMode = "stopped";
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
}

musicPlayer.addEventListener("ended", () => {
    if (musicMode === "game") playNextTrack();
});

document.addEventListener("pointerdown", () => {
    if (musicMode === "menu" && musicPlayer.paused) {
        musicPlayer.play().catch(() => {});
    }
}, { passive: true });

const interfaceTranslations = {
    "pt-BR": {
        play: "JOGAR", free: "MODO LIVRE", freeStatus: "CONCLUA A JORNADA PARA LIBERAR",
        freeReady: "TODAS AS SALAS ESTÃO LIBERADAS", options: "OPÇÕES", exit: "SAIR",
        volume: "VOLUME", language: "IDIOMA", controls: "CONTROLES", back: "VOLTAR",
        pause: "PAUSA", paused: "JOGO PAUSADO", resume: "CONTINUAR", returnToMenu: "VOLTAR AO MENU",
        saveTitle: "ESCOLHA UM ARQUIVO", saveDescription: "O progresso é salvo somente no arquivo escolhido.", saveFile: "ARQUIVO",
        newGame: "NOVO JOGO", empty: "ESPAÇO VAZIO", continue: "CLIQUE PARA CONTINUAR",
        completed: "JORNADA CONCLUÍDA", chapterUnlocked: "CAPÍTULO {n} LIBERADO", deleteProgress: "EXCLUIR PROGRESSO",
        yes: "SIM", chapterQuestion: "DESAFIO DO CAPÍTULO", noMuseum: "NÃO, VOLTAR AO MUSEU",
        chooseLocation: "Para onde você deseja ir?", exploreQuestion: "Você deseja saber mais sobre?",
        backMuseum: "VOLTAR AO MUSEU", continueButton: "CONTINUAR", close: "FECHAR",
        notebook: "CADERNO HISTÓRICO", notebookTitle: "Caderno Histórico", notebookDescription: "As descobertas ficam salvas neste arquivo de jogo.",
        finalDoor: "PORTA FINAL · LADO ESQUERDO DO MUSEU", finalPuzzleTitle: "A linha do tempo perdida",
        finalPuzzlePrompt: "Organize os acontecimentos do mais antigo ao mais recente. Selecione dois eventos para trocar suas posições.",
        finalPuzzleCheck: "VERIFICAR ORDEM", finalPuzzleRestart: "EMBARALHAR", finalPuzzleBack: "VOLTAR AO MUSEU",
        finalPuzzleWrong: "A sequência ainda não está correta. Revise a ordem dos acontecimentos e tente novamente.",
        finalPuzzleSuccess: "Sequência correta. A porta se abriu.",
        scenarioOthers: "OUTROS LUGARES", loading: "CARREGANDO...", travel: "VIAJANDO PELA HISTÓRIA...",
        finalDoorHint: "PORTA FINAL", finalDoorText: "A linha do tempo perdida",
        finalDoorInstruction: "Restaure a ordem dos acontecimentos históricos para abrir a porta.", finalDoorPrompt: "PRESSIONE E PARA MONTAR",
        chapterPrompt: "PRESSIONE E PARA EXPLORAR", approachDoor: "APROXIME-SE DA PORTA", locked: "CAPÍTULO BLOQUEADO",
        endTitle: "MEMÓRIAS DO SÉCULO XX", endSubtitle: "1914 — 1991", credits: "CRÉDITOS",
        participants: "PARTICIPANTES", specialParticipation: "PARTICIPAÇÃO ESPECIAL", languages: "LINGUAGENS E TECNOLOGIAS",
        artificialIntelligence: "INTELIGÊNCIA ARTIFICIAL", sceneryCredit: "Criação dos cenários: ChatGPT",
        codeCredit: "Orientação nos códigos: Codex", endWord: "FIM", endMenu: "VOLTAR AO MENU",
        hintsSaved: "As descobertas ficam salvas neste arquivo de jogo.", recordDiscoveries: "REGISTRO DE DESCOBERTAS",
        notFound: "☐ Ainda não há descobertas registradas.", chapterPrefix: "CAPÍTULO", lockedSuffix: "BLOQUEADO",
        challenge: "DESAFIO", stage: "ETAPA", of: "DE", levelEasy: "FÁCIL", levelMedium: "MÉDIO", levelHard: "DIFÍCIL", cluesOrganized: "PISTAS ORGANIZADAS:", restart: "RECOMEÇAR",
        correct: "Resposta correta!", tryAgain: "Ainda não. Releia as pistas e tente outra alternativa.",
        nextDocument: "Indício confirmado. O próximo documento foi liberado.",
        wrongInterpretation: "Essa interpretação não combina com todos os indícios. Releia o cenário e tente outra alternativa.",
        finalUnlocked: "Resposta correta! A porta final foi desbloqueada no lado esquerdo do museu.",
        chapterUnlockedMessage: "Resposta correta! O Capítulo {n} foi desbloqueado.",
        saveDeleteConfirm: "Excluir permanentemente o progresso do Arquivo {n}? Esta ação não pode ser desfeita.",
        saveDeleteFailed: "Não foi possível excluir este arquivo de salvamento.",
        saveReadFailed: "Não foi possível ler este arquivo de salvamento.",
        notebookSaveFailed: "Não foi possível salvar o Caderno Histórico.",
        discoveries: "descobertas", scene: "Cenário: {title}", endingSpeed: "VELOCIDADE",
        doorLockedMessage: "Complete o Capítulo {n} para liberar esta sala."
    },
    en: {
        play: "PLAY", free: "FREE MODE", freeStatus: "COMPLETE THE JOURNEY TO UNLOCK",
        freeReady: "ALL ROOMS ARE UNLOCKED", options: "OPTIONS", exit: "EXIT",
        volume: "VOLUME", language: "LANGUAGE", controls: "CONTROLS", back: "BACK",
        pause: "PAUSE", paused: "GAME PAUSED", resume: "RESUME", returnToMenu: "RETURN TO MENU",
        saveTitle: "CHOOSE A SAVE FILE", saveDescription: "Progress is saved only to the selected file.", saveFile: "SAVE FILE",
        newGame: "NEW GAME", empty: "EMPTY SLOT", continue: "CLICK TO CONTINUE",
        completed: "JOURNEY COMPLETE", chapterUnlocked: "CHAPTER {n} UNLOCKED", deleteProgress: "DELETE PROGRESS",
        yes: "YES", chapterQuestion: "CHAPTER CHALLENGE", noMuseum: "NO, RETURN TO MUSEUM",
        chooseLocation: "Where would you like to go?", exploreQuestion: "Would you like to learn more?",
        backMuseum: "RETURN TO MUSEUM", continueButton: "CONTINUE", close: "CLOSE",
        notebook: "HISTORY JOURNAL", notebookTitle: "History Journal", notebookDescription: "Your discoveries are saved in this game file.",
        finalDoor: "FINAL DOOR · LEFT SIDE OF THE MUSEUM", finalPuzzleTitle: "The Lost Timeline",
        finalPuzzlePrompt: "Arrange the events from earliest to latest. Select two events to swap their places.",
        finalPuzzleCheck: "CHECK ORDER", finalPuzzleRestart: "SHUFFLE", finalPuzzleBack: "RETURN TO MUSEUM",
        finalPuzzleWrong: "The sequence is not quite right. Review the order of events and try again.",
        finalPuzzleSuccess: "Correct sequence. The door is open.",
        scenarioOthers: "OTHER PLACES", loading: "LOADING...", travel: "TRAVELING THROUGH HISTORY...",
        finalDoorHint: "FINAL DOOR", finalDoorText: "The Lost Timeline",
        finalDoorInstruction: "Restore the historical events to chronological order to open the door.", finalDoorPrompt: "PRESS E TO SOLVE",
        chapterPrompt: "PRESS E TO EXPLORE", approachDoor: "APPROACH THE DOOR", locked: "CHAPTER LOCKED",
        endTitle: "MEMORIES OF THE 20TH CENTURY", endSubtitle: "1914 — 1991", credits: "CREDITS",
        participants: "PARTICIPANTS", specialParticipation: "SPECIAL GUEST", languages: "LANGUAGES & TECHNOLOGIES",
        artificialIntelligence: "ARTIFICIAL INTELLIGENCE", sceneryCredit: "Scene creation: ChatGPT",
        codeCredit: "Code guidance: Codex", endWord: "THE END", endMenu: "RETURN TO MENU",
        hintsSaved: "Your discoveries are saved in this game file.", recordDiscoveries: "DISCOVERY LOG",
        notFound: "☐ No discoveries recorded yet.", chapterPrefix: "CHAPTER", lockedSuffix: "LOCKED",
        challenge: "CHALLENGE", stage: "STEP", of: "OF", levelEasy: "EASY", levelMedium: "MEDIUM", levelHard: "HARD", cluesOrganized: "CLUES ORGANIZED:", restart: "RESTART",
        correct: "Correct!", tryAgain: "Not yet. Review the clues and try another answer.",
        nextDocument: "Clue confirmed. The next document is now available.",
        wrongInterpretation: "That interpretation does not fit all the evidence. Review the scene and try another answer.",
        finalUnlocked: "Correct! The final door has been unlocked on the left side of the museum.",
        chapterUnlockedMessage: "Correct! Chapter {n} has been unlocked.",
        saveDeleteConfirm: "Permanently delete the progress in Save File {n}? This action cannot be undone.",
        saveDeleteFailed: "This save file could not be deleted.",
        saveReadFailed: "This save file could not be read.",
        notebookSaveFailed: "The History Journal could not be saved.",
        discoveries: "discoveries", scene: "Scene: {title}", endingSpeed: "SPEED",
        doorLockedMessage: "Complete Chapter {n} to unlock this room."
    }
};
let currentLanguage = localStorage.getItem("memorias-seculo-xx-language") || "pt-BR";

const englishContent = {
    "UMA JORNADA PELA HISTÓRIA": "A JOURNEY THROUGH HISTORY", "MEMÓRIAS": "MEMORIES", "DO SÉCULO XX": "OF THE 20TH CENTURY",
    "VERSÃO 0.1": "VERSION 0.1", "MEMÓRIAS DO SÉCULO XX": "MEMORIES OF THE 20TH CENTURY",
    "ARQUIVO {n}": "SAVE FILE {n}", "PORTA FINAL": "FINAL DOOR", "MOVER": "MOVE", "SETAS": "ARROWS",
    "CAPÍTULO 1 · 1914–1918": "CHAPTER 1 · 1914–1918", "CAPÍTULO 2 · 1917": "CHAPTER 2 · 1917",
    "CAPÍTULO 3 · 1929": "CHAPTER 3 · 1929", "CAPÍTULO 4 · 1933": "CHAPTER 4 · 1933",
    "CAPÍTULO 1 · EXPLORAÇÃO": "CHAPTER 1 · EXPLORATION", "CAPÍTULO 2 · EXPLORAÇÃO": "CHAPTER 2 · EXPLORATION",
    "CAPÍTULO 3 · EXPLORAÇÃO": "CHAPTER 3 · EXPLORATION", "CAPÍTULO 4 · EXPLORAÇÃO": "CHAPTER 4 · EXPLORATION",
    "CAPÍTULO 1": "CHAPTER 1", "CAPÍTULO 2": "CHAPTER 2", "CAPÍTULO 3": "CHAPTER 3", "CAPÍTULO 4": "CHAPTER 4",
    "CAPÍTULO 5": "CHAPTER 5", "CAPÍTULO 6": "CHAPTER 6", "CAPÍTULO 7": "CHAPTER 7", "CAPÍTULO 8": "CHAPTER 8",
    "CAPÍTULO 9": "CHAPTER 9", "CAPÍTULO 10": "CHAPTER 10",
    "A Primeira Guerra Mundial": "World War I", "A Revolução Russa": "The Russian Revolution",
    "A Crise de 1929": "The 1929 Crisis", "A Ascensão do Nazismo": "The Rise of Nazism",
    "Primeira Guerra Mundial (1914–1918)": "World War I (1914–1918)", "Revolução Russa (1917)": "Russian Revolution (1917)",
    "Crise de 1929": "The 1929 Crisis", "Ascensão do Nazismo na Alemanha (1933)": "The Rise of Nazism in Germany (1933)",
    "Segunda Guerra Mundial (1939–1945)": "World War II (1939–1945)", "Hiroshima e Nagasaki (1945)": "Hiroshima and Nagasaki (1945)",
    "Guerra Fria (1947–1991)": "The Cold War (1947–1991)", "Revolução Chinesa (1949)": "Chinese Revolution (1949)",
    "Queda do Muro de Berlim (1989)": "Fall of the Berlin Wall (1989)", "Fim da União Soviética (1991)": "End of the Soviet Union (1991)",
    "Trincheiras": "Trenches", "Terra de Ninguém": "No Man's Land", "Vila Destruída": "Destroyed Village",
    "Acampamento Militar": "Military Camp", "Posto de Comando": "Command Post", "Petrogrado": "Petrograd",
    "Fábrica": "Factory", "Estação Ferroviária": "Railway Station", "Praça de Manifestação": "Demonstration Square",
    "Palácio de Inverno": "Winter Palace", "Wall Street": "Wall Street", "Banco em Crise": "Bank in Crisis",
    "Fábrica Fechada": "Closed Factory", "Fila do Pão": "Bread Line", "Bairro Residencial": "Residential Neighborhood",
    "Campo de Propaganda": "Propaganda Rally Grounds", "Redação do Jornal": "Newspaper Office", "Reichstag": "Reichstag",
    "Campo de Batalha Europeu": "European Battlefield", "Base Militar": "Military Base", "Cidade Bombardeada": "Bombed City",
    "Esconderijo": "Hideout", "Praia do Desembarque": "Landing Beach", "Hiroshima Antes da Bomba": "Hiroshima Before the Bomb",
    "Área Residencial": "Residential Area", "Centro Destruído": "Destroyed City Center", "Hospital Improvisado": "Makeshift Hospital",
    "Memorial da Paz": "Peace Memorial", "Berlim Dividida": "Divided Berlin", "Base Americana": "American Base",
    "Base Militar Soviética": "Soviet Military Base", "Bunker Nuclear": "Nuclear Bunker", "Centro de Espionagem": "Espionage Center",
    "Acampamento Revolucionário": "Revolutionary Camp", "Estrada Rural": "Rural Road", "Pequena Vila": "Small Village",
    "Pequena Cidade": "Small Town", "Praça de Pequim": "Beijing Square", "Muro de Berlim": "Berlin Wall",
    "Checkpoint": "Checkpoint", "Rua de Berlim": "Berlin Street", "Praça Lotada": "Crowded Square", "Celebração": "Celebration",
    "Moscou": "Moscow", "Kremlin": "Kremlin", "Parlamento": "Parliament", "Loja Soviética": "Soviet Store", "Praça Vermelha": "Red Square",
    "Você deseja saber mais sobre?": "Would you like to learn more?", "SIM": "YES", "PERGUNTA DO CAPÍTULO": "CHAPTER CHALLENGE",
    "NÃO, VOLTAR AO MUSEU": "NO, RETURN TO THE MUSEUM", "Para onde você deseja ir?": "Where would you like to go?",
    "VOLTAR": "BACK", "OUTROS LUGARES": "OTHER PLACES", "VOLTAR AO MUSEU": "RETURN TO THE MUSEUM",
    "CONTINUAR": "CONTINUE", "FECHAR": "CLOSE", "CADERNO HISTÓRICO": "HISTORY JOURNAL",
    "PERGUNTA DO CAPÍTULO": "CHAPTER CHALLENGE", "PERGUNTA · CAPÍTULO": "CHALLENGE · CHAPTER",
    "DESAFIO · CAPÍTULO": "CHALLENGE · CHAPTER", "ETAPA": "STEP", "PISTAS ORGANIZADAS:": "CLUES ORGANIZED:",
    "RECOMEÇAR": "RESTART", "REGISTRO DE DESCOBERTAS": "DISCOVERY LOG", "Caderno Histórico": "History Journal",
    "As descobertas ficam salvas neste arquivo de jogo.": "Discoveries are saved in this game file.",
    "PORTA FINAL · LADO ESQUERDO DO MUSEU": "FINAL DOOR · LEFT SIDE OF THE MUSEUM",
    "A palavra das memórias": "The word of memories", "Qual é a palavra?": "What is the word?",
    "Digite a palavra de 10 letras": "Enter the 10-letter word", "ABRIR PORTA": "OPEN DOOR",
    "CAPÍTULO 1 · 1914–1918": "CHAPTER 1 · 1914–1918", "VIAJANDO PELA HISTÓRIA...": "TRAVELING THROUGH HISTORY...",
    "CAPÍTULO BLOQUEADO": "CHAPTER LOCKED", "BLOQUEADO": "LOCKED", "CAPÍTULO {n} LIBERADO": "CHAPTER {n} UNLOCKED",
    "DESAFIO": "CHALLENGE", "FIM": "THE END", "CRÉDITOS": "CREDITS", "PARTICIPANTES": "PARTICIPANTS",
    "PARTICIPAÇÃO ESPECIAL": "SPECIAL GUEST", "LINGUAGENS E TECNOLOGIAS": "LANGUAGES & TECHNOLOGIES",
    "INTELIGÊNCIA ARTIFICIAL": "ARTIFICIAL INTELLIGENCE", "Criação dos cenários: ChatGPT": "Scene creation: ChatGPT",
    "Orientação nos códigos: Codex": "Code guidance: Codex", "VOLTAR AO MENU": "RETURN TO MENU",
    "Entre na sala para conhecer o conflito que transformou o mapa político da Europa.": "Enter the room to explore the conflict that transformed Europe's political map.",
    "A queda do czar e a ascensão dos bolcheviques mudam o rumo da Rússia.": "The fall of the tsar and the rise of the Bolsheviks changed Russia's course.",
    "O colapso da Bolsa de Nova York dá início a uma crise econômica mundial.": "The Wall Street crash triggered a global economic crisis.",
    "Hitler chega ao poder e a Alemanha entra em um período de radicalização política.": "Hitler comes to power, and Germany enters a period of political radicalization.",
    "O maior conflito da primeira metade do século XX redesenha o mundo.": "The largest conflict of the first half of the 20th century reshapes the world.",
    "As bombas atômicas marcam o início da era nuclear.": "The atomic bombs mark the beginning of the nuclear age.",
    "EUA e URSS disputam influência política, econômica, militar e ideológica.": "The United States and the USSR compete for political, economic, military, and ideological influence.",
    "A vitória dos comunistas leva Mao Tsé-Tung ao poder na China.": "The Communist victory brings Mao Zedong to power in China.",
    "Um dos grandes símbolos do enfraquecimento da Guerra Fria chega ao seu fim.": "One of the great symbols of the Cold War's weakening comes to an end.",
    "O fim da URSS encerra a Guerra Fria e transforma a ordem mundial.": "The end of the USSR brings the Cold War to a close and transforms the world order.",
    "Entre 1914 e 1918, uma guerra de escala inédita envolveu alianças europeias e atingiu diversos continentes. No fronte ocidental, milhões de pessoas viveram a rotina das trincheiras.": "From 1914 to 1918, a war of unprecedented scale drew in European alliances and reached several continents. On the Western Front, millions lived through the daily reality of trench warfare.",
    "Em 1917, a crise provocada pela guerra, pela fome e pela desigualdade derrubou o czarismo e levou os bolcheviques ao poder. Explore lugares ligados aos acontecimentos que mudaram a Rússia.": "In 1917, war, hunger, and inequality helped bring down the tsarist regime and bring the Bolsheviks to power. Explore places connected to the events that changed Russia.",
    "A quebra da Bolsa de Nova York espalhou falências, desemprego e pobreza pelos Estados Unidos e pelo mundo. Explore os efeitos dessa crise.": "The Wall Street crash spread bank failures, unemployment, and poverty across the United States and around the world. Explore the effects of the crisis.",
    "Em meio à crise e à instabilidade política, Adolf Hitler chegou ao poder em 1933 e a Alemanha foi transformada em uma ditadura nazista.": "Amid crisis and political instability, Adolf Hitler came to power in 1933 and Germany was transformed into a Nazi dictatorship.",
    "Escolha um cenário para conhecer uma parte da história do conflito.": "Choose a scene to explore part of the conflict's history.",
    "Escolha um cenário para conhecer uma parte da Revolução Russa.": "Choose a scene to explore part of the Russian Revolution.",
    "Escolha um cenário para acompanhar a dimensão humana da crise.": "Choose a scene to understand the human impact of the crisis.",
    "Observe como propaganda e repressão tomaram o espaço público.": "See how propaganda and repression took over public spaces.",
    "Em que ano começou a Primeira Guerra Mundial?": "In what year did World War I begin?",
    "Teste seus conhecimentos": "Test your knowledge", "DESAFIO · CAPÍTULO 1": "CHALLENGE · CHAPTER 1",
    "Para onde você deseja ir?": "Where would you like to go?", "Escolha um cenário para investigar os efeitos da crise.": "Choose a scene to investigate the effects of the crisis.",
    "Escolha um cenário para entender como o regime consolidou poder.": "Choose a scene to understand how the regime consolidated power.",
    "Escolha um cenário para compreender diferentes experiências da guerra.": "Choose a scene to understand different experiences of the war.",
    "Conheça cenários que ajudam a refletir sobre os impactos humanos da era nuclear.": "Explore scenes that invite reflection on the human impact of the nuclear age.",
    "Explore os símbolos da rivalidade política, militar e tecnológica entre os blocos.": "Explore symbols of the political, military, and technological rivalry between the blocs.",
    "Explore lugares ligados à revolução e às mudanças sociais na China.": "Explore places connected to the revolution and social change in China.",
    "Explore os espaços de separação, mobilização e celebração em Berlim.": "Explore places of separation, protest, and celebration in Berlin.",
    "Explore os cenários da crise e das transformações finais da União Soviética.": "Explore scenes from the crisis and final transformations of the Soviet Union.",
    "A palavra das memórias": "The word of memories", "Você encontrou dez letras ao longo da jornada. Junte-as para abrir a porta.": "You found ten letters throughout the journey. Put them together to open the door.",
    "O século começou sob o estrondo da guerra. Em 1914, milhões marcharam acreditando que o conflito seria breve. As trincheiras ensinaram outra coisa: a lama, a espera e a distância entre uma ordem e quem precisava cumpri-la. Quando os canhões silenciaram, impérios haviam caído, cidades estavam feridas e famílias tentavam reconhecer o mundo que restara.": "The century began with the thunder of war. In 1914, millions marched believing the conflict would be brief. The trenches taught them otherwise: there was mud, waiting, and a long distance between an order and the people asked to carry it out. When the guns fell silent, empires had collapsed, cities lay wounded, and families tried to make sense of the world left behind.",
    "A paz não apagou a fome nem as disputas. Na Rússia, soldados e trabalhadores derrubaram o czar e disputaram o futuro do país. Em 1929, a confiança que parecia sustentar Wall Street desmoronou. Bancos fecharam, fábricas pararam, e a crise atravessou fronteiras até chegar às mesas e às moradias de gente comum.": "Peace did not erase hunger or conflict. In Russia, soldiers and workers brought down the tsar and fought over the country's future. In 1929, the confidence that seemed to sustain Wall Street collapsed. Banks closed, factories stopped, and the crisis crossed borders to reach ordinary people's homes and dinner tables.",
    "Na Alemanha, uma democracia enfraquecida cedeu espaço à propaganda, à censura e à perseguição. O silêncio imposto a jornais e vizinhos abriu caminho para uma violência que se espalhou pelo continente. A Segunda Guerra Mundial transformou cidades em frentes de batalha, obrigou milhões a fugir e deixou marcas que nenhum tratado poderia apagar.": "In Germany, a weakened democracy gave way to propaganda, censorship, and persecution. The silence imposed on newspapers and neighbors made room for violence that spread across the continent. World War II turned cities into battlefronts, forced millions to flee, and left wounds no treaty could erase.",
    "Em Hiroshima e Nagasaki, uma única arma mostrou que a humanidade podia destruir, em instantes, o lugar onde gerações haviam vivido. Os sobreviventes carregaram essa memória por décadas. Lembrar seus relatos é reconhecer que a história não é feita apenas de fronteiras e governos: ela também vive nos nomes, nas perdas e nas escolhas de cada pessoa.": "In Hiroshima and Nagasaki, a single weapon showed that humanity could destroy, in an instant, the places where generations had lived. Survivors carried that memory for decades. Remembering their testimony means recognizing that history is not made only of borders and governments; it also lives in people's names, losses, and choices.",
    "Depois, o planeta passou a conviver com duas superpotências e com a ameaça de uma guerra nuclear. Enquanto alianças se firmavam, pessoas divididas por muros e fronteiras continuavam a buscar trabalho, segurança e voz. Na China, camponeses, trabalhadores e soldados também atravessaram revoluções que mudaram quem governava e como o poder era exercido.": "Then the world learned to live with two superpowers and the threat of nuclear war. As alliances hardened, people divided by walls and borders kept seeking work, safety, and a voice. In China, peasants, workers, and soldiers also lived through revolutions that changed who governed and how power was exercised.",
    "Em 1989, as passagens do Muro de Berlim se abriram. Dois anos depois, a União Soviética deixou de existir. Nenhum desses finais resolveu todos os conflitos; cada um abriu novas perguntas. Mas, por trás das datas que organizam este século, havia sempre pessoas tentando proteger umas às outras, reconstruir casas e imaginar um amanhã diferente.": "In 1989, the Berlin Wall's crossings opened. Two years later, the Soviet Union ceased to exist. Neither ending resolved every conflict; each raised new questions. Behind the dates that organize this century were people trying to protect one another, rebuild homes, and imagine a different tomorrow.",
    "Você percorreu dez capítulos e reuniu fragmentos dessa jornada. As memórias não devolvem o que foi perdido, mas ajudam a compreender como escolhas, coragem e indiferença podem mudar o destino de muitos. O passado permanece conosco quando aprendemos a escutá-lo.": "You have traveled through ten chapters and gathered fragments of this journey. Memories cannot restore what was lost, but they help us understand how choices, courage, and indifference can change many lives. The past stays with us when we learn to listen.",
    "E a história continua em cada geração que escolhe lembrar.": "And history continues with every generation that chooses to remember."
};
Object.assign(englishContent, {
    "A guerra de trincheiras dominou grande parte da Frente Ocidental depois de 1914, quando o avanço rápido dos exércitos foi interrompido. França, Reino Unido e seus aliados enfrentaram as forças alemãs em extensas redes de valas, abrigos e arame farpado. Soldados passavam semanas sob lama, bombardeios, doenças e ataques; batalhas como Verdun e o Somme, em 1916, mostram a dimensão dessa guerra de desgaste.": "Trench warfare dominated much of the Western Front after 1914, when rapid advances ground to a halt. France, Britain, and their allies faced German forces across vast networks of trenches, shelters, and barbed wire. Soldiers spent weeks in mud, under bombardment, disease, and attack. Battles such as Verdun and the Somme in 1916 show the scale of this war of attrition.",
    "A Terra de Ninguém era a faixa devastada entre as trincheiras inimigas. A artilharia de ambos os lados — sobretudo alemães, franceses e britânicos na Frente Ocidental — transformava o terreno em crateras, lama e cercas de arame. Durante ofensivas como a Batalha do Somme, em 1916, atravessar esse espaço significava enfrentar metralhadoras, explosões e pouca proteção.": "No Man's Land was the devastated strip between opposing trenches. Artillery on both sides—especially German, French, and British forces on the Western Front—turned it into craters, mud, and barbed-wire barriers. During offensives such as the 1916 Battle of the Somme, crossing this ground meant facing machine guns, explosions, and almost no protection.",
    "De 1914 a 1918, cidades e vilas da Bélgica e do norte da França ficaram entre frentes de combate ou sob ocupação. Invasões, artilharia e combates urbanos destruíram casas, igrejas e serviços essenciais, obrigando civis a fugir ou sobreviver sob racionamento. A reconstrução de lugares como Ypres, Arras e Reims continuou por muitos anos após o armistício de 11 de novembro de 1918.": "From 1914 to 1918, towns and villages in Belgium and northern France lay between battle lines or under occupation. Invasions, artillery, and urban fighting destroyed homes, churches, and essential services, forcing civilians to flee or endure rationing. Places such as Ypres, Arras, and Reims took years to rebuild after the armistice of November 11, 1918.",
    "Acampamentos militares funcionavam como pontos de descanso, treinamento, atendimento médico e distribuição de suprimentos. A guerra mobilizou milhões de homens do Reino Unido, França, Alemanha e de outros impérios e países aliados; para mantê-los no front, ferrovias e comboios transportavam alimentos, munição, equipamentos e cartas. Longe da linha de tiro, esses locais ainda refletiam a escala industrial e humana do conflito.": "Military camps served as places to rest, train, receive medical care, and distribute supplies. The war mobilized millions from Britain, France, Germany, other empires, and allied countries. Railways and convoys carried food, ammunition, equipment, and letters to keep them at the front. Even away from the firing line, these camps reflected the conflict's industrial and human scale.",
    "Nos postos de comando, oficiais reuniam mapas, relatórios de reconhecimento e comunicações para decidir movimentos e ataques. Durante a Primeira Guerra Mundial, comandantes alemães, franceses, britânicos e de outros exércitos dependiam de mensageiros, telefones de campanha, telégrafos e observadores de artilharia. As decisões tomadas nesses centros podiam lançar milhares de soldados a uma ofensiva — e também revelavam os limites das informações disponíveis em meio ao caos da batalha.": "At command posts, officers brought together maps, reconnaissance reports, and communications to plan movements and attacks. During World War I, German, French, British, and other commanders relied on messengers, field telephones, telegraphs, and artillery observers. Decisions made in these centers could send thousands of soldiers into an offensive—and revealed how limited information could be amid the chaos of battle.",
    "Petrogrado, hoje São Petersburgo, foi o centro da Revolução Russa. Em fevereiro de 1917, greves e protestos contra a fome, a guerra e o czar Nicolau II cresceram na cidade; soldados se uniram aos manifestantes, e o czar abdicou. Em outubro, os bolcheviques, liderados por Vladimir Lênin e apoiados por figuras como Leon Trotsky, tomaram pontos estratégicos da capital.": "Petrograd, now St. Petersburg, was the center of the Russian Revolution. In February 1917, strikes and protests against hunger, war, and Tsar Nicholas II grew across the city; soldiers joined the demonstrators, and the tsar abdicated. In October, the Bolsheviks, led by Vladimir Lenin and supported by figures such as Leon Trotsky, seized strategic points in the capital.",
    "Os operários das fábricas de Petrogrado tiveram papel decisivo em 1917. Jornadas longas, baixos salários, escassez de alimentos e os efeitos da Primeira Guerra Mundial alimentaram greves. A paralisação de trabalhadoras têxteis em 23 de fevereiro pelo calendário russo (8 de março no calendário ocidental) ajudou a iniciar a Revolução de Fevereiro; depois, muitos trabalhadores apoiaram os sovietes, conselhos de operários e soldados.": "Petrograd's factory workers played a decisive role in 1917. Long hours, low wages, food shortages, and the effects of World War I fueled strikes. A walkout by textile workers on February 23 in the Russian calendar (March 8 in the Western calendar) helped spark the February Revolution. Later, many workers supported the soviets, councils of workers and soldiers.",
    "As ferrovias ligavam Petrogrado ao restante do Império Russo e eram vitais para transportar tropas, alimentos, carvão e notícias. Durante a revolução, greves e disputas pelo controle das linhas revelaram o colapso da logística causado pela guerra. Em abril de 1917, Lênin retornou do exílio à Estação Finlândia, em Petrogrado, e apresentou suas Teses de Abril, defendendo “todo poder aos sovietes”.": "Railways connected Petrograd to the rest of the Russian Empire and were vital for transporting troops, food, coal, and news. During the revolution, strikes and struggles over the rail lines exposed the logistical breakdown caused by the war. In April 1917, Lenin returned from exile to Petrograd's Finland Station and presented his April Theses, calling for “all power to the soviets.”",
    "As praças e avenidas de Petrogrado foram espaços de assembleias, passeatas e confrontos ao longo de 1917. Trabalhadores, soldados e cidadãos exigiam pão, paz e mudanças políticas; os bolcheviques defendiam que os sovietes assumissem o poder. A participação popular pressionou o Governo Provisório, que havia substituído o czar, e aprofundou a crise que culminou na Revolução de Outubro.": "Petrograd's squares and avenues hosted assemblies, marches, and clashes throughout 1917. Workers, soldiers, and residents demanded bread, peace, and political change; the Bolsheviks argued that the soviets should take power. Popular pressure challenged the Provisional Government, which had replaced the tsar, deepening the crisis that culminated in the October Revolution.",
    "Na noite de 25 para 26 de outubro de 1917 pelo calendário russo (7 para 8 de novembro no calendário ocidental), forças revolucionárias ocuparam o Palácio de Inverno, sede do Governo Provisório. Guardas Vermelhos, marinheiros e soldados ligados ao Comitê Militar Revolucionário tomaram o edifício enquanto seus ministros eram presos. O episódio se tornou o símbolo da tomada do poder pelos bolcheviques em Petrogrado.": "On the night of October 25–26, 1917, in the Russian calendar (November 7–8 in the Western calendar), revolutionary forces occupied the Winter Palace, headquarters of the Provisional Government. Red Guards, sailors, and soldiers linked to the Military Revolutionary Committee seized the building and arrested its ministers. The event became the symbol of the Bolshevik seizure of power in Petrograd."
});
Object.assign(englishContent, {
    "A quebra da Bolsa de Nova York desencadeou falências, desemprego e pobreza em escala mundial. Explore as marcas deixadas pela Grande Depressão.": "The Wall Street crash triggered bank failures, unemployment, and poverty around the world. Explore the marks left by the Great Depression.",
    "Escolha um cenário para investigar os efeitos da crise.": "Choose a scene to investigate the effects of the crisis.",
    "A crise econômica, a instabilidade política e a propaganda ajudaram o Partido Nazista a conquistar poder na Alemanha. Explore os sinais dessa transformação.": "Economic crisis, political instability, and propaganda helped the Nazi Party gain power in Germany. Explore the signs of this transformation.",
    "Escolha um cenário para entender como o regime consolidou poder.": "Choose a scene to understand how the regime consolidated power.",
    "Entre 1939 e 1945, um conflito de escala mundial transformou cidades, fronteiras e a vida de milhões de pessoas. Explore alguns de seus cenários.": "From 1939 to 1945, a global conflict transformed cities, borders, and the lives of millions. Explore some of its settings.",
    "Escolha um cenário para compreender diferentes experiências da guerra.": "Choose a scene to understand different experiences of the war.",
    "Em agosto de 1945, bombas atômicas atingiram Hiroshima e Nagasaki. As cidades e seus habitantes carregaram consequências imediatas e duradouras.": "In August 1945, atomic bombs struck Hiroshima and Nagasaki. The cities and their people endured immediate and lasting consequences.",
    "Conheça cenários que ajudam a refletir sobre os impactos humanos da era nuclear.": "Explore scenes that invite reflection on the human impact of the nuclear age.",
    "Depois da Segunda Guerra, Estados Unidos e União Soviética disputaram influência global sem uma guerra direta entre suas forças principais.": "After World War II, the United States and the Soviet Union competed for global influence without direct war between their main forces.",
    "Explore os símbolos da rivalidade política, militar e tecnológica entre os blocos.": "Explore symbols of the political, military, and technological rivalry between the blocs.",
    "Em 1949, a vitória comunista na guerra civil levou Mao Tsé-Tung a proclamar a República Popular da China. A transformação alcançou cidades e o campo.": "In 1949, the Communist victory in the civil war led Mao Zedong to proclaim the People's Republic of China. The transformation reached cities and the countryside.",
    "Explore lugares ligados à revolução e às mudanças sociais na China.": "Explore places connected to the revolution and social change in China.",
    "Em novembro de 1989, a abertura do Muro de Berlim tornou-se um marco das mudanças que encerravam a divisão da Europa na Guerra Fria.": "In November 1989, the opening of the Berlin Wall became a landmark in the changes that ended Europe's Cold War division.",
    "Explore os espaços de separação, mobilização e celebração em Berlim.": "Explore places of separation, protest, and celebration in Berlin.",
    "Em 1991, a União Soviética foi dissolvida. O acontecimento encerrou uma etapa central do século XX e mudou o mapa político mundial.": "In 1991, the Soviet Union was dissolved. This ended a central chapter of the 20th century and changed the world's political map.",
    "Explore os cenários da crise e das transformações finais da União Soviética.": "Explore scenes from the crisis and final transformations of the Soviet Union.",
    "Em 24 de outubro de 1929, o pânico tomou a Bolsa de Nova York; nos dias seguintes, as vendas de ações se intensificaram e os preços desabaram. A especulação e o crédito fácil haviam inflado o mercado durante os anos 1920. A quebra não foi a única causa da Grande Depressão, mas abalou a confiança, reduziu investimentos e espalhou a crise pelo sistema financeiro.": "On October 24, 1929, panic gripped the New York Stock Exchange; in the following days, share sales intensified and prices collapsed. Speculation and easy credit had inflated the market in the 1920s. The crash was not the only cause of the Great Depression, but it shook confidence, reduced investment, and spread crisis through the financial system.",
    "Depois da quebra, muitos bancos enfrentaram retiradas em massa: correntistas tentavam sacar seu dinheiro antes que a instituição fechasse. Sem seguro federal de depósitos nos Estados Unidos, milhares de bancos faliram entre 1930 e 1933. Famílias e pequenos negócios perderam economias, e a redução do crédito agravou a queda da produção.": "After the crash, many banks faced runs as customers tried to withdraw their money before their institutions closed. Without federal deposit insurance, thousands of U.S. banks failed between 1930 and 1933. Families and small businesses lost savings, and shrinking credit deepened the fall in production.",
    "Com menos consumo e crédito, empresas reduziram turnos, demitiram trabalhadores ou fecharam. A produção industrial caiu fortemente no início dos anos 1930, e o desemprego atingiu milhões de pessoas nos Estados Unidos e em outros países. A crise mostrou como a interrupção entre produção, salários e consumo podia se alimentar continuamente.": "With less spending and credit, companies cut shifts, laid off workers, or shut down. Industrial output fell sharply in the early 1930s, and unemployment reached millions in the United States and elsewhere. The crisis showed how disruptions to production, wages, and consumption could reinforce one another.",
    "Filas por alimentos e cozinhas comunitárias se tornaram símbolos da Grande Depressão. Desempregados e famílias com renda reduzida dependiam de instituições de caridade, associações religiosas e iniciativas locais. A situação ajudou a pressionar governos a ampliar programas de assistência e, nos EUA, levou às políticas do New Deal a partir de 1933.": "Food lines and soup kitchens became symbols of the Great Depression. Unemployed people and families with reduced incomes relied on charities, religious groups, and local initiatives. The crisis pressed governments to expand relief; in the United States, it helped lead to the New Deal from 1933 onward.",
    "“Hoovervilles” eram assentamentos precários erguidos por pessoas sem moradia durante a Depressão, chamados assim em crítica ao presidente Herbert Hoover. Construídos com madeira, metal e materiais reaproveitados, surgiram em várias cidades americanas. Eles revelavam que a crise não era apenas financeira: ela atingia diretamente moradia, alimentação e dignidade.": "“Hoovervilles” were makeshift settlements built by homeless people during the Depression, named as a criticism of President Herbert Hoover. Made from wood, metal, and salvaged materials, they appeared in cities across the United States. They showed the crisis was not only financial: it directly affected housing, food, and dignity.",
    "Na República de Weimar, Berlim era um centro político e cultural, mas sofreu intensamente com a crise após 1929. O desemprego e a polarização alimentaram conflitos nas ruas e o crescimento de partidos extremistas. Em 30 de janeiro de 1933, Adolf Hitler foi nomeado chanceler, iniciando a transformação da democracia alemã em ditadura.": "Under the Weimar Republic, Berlin was a political and cultural center, but it was hit hard by the crisis after 1929. Unemployment and polarization fueled street clashes and the growth of extremist parties. On January 30, 1933, Adolf Hitler was appointed chancellor, beginning the transformation of German democracy into dictatorship.",
    "A propaganda nazista entrou no cotidiano por cartazes, jornais, rádios, organizações de bairro e cerimônias públicas. Ela promovia a ideia de uma comunidade nacional unificada, enquanto excluía e perseguia judeus, opositores políticos, pessoas com deficiência e outros grupos. O controle social não dependia apenas de grandes eventos: também alcançava casas, escolas e locais de trabalho.": "Nazi propaganda entered daily life through posters, newspapers, radio, neighborhood groups, and public ceremonies. It promoted an image of national unity while excluding and persecuting Jews, political opponents, disabled people, and others. Social control reached homes, schools, and workplaces—not just mass events.",
    "Comícios e desfiles eram cuidadosamente encenados para projetar força, unidade e obediência ao líder. Sob Joseph Goebbels, o Ministério da Propaganda controlou rádio, cinema, imprensa e cultura, restringindo vozes críticas. Essas imagens e rituais ajudavam a normalizar o regime, mas não eliminavam a violência, a censura e o medo que sustentavam seu poder.": "Rallies and parades were staged to project strength, unity, and obedience to the leader. Under Joseph Goebbels, the Propaganda Ministry controlled radio, film, the press, and culture, restricting criticism. These images helped normalize the regime but did not erase the violence, censorship, and fear that sustained it.",
    "Após 1933, jornais alemães foram submetidos à censura e à chamada Gleichschaltung, processo de alinhamento das instituições ao regime nazista. Veículos críticos foram fechados ou controlados; jornalistas e editores passaram a enfrentar perseguição. A manipulação da informação tornou mais difícil questionar o governo e facilitou a difusão de mentiras antissemitas e autoritárias.": "After 1933, German newspapers faced censorship and Gleichschaltung, the process of aligning institutions with the Nazi regime. Critical publications were shut down or controlled, and journalists and editors faced persecution. Manipulated information made it harder to challenge the government and spread antisemitic and authoritarian lies.",
    "O incêndio do Reichstag, em fevereiro de 1933, foi usado pelo governo para ampliar a repressão contra opositores. No mês seguinte, a Lei de Concessão de Plenos Poderes permitiu que Hitler aprovasse leis sem o parlamento, acelerando a ditadura. O edifício, símbolo da representação política alemã, tornou-se também símbolo do esvaziamento da democracia.": "The February 1933 Reichstag fire was used to intensify repression against opponents. The following month, the Enabling Act let Hitler pass laws without parliament, accelerating the dictatorship. The building, a symbol of German political representation, also came to symbolize democracy's dismantling."
});
Object.assign(englishContent, {
    "A mensagem perdida": "The Missing Message",
    "Cruze datas, condições do front e logística militar. Cada resposta correta libera a próxima parte do relatório.": "Compare dates, front-line conditions, and military logistics. Each correct answer unlocks the next part of the report.",
    "Guerra de trincheiras": "Trench Warfare",
    "O jornal de hoje": "Today's Newspaper",
    "Leia os indícios em conjunto para reconstruir por que a ordem czarista ruiu e como o poder mudou de mãos em 1917.": "Combine the clues to reconstruct why tsarist rule collapsed and how power changed hands in 1917.",
    "Revolução de 1917": "The 1917 Revolution",
    "Sobreviver à crise": "Surviving the Crisis",
    "Analise os sinais financeiros e sociais sem confundir o símbolo do crash com as causas estruturais da Grande Depressão.": "Analyze the financial and social evidence without confusing the crash's symbol with the structural causes of the Great Depression.",
    "Consequências sociais da Crise de 1929": "Social Consequences of the 1929 Crisis",
    "As fontes silenciadas": "The Silenced Sources",
    "Compare medidas políticas, propaganda e censura para entender como uma democracia foi desmontada por etapas.": "Compare political measures, propaganda, and censorship to understand how a democracy was dismantled step by step.",
    "Propaganda e censura": "Propaganda and Censorship",
    "Reconstruir o desembarque": "Reconstructing the Landing",
    "Cruze logística, geografia e cronologia para reconstruir por que o Dia D abriu uma nova frente na Europa.": "Combine logistics, geography, and chronology to understand how D-Day opened a new front in Europe.",
    "Desembarque da Normandia": "Normandy Landings",
    "Memória de Hiroshima": "Remembering Hiroshima",
    "Use a escala temporal e os relatos civis para distinguir destruição imediata, efeitos posteriores e memória histórica.": "Use the timeline and civilian accounts to distinguish immediate destruction, lasting effects, and historical memory.",
    "Memória e consequências das bombas atômicas": "Memory and the Consequences of the Atomic Bombs",
    "Documentos de dois blocos": "Documents from Two Blocs",
    "Compare alianças e estratégias de contenção sem reduzir a Guerra Fria a uma guerra direta entre EUA e URSS.": "Compare alliances and containment strategies without reducing the Cold War to a direct war between the United States and the USSR.",
    "Divisão política e tensão nuclear": "Political Division and Nuclear Tension",
    "Vozes da revolução": "Voices of the Revolution",
    "Analise interesses de diferentes grupos e a mudança do poder no campo e nas cidades durante a revolução chinesa.": "Analyze the interests of different groups and the shift in power across China's countryside and cities during the revolution.",
    "Grupos sociais na Revolução Chinesa": "Social Groups in the Chinese Revolution",
    "Passagens de Berlim": "Berlin Crossings",
    "Leia mapas e decisões políticas como parte de um processo: a abertura do Muro teve causas acumuladas e efeitos imediatos.": "Read maps and political decisions as part of a wider process: the Wall's opening had accumulated causes and immediate effects.",
    "Divisão e reunificação de Berlim": "Berlin's Division and Reunification",
    "Documentos de Moscou": "Documents from Moscow",
    "Ordene as mudanças e conecte reformas, disputas entre repúblicas e dissolução formal da União Soviética.": "Put the changes in order and connect reforms, disputes between republics, and the formal dissolution of the Soviet Union.",
    "Fim da União Soviética": "The End of the Soviet Union",
    "CAIXA COM SENHA": "PASSWORD BOX", "SEQUÊNCIA HISTÓRICA": "HISTORICAL SEQUENCE",
    "LIGAÇÕES DE CAUSA E CONSEQUÊNCIA": "CAUSE-AND-EFFECT CONNECTIONS", "NOME ESCONDIDO": "HIDDEN NAME",
    "LIGAÇÕES ENTRE BLOCOS": "CONNECTIONS BETWEEN BLOCS", "DOCUMENTO-CHAVE": "KEY DOCUMENT",
    "A história das trincheiras informa o ano em que a guerra começou. Digite a senha da caixa.": "The trench-warfare account gives the year the war began. Enter the box's password.",
    "Nos textos sobre propaganda, qual é o sobrenome do ministro citado?": "In the propaganda accounts, what is the surname of the minister mentioned?",
    "Digite o nome da cidade apresentada na história antes do ataque.": "Enter the name of the city as it was described before the attack.",
    "Digite o primeiro nome do líder mencionado na história da Revolução Chinesa.": "Enter the first name of the leader mentioned in the account of the Chinese Revolution.",
    "O dossiê de Petrogrado": "The Petrograd Dossier", "Reconstrua a rota da revolução: protestos de fevereiro, retorno de Lênin em abril e tomada do Palácio de Inverno em outubro.": "Reconstruct the revolution's path: February protests, Lenin's return in April, and the seizure of the Winter Palace in October.",
    "Protestos nas ruas": "Street protests", "Chegada à estação": "Arrival at the station", "Tomada do palácio": "Seizure of the palace",
    "O caminho da revolução": "The Road to Revolution", "Organize as três pistas na sequência histórica que leva à tomada do Palácio de Inverno.": "Arrange the three clues in the historical sequence leading to the seizure of the Winter Palace.",
    "Protestos em Petrogrado": "Protests in Petrograd", "Retorno de Lênin à Estação Finlândia": "Lenin returns to Finland Station", "Tomada do Palácio de Inverno": "Seizure of the Winter Palace",
    "Evidências da crise": "Evidence of the Crisis", "Investigue o cenário e selecione as três consequências diretas da crise. A ordem não importa.": "Investigate the scene and select the three direct consequences of the crisis. The order does not matter.",
    "Falências bancárias": "Bank failures", "Fechamento de fábricas": "Factory closures", "Desemprego e filas por comida": "Unemployment and food lines",
    "A redação silenciada": "The Silenced Newsroom", "Decifre o arquivo de 1933: clique nos documentos na ordem que revela a passagem da nomeação de Hitler ao controle da informação.": "Decode the 1933 archive: click the documents in the order that reveals the path from Hitler's appointment to control of information.",
    "Hitler é nomeado chanceler": "Hitler is appointed chancellor", "Incêndio do Reichstag é usado para reprimir opositores": "The Reichstag fire is used to repress opponents", "Lei de Plenos Poderes": "Enabling Act", "Censura e propaganda controlam a informação": "Censorship and propaganda control information",
        "As pistas foram embaralhadas novamente.": "The clues have been shuffled again.",
    "Essa não é uma consequência direta da crise. Procure outra evidência.": "That is not a direct consequence of the crisis. Look for another piece of evidence.",
    "Essa pista ainda não se encaixa. Observe a sequência e tente outra.": "This clue does not fit yet. Study the sequence and try again.",
    "Arquivo completo! O Capítulo {n} foi desbloqueado.": "Archive complete! Chapter {n} has been unlocked.",
    "Pista organizada. Procure a próxima peça do acontecimento.": "Clue placed. Find the next piece of the event.",
    "Resposta correta! O Capítulo 2 foi desbloqueado.": "Correct! Chapter 2 has been unlocked.",
    "Ainda não. Tente outra alternativa.": "Not yet. Try another answer.",
    "Uma ordem menciona avanços mínimos, arame farpado e posições mantidas por meses. Qual forma de combate explica melhor esse quadro?": "An order mentions minimal advances, barbed wire, and positions held for months. Which form of combat best explains this picture?",
    "Relatórios mostram que metralhadoras e artilharia impedem ataques frontais, enquanto as linhas quase não avançam. Qual inferência é mais consistente?": "Reports show machine guns and artillery stopping frontal attacks while the lines barely move. Which inference is most consistent?",
    "A carta só chega após vários dias e menciona telefone de campanha e mensageiros. O que isso revela sobre o comando?": "The letter arrives days later and mentions field telephones and messengers. What does this reveal about command?",
    "Em Petrogrado, greves por pão se espalham; soldados enviados para reprimi-las se recusam a atirar. O que esse indício aponta?": "In Petrograd, bread strikes spread; soldiers sent to suppress them refuse to fire. What does this clue suggest?",
    "Depois da abdicação, o Governo Provisório mantém a Rússia na guerra, enquanto sovietes ganham influência. Qual tensão ajuda a explicar a crise?": "After the abdication, the Provisional Government keeps Russia in the war while soviets gain influence. Which tension helps explain the crisis?",
    "Lênin retorna em abril; meses depois, os bolcheviques tomam o poder prometendo paz e poder aos sovietes. Qual sequência corresponde aos indícios?": "Lenin returns in April; months later, the Bolsheviks seize power, promising peace and power to the soviets. Which sequence matches the clues?",
    "Ações sobem com crédito fácil e compras especulativas; quando a confiança cai, muitos tentam vender ao mesmo tempo. Qual mecanismo amplifica a queda?": "Shares rise on easy credit and speculation; when confidence falls, many try to sell at once. Which mechanism amplifies the decline?",
    "Correntistas fazem saques simultâneos, mas os bancos não conseguem devolver todos os depósitos imediatamente. Que risco sistêmico aparece?": "Customers withdraw funds at the same time, but banks cannot immediately return every deposit. What systemic risk emerges?",
    "Bancos cortam crédito; empresas reduzem produção e demitem; famílias consomem menos. Qual leitura explica o ciclo?": "Banks cut credit; companies reduce production and lay off workers; families spend less. Which interpretation explains this cycle?",
    "Hitler foi nomeado chanceler por meios constitucionais em janeiro de 1933. O que essa informação permite concluir?": "Hitler was appointed chancellor through constitutional means in January 1933. What can this information support?",
    "Após o incêndio do Reichstag, direitos foram restringidos e opositores presos. Qual uso político do evento é evidenciado?": "After the Reichstag fire, rights were restricted and opponents arrested. What political use of the event is evident?",
    "A Lei de Plenos Poderes permitiu governar sem o parlamento; jornais e rádios passaram ao controle estatal. Qual conclusão conecta as duas medidas?": "The Enabling Act allowed rule without parliament; newspapers and radio came under state control. Which conclusion connects these measures?",
    "Relatórios de 6 de junho de 1944 registram desembarque aliado na costa francesa e resistência alemã. Onde ocorreu a operação?": "Reports dated June 6, 1944 record an Allied landing on the French coast and German resistance. Where did the operation take place?",
    "Para atravessar o Canal da Mancha, os Aliados reuniram navios, aviões, tropas e suprimentos em grande escala. O que foi decisivo além do combate?": "To cross the English Channel, the Allies assembled ships, aircraft, troops, and supplies on a vast scale. What mattered beyond combat?",
    "Com uma frente aliada no oeste e o avanço soviético no leste, a Alemanha precisou dividir recursos. Qual efeito estratégico decorre disso?": "With an Allied front in the west and Soviet advances in the east, Germany had to divide its resources. What strategic effect followed?",
    "Hiroshima era uma cidade com casas, escolas e comércio antes de 6 de agosto de 1945. Por que registrar essa vida anterior importa?": "Before August 6, 1945, Hiroshima had homes, schools, and businesses. Why does recording that earlier life matter?",
    "Sobreviventes sofreram queimaduras e doenças relacionadas à radiação; hospitais foram destruídos ou sobrecarregados. Qual conclusão é sustentada?": "Survivors suffered burns and radiation-related illnesses; hospitals were destroyed or overwhelmed. Which conclusion is supported?",
    "Memoriais preservam depoimentos e defendem que a tragédia não se repita. Que função pública da memória eles cumprem?": "Memorials preserve testimony and call for the tragedy not to happen again. What public role does this memory serve?",
    "Após 1945, os EUA e a URSS evitaram confronto militar direto entre suas forças, mas apoiaram alianças e governos rivais. Como se define essa disputa?": "After 1945, the United States and the USSR avoided direct military conflict but backed rival alliances and governments. How is this rivalry defined?",
    "A OTAN foi criada em 1949; a União Soviética organizou depois o Pacto de Varsóvia. O que a comparação indica?": "NATO was created in 1949; the Soviet Union later organized the Warsaw Pact. What does this comparison show?",
    "Bunkers e planos de emergência civil refletiam o risco de escalada nuclear. Por que a dissuasão não significava segurança completa?": "Bunkers and civil-defense plans reflected the risk of nuclear escalation. Why did deterrence not mean complete safety?",
    "Em uma sociedade majoritariamente rural, promessas de redistribuição de terras atraíam sobretudo qual grupo?": "In a mainly rural society, which group was most attracted by promises of land redistribution?",
    "A guerra civil opôs comunistas e nacionalistas; apoio rural e organização militar influenciaram o resultado. Qual explicação evita reduzir a vitória a um único fator?": "The civil war pitted Communists against Nationalists; rural support and military organization shaped the outcome. Which explanation avoids reducing victory to a single factor?",
    "Em 1949, Mao proclamou a República Popular da China após a vitória comunista. O que mudou na ordem política?": "In 1949, Mao proclaimed the People's Republic of China after the Communist victory. What changed in the political order?",
    "Depois da Segunda Guerra, Alemanha e Berlim foram divididas em zonas de ocupação. O que essa divisão passou a representar?": "After World War II, Germany and Berlin were divided into occupation zones. What did this division come to represent?",
    "Em 1989, protestos, êxodo e mudanças políticas no bloco oriental precederam a abertura das passagens do Muro. Qual leitura é mais precisa?": "In 1989, protests, an exodus, and political changes in the Eastern Bloc preceded the opening of the Wall's crossings. Which reading is most accurate?",
    "A abertura ocorreu em novembro de 1989; a reunificação alemã veio em 1990. O que essa ordem cronológica impede afirmar?": "The crossings opened in November 1989; German reunification followed in 1990. What claim does this chronology rule out?",
    "Gorbachev iniciou a perestroika e a glasnost nos anos 1980, mas as reformas também ampliaram disputas e críticas. Qual relação descreve melhor esse efeito?": "Gorbachev began perestroika and glasnost in the 1980s, but the reforms also widened disputes and criticism. Which relationship best describes this effect?",
    "Várias repúblicas declararam soberania antes do acordo que encerrou a URSS em dezembro de 1991. Qual processo está descrito?": "Several republics declared sovereignty before the agreement that ended the USSR in December 1991. Which process is described?",
    "A queda do Muro de Berlim ocorreu em 1989 e a dissolução da URSS em 1991. Qual conclusão cronológica é correta?": "The Berlin Wall fell in 1989 and the USSR dissolved in 1991. Which chronological conclusion is correct?",
    "A porta final está liberada no lado esquerdo do museu.": "The final door is now unlocked on the left side of the museum.",
    "Linha do tempo do século XX concluída": "20th-century timeline completed"
    ,"A guerra terrestre na Europa reuniu exércitos em campanhas longas e violentas. Soldados enfrentavam lama, frio, artilharia e deslocamentos constantes. A experiência dos combatentes ajuda a entender por que o conflito atingiu uma escala tão devastadora.": "Land warfare in Europe drew armies into long and brutal campaigns. Soldiers faced mud, cold, artillery, and constant movement. Their experiences help explain why the conflict reached such a devastating scale."
    ,"Bases militares organizavam tropas, suprimentos, comunicações e veículos antes das operações. A capacidade industrial e logística foi decisiva: vencer também dependia de produzir alimentos, equipamentos, combustível e medicamentos em grande quantidade.": "Military bases organized troops, supplies, communications, and vehicles before operations. Industrial and logistical capacity was decisive: victory also depended on producing food, equipment, fuel, and medicine on a massive scale."
    ,"Bombardeios aéreos destruíram bairros inteiros e atingiram a população civil. Muitas famílias perderam suas casas e precisaram buscar abrigos. A guerra deixou de estar distante do cotidiano e passou a ocupar ruas, escolas e hospitais.": "Air raids destroyed entire neighborhoods and struck civilians. Many families lost their homes and had to seek shelter. War was no longer distant from daily life; it reached streets, schools, and hospitals."
    ,"Pessoas perseguidas pelo regime nazista e pelas ocupações procuraram esconderijos, redes de ajuda e rotas de fuga. Judeus, resistentes, prisioneiros e outros grupos viveram sob risco constante. Lembrar essas histórias é fundamental para compreender a violência e a resistência durante a guerra.": "People persecuted by the Nazi regime and occupying forces sought hiding places, aid networks, and escape routes. Jews, resistance members, prisoners, and other groups lived under constant threat. Remembering these stories is essential to understanding wartime violence and resistance."
    ,"Em 6 de junho de 1944, os Aliados desembarcaram na Normandia, na França ocupada. A operação abriu uma nova frente na Europa Ocidental e acelerou a derrota da Alemanha nazista. O desembarque exigiu uma enorme coordenação de navios, aviões e soldados.": "On June 6, 1944, the Allies landed in Normandy, in occupied France. The operation opened a new front in Western Europe and accelerated Nazi Germany's defeat. The landing required enormous coordination among ships, aircraft, and soldiers."
    ,"Antes de agosto de 1945, Hiroshima era uma cidade viva, com moradias, comércios, escolas e serviços. Recordar a vida cotidiana anterior à destruição impede que a tragédia seja reduzida a uma simples data ou estatística.": "Before August 1945, Hiroshima was a living city with homes, businesses, schools, and public services. Remembering daily life before the destruction keeps the tragedy from becoming just a date or statistic."
    ,"A explosão atingiu casas e bairros inteiros. Muitas pessoas morreram imediatamente, e sobreviventes perderam familiares, moradia e meios de sobrevivência. A destruição mostrou que armas nucleares afetam principalmente vidas civis.": "The blast struck homes and entire neighborhoods. Many people died immediately; survivors lost family members, homes, and their means of survival. The devastation showed that nuclear weapons primarily affect civilian lives."
    ,"O calor, a onda de choque e os incêndios devastaram o centro urbano. A infraestrutura da cidade entrou em colapso, dificultando resgates e atendimento médico. Os efeitos da radiação continuaram a afetar sobreviventes por muitos anos.": "Heat, the shock wave, and fires devastated the city center. Urban infrastructure collapsed, hindering rescue and medical care. Radiation continued to affect survivors for many years."
    ,"Profissionais de saúde e voluntários atenderam um número enorme de feridos com poucos recursos. Queimaduras, traumas e doenças causadas pela radiação exigiam cuidados que os serviços locais não conseguiam oferecer plenamente.": "Health workers and volunteers treated enormous numbers of wounded people with few resources. Burns, trauma, and radiation-related illnesses required care that local services could not fully provide."
    ,"Memoriais em Hiroshima e Nagasaki preservam relatos de sobreviventes e defendem a paz. Eles convidam visitantes a refletir sobre a responsabilidade humana diante das armas nucleares e sobre a necessidade de evitar novas catástrofes.": "Memorials in Hiroshima and Nagasaki preserve survivors' accounts and advocate peace. They invite visitors to reflect on humanity's responsibility in the nuclear age and on the need to prevent future catastrophes."
    ,"Após 1945, Berlim foi dividida entre potências vencedoras e tornou-se um dos principais símbolos da Guerra Fria. A separação da cidade dividiu famílias e vidas cotidianas, revelando como a disputa global afetava pessoas comuns.": "After 1945, Berlin was divided among the victorious powers and became one of the Cold War's main symbols. The division split families and daily lives, showing how global rivalry affected ordinary people."
    ,"Os Estados Unidos mantiveram bases e alianças militares em várias regiões. A OTAN, criada em 1949, organizou a defesa coletiva dos países do bloco ocidental. A presença militar buscava dissuadir ataques, mas também aumentava a tensão internacional.": "The United States maintained military bases and alliances in many regions. NATO, established in 1949, organized the collective defense of Western Bloc countries. Its military presence aimed to deter attacks but also heightened international tensions."
    ,"A União Soviética e seus aliados formaram o Pacto de Varsóvia em 1955. Bases, tanques e exercícios militares representavam a força do bloco oriental. A corrida armamentista elevou o risco de uma guerra de grandes proporções.": "The Soviet Union and its allies formed the Warsaw Pact in 1955. Bases, tanks, and military exercises represented the strength of the Eastern Bloc. The arms race increased the risk of a large-scale war."
    ,"O medo de um conflito nuclear levou governos a construir bunkers e elaborar planos de emergência. A lógica da dissuasão se baseava na ideia de que o poder destrutivo das armas impediria seu uso — uma situação marcada por insegurança permanente.": "Fear of nuclear conflict led governments to build bunkers and draw up emergency plans. Deterrence rested on the belief that the weapons' destructive power would prevent their use—a situation marked by constant insecurity."
    ,"Espionagem, códigos e coleta de informações foram elementos centrais da Guerra Fria. Agências dos dois blocos buscavam segredos militares, científicos e políticos. Muitas operações ocorreram longe do olhar público, mas influenciaram crises internacionais.": "Espionage, codes, and intelligence gathering were central to the Cold War. Agencies from both blocs sought military, scientific, and political secrets. Many operations took place out of public view but influenced international crises."
    ,"Durante a guerra civil, o Partido Comunista Chinês organizou forças militares e redes de apoio em áreas rurais. A mobilização de camponeses e combatentes foi decisiva para sua vitória sobre o governo nacionalista.": "During the civil war, the Chinese Communist Party organized military forces and support networks in rural areas. The mobilization of peasants and fighters was decisive in its victory over the Nationalist government."
    ,"O campo concentrava grande parte da população chinesa. Promessas de reforma agrária e de mudanças na distribuição da terra ajudaram os comunistas a conquistar apoio em diversas regiões rurais.": "Most of China's population lived in the countryside. Promises of land reform and changes to land ownership helped the Communists gain support across many rural regions."
    ,"A vida nas vilas foi profundamente afetada pela guerra, pela escassez e pelas mudanças políticas. Após 1949, novas autoridades passaram a reorganizar propriedades e atividades locais, com resultados diferentes conforme a região.": "Village life was deeply affected by war, shortages, and political change. After 1949, new authorities reorganized property and local activities, with varying results across regions."
    ,"Cidades menores funcionavam como pontos de comércio, administração e circulação de informações. A vitória comunista mudou o controle desses espaços e abriu uma nova fase na história política da China.": "Smaller cities served as centers for trade, administration, and the flow of information. The Communist victory changed who controlled these places and opened a new chapter in China's political history."
    ,"Em 1º de outubro de 1949, Mao Tsé-Tung proclamou a República Popular da China em Pequim. O acontecimento marcou o fim de décadas de conflitos internos e o início de um novo governo sob liderança comunista.": "On October 1, 1949, Mao Zedong proclaimed the People's Republic of China in Beijing. The event marked the end of decades of internal conflict and the beginning of a new Communist-led government."
    ,"Construído em 1961, o Muro de Berlim separava a parte oriental e a ocidental da cidade. Ele simbolizava a divisão política da Europa e restringia o deslocamento de moradores, separando famílias e comunidades por quase três décadas.": "Built in 1961, the Berlin Wall separated the eastern and western parts of the city. It symbolized Europe's political division and restricted residents' movement, splitting families and communities for nearly three decades."
    ,"Postos de controle regulavam rigorosamente a passagem entre os dois lados de Berlim. Esses lugares mostravam de forma concreta a vigilância e as restrições impostas pela divisão da cidade.": "Checkpoints strictly regulated travel between the two sides of Berlin. They made the surveillance and restrictions imposed by the city's division tangible."
    ,"Em 1989, protestos e mudanças políticas na Alemanha Oriental pressionaram o governo a permitir viagens. Quando a abertura foi anunciada, milhares de pessoas foram às ruas e aos pontos de passagem.": "In 1989, protests and political changes in East Germany pressured the government to allow travel. When the opening was announced, thousands gathered in the streets and at the crossings."
    ,"Manifestações pacíficas reuniram cidadãos que pediam liberdade de expressão, reformas e direito de viajar. A força coletiva dessas mobilizações foi decisiva para acelerar as mudanças no país.": "Peaceful demonstrations brought together citizens calling for free expression, reform, and the right to travel. The collective strength of these mobilizations was decisive in accelerating change."
    ,"A queda do Muro foi recebida com encontros, música e comemorações. Pessoas de ambos os lados atravessaram fronteiras antes fechadas, transformando um símbolo de separação em uma memória de reunificação.": "The Wall's fall was met with reunions, music, and celebration. People from both sides crossed borders that had been closed, turning a symbol of separation into a memory of reunification."
    ,"Moscou era o centro político da União Soviética. No fim dos anos 1980, reformas, crise econômica e disputas entre repúblicas colocaram em questão o futuro do país e do próprio governo central.": "Moscow was the Soviet Union's political center. In the late 1980s, reforms, economic crisis, and disputes among republics called the country's future and central government into question."
    ,"O Kremlin, sede do poder soviético, tornou-se o palco de decisões decisivas durante a crise de 1991. A tentativa de golpe em agosto enfraqueceu ainda mais as instituições da União Soviética.": "The Kremlin, seat of Soviet power, became the stage for decisive choices during the 1991 crisis. The attempted coup in August further weakened the Soviet Union's institutions."
    ,"As disputas políticas cresceram entre diferentes instituições e líderes. Repúblicas soviéticas passaram a declarar soberania ou independência, reduzindo o poder do governo central e acelerando a dissolução.": "Political disputes intensified among institutions and leaders. Soviet republics began declaring sovereignty or independence, weakening the central government and accelerating dissolution."
    ,"Escassez de produtos e longas filas eram parte da crise econômica enfrentada por muitos cidadãos. As dificuldades do cotidiano revelavam problemas profundos de abastecimento e confiança no sistema.": "Product shortages and long queues were part of the economic crisis faced by many citizens. Daily hardships revealed deep problems with supply and confidence in the system."
    ,"Em dezembro de 1991, a União Soviética deixou de existir oficialmente. A nova realidade alterou fronteiras, governos e relações internacionais, encerrando simbolicamente o período da Guerra Fria.": "In December 1991, the Soviet Union officially ceased to exist. The new reality changed borders, governments, and international relations, symbolically bringing the Cold War era to a close."
});

const portugueseContent = Object.fromEntries(Object.entries(englishContent).map(([portuguese, english]) => [english, portuguese]));

function localize(value) {
    if (typeof value !== "string") return value;
    return currentLanguage === "en" ? (englishContent[value] ?? value) : (portugueseContent[value] ?? value);
}

function localizeDocument() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        if (node.__sourceText === undefined) node.__sourceText = node.nodeValue;
        const original = node.__sourceText;
        const trimmed = original.trim();
        if (!trimmed) continue;
        const normalized = trimmed.replace(/\s+/g, " ");
        const localized = localize(normalized);
        const leading = original.match(/^\s*/)?.[0] || "";
        const trailing = original.match(/\s*$/)?.[0] || "";
        node.nodeValue = `${leading}${localized}${trailing}`;
    }
    document.querySelectorAll("[placeholder], [aria-label], [title]").forEach((element) => {
        for (const attribute of ["placeholder", "aria-label", "title"]) {
            if (!element.hasAttribute(`data-source-${attribute}`) && element.hasAttribute(attribute)) {
                element.setAttribute(`data-source-${attribute}`, element.getAttribute(attribute));
            }
            const source = element.getAttribute(`data-source-${attribute}`);
            if (source !== null) element.setAttribute(attribute, localize(source));
        }
    });
    if (document.body.dataset.sourceTitle === undefined) document.body.dataset.sourceTitle = document.title;
    document.title = localize(document.body.dataset.sourceTitle);
}

function applyLanguage() {
    const text = interfaceTranslations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    playButton.textContent = text.play;
    freeModeButton.textContent = text.free;
    freeModeStatus.textContent = freeModeButton.disabled ? text.freeStatus : text.freeReady;
    optionsButton.textContent = text.options;
    exitButton.textContent = text.exit;
    pauseButtonLabel.textContent = text.pause;
    pauseButton.setAttribute("aria-label", text.pause);
    optionsTitle.textContent = optionsOpenedFromGame ? text.paused : text.options;
    volumeLabel.textContent = text.volume;
    languageLabel.textContent = text.language;
    controlsLabel.textContent = text.controls;
    backButton.textContent = optionsOpenedFromGame ? text.resume : text.back;
    returnMenuButton.textContent = text.returnToMenu;
    languageSelect.value = currentLanguage;
    localizeDocument();
    updateFreeModeButton();
}

/* Ponto central dos pés do personagem, em pixels da tela. */
let playerX = 0;
let playerY = 0;
let characterDirection = "right";

function setCharacterPose(direction, moving = true) {
    characterDirection = direction;
    player.classList.toggle("idle-breathing", !moving);
    const isSideIdle = !moving && (direction === "left" || direction === "right");
    const nextSource = isSideIdle
        ? `sprites/blonde/idle-${direction}.png`
        : `sprites/blonde/frame-${direction}-0.png`;
    if (!activePlayerSprite.getAttribute("src")?.endsWith(nextSource)) {
        activePlayerSprite.src = nextSource;
    }
}

let gameRunning = false;
let lastTime = 0;
let optionsOpenedFromGame = false;
let gameRunningBeforeOptions = false;
let gameplayMusicWasPlayingBeforeOptions = false;

const keys = Object.create(null);

/* Cada arquivo de salvamento tem seu próprio progresso. */
const SAVE_SLOT_COUNT = 4;
const SAVE_PREFIX = "memorias-seculo-xx-slot-";
const LEGACY_PROGRESS_KEY = "memorias-seculo-xx-capitulo-liberado";
const NOTEBOOK_PREFIX = "memorias-seculo-xx-caderno-";
let activeSaveSlot = null;
let highestUnlockedChapter = 1;
let freeModeActive = false;
let notebookProgress = {};
let activeMissionChapter = null;
let activeMissionStep = 0;
const FINAL_DOOR = { x: 0.075, y: 0.52, radius: 95 };
const finalTimelineEvents = [
    { id: "wwi", pt: "A guerra começa após o assassinato de Francisco Ferdinando", en: "The war begins after the assassination of Franz Ferdinand" },
    { id: "russian-revolution", pt: "Os bolcheviques tomam o poder na Rússia", en: "The Bolsheviks seize power in Russia" },
    { id: "wall-street", pt: "A Bolsa de Nova York entra em colapso", en: "The New York Stock Exchange collapses" },
    { id: "hitler-chancellor", pt: "Hitler é nomeado chanceler da Alemanha", en: "Hitler is appointed chancellor of Germany" },
    { id: "wwii", pt: "A invasão da Polônia inicia a guerra na Europa", en: "The invasion of Poland begins the war in Europe" },
    { id: "atomic-bombs", pt: "Bombas atômicas atingem Hiroshima e Nagasaki", en: "Atomic bombs strike Hiroshima and Nagasaki" },
    { id: "cold-war", pt: "A rivalidade entre EUA e URSS marca a Guerra Fria", en: "Rivalry between the United States and USSR defines the Cold War" },
    { id: "china", pt: "Mao proclama a República Popular da China", en: "Mao proclaims the People's Republic of China" },
    { id: "berlin-wall", pt: "As passagens do Muro de Berlim se abrem", en: "The Berlin Wall crossings open" },
    { id: "ussr", pt: "A União Soviética deixa de existir", en: "The Soviet Union ceases to exist" }
];
let shuffledFinalTimeline = [];
let selectedTimelineEvent = null;
let nearbyFinalDoor = false;

function getChapterIndex(chapter) {
    return Number.parseInt(chapter.number.match(/\d+/)[0], 10);
}

function isChapterUnlocked(chapter) {
    return freeModeActive || getChapterIndex(chapter) <= highestUnlockedChapter;
}

function updateFreeModeButton() {
    const journeyCompleted = activeSaveSlot !== null && highestUnlockedChapter >= chapters.length;
    const text = interfaceTranslations[currentLanguage];

    freeModeButton.disabled = !journeyCompleted;
    freeModeStatus.textContent = journeyCompleted
        ? text.freeReady
        : text.freeStatus;
}

function getSaveKey(slot) {
    return `${SAVE_PREFIX}${slot}`;
}

function getNotebookKey(slot) {
    return `${NOTEBOOK_PREFIX}${slot}`;
}

function loadNotebookProgress() {
    notebookProgress = {};
    if (activeSaveSlot === null) return;
    try {
        notebookProgress = JSON.parse(localStorage.getItem(getNotebookKey(activeSaveSlot)) || "{}") || {};
    } catch (error) {
        notebookProgress = {};
    }
}

function saveNotebookProgress() {
    if (activeSaveSlot === null) return;
    try {
        localStorage.setItem(getNotebookKey(activeSaveSlot), JSON.stringify(notebookProgress));
    } catch (error) {
        console.warn("Não foi possível salvar o Caderno Histórico.");
    }
}

function readSaveSlot(slot) {
    try {
        const savedProgress = Number.parseInt(localStorage.getItem(getSaveKey(slot)), 10);

        if (Number.isFinite(savedProgress)) {
            return Math.max(1, savedProgress);
        }

        /* Preserva o progresso criado antes da existência dos quatro arquivos. */
        if (slot === 1) {
            const legacyProgress = Number.parseInt(localStorage.getItem(LEGACY_PROGRESS_KEY), 10);
            if (Number.isFinite(legacyProgress)) {
                return Math.max(1, legacyProgress);
            }
        }
    } catch (error) {
        console.warn("Não foi possível ler este arquivo de salvamento.");
    }

    return null;
}

function saveCurrentProgress() {
    if (activeSaveSlot === null) return;

    try {
        localStorage.setItem(getSaveKey(activeSaveSlot), String(highestUnlockedChapter));
    } catch (error) {
        console.warn("Não foi possível salvar o progresso neste navegador.");
    }
}

function renderSaveSlots() {
    saveSlots.innerHTML = "";

    for (let slot = 1; slot <= SAVE_SLOT_COUNT; slot += 1) {
        const progress = readSaveSlot(slot);
        const card = document.createElement("div");
        card.className = "save-slot-card";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "save-slot";
        button.dataset.saveSlot = String(slot);

        const labels = interfaceTranslations[currentLanguage];
        if (progress === null) {
            button.innerHTML = `<span class="save-slot-number">${labels.saveFile} ${slot}</span><strong>${labels.newGame}</strong><small>${labels.empty}</small>`;
        } else {
            const finished = progress >= chapters.length;
            const progressText = finished ? labels.completed : labels.chapterUnlocked.replace("{n}", progress);
            button.innerHTML = `<span class="save-slot-number">${labels.saveFile} ${slot}</span><strong>${progressText}</strong><small>${labels.continue}</small>`;

            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "delete-save-button";
            deleteButton.dataset.deleteSaveSlot = String(slot);
            deleteButton.textContent = labels.deleteProgress;
            card.appendChild(deleteButton);
        }

        card.prepend(button);
        saveSlots.appendChild(card);
    }
}

function openSaveSelect() {
    startMenuMusic();
    renderSaveSlots();
    menu.classList.add("hidden");
    saveSelect.classList.remove("hidden");
}

function chooseSaveSlot(slot) {
    activeSaveSlot = slot;
    highestUnlockedChapter = readSaveSlot(slot) ?? 1;
    loadNotebookProgress();
    saveCurrentProgress();
    updateFreeModeButton();
    saveSelect.classList.add("hidden");
    stopMusic();
    startGame(false);
}

function deleteSaveSlot(slot) {
    const confirmed = window.confirm(interfaceTranslations[currentLanguage].saveDeleteConfirm.replace("{n}", slot));

    if (!confirmed) return;

    try {
        localStorage.removeItem(getSaveKey(slot));
        localStorage.removeItem(getNotebookKey(slot));

        /* O Arquivo 1 também pode conter o progresso antigo do jogo. */
        if (slot === 1) {
            localStorage.removeItem(LEGACY_PROGRESS_KEY);
        }
    } catch (error) {
        console.warn("Não foi possível excluir este arquivo de salvamento.");
        return;
    }

    if (activeSaveSlot === slot) {
        activeSaveSlot = null;
        highestUnlockedChapter = 1;
        notebookProgress = {};
        freeModeActive = false;
        updateFreeModeButton();
    }

    renderSaveSlots();
}

function unlockChapter(index) {
    highestUnlockedChapter = Math.max(highestUnlockedChapter, index);
    saveCurrentProgress();
    updateFreeModeButton();
}

/* =========================================================
   PORTAS / CAPÍTULOS
   As posições usam porcentagens do mapa, então continuam
   corretas mesmo quando a janela muda de tamanho.

   A fileira superior corresponde aos capítulos 1–5.
   A fileira inferior corresponde aos capítulos 6–10.
========================================================= */

const chapters = [
    {
        number: "CAPÍTULO 1",
        title: "Primeira Guerra Mundial (1914–1918)",
        text: "Entre na sala para conhecer o conflito que transformou o mapa político da Europa.",
        x: 0.116,
        y: 0.327
    },
    {
        number: "CAPÍTULO 2",
        title: "Revolução Russa (1917)",
        text: "A queda do czar e a ascensão dos bolcheviques mudam o rumo da Rússia.",
        x: 0.300,
        y: 0.327
    },
    {
        number: "CAPÍTULO 3",
        title: "Crise de 1929",
        text: "O colapso da Bolsa de Nova York dá início a uma crise econômica mundial.",
        x: 0.493,
        y: 0.327
    },
    {
        number: "CAPÍTULO 4",
        title: "Ascensão do Nazismo na Alemanha (1933)",
        text: "Hitler chega ao poder e a Alemanha entra em um período de radicalização política.",
        x: 0.687,
        y: 0.327
    },
    {
        number: "CAPÍTULO 5",
        title: "Segunda Guerra Mundial (1939–1945)",
        text: "O maior conflito da primeira metade do século XX redesenha o mundo.",
        x: 0.885,
        y: 0.327
    },
    {
        number: "CAPÍTULO 6",
        title: "Hiroshima e Nagasaki (1945)",
        text: "As bombas atômicas marcam o início da era nuclear.",
        x: 0.116,
        y: 0.532
    },
    {
        number: "CAPÍTULO 7",
        title: "Guerra Fria (1947–1991)",
        text: "EUA e URSS disputam influência política, econômica, militar e ideológica.",
        x: 0.300,
        y: 0.532
    },
    {
        number: "CAPÍTULO 8",
        title: "Revolução Chinesa (1949)",
        text: "A vitória dos comunistas leva Mao Tsé-Tung ao poder na China.",
        x: 0.493,
        y: 0.532
    },
    {
        number: "CAPÍTULO 9",
        title: "Queda do Muro de Berlim (1989)",
        text: "Um dos grandes símbolos do enfraquecimento da Guerra Fria chega ao seu fim.",
        x: 0.687,
        y: 0.532
    },
    {
        number: "CAPÍTULO 10",
        title: "Fim da União Soviética (1991)",
        text: "O fim da URSS encerra a Guerra Fria e transforma a ordem mundial.",
        x: 0.885,
        y: 0.532
    }
];

const DOOR_DETECTION_RADIUS = 70;
let nearbyChapter = null;

/* =========================================================
   CENÁRIOS EXTRAS — APENAS CAPÍTULO 1
========================================================= */

const chapterOneLocations = {
    "trincheiras": {
        title: "Trincheiras",
        image: "Trinceiras.png",
        text: "A guerra de trincheiras dominou grande parte da Frente Ocidental depois de 1914, quando o avanço rápido dos exércitos foi interrompido. França, Reino Unido e seus aliados enfrentaram as forças alemãs em extensas redes de valas, abrigos e arame farpado. Soldados passavam semanas sob lama, bombardeios, doenças e ataques; batalhas como Verdun e o Somme, em 1916, mostram a dimensão dessa guerra de desgaste."
    },
    "terra-ninguem": {
        title: "Terra de Ninguém",
        image: "Terra_de_ninguem.png",
        text: "A Terra de Ninguém era a faixa devastada entre as trincheiras inimigas. A artilharia de ambos os lados — sobretudo alemães, franceses e britânicos na Frente Ocidental — transformava o terreno em crateras, lama e cercas de arame. Durante ofensivas como a Batalha do Somme, em 1916, atravessar esse espaço significava enfrentar metralhadoras, explosões e pouca proteção."
    },
    "vila-destruida": {
        title: "Vila Destruída",
        image: "Vila_destruida.png",
        text: "De 1914 a 1918, cidades e vilas da Bélgica e do norte da França ficaram entre frentes de combate ou sob ocupação. Invasões, artilharia e combates urbanos destruíram casas, igrejas e serviços essenciais, obrigando civis a fugir ou sobreviver sob racionamento. A reconstrução de lugares como Ypres, Arras e Reims continuou por muitos anos após o armistício de 11 de novembro de 1918."
    },
    "acampamento-militar": {
        title: "Acampamento Militar",
        image: "Acampamento_militar.png",
        text: "Acampamentos militares funcionavam como pontos de descanso, treinamento, atendimento médico e distribuição de suprimentos. A guerra mobilizou milhões de homens do Reino Unido, França, Alemanha e de outros impérios e países aliados; para mantê-los no front, ferrovias e comboios transportavam alimentos, munição, equipamentos e cartas. Longe da linha de tiro, esses locais ainda refletiam a escala industrial e humana do conflito."
    },
    "posto-comando": {
        title: "Posto de Comando",
        image: "Posto_de_comando.png",
        text: "Nos postos de comando, oficiais reuniam mapas, relatórios de reconhecimento e comunicações para decidir movimentos e ataques. Durante a Primeira Guerra Mundial, comandantes alemães, franceses, britânicos e de outros exércitos dependiam de mensageiros, telefones de campanha, telégrafos e observadores de artilharia. As decisões tomadas nesses centros podiam lançar milhares de soldados a uma ofensiva — e também revelavam os limites das informações disponíveis em meio ao caos da batalha."
    }
};

const chapterTwoLocations = {
    petrogrado: {
        title: "Petrogrado",
        image: "Petrogrado.jpeg",
        text: "Petrogrado, hoje São Petersburgo, foi o centro da Revolução Russa. Em fevereiro de 1917, greves e protestos contra a fome, a guerra e o czar Nicolau II cresceram na cidade; soldados se uniram aos manifestantes, e o czar abdicou. Em outubro, os bolcheviques, liderados por Vladimir Lênin e apoiados por figuras como Leon Trotsky, tomaram pontos estratégicos da capital."
    },
    fabrica: {
        title: "Fábrica",
        image: "Fabríca.jpeg",
        text: "Os operários das fábricas de Petrogrado tiveram papel decisivo em 1917. Jornadas longas, baixos salários, escassez de alimentos e os efeitos da Primeira Guerra Mundial alimentaram greves. A paralisação de trabalhadoras têxteis em 23 de fevereiro pelo calendário russo (8 de março no calendário ocidental) ajudou a iniciar a Revolução de Fevereiro; depois, muitos trabalhadores apoiaram os sovietes, conselhos de operários e soldados."
    },
    "estacao-ferroviaria": {
        title: "Estação Ferroviária",
        image: "Estação_Ferroviaria.jpeg",
        text: "As ferrovias ligavam Petrogrado ao restante do Império Russo e eram vitais para transportar tropas, alimentos, carvão e notícias. Durante a revolução, greves e disputas pelo controle das linhas revelaram o colapso da logística causado pela guerra. Em abril de 1917, Lênin retornou do exílio à Estação Finlândia, em Petrogrado, e apresentou suas Teses de Abril, defendendo “todo poder aos sovietes”."
    },
    "praca-manifestacao": {
        title: "Praça de Manifestação",
        image: "Praça_de_manifestção.jpeg",
        text: "As praças e avenidas de Petrogrado foram espaços de assembleias, passeatas e confrontos ao longo de 1917. Trabalhadores, soldados e cidadãos exigiam pão, paz e mudanças políticas; os bolcheviques defendiam que os sovietes assumissem o poder. A participação popular pressionou o Governo Provisório, que havia substituído o czar, e aprofundou a crise que culminou na Revolução de Outubro."
    },
    "palacio-inverno": {
        title: "Palácio de Inverno",
        image: "Palacio_de_inverno.jpeg",
        text: "Na noite de 25 para 26 de outubro de 1917 pelo calendário russo (7 para 8 de novembro no calendário ocidental), forças revolucionárias ocuparam o Palácio de Inverno, sede do Governo Provisório. Guardas Vermelhos, marinheiros e soldados ligados ao Comitê Militar Revolucionário tomaram o edifício enquanto seus ministros eram presos. O episódio se tornou o símbolo da tomada do poder pelos bolcheviques em Petrogrado."
    }
};

const extraChapters = {
    3: {
        kicker: "CAPÍTULO 3 · 1929",
        title: "A Crise de 1929",
        intro: "A quebra da Bolsa de Nova York desencadeou falências, desemprego e pobreza em escala mundial. Explore as marcas deixadas pela Grande Depressão.",
        locationSubtitle: "Escolha um cenário para investigar os efeitos da crise.",
        locations: {
            "wall-street": { title: "Wall Street", image: "Wall_stret.png", text: "Em 24 de outubro de 1929, o pânico tomou a Bolsa de Nova York; nos dias seguintes, as vendas de ações se intensificaram e os preços desabaram. A especulação e o crédito fácil haviam inflado o mercado durante os anos 1920. A quebra não foi a única causa da Grande Depressão, mas abalou a confiança, reduziu investimentos e espalhou a crise pelo sistema financeiro." },
            banco: { title: "Banco em Crise", image: "Banco_em_crise.png", text: "Depois da quebra, muitos bancos enfrentaram retiradas em massa: correntistas tentavam sacar seu dinheiro antes que a instituição fechasse. Sem seguro federal de depósitos nos Estados Unidos, milhares de bancos faliram entre 1930 e 1933. Famílias e pequenos negócios perderam economias, e a redução do crédito agravou a queda da produção." },
            fabrica: { title: "Fábrica Fechada", image: "Fábrica_fechada.png", text: "Com menos consumo e crédito, empresas reduziram turnos, demitiram trabalhadores ou fecharam. A produção industrial caiu fortemente no início dos anos 1930, e o desemprego atingiu milhões de pessoas nos Estados Unidos e em outros países. A crise mostrou como a interrupção entre produção, salários e consumo podia se alimentar continuamente." },
            "fila-pao": { title: "Fila do Pão", image: "Fila_do_pão.png", text: "Filas por alimentos e cozinhas comunitárias se tornaram símbolos da Grande Depressão. Desempregados e famílias com renda reduzida dependiam de instituições de caridade, associações religiosas e iniciativas locais. A situação ajudou a pressionar governos a ampliar programas de assistência e, nos EUA, levou às políticas do New Deal a partir de 1933." },
            hooverville: { title: "Hooverville", image: "Hooverville.png", text: "“Hoovervilles” eram assentamentos precários erguidos por pessoas sem moradia durante a Depressão, chamados assim em crítica ao presidente Herbert Hoover. Construídos com madeira, metal e materiais reaproveitados, surgiram em várias cidades americanas. Eles revelavam que a crise não era apenas financeira: ela atingia diretamente moradia, alimentação e dignidade." }
        },
        puzzle: {
            title: "O cofre da crise",
            intro: "Três recortes estão fora de ordem. Clique nas pistas na sequência em que a crise se espalhou: quebra da Bolsa, crise bancária e fechamento das fábricas.",
            clues: [
                { id: "wall-street", label: "Queda da Bolsa", image: "Wall_stret.png" },
                { id: "banco", label: "Pânico nos bancos", image: "Banco_em_crise.png" },
                { id: "fabrica", label: "Fábricas fechadas", image: "Fábrica_fechada.png" }
            ],
            solution: ["wall-street", "banco", "fabrica"]
        }
    },
    4: {
        kicker: "CAPÍTULO 4 · 1933",
        title: "A Ascensão do Nazismo",
        intro: "A crise econômica, a instabilidade política e a propaganda ajudaram o Partido Nazista a conquistar poder na Alemanha. Explore os sinais dessa transformação.",
        locationSubtitle: "Escolha um cenário para entender como o regime consolidou poder.",
        locations: {
            berlim: { title: "Berlim", image: "Berlim.png", text: "Na República de Weimar, Berlim era um centro político e cultural, mas sofreu intensamente com a crise após 1929. O desemprego e a polarização alimentaram conflitos nas ruas e o crescimento de partidos extremistas. Em 30 de janeiro de 1933, Adolf Hitler foi nomeado chanceler, iniciando a transformação da democracia alemã em ditadura." },
            bairro: { title: "Bairro Residencial", image: "Bairro_residencial.png", text: "A propaganda nazista entrou no cotidiano por cartazes, jornais, rádios, organizações de bairro e cerimônias públicas. Ela promovia a ideia de uma comunidade nacional unificada, enquanto excluía e perseguia judeus, opositores políticos, pessoas com deficiência e outros grupos. O controle social não dependia apenas de grandes eventos: também alcançava casas, escolas e locais de trabalho." },
            propaganda: { title: "Campo de Propaganda", image: "Campo_de_propagando.png", text: "Comícios e desfiles eram cuidadosamente encenados para projetar força, unidade e obediência ao líder. Sob Joseph Goebbels, o Ministério da Propaganda controlou rádio, cinema, imprensa e cultura, restringindo vozes críticas. Essas imagens e rituais ajudavam a normalizar o regime, mas não eliminavam a violência, a censura e o medo que sustentavam seu poder." },
            redacao: { title: "Redação do Jornal", image: "Redação_do_jornal.png", text: "Após 1933, jornais alemães foram submetidos à censura e à chamada Gleichschaltung, processo de alinhamento das instituições ao regime nazista. Veículos críticos foram fechados ou controlados; jornalistas e editores passaram a enfrentar perseguição. A manipulação da informação tornou mais difícil questionar o governo e facilitou a difusão de mentiras antissemitas e autoritárias." },
            reichstag: { title: "Reichstag", image: "Reichstag.png", text: "O incêndio do Reichstag, em fevereiro de 1933, foi usado pelo governo para ampliar a repressão contra opositores. No mês seguinte, a Lei de Concessão de Plenos Poderes permitiu que Hitler aprovasse leis sem o parlamento, acelerando a ditadura. O edifício, símbolo da representação política alemã, tornou-se também símbolo do esvaziamento da democracia." }
        },
        puzzle: {
            title: "O arquivo censurado",
            intro: "Reconstrua a sequência que ajudou o nazismo a consolidar o poder: crise divulgada, propaganda em massa e eliminação do poder parlamentar.",
            clues: [
                { id: "redacao", label: "Notícias sobre a crise", image: "Redação_do_jornal.png" },
                { id: "propaganda", label: "Propaganda em massa", image: "Campo_de_propagando.png" },
                { id: "reichstag", label: "Poderes sobre o Reichstag", image: "Reichstag.png" }
            ],
            solution: ["redacao", "propaganda", "reichstag"]
        }
    },
    5: {
        kicker: "CAPÍTULO 5 · 1939–1945",
        title: "Segunda Guerra Mundial",
        intro: "Entre 1939 e 1945, um conflito de escala mundial transformou cidades, fronteiras e a vida de milhões de pessoas. Explore alguns de seus cenários.",
        locationSubtitle: "Escolha um cenário para compreender diferentes experiências da guerra.",
        locations: {
            "campo-europeu": { title: "Campo de Batalha Europeu", image: "Campo_europeu.jpeg", text: "A guerra terrestre na Europa reuniu exércitos em campanhas longas e violentas. Soldados enfrentavam lama, frio, artilharia e deslocamentos constantes. A experiência dos combatentes ajuda a entender por que o conflito atingiu uma escala tão devastadora." },
            "base-militar": { title: "Base Militar", image: "Base_militar.jpeg", text: "Bases militares organizavam tropas, suprimentos, comunicações e veículos antes das operações. A capacidade industrial e logística foi decisiva: vencer também dependia de produzir alimentos, equipamentos, combustível e medicamentos em grande quantidade." },
            "cidade-bombardeada": { title: "Cidade Bombardeada", image: "Cidade_bombardeada.jpeg", text: "Bombardeios aéreos destruíram bairros inteiros e atingiram a população civil. Muitas famílias perderam suas casas e precisaram buscar abrigos. A guerra deixou de estar distante do cotidiano e passou a ocupar ruas, escolas e hospitais." },
            esconderijo: { title: "Esconderijo", image: "Esconderijo.png", text: "Pessoas perseguidas pelo regime nazista e pelas ocupações procuraram esconderijos, redes de ajuda e rotas de fuga. Judeus, resistentes, prisioneiros e outros grupos viveram sob risco constante. Lembrar essas histórias é fundamental para compreender a violência e a resistência durante a guerra." },
            praia: { title: "Praia do Desembarque", image: "Praia.png", text: "Em 6 de junho de 1944, os Aliados desembarcaram na Normandia, na França ocupada. A operação abriu uma nova frente na Europa Ocidental e acelerou a derrota da Alemanha nazista. O desembarque exigiu uma enorme coordenação de navios, aviões e soldados." }
        }
    },
    6: {
        kicker: "CAPÍTULO 6 · 1945",
        title: "Hiroshima e Nagasaki",
        intro: "Em agosto de 1945, bombas atômicas atingiram Hiroshima e Nagasaki. As cidades e seus habitantes carregaram consequências imediatas e duradouras.",
        locationSubtitle: "Conheça cenários que ajudam a refletir sobre os impactos humanos da era nuclear.",
        locations: {
            "hiroshima-antes": { title: "Hiroshima Antes da Bomba", image: "Hiroshima_antes.jpeg", text: "Antes de agosto de 1945, Hiroshima era uma cidade viva, com moradias, comércios, escolas e serviços. Recordar a vida cotidiana anterior à destruição impede que a tragédia seja reduzida a uma simples data ou estatística." },
            "area-residencial": { title: "Área Residencial", image: "Area_residencial.jpeg", text: "A explosão atingiu casas e bairros inteiros. Muitas pessoas morreram imediatamente, e sobreviventes perderam familiares, moradia e meios de sobrevivência. A destruição mostrou que armas nucleares afetam principalmente vidas civis." },
            "centro-destruido": { title: "Centro Destruído", image: "Centro_destruído.jpeg", text: "O calor, a onda de choque e os incêndios devastaram o centro urbano. A infraestrutura da cidade entrou em colapso, dificultando resgates e atendimento médico. Os efeitos da radiação continuaram a afetar sobreviventes por muitos anos." },
            hospital: { title: "Hospital Improvisado", image: "Hospital.jpeg", text: "Profissionais de saúde e voluntários atenderam um número enorme de feridos com poucos recursos. Queimaduras, traumas e doenças causadas pela radiação exigiam cuidados que os serviços locais não conseguiam oferecer plenamente." },
            memorial: { title: "Memorial da Paz", image: "Memorial.jpeg", text: "Memoriais em Hiroshima e Nagasaki preservam relatos de sobreviventes e defendem a paz. Eles convidam visitantes a refletir sobre a responsabilidade humana diante das armas nucleares e sobre a necessidade de evitar novas catástrofes." }
        }
    },
    7: {
        kicker: "CAPÍTULO 7 · 1947–1991",
        title: "Guerra Fria",
        intro: "Depois da Segunda Guerra, Estados Unidos e União Soviética disputaram influência global sem uma guerra direta entre suas forças principais.",
        locationSubtitle: "Explore os símbolos da rivalidade política, militar e tecnológica entre os blocos.",
        locations: {
            "berlim-dividida": { title: "Berlim Dividida", image: "Berlim_dividida.jpeg", text: "Após 1945, Berlim foi dividida entre potências vencedoras e tornou-se um dos principais símbolos da Guerra Fria. A separação da cidade dividiu famílias e vidas cotidianas, revelando como a disputa global afetava pessoas comuns." },
            "base-americana": { title: "Base Americana", image: "Base_americana.jpeg", text: "Os Estados Unidos mantiveram bases e alianças militares em várias regiões. A OTAN, criada em 1949, organizou a defesa coletiva dos países do bloco ocidental. A presença militar buscava dissuadir ataques, mas também aumentava a tensão internacional." },
            "base-sovietica": { title: "Base Militar Soviética", image: "Base_militar_sovietica.jpeg", text: "A União Soviética e seus aliados formaram o Pacto de Varsóvia em 1955. Bases, tanques e exercícios militares representavam a força do bloco oriental. A corrida armamentista elevou o risco de uma guerra de grandes proporções." },
            "bunker-nuclear": { title: "Bunker Nuclear", image: "Bunker_nuclear.jpeg", text: "O medo de um conflito nuclear levou governos a construir bunkers e elaborar planos de emergência. A lógica da dissuasão se baseava na ideia de que o poder destrutivo das armas impediria seu uso — uma situação marcada por insegurança permanente." },
            espionagem: { title: "Centro de Espionagem", image: "Centro_espionagem.jpeg", text: "Espionagem, códigos e coleta de informações foram elementos centrais da Guerra Fria. Agências dos dois blocos buscavam segredos militares, científicos e políticos. Muitas operações ocorreram longe do olhar público, mas influenciaram crises internacionais." }
        }
    },
    8: {
        kicker: "CAPÍTULO 8 · 1949",
        title: "Revolução Chinesa",
        intro: "Em 1949, a vitória comunista na guerra civil levou Mao Tsé-Tung a proclamar a República Popular da China. A transformação alcançou cidades e o campo.",
        locationSubtitle: "Explore lugares ligados à revolução e às mudanças sociais na China.",
        locations: {
            "acampamento-revolucionario": { title: "Acampamento Revolucionário", image: "Acampamento_revolucionario.jpeg", text: "Durante a guerra civil, o Partido Comunista Chinês organizou forças militares e redes de apoio em áreas rurais. A mobilização de camponeses e combatentes foi decisiva para sua vitória sobre o governo nacionalista." },
            "estrada-rural": { title: "Estrada Rural", image: "Estrada_rural.png", text: "O campo concentrava grande parte da população chinesa. Promessas de reforma agrária e de mudanças na distribuição da terra ajudaram os comunistas a conquistar apoio em diversas regiões rurais." },
            "pequena-vila": { title: "Pequena Vila", image: "Pequena_vila.jpeg", text: "A vida nas vilas foi profundamente afetada pela guerra, pela escassez e pelas mudanças políticas. Após 1949, novas autoridades passaram a reorganizar propriedades e atividades locais, com resultados diferentes conforme a região." },
            "pequena-cidade": { title: "Pequena Cidade", image: "Pequena_cidade.jpeg", text: "Cidades menores funcionavam como pontos de comércio, administração e circulação de informações. A vitória comunista mudou o controle desses espaços e abriu uma nova fase na história política da China." },
            "praca-pequim": { title: "Praça de Pequim", image: "Praça_pequim.jpeg", text: "Em 1º de outubro de 1949, Mao Tsé-Tung proclamou a República Popular da China em Pequim. O acontecimento marcou o fim de décadas de conflitos internos e o início de um novo governo sob liderança comunista." }
        }
    },
    9: {
        kicker: "CAPÍTULO 9 · 1989",
        title: "Queda do Muro de Berlim",
        intro: "Em novembro de 1989, a abertura do Muro de Berlim tornou-se um marco das mudanças que encerravam a divisão da Europa na Guerra Fria.",
        locationSubtitle: "Explore os espaços de separação, mobilização e celebração em Berlim.",
        locations: {
            "muro-berlim": { title: "Muro de Berlim", image: "Muro_berlim.jpeg", text: "Construído em 1961, o Muro de Berlim separava a parte oriental e a ocidental da cidade. Ele simbolizava a divisão política da Europa e restringia o deslocamento de moradores, separando famílias e comunidades por quase três décadas." },
            checkpoint: { title: "Checkpoint", image: "Checkpoint.jpeg", text: "Postos de controle regulavam rigorosamente a passagem entre os dois lados de Berlim. Esses lugares mostravam de forma concreta a vigilância e as restrições impostas pela divisão da cidade." },
            "rua-berlim": { title: "Rua de Berlim", image: "Rua_berlim.jpeg", text: "Em 1989, protestos e mudanças políticas na Alemanha Oriental pressionaram o governo a permitir viagens. Quando a abertura foi anunciada, milhares de pessoas foram às ruas e aos pontos de passagem." },
            "praca-lotada": { title: "Praça Lotada", image: "Praça_lotada.jpeg", text: "Manifestações pacíficas reuniram cidadãos que pediam liberdade de expressão, reformas e direito de viajar. A força coletiva dessas mobilizações foi decisiva para acelerar as mudanças no país." },
            celebracao: { title: "Celebração", image: "Local_celebração.jpeg", text: "A queda do Muro foi recebida com encontros, música e comemorações. Pessoas de ambos os lados atravessaram fronteiras antes fechadas, transformando um símbolo de separação em uma memória de reunificação." }
        }
    },
    10: {
        kicker: "CAPÍTULO 10 · 1991",
        title: "Fim da União Soviética",
        intro: "Em 1991, a União Soviética foi dissolvida. O acontecimento encerrou uma etapa central do século XX e mudou o mapa político mundial.",
        locationSubtitle: "Explore os cenários da crise e das transformações finais da União Soviética.",
        locations: {
            moscou: { title: "Moscou", image: "Moscou.jpeg", text: "Moscou era o centro político da União Soviética. No fim dos anos 1980, reformas, crise econômica e disputas entre repúblicas colocaram em questão o futuro do país e do próprio governo central." },
            kremlin: { title: "Kremlin", image: "Kremlin.jpeg", text: "O Kremlin, sede do poder soviético, tornou-se o palco de decisões decisivas durante a crise de 1991. A tentativa de golpe em agosto enfraqueceu ainda mais as instituições da União Soviética." },
            parlamento: { title: "Parlamento", image: "Parlamento.jpeg", text: "As disputas políticas cresceram entre diferentes instituições e líderes. Repúblicas soviéticas passaram a declarar soberania ou independência, reduzindo o poder do governo central e acelerando a dissolução." },
            loja: { title: "Loja Soviética", image: "Loja_sovietica.jpeg", text: "Escassez de produtos e longas filas eram parte da crise econômica enfrentada por muitos cidadãos. As dificuldades do cotidiano revelavam problemas profundos de abastecimento e confiança no sistema." },
            "praca-vermelha": { title: "Praça Vermelha", image: "Praça_vermelha.jpeg", text: "Em dezembro de 1991, a União Soviética deixou de existir oficialmente. A nova realidade alterou fronteiras, governos e relações internacionais, encerrando simbolicamente o período da Guerra Fria." }
        }
    }
};

Object.assign(englishContent, {
"1945 e consequências":"1945 and aftermath",
"O desembarque na França ocupada criou uma frente ocidental enquanto forças soviéticas avançavam pelo leste. Qual consequência explica melhor sua importância estratégica?":"The landing in occupied France opened a western front as Soviet forces advanced from the east. Which consequence best explains its strategic importance?",
"Como a vitória comunista na China alterou o equilíbrio internacional no início da Guerra Fria?":"How did the Communist victory in China alter the international balance at the start of the Cold War?"
});
const chapterMissions = {
1:{title:"A mensagem perdida",text:"Cruze evidências sobre combate, tecnologia e comunicação para interpretar o impasse na Frente Ocidental.",period:"1914–1918",questions:[
{question:"Uma ordem menciona avanços mínimos, arame farpado e posições mantidas por meses. Qual forma de combate explica melhor esse quadro?",answers:[["trincheiras","Guerra de trincheiras e desgaste"],["blitz","Guerra-relâmpago baseada em avanços rápidos"],["naval","Bloqueio naval sem frente terrestre"],["c1colonial","Campanha colonial sem posições fixas"]],correct:"trincheiras",difficulty:"hard"},
{question:"Relatórios mostram que metralhadoras e artilharia impedem ataques frontais, enquanto as linhas quase não avançam. Qual inferência é mais consistente?",answers:[["impasse","A defesa estava mais eficaz que a capacidade de romper a frente"],["retirada","Os exércitos já haviam encerrado a guerra"],["tecnologia","A aviação tornou as trincheiras irrelevantes"],["armisticio","O impasse prova que a paz já tinha sido assinada"]],correct:"impasse",difficulty:"hard"},
{question:"A carta só chega após vários dias e menciona telefone de campanha e mensageiros. O que isso revela sobre o comando?",answers:[["comunicacao","Comunicações vulneráveis dificultavam coordenar operações"],["instantaneo","Ordens chegavam em tempo real a qualquer setor"],["c1civil","A frente era controlada por organizações civis"],["isolado","A logística não tinha relação com o resultado militar"]],correct:"comunicacao",difficulty:"hard"}],knowledge:"Guerra de trincheiras"},
2:{title:"O jornal de hoje",text:"Interprete sinais de ruptura militar e política para reconstruir a crise do czarismo e a disputa pelo poder.",period:"1917",questions:[
{question:"Em Petrogrado, greves por pão se espalham; soldados enviados para reprimi-las se recusam a atirar. O que esse indício aponta?",answers:[["ruptura","A perda de apoio das forças que sustentavam o czar"],["estabilidade","O fortalecimento da autoridade czarista"],["invasao","Uma invasão estrangeira da capital"],["coletivizacao","A coletivização agrícola soviética já concluída"]],correct:"ruptura",difficulty:"hard"},
{question:"Depois da abdicação, o Governo Provisório mantém a Rússia na guerra, enquanto sovietes ganham influência. Qual tensão ajuda a explicar a crise?",answers:[["duplo","Disputa de legitimidade e continuidade da guerra"],["c9unidade","Ausência de conflitos entre governo e sovietes"],["dinastia","Restauração imediata de Nicolau II"],["industrial","Conflito entre Rússia e China pela indústria"]],correct:"duplo",difficulty:"hard"},
{question:"Lênin retorna em abril; meses depois, os bolcheviques tomam o poder prometendo paz e poder aos sovietes. Qual sequência corresponde aos indícios?",answers:[["sequencia","Revolução de Fevereiro, crise do Governo Provisório, tomada bolchevique em Outubro"],["sequencia2","Tomada bolchevique, abdicação do czar, início dos protestos"],["sequencia3","Guerra civil, retorno do czar, criação do Governo Provisório"],["sequencia4","Revolução chinesa, guerra russo-japonesa, tomada do palácio"]],correct:"sequencia",difficulty:"hard"}],knowledge:"Revolução de 1917"},
3:{title:"Sobreviver à crise",text:"Relacione especulação, fragilidade bancária e retração econômica; não reduza a Grande Depressão a um único evento.",period:"1929–1933",questions:[
{question:"Ações sobem com crédito fácil e compras especulativas; quando a confiança cai, muitos tentam vender ao mesmo tempo. Qual mecanismo amplifica a queda?",answers:[["vendas","Vendas em massa derrubam preços e alimentam o pânico"],["salarios","A alta dos salários reduz automaticamente os preços das ações"],["colheita","Uma quebra agrícola encerra a especulação financeira"],["ouro","A descoberta de ouro impede a venda de ações"]],correct:"vendas",difficulty:"hard"},
{question:"Correntistas fazem saques simultâneos, mas os bancos não conseguem devolver todos os depósitos imediatamente. Que risco sistêmico aparece?",answers:[["corrida","Corridas bancárias podem derrubar bancos mesmo sem todos os empréstimos falharem"],["lucro","Saques aumentam o crédito disponível às empresas"],["seguro","Depósitos estavam todos protegidos por seguro federal desde 1929"],["c5isolamento","Falências bancárias não afetam consumo nem produção"]],correct:"corrida",difficulty:"hard"},
{question:"Bancos cortam crédito; empresas reduzem produção e demitem; famílias consomem menos. Qual leitura explica o ciclo?",answers:[["ciclo","Crédito, emprego e consumo se retraem mutuamente"],["recuperacao","A queda do consumo aumenta imediatamente a produção"],["causa-unica","A quebra da Bolsa, sozinha, explica cada efeito posterior"],["c3local","A crise permaneceu restrita aos corretores de Nova York"]],correct:"ciclo",difficulty:"hard"}],knowledge:"Consequências sociais da Crise de 1929"},
4:{title:"As fontes silenciadas",text:"Avalie como medidas de emergência, legislação e controle da informação se combinaram para destruir a democracia.",period:"1933–1934",questions:[
{question:"Hitler foi nomeado chanceler por meios constitucionais em janeiro de 1933. O que essa informação permite concluir?",answers:[["processo","A entrada no governo ocorreu dentro de uma crise institucional, antes da ditadura consolidada"],["eleicao","Hitler recebeu maioria absoluta em eleição livre"],["ditadura","A nomeação, sozinha, já aboliu todas as instituições"],["golpe","O dado prova que os militares o impuseram por invasão estrangeira"]],correct:"processo",difficulty:"hard"},
{question:"Após o incêndio do Reichstag, direitos foram restringidos e opositores presos. Qual uso político do evento é evidenciado?",answers:[["repressao","Uma emergência foi usada para ampliar a repressão e reduzir liberdades"],["c4neutralidade","O governo protegeu a oposição e fortaleceu o parlamento"],["federalismo","O poder foi transferido aos governos regionais"],["eleitoral","O incêndio encerrou a propaganda do regime"]],correct:"repressao",difficulty:"hard"},
{question:"A Lei de Plenos Poderes permitiu governar sem o parlamento; jornais e rádios passaram ao controle estatal. Qual conclusão conecta as duas medidas?",answers:[["controle","Concentração legal do poder e controle da informação se reforçaram"],["separacao","A imprensa independente limitou a autoridade do governo"],["c4causa","A censura foi criada antes da nomeação de Hitler"],["consenso","Propaganda prova apoio unânime e ausência de coerção"]],correct:"controle",difficulty:"hard"}],knowledge:"Propaganda e censura"},
5:{title:"Reconstruir o desembarque",text:"Analise logística e estratégia para entender como a abertura de uma nova frente alterou o equilíbrio militar na Europa.",period:"1939–1945",questions:[
{question:"Para atravessar o Canal da Mancha, os Aliados reuniram navios, aviões, tropas e suprimentos em grande escala. O que foi decisivo além do combate?",answers:[["logistica","Coordenação logística para concentrar e abastecer forças"],["surpresa","A operação dispensou transporte e abastecimento"],["atomica","O uso de armas nucleares na França"],["c5isolamento","A ausência de cooperação entre os Aliados"]],correct:"logistica",difficulty:"hard"},
{question:"Com uma frente aliada no oeste e o avanço soviético no leste, a Alemanha precisou dividir recursos. Qual efeito estratégico decorre disso?",answers:[["frentes","A pressão em duas frentes reduziu a capacidade alemã de concentrar forças"],["paz","A invasão levou à rendição alemã no mesmo dia"],["pacifico","O desembarque encerrou a guerra contra o Japão"],["c9fronteira","A Alemanha ganhou acesso a novos territórios no oeste"]],correct:"frentes",difficulty:"hard"},
{question:"O desembarque na França ocupada criou uma frente ocidental enquanto forças soviéticas avançavam pelo leste. Qual consequência explica melhor sua importância estratégica?",answers:[["pressao","A Alemanha teve de dividir tropas e recursos entre frentes simultâneas"],["c5isolamento","Os Aliados deixaram de cooperar com a União Soviética"],["fim-imediato","A operação encerrou a guerra na Europa no próprio dia"],["pacifico","A campanha transferiu o centro da guerra para o Pacífico"]],correct:"pressao",difficulty:"hard"}],knowledge:"Desembarque da Normandia"},
6:{title:"Memória de Hiroshima",text:"Distingua destruição imediata, efeitos prolongados e o papel da memória civil ao avaliar a era nuclear.",period:"1945 e consequências",questions:[
{question:"Hiroshima era uma cidade com casas, escolas e comércio antes de 6 de agosto de 1945. Por que registrar essa vida anterior importa?",answers:[["c6civil","Mostra que a destruição atingiu uma sociedade civil viva, não um espaço vazio"],["militar","Prova que apenas instalações militares foram atingidas"],["inevitavel","Demonstra que os efeitos ficaram restritos ao dia do ataque"],["estatistica","Substitui relatos humanos por números sem contexto"]],correct:"c6civil",difficulty:"hard"},
{question:"Sobreviventes sofreram queimaduras e doenças relacionadas à radiação; hospitais foram destruídos ou sobrecarregados. Qual conclusão é sustentada?",answers:[["duracao","Os efeitos humanos e médicos se estenderam além da explosão"],["imediato","Toda consequência cessou quando os incêndios apagaram"],["c6local","A infraestrutura médica permaneceu intacta"],["combatentes","Somente soldados foram expostos aos efeitos"]],correct:"duracao",difficulty:"hard"},
{question:"Memoriais preservam depoimentos e defendem que a tragédia não se repita. Que função pública da memória eles cumprem?",answers:[["reflexao","Relacionam lembrança das vítimas a debate sobre responsabilidade e paz"],["apagamento","Apagam testemunhos para evitar controvérsias"],["celebracao","Transformam o sofrimento civil em celebração militar"],["c6neutralidade","Provam que lembrar não tem relação com decisões futuras"]],correct:"reflexao",difficulty:"hard"}],knowledge:"Memória e consequências das bombas atômicas"},
7:{title:"Documentos de dois blocos",text:"Compare alianças, guerras por procuração e dissuasão para avaliar como a rivalidade global se espalhou e permaneceu instável.",period:"1947–1991",questions:[
{question:"Após 1945, os EUA e a URSS evitaram confronto militar direto entre suas forças, mas apoiaram alianças e governos rivais. Como se define essa disputa?",answers:[["indireta","Rivalidade global indireta, com competição política, militar e ideológica"],["aliados","Aliança militar permanente entre EUA e URSS"],["c7colonial","Disputa limitada à independência das colônias africanas"],["c7civil","Guerra civil travada dentro dos Estados Unidos"]],correct:"indireta",difficulty:"hard"},
{question:"A OTAN foi criada em 1949; a União Soviética organizou depois o Pacto de Varsóvia. O que a comparação indica?",answers:[["blocos","A rivalidade se institucionalizou em alianças militares opostas"],["fim","As alianças eliminaram a competição geopolítica"],["economia","Os pactos eram acordos comerciais sem dimensão militar"],["c7unificacao","Os dois blocos formaram um governo comum"]],correct:"blocos",difficulty:"hard"},
{question:"Bunkers e planos de emergência civil refletiam o risco de escalada nuclear. Por que a dissuasão não significava segurança completa?",answers:[["risco","O medo de retaliação podia evitar ataque, mas erro ou escalada ainda ameaçavam milhões"],["certeza","Armas nucleares tornaram impossível qualquer acidente"],["c7local","A ameaça existia apenas em Berlim"],["desarme","Os bunkers provam que os arsenais já haviam sido abolidos"]],correct:"risco",difficulty:"hard"}],knowledge:"Divisão política e tensão nuclear"},
8:{title:"Vozes da revolução",text:"Considere apoio social, estratégia militar e consequências políticas para explicar a vitória comunista sem reduzi-la a uma causa única.",period:"1927–1949",questions:[
{question:"A guerra civil opôs comunistas e nacionalistas; apoio rural e organização militar influenciaram o resultado. Qual explicação evita reduzir a vitória a um único fator?",answers:[["multicausal","Combinação de apoio social, estratégia e desgaste dos adversários"],["unica","Uma batalha isolada decidiu todo o processo"],["externa","A vitória foi causada exclusivamente por uma invasão soviética"],["urbana","A população rural não teve papel político"]],correct:"multicausal",difficulty:"hard"},
{question:"Em 1949, Mao proclamou a República Popular da China após a vitória comunista. O que mudou na ordem política?",answers:[["regime","Os comunistas assumiram o governo continental e os nacionalistas recuaram para Taiwan"],["monarquia","A dinastia Qing foi restaurada"],["colonia","A China tornou-se colônia britânica"],["c8unificacao","A China se uniu à União Soviética como uma república única"]],correct:"regime",difficulty:"hard"},
{question:"Como a vitória comunista na China alterou o equilíbrio internacional no início da Guerra Fria?",answers:[["china-bloco","Ampliou o peso do bloco comunista na Ásia e mudou os cálculos estratégicos das potências"],["fim-guerra","Encerrou a rivalidade entre Estados Unidos e União Soviética"],["alianca-eua","Transformou imediatamente a China em aliada militar dos Estados Unidos"],["c8isolamento","Deixou a política asiática sem impacto na disputa global"]],correct:"china-bloco",difficulty:"hard"}],knowledge:"Grupos sociais na Revolução Chinesa"},
9:{title:"Passagens de Berlim",text:"Relacione a divisão política do pós-guerra às pressões sociais e mudanças no bloco oriental que levaram à abertura das fronteiras.",period:"1945–1990",questions:[
{question:"Depois da Segunda Guerra, Alemanha e Berlim foram divididas em zonas de ocupação. O que essa divisão passou a representar?",answers:[["simbolo","A disputa entre os blocos ocidental e soviético"],["c9unidade","A unificação imediata dos dois sistemas políticos"],["c9colonial","A divisão da Alemanha entre potências coloniais do século XIX"],["neutra","Uma cidade fora da rivalidade da Guerra Fria"]],correct:"simbolo",difficulty:"hard"},
{question:"Em 1989, protestos, êxodo e mudanças políticas no bloco oriental precederam a abertura das passagens do Muro. Qual leitura é mais precisa?",answers:[["processo","A abertura foi parte de uma crise política mais ampla no bloco oriental"],["isolada","O Muro caiu sem pressão social ou mudança política"],["guerra","A cidade foi reunificada por uma batalha entre as superpotências"],["economica","A abertura decorreu de um acordo comercial local apenas"]],correct:"processo",difficulty:"hard"},
{question:"A abertura ocorreu em novembro de 1989; a reunificação alemã veio em 1990. O que essa ordem cronológica impede afirmar?",answers:[["ordem","Que a queda do Muro e a reunificação foram o mesmo acontecimento no mesmo dia"],["simbolo2","Que a divisão europeia estava enfraquecendo"],["transicao","Que mudanças políticas continuaram após novembro"],["c9fronteira","Que a abertura permitiu atravessar a fronteira"]],correct:"ordem",difficulty:"hard"}],knowledge:"Divisão e reunificação de Berlim"},
10:{title:"Documentos de Moscou",text:"Conecte reformas, demandas das repúblicas e enfraquecimento do poder central para interpretar a dissolução soviética.",period:"1985–1991",questions:[
{question:"Gorbachev iniciou a perestroika e a glasnost nos anos 1980, mas as reformas também ampliaram disputas e críticas. Qual relação descreve melhor esse efeito?",answers:[["tensao","A abertura expôs problemas e fortaleceu demandas que o centro tinha dificuldade de controlar"],["estabilidade","As reformas eliminaram todas as tensões nacionais"],["c10causa","As reformas começaram depois da dissolução em 1991"],["c10isolada","Mudanças econômicas não tiveram relação com política"]],correct:"tensao",difficulty:"hard"},
{question:"Várias repúblicas declararam soberania antes do acordo que encerrou a URSS em dezembro de 1991. Qual processo está descrito?",answers:[["fragmentacao","A autoridade central se enfraqueceu enquanto repúblicas reivindicavam autonomia"],["expansao","A União Soviética anexou novas repúblicas"],["restauracao","O czar reassumiu o trono"],["c10alianca","As repúblicas formaram a União Europeia"]],correct:"fragmentacao",difficulty:"hard"},
{question:"A queda do Muro de Berlim ocorreu em 1989 e a dissolução da URSS em 1991. Qual conclusão cronológica é correta?",answers:[["cronologia","O Muro caiu antes do fim formal da União Soviética"],["simultanea","Os dois acontecimentos ocorreram no mesmo ano"],["desconexao","Os eventos não se relacionam com a transformação do bloco oriental"],["cronologia-falsa","A URSS dissolveu-se antes da abertura do Muro"]],correct:"cronologia",difficulty:"hard"}],knowledge:"Fim da União Soviética"}
};

const missionPuzzleTypes = {
    1: { label: "CAIXA COM SENHA", answer: "1914", prompt: "A história das trincheiras informa o ano em que a guerra começou. Digite a senha da caixa." },
    2: { label: "SEQUÊNCIA HISTÓRICA" },
    3: { label: "LIGAÇÕES DE CAUSA E CONSEQUÊNCIA" },
    4: { label: "NOME ESCONDIDO", answer: "goebbels", prompt: "Nos textos sobre propaganda, qual é o sobrenome do ministro citado?" },
    5: { label: "SEQUÊNCIA HISTÓRICA" },
    6: { label: "CAIXA COM SENHA", answer: "hiroshima", prompt: "Digite o nome da cidade apresentada na história antes do ataque." },
    7: { label: "LIGAÇÕES ENTRE BLOCOS" },
    8: { label: "NOME ESCONDIDO", answer: "mao", prompt: "Digite o primeiro nome do líder mencionado na história da Revolução Chinesa." },
    9: { label: "SEQUÊNCIA HISTÓRICA" },
    10: { label: "DOCUMENTO-CHAVE" }
};

// In English mode, concise answer labels keep every challenge choice readable
// without changing the answer IDs used by the scoring logic.
const missionAnswerLabelsEn = {
    trincheiras: "Trench warfare and attrition", blitz: "Rapid blitz warfare", naval: "Naval blockade only", colonial: "Colonial campaign without fixed positions",
    impasse: "Defenses outmatched the ability to break through", retirada: "The armies had already ended the war", tecnologia: "Aircraft made trenches irrelevant", armisticio: "A stalemate proves peace had already been signed",
    comunicacao: "Vulnerable communications hindered coordination", instantaneo: "Orders reached every sector in real time", civil: "Civilian organizations controlled the front", isolado: "Logistics had no effect on the military outcome",
    ruptura: "The tsar lost the support of the forces that upheld his rule", estabilidade: "Tsarist authority grew stronger", invasao: "A foreign invasion of the capital", coletivizacao: "Soviet farm collectivization was already complete",
    duplo: "A struggle over legitimacy while the war continued", unidade: "No conflict between the government and soviets", dinastia: "Nicholas II was immediately restored", industrial: "A Russia-China dispute over industry",
    sequencia: "February Revolution, Provisional Government crisis, Bolshevik takeover in October", sequencia2: "Bolshevik takeover, tsar's abdication, protests begin", sequencia3: "Civil war, tsar returns, Provisional Government is formed", sequencia4: "Chinese Revolution, Russo-Japanese War, palace seized",
    vendas: "Mass selling drives prices down and fuels panic", salarios: "Higher wages automatically lower share prices", colheita: "An agricultural crisis ends financial speculation", ouro: "A gold discovery prevents share sales",
    corrida: "Bank runs can topple banks even if not all loans fail", lucro: "Withdrawals increase credit for businesses", seguro: "All deposits had federal insurance since 1929", isolamento: "Bank failures do not affect consumption or production",
    ciclo: "Credit, jobs, and consumption shrink together", recuperacao: "Falling consumption immediately increases production", "causa-unica": "The crash alone explains every later effect", local: "The crisis affected only New York brokers",
    processo: "Government entry amid an institutional crisis, before dictatorship was consolidated", eleicao: "Hitler won an absolute majority in a free election", ditadura: "The appointment alone abolished every institution", golpe: "The military imposed him through a foreign invasion",
    repressao: "An emergency was used to expand repression and restrict freedoms", neutralidade: "The government protected opponents and strengthened parliament", federalismo: "Power shifted to regional governments", eleitoral: "The fire ended the regime's propaganda",
    controle: "Legal concentration of power reinforced control of information", separacao: "Independent media limited government authority", causa: "Censorship began before Hitler's appointment", consenso: "Propaganda proves unanimous support without coercion",
    normandia: "Normandy, northern France", berlim: "Berlin, inside Germany", crimeia: "Crimea, on the Black Sea", sicilia: "Sicily, in the Mediterranean in 1943",
    logistica: "Logistics coordinated and supplied concentrated forces", surpresa: "The operation needed no transport or supplies", atomica: "Nuclear weapons were used in France", isolamento: "The Allies did not cooperate",
    frentes: "Pressure on two fronts limited Germany's ability to concentrate forces", paz: "The invasion brought German surrender that same day", pacifico: "The landing ended the war against Japan", fronteira: "Germany gained new territory in the west",
    "civil": "A living civilian society was destroyed, not an empty space", militar: "Only military facilities were hit", inevitavel: "The effects lasted only on the day of the attack", estatistica: "Human accounts are replaced by context-free numbers",
    duracao: "Human and medical effects continued after the blast", imediato: "All consequences ended when the fires went out", "local": "Medical infrastructure remained intact", combatentes: "Only soldiers were exposed",
    reflexao: "Victim remembrance informs debate about responsibility and peace", apagamento: "Testimony is erased to avoid controversy", celebracao: "Civilian suffering becomes a military celebration", "neutralidade": "Remembrance has no bearing on future decisions",
    indireta: "Global rivalry through political, military, and ideological competition", aliados: "A permanent military alliance between the United States and USSR", colonial: "A dispute limited to African independence", guerra: "A civil war within the United States",
    blocos: "Rivalry became opposing military alliances", fim: "The alliances ended geopolitical competition", economia: "Trade agreements with no military dimension", unificacao: "The two blocs formed a joint government",
    risco: "Retaliation could deter attack, but error or escalation still threatened millions", certeza: "Nuclear weapons made accidents impossible", "local": "The threat existed only in Berlin", desarme: "Bunkers prove arsenals had already been abolished",
    camponeses: "Peasants whose lives depended on access to land", banqueiros: "Foreign bankers", monarcas: "European monarchs", turistas: "Urban tourists",
    multicausal: "A combination of social support, strategy, and opponents' losses", unica: "One isolated battle decided everything", externa: "Victory came only from a Soviet invasion", urbana: "Rural people had no political role",
    regime: "Communists took mainland government; Nationalists retreated to Taiwan", monarquia: "The Qing dynasty was restored", colonia: "China became a British colony", unificacao: "China and the USSR became a single republic",
    simbolo: "The rivalry between the Western and Soviet blocs", unidade: "Immediate unification of both political systems", "colonial": "Germany was divided among 19th-century colonial powers", neutra: "A city outside Cold War rivalry",
    "processo": "The opening formed part of a broader Eastern Bloc political crisis", isolada: "The Wall fell without social pressure or political change", "guerra": "The city was reunited by a superpower battle", economica: "The opening came only from a local trade deal",
    ordem: "The Wall's fall and reunification were not the same event on the same day", simbolo2: "Europe's division was weakening", transicao: "Political changes continued after November", "fronteira": "The opening allowed people to cross the border",
    tensao: "Openness exposed problems and strengthened demands the center struggled to control", estabilidade: "The reforms eliminated all national tensions", "causa": "The reforms began after the 1991 dissolution", isolada: "Economic changes had no link to politics",
    fragmentacao: "Central authority weakened as republics sought autonomy", expansao: "The Soviet Union annexed new republics", restauracao: "The tsar reclaimed the throne", alianca: "The republics formed the European Union",
    cronologia: "The Wall fell before the Soviet Union formally ended", simultanea: "Both events happened in the same year", desconexao: "The events are unrelated to change in the Eastern Bloc"
};

Object.assign(missionAnswerLabelsEn, {
c1civil:"Civilian organizations controlled the front", c1colonial:"Colonial campaign without fixed positions",
c3local:"The crisis remained limited to New York brokers", c4neutralidade:"The government protected opponents and strengthened parliament", c4causa:"Censorship began before Hitler's appointment",
c5isolamento:"The Allies did not cooperate", c6local:"Medical infrastructure remained intact", c7civil:"A civil war fought within the United States",
pressao:"Germany had to divide troops and resources across simultaneous fronts",
"china-bloco":"It expanded the Communist bloc's weight in Asia and changed the powers' strategic calculations",
"fim-guerra":"It ended the rivalry between the United States and the Soviet Union", "alianca-eua":"It immediately made China a United States military ally",
c8unificacao:"China and the USSR became a single republic", c9unidade:"The two political systems were immediately unified",
c9colonial:"Germany was divided among 19th-century colonial powers", c9fronteira:"The opening allowed people to cross the border",
c10causa:"The reforms began after the 1991 dissolution", c10isolada:"Economic changes had no link to politics", c10alianca:"The republics formed the European Union"
});

Object.assign(missionAnswerLabelsEn, {
"c6civil":"A living civilian society was destroyed, not an empty space",
"c7civil":"A civil war within the United States",
"c7colonial":"A dispute limited to African independence",
"c9colonial":"Germany was divided among 19th-century colonial powers",
"c6local":"Medical infrastructure remained intact",
"c7local":"The threat existed only in Berlin",
"c8isolamento":"Asian politics had no impact on global rivalry",
"c6neutralidade":"Remembrance has no bearing on future decisions",
"cronologia-falsa":"The USSR dissolved before the Wall opened"
});

Object.assign(missionAnswerLabelsEn, {"c6neutralidade":"Remembrance has no bearing on future decisions","c7unificacao":"The two blocs formed a joint government"});

const chapterTwoPuzzle = {
    title: "O dossiê de Petrogrado",
    intro: "Reconstrua a rota da revolução: protestos de fevereiro, retorno de Lênin em abril e tomada do Palácio de Inverno em outubro.",
    clues: [
        { id: "praca", label: "Protestos nas ruas", image: "Praça_de_manifestção.jpeg" },
        { id: "estacao", label: "Chegada à estação", image: "Estação_Ferroviaria.jpeg" },
        { id: "palacio", label: "Tomada do palácio", image: "Palacio_de_inverno.jpeg" }
    ],
    solution: ["praca", "estacao", "palacio"]
};

const chapterThreeLocations = {
    "wall-street": {
        title: "Wall Street",
        image: "Wall_stret.png",
        text: "Em 24 de outubro de 1929, conhecido como Quinta-Feira Negra, a venda frenética de ações em Nova York revelou a fragilidade da especulação financeira. O colapso continuou nos dias seguintes, especialmente na Terça-Feira Negra, 29 de outubro. A queda da Bolsa não foi a única causa da Grande Depressão, mas tornou-se seu símbolo mais conhecido."
    },
    "banco-crise": {
        title: "Banco em Crise",
        image: "Banco_em_crise.png",
        text: "Depois do crash, milhares de bancos americanos faliram entre 1930 e 1933. Sem seguro federal de depósitos naquele período, muitas famílias perderam suas economias quando tentavam sacar dinheiro ao mesmo tempo. As falências bancárias reduziram crédito e consumo, aprofundando a recessão e atingindo empresas e trabalhadores."
    },
    "fabrica-fechada": {
        title: "Fábrica Fechada",
        image: "Fábrica_fechada.png",
        text: "Com menos crédito e consumidores comprando menos, indústrias reduziram a produção ou fecharam. O desemprego nos Estados Unidos chegou a cerca de um quarto da força de trabalho em 1933. A crise industrial também atravessou fronteiras, pois o comércio mundial encolheu e países adotaram medidas protecionistas."
    },
    "fila-pao": {
        title: "Fila do Pão",
        image: "Fila_do_pão.png",
        text: "Filas por alimentos, cozinhas comunitárias e instituições de caridade se tornaram parte da vida cotidiana durante a Grande Depressão. Muitas pessoas sem trabalho dependiam de ajuda para alimentar suas famílias. Essas cenas evidenciam que uma crise financeira pode se transformar rapidamente em uma crise social de grande escala."
    },
    hooverville: {
        title: "Hooverville",
        image: "Hooverville.png",
        text: "“Hoovervilles” eram assentamentos precários formados por pessoas sem moradia, nomeados de modo crítico em referência ao presidente Herbert Hoover. Eles cresceram em várias cidades dos Estados Unidos durante o início dos anos 1930. A experiência da Depressão pressionou por novas políticas, incluindo programas do New Deal de Franklin D. Roosevelt."
    }
};

const chapterFourLocations = {
    berlim: {
        title: "Berlim",
        image: "Berlim.png",
        text: "Berlim era o centro político e cultural da Alemanha. Em 30 de janeiro de 1933, Adolf Hitler foi nomeado chanceler pelo presidente Paul von Hindenburg. Nos meses seguintes, o regime nazista desmontou instituições democráticas, perseguiu opositores e usou a cidade como vitrine de seu poder."
    },
    "bairro-residencial": {
        title: "Bairro Residencial",
        image: "Bairro_residencial.png",
        text: "A expansão do nazismo alcançou a vida cotidiana: bandeiras, cartazes e organizações do regime ocupavam ruas, escolas e associações. Enquanto a propaganda prometia unidade nacional, leis e práticas de exclusão retiravam direitos de judeus, pessoas com deficiência, opositores políticos e outros grupos perseguidos."
    },
    "redacao-jornal": {
        title: "Redação do Jornal",
        image: "Redação_do_jornal.png",
        text: "Após 1933, jornais independentes foram fechados, censurados ou submetidos ao controle nazista. O Ministério da Propaganda, liderado por Joseph Goebbels, coordenava rádio, cinema, imprensa e eventos públicos. Controlar a informação ajudava o regime a limitar críticas e a difundir racismo, militarismo e culto ao líder."
    },
    "campo-propaganda": {
        title: "Campo de Propaganda",
        image: "Campo_de_propagando.png",
        text: "Comícios, bandeiras e desfiles eram planejados para produzir a imagem de uma Alemanha unida em torno do Partido Nazista. Esses espetáculos não representam apoio livre e unânime: eles conviviam com intimidação, perseguição e eliminação de adversários. A propaganda foi uma ferramenta central para normalizar a ditadura."
    },
    reichstag: {
        title: "Reichstag",
        image: "Reichstag.png",
        text: "O incêndio do Reichstag, em fevereiro de 1933, foi usado pelos nazistas para ampliar a repressão contra comunistas e outros opositores. Em março, a Lei de Plenos Poderes permitiu ao governo de Hitler legislar sem o parlamento, consolidando a ditadura. O edifício simboliza a destruição das instituições democráticas alemãs."
    }
};

const adventurePuzzles = {
    2: {
        mode: "sequence",
        title: "O caminho da revolução",
        text: "Organize as três pistas na sequência histórica que leva à tomada do Palácio de Inverno.",
        clues: [
            { id: "manifestacao", label: "Protestos em Petrogrado", image: "Praça_de_manifestção.jpeg" },
            { id: "estacao", label: "Retorno de Lênin à Estação Finlândia", image: "Estação_Ferroviaria.jpeg" },
            { id: "palacio", label: "Tomada do Palácio de Inverno", image: "Palacio_de_inverno.jpeg" }
        ],
        order: ["manifestacao", "estacao", "palacio"],
        unlocks: 3
    },
    3: {
        mode: "collect",
        title: "Evidências da crise",
        text: "Investigue o cenário e selecione as três consequências diretas da crise. A ordem não importa.",
        clues: [
            { id: "bancos", label: "Falências bancárias", image: "Banco_em_crise.png" },
            { id: "fabricas", label: "Fechamento de fábricas", image: "Fábrica_fechada.png" },
            { id: "filas", label: "Desemprego e filas por comida", image: "Fila_do_pão.png" }
        ],
        order: ["bancos", "fabricas", "filas"],
        unlocks: 4
    },
    4: {
        mode: "code",
        title: "A redação silenciada",
        text: "Decifre o arquivo de 1933: clique nos documentos na ordem que revela a passagem da nomeação de Hitler ao controle da informação.",
        clues: [
            { id: "hitler", label: "Hitler é nomeado chanceler", image: "Berlim.png" },
            { id: "reichstag", label: "Incêndio do Reichstag é usado para reprimir opositores", image: "Reichstag.png" },
            { id: "plenos", label: "Lei de Plenos Poderes", image: "Reichstag.png" },
            { id: "censura", label: "Censura e propaganda controlam a informação", image: "Redação_do_jornal.png" }
        ],
        order: ["hitler", "reichstag", "plenos", "censura"],
        unlocks: 5
    }
};

let chapterPanelOpen = false;
let transitionInProgress = false;
let activeChapter = null;
let activeAdventurePuzzle = null;
let collectedClues = [];
let shuffledAdventureClues = [];
let activeMysteryChapter = null;
let mysteryProgress = [];

function addNotebookDiscovery(chapter, discovery) {
    const key = String(chapter);
    const entries = notebookProgress[key] || [];
    if (!entries.includes(discovery)) {
        entries.push(discovery);
        notebookProgress[key] = entries;
        saveNotebookProgress();
    }
}

function renderNotebook() {
    notebookEntries.innerHTML = "";
    chapters.forEach((chapter) => {
        const number = getChapterIndex(chapter);
        const discoveries = notebookProgress[String(number)] || [];
        const entry = document.createElement("article");
        entry.className = "notebook-entry";
        entry.innerHTML = `<h3>${localize(chapter.number)}</h3><strong>${localize(chapter.title)}</strong>`;
        const list = document.createElement("ul");
        if (discoveries.length === 0) {
            list.innerHTML = `<li>${interfaceTranslations[currentLanguage].notFound}</li>`;
        } else {
            discoveries.forEach((discovery) => {
                const item = document.createElement("li");
                item.textContent = `✓ ${localize(discovery)}`;
                list.appendChild(item);
            });
        }
        entry.appendChild(list);
        notebookEntries.appendChild(entry);
    });
}

function renderMission() {
    const mission = chapterMissions[activeMissionChapter];
    if (!mission) return;
    const step = mission.questions[activeMissionStep];
    const text = interfaceTranslations[currentLanguage];
    missionKicker.textContent = `${text.challenge} · ${text.chapterPrefix} ${activeMissionChapter}`;
    missionTitle.textContent = localize(mission.title);
    missionText.textContent = localize(mission.text);
    const difficultyLabel = { easy: text.levelEasy, medium: text.levelMedium, hard: text.levelHard }[step.difficulty] || "";
    const periodLabel = localize(mission.period || "");
    missionProgress.textContent = `${periodLabel} · ${difficultyLabel} · ${text.stage} ${activeMissionStep + 1} ${text.of} ${mission.questions.length}`;
    missionQuestionText.textContent = localize(step.question);
    missionAnswers.innerHTML = "";
    const answers = [...step.answers];
    for (let index = answers.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [answers[index], answers[randomIndex]] = [answers[randomIndex], answers[index]];
    }
    answers.forEach(([id, label]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.missionAnswer = id;
        button.textContent = currentLanguage === "en"
            ? (missionAnswerLabelsEn[id] || localize(label))
            : localize(label);
        missionAnswers.appendChild(button);
    });
}

function startMission(chapter) {
    if (!chapterMissions[chapter]) return;
    activeMissionChapter = chapter;
    activeMissionStep = 0;
    missionFeedback.textContent = "";
    missionFeedback.className = "puzzle-feedback";
    missionContinue.classList.add("hidden");
    [chapterOnePanel, chapterTwoPanel, chapterThreePanel, chapterFourPanel, extraChapterPanel].forEach((panel) => panel.classList.add("hidden"));
    renderMission();
    missionPanel.classList.remove("hidden");
}

function finishMission() {
    const mission = chapterMissions[activeMissionChapter];
    addNotebookDiscovery(activeMissionChapter, mission.knowledge);
    if (activeMissionChapter < chapters.length) unlockChapter(activeMissionChapter + 1);
    const text = interfaceTranslations[currentLanguage];
    missionFeedback.textContent = activeMissionChapter === 10
        ? text.finalUnlocked
        : text.chapterUnlockedMessage.replace("{n}", activeMissionChapter + 1);
    missionFeedback.className = "puzzle-feedback correct";
    missionAnswers.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    missionContinue.classList.remove("hidden");
}

function answerMission(answer) {
    const mission = chapterMissions[activeMissionChapter];
    const step = mission?.questions[activeMissionStep];
    if (!step) return;
    if (answer !== step.correct) {
        missionFeedback.textContent = interfaceTranslations[currentLanguage].wrongInterpretation;
        missionFeedback.className = "puzzle-feedback incorrect";
        return;
    }
    activeMissionStep += 1;
    if (activeMissionStep >= mission.questions.length) {
        finishMission();
        return;
    }
    missionFeedback.textContent = interfaceTranslations[currentLanguage].nextDocument;
    missionFeedback.className = "puzzle-feedback correct";
    renderMission();
}

function renderFinalTimeline() {
    finalTimelineBoard.innerHTML = "";
    shuffledFinalTimeline.forEach((event, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "final-timeline-piece";
        button.dataset.timelineEvent = event.id;
        button.setAttribute("aria-pressed", String(selectedTimelineEvent === event.id));
        button.innerHTML = `<span class="timeline-position">${index + 1}</span><span class="timeline-event-text"></span>`;
        button.querySelector(".timeline-event-text").textContent = currentLanguage === "en" ? event.en : event.pt;
        if (selectedTimelineEvent === event.id) button.classList.add("selected");
        finalTimelineBoard.appendChild(button);
    });
}

function shuffleFinalTimeline() {
    shuffledFinalTimeline = [...finalTimelineEvents];
    for (let index = shuffledFinalTimeline.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledFinalTimeline[index], shuffledFinalTimeline[randomIndex]] = [
            shuffledFinalTimeline[randomIndex], shuffledFinalTimeline[index]
        ];
    }
    if (shuffledFinalTimeline.every((event, index) => event.id === finalTimelineEvents[index].id)) {
        shuffledFinalTimeline.reverse();
    }
    selectedTimelineEvent = null;
    renderFinalTimeline();
}

function openFinalReview() {
    chapterPanelOpen = true;
    gameRunning = false;
    chapterHint.classList.add("hidden");
    finalReviewFeedback.textContent = "";
    finalReviewFeedback.className = "puzzle-feedback";
    finalPuzzleTitle.textContent = interfaceTranslations[currentLanguage].finalPuzzleTitle;
    finalPuzzlePrompt.textContent = interfaceTranslations[currentLanguage].finalPuzzlePrompt;
    finalPuzzleCheck.textContent = interfaceTranslations[currentLanguage].finalPuzzleCheck;
    finalPuzzleRestart.textContent = interfaceTranslations[currentLanguage].finalPuzzleRestart;
    finalPuzzleBack.textContent = interfaceTranslations[currentLanguage].finalPuzzleBack;
    finalPuzzleCheck.disabled = false;
    finalPuzzleRestart.disabled = false;
    shuffleFinalTimeline();
    finalReviewPanel.classList.remove("hidden");
}

function selectFinalTimelinePiece(event) {
    const piece = event.target.closest("[data-timeline-event]");
    if (!piece) return;
    finalTimelineBoard.querySelectorAll(".misplaced").forEach((item) => item.classList.remove("misplaced"));
    finalReviewFeedback.textContent = "";
    finalReviewFeedback.className = "puzzle-feedback";

    if (!selectedTimelineEvent) {
        selectedTimelineEvent = piece.dataset.timelineEvent;
        renderFinalTimeline();
        finalTimelineBoard.querySelector(`[data-timeline-event="${selectedTimelineEvent}"]`)?.focus();
        return;
    }

    if (selectedTimelineEvent === piece.dataset.timelineEvent) {
        selectedTimelineEvent = null;
        renderFinalTimeline();
        return;
    }

    const firstIndex = shuffledFinalTimeline.findIndex((item) => item.id === selectedTimelineEvent);
    const secondIndex = shuffledFinalTimeline.findIndex((item) => item.id === piece.dataset.timelineEvent);
    [shuffledFinalTimeline[firstIndex], shuffledFinalTimeline[secondIndex]] = [
        shuffledFinalTimeline[secondIndex], shuffledFinalTimeline[firstIndex]
    ];
    selectedTimelineEvent = null;
    renderFinalTimeline();
    finalTimelineBoard.querySelector(`[data-timeline-event="${piece.dataset.timelineEvent}"]`)?.focus();
}

function checkFinalTimeline() {
    const isCorrect = shuffledFinalTimeline.every((event, index) => event.id === finalTimelineEvents[index].id);
    if (!isCorrect) {
        finalReviewFeedback.textContent = interfaceTranslations[currentLanguage].finalPuzzleWrong;
        finalReviewFeedback.className = "puzzle-feedback incorrect";
        finalTimelineBoard.querySelectorAll("[data-timeline-event]").forEach((piece, index) => {
            if (shuffledFinalTimeline[index].id !== finalTimelineEvents[index].id) piece.classList.add("misplaced");
        });
        return;
    }

    finalReviewFeedback.textContent = interfaceTranslations[currentLanguage].finalPuzzleSuccess;
    finalReviewFeedback.className = "puzzle-feedback correct";
    finalPuzzleCheck.disabled = true;
    finalPuzzleRestart.disabled = true;
    finalTimelineBoard.querySelectorAll("button").forEach((piece) => { piece.disabled = true; });
    addNotebookDiscovery(10, "Linha do tempo do século XX concluída");
    window.setTimeout(startEndingCredits, 700);
}

finalTimelineBoard.addEventListener("click", selectFinalTimelinePiece);
finalPuzzleCheck.addEventListener("click", checkFinalTimeline);
finalPuzzleRestart.addEventListener("click", () => {
    finalReviewFeedback.textContent = "";
    finalReviewFeedback.className = "puzzle-feedback";
    shuffleFinalTimeline();
});
finalPuzzleBack.addEventListener("click", closeChapterOneExperience);

function finishEndingIfReady() {
    if (!endingRollFinished) return;
    endingRoll.classList.add("hidden");
    endingControls.classList.add("hidden");
    endingFinish.classList.remove("hidden");
    endingMenuButton.focus();
}

function showEndingFinish() {
    endingRollFinished = true;
    finishEndingIfReady();
}

function startEndingCredits() {
    gameRunning = false;
    chapterPanelOpen = true;
    finalReviewPanel.classList.add("hidden");
    endingFinish.classList.add("hidden");
    endingScreen.classList.remove("hidden");
    endingRollFinished = false;
    endingRoll.classList.remove("hidden", "rolling");
    endingControls.classList.remove("hidden");
    endingSpeedOptions.classList.add("hidden");
    endingSpeedButton.setAttribute("aria-expanded", "false");
    endingSpeedButton.textContent = `${interfaceTranslations[currentLanguage].endingSpeed} 1.0×`;

    musicMode = "ending";
    musicPlayer.src = endingMusic;
    musicPlayer.currentTime = 0;
    musicPlayer.play().catch(() => {});

    void endingRoll.offsetHeight;
    endingRoll.classList.add("rolling");
    endingSpeedButton.focus();
}

endingRoll.addEventListener("animationend", (event) => {
    if (event.animationName !== "ending-roll") return;
    showEndingFinish();
});

endingSpeedButton.addEventListener("click", () => {
    const isExpanded = endingSpeedButton.getAttribute("aria-expanded") === "true";
    endingSpeedButton.setAttribute("aria-expanded", String(!isExpanded));
    endingSpeedOptions.classList.toggle("hidden", isExpanded);
});

endingSpeedOptions.addEventListener("click", (event) => {
    const option = event.target.closest("[data-ending-speed]");
    if (!option) return;
    const speed = Number.parseFloat(option.dataset.endingSpeed);
    const animation = endingRoll.getAnimations().find((item) => item.animationName === "ending-roll");
    if (animation) {
        if (typeof animation.updatePlaybackRate === "function") {
            animation.updatePlaybackRate(speed);
        } else {
            animation.playbackRate = speed;
        }
    }
    endingSpeedButton.textContent = `${interfaceTranslations[currentLanguage].endingSpeed} ${speed.toFixed(1)}×`;
    endingSpeedButton.setAttribute("aria-expanded", "false");
    endingSpeedOptions.classList.add("hidden");
});

endingMenuButton.addEventListener("click", () => {
    stopMusic();
    chapterPanelOpen = false;
    endingScreen.classList.add("hidden");
    game.classList.add("hidden");
    menu.classList.remove("hidden");
    startMenuMusic();
});

/* =========================================================
   MOLDE DE COLISÃO
========================================================= */

const collisionCanvas = document.createElement("canvas");
const collisionCtx = collisionCanvas.getContext("2d", {
    willReadFrequently: true
});

const collisionImage = new Image();
collisionImage.src = "colisao.png";

let collisionReady = false;

collisionImage.onload = () => {
    collisionReady = true;
    resizeCollisionCanvas();
};

collisionImage.onerror = () => {
    console.warn(
        "colisao.png não foi encontrado. O jogo continuará sem a máscara de colisão."
    );
};

function resizeCollisionCanvas() {
    const w = Math.max(1, Math.floor(window.innerWidth));
    const h = Math.max(1, Math.floor(window.innerHeight));

    collisionCanvas.width = w;
    collisionCanvas.height = h;

    if (!collisionReady) return;

    /*
       IMPORTANTE:
       O museu e o molde são esticados para EXATAMENTE a mesma
       área da tela. Assim o azul do seu molde cai exatamente
       em cima das áreas bloqueadas do museu.
    */
    collisionCtx.clearRect(0, 0, w, h);
    collisionCtx.drawImage(
        collisionImage,
        0,
        0,
        w,
        h
    );
}

/*
   Verifica se um pixel do molde é o azul puro usado para marcar
   paredes. A versão anterior aceitava qualquer azul intenso e,
   por isso, detalhes azulados das imagens do museu também podiam
   virar barreiras invisíveis.
*/
function isBluePixel(x, y) {
    x = Math.floor(x);
    y = Math.floor(y);

    if (
        x < 0 ||
        y < 0 ||
        x >= collisionCanvas.width ||
        y >= collisionCanvas.height
    ) {
        return true;
    }

    const p = collisionCtx.getImageData(x, y, 1, 1).data;

    return (
        p[0] < 20 &&
        p[1] < 20 &&
        p[2] > 240
    );
}

/*
   O personagem tem uma caixa de colisão pequena somente nos pés.
   Isso evita que o capacete/arma encoste na parede antes dos pés.
*/
function blockedAt(x, y) {
    const halfW = 10;
    const footH = 10;

    const samples = [
        [x - halfW, y],
        [x, y],
        [x + halfW, y],
        [x - halfW, y - footH],
        [x, y - footH],
        [x + halfW, y - footH],
        [x, y - footH / 2]
    ];

    return samples.some(([sx, sy]) => isBluePixel(sx, sy));
}

/* =========================================================
   POSIÇÃO INICIAL
========================================================= */

function setInitialPosition() {
    /*
       Centro do corredor principal.
       Calculado pela proporção da tela, não por uma resolução fixa.
    */
    playerX = window.innerWidth * 0.5;
    playerY = window.innerHeight * 0.455;

    /*
       Se por alguma razão o ponto inicial estiver no azul,
       procura automaticamente o ponto livre mais próximo.
    */
    if (collisionReady && blockedAt(playerX, playerY)) {
        const found = findNearestFreePoint(
            playerX,
            playerY
        );

        if (found) {
            playerX = found.x;
            playerY = found.y;
        }
    }
}

function findNearestFreePoint(cx, cy) {
    const maxRadius = 180;
    const step = 5;

    for (let r = step; r <= maxRadius; r += step) {
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 12) {
            const x = cx + Math.cos(a) * r;
            const y = cy + Math.sin(a) * r;

            if (
                x > 20 &&
                y > 20 &&
                x < window.innerWidth - 20 &&
                y < window.innerHeight - 20 &&
                !blockedAt(x, y)
            ) {
                return { x, y };
            }
        }
    }

    return null;
}

/* =========================================================
   DESENHO DO PERSONAGEM
========================================================= */

function updateChapterHint() {
    if (!gameRunning) {
        nearbyChapter = null;
        chapterHint.classList.add("hidden");
        return;
    }

    const finalDoorUnlocked = (notebookProgress["10"] || []).includes(chapterMissions[10].knowledge);
    const finalDoorDistance = Math.hypot(
        playerX - FINAL_DOOR.x * window.innerWidth,
        playerY - FINAL_DOOR.y * window.innerHeight
    );
    nearbyFinalDoor = finalDoorUnlocked && finalDoorDistance < FINAL_DOOR.radius;
    finalDoorMarker.classList.toggle("hidden", !finalDoorUnlocked);

    if (nearbyFinalDoor) {
        nearbyChapter = null;
        const text = interfaceTranslations[currentLanguage];
        chapterHintNumber.textContent = text.finalDoorHint;
        chapterHintTitle.textContent = text.finalDoorText;
        chapterHintText.textContent = text.finalDoorInstruction;
        chapterHintPrompt.textContent = text.finalDoorPrompt;
        chapterHint.classList.remove("hidden");
        return;
    }

    let closest = null;
    let closestDistance = Infinity;

    for (const chapter of chapters) {
        const doorX = chapter.x * window.innerWidth;
        const doorY = chapter.y * window.innerHeight;
        const distance = Math.hypot(
            playerX - doorX,
            playerY - doorY
        );

        if (distance < DOOR_DETECTION_RADIUS && distance < closestDistance) {
            closest = chapter;
            closestDistance = distance;
        }
    }

    if (!closest) {
        nearbyChapter = null;
        chapterHint.classList.add("hidden");
        return;
    }

    if (nearbyChapter !== closest) {
        nearbyChapter = closest;
        const unlocked = isChapterUnlocked(closest);
        const chapterIndex = getChapterIndex(closest);

        const text = interfaceTranslations[currentLanguage];
        chapterHintNumber.textContent = unlocked
            ? localize(closest.number)
            : `${localize(closest.number)} · ${text.lockedSuffix}`;
        chapterHintTitle.textContent = localize(closest.title);
        chapterHintText.textContent = unlocked
            ? localize(closest.text)
            : text.doorLockedMessage.replace("{n}", chapterIndex - 1);
        chapterHintPrompt.textContent = unlocked && getChapterIndex(closest) <= 10
            ? text.chapterPrompt
            : unlocked
                ? text.approachDoor
                : text.locked;
    }

    chapterHint.classList.remove("hidden");
}

function closeChapterOneExperience() {
    chapterPanelOpen = false;
    transitionInProgress = false;
    chapterOnePanel.classList.add("hidden");
    locationPanel.classList.add("hidden");
    chapterOnePuzzle.classList.add("hidden");
    chapterTwoPanel.classList.add("hidden");
    locationPanelTwo.classList.add("hidden");
    chapterThreePanel.classList.add("hidden");
    locationPanelThree.classList.add("hidden");
    chapterFourPanel.classList.add("hidden");
    locationPanelFour.classList.add("hidden");
    extraChapterPanel.classList.add("hidden");
    extraLocationPanel.classList.add("hidden");
    missionPanel.classList.add("hidden");
    notebookPanel.classList.add("hidden");
    finalReviewPanel.classList.add("hidden");
    adventurePuzzlePanel.classList.add("hidden");
    sceneTransition.classList.add("hidden");
    scenarioPanel.classList.add("hidden");
    scenarioImage.removeAttribute("src");
    activeChapter = null;
    activeAdventurePuzzle = null;
    collectedClues = [];
    gameRunning = true;
    updateChapterHint();
}

function openChapterOneExperience() {
    if (chapterPanelOpen || !nearbyChapter || nearbyChapter.number !== "CAPÍTULO 1") return;

    chapterPanelOpen = true;
    activeChapter = 1;
    gameRunning = false;
    chapterHint.classList.add("hidden");
    chapterOnePanel.classList.remove("hidden");
}

function openChapterTwoExperience() {
    if (
        chapterPanelOpen ||
        !nearbyChapter ||
        nearbyChapter.number !== "CAPÍTULO 2" ||
        !isChapterUnlocked(nearbyChapter)
    ) return;

    chapterPanelOpen = true;
    activeChapter = 2;
    gameRunning = false;
    chapterHint.classList.add("hidden");
    chapterTwoPanel.classList.remove("hidden");
}

function openChapterThreeExperience() {
    if (
        chapterPanelOpen ||
        !nearbyChapter ||
        nearbyChapter.number !== "CAPÍTULO 3" ||
        !isChapterUnlocked(nearbyChapter)
    ) return;

    chapterPanelOpen = true;
    activeChapter = 3;
    gameRunning = false;
    chapterHint.classList.add("hidden");
    chapterThreePanel.classList.remove("hidden");
}

function openChapterFourExperience() {
    if (
        chapterPanelOpen ||
        !nearbyChapter ||
        nearbyChapter.number !== "CAPÍTULO 4" ||
        !isChapterUnlocked(nearbyChapter)
    ) return;

    chapterPanelOpen = true;
    activeChapter = 4;
    gameRunning = false;
    chapterHint.classList.add("hidden");
    chapterFourPanel.classList.remove("hidden");
}

function openExtraChapterExperience(chapterNumber) {
    const chapter = extraChapters[chapterNumber];
    if (
        !chapter ||
        chapterPanelOpen ||
        !nearbyChapter ||
        getChapterIndex(nearbyChapter) !== chapterNumber ||
        !isChapterUnlocked(nearbyChapter)
    ) return;

    chapterPanelOpen = true;
    activeChapter = chapterNumber;
    gameRunning = false;
    chapterHint.classList.add("hidden");
    extraChapterKicker.textContent = localize(chapter.kicker);
    extraChapterTitle.textContent = localize(chapter.title);
    extraChapterIntro.textContent = localize(chapter.intro);
    extraPuzzle.classList.remove("hidden");
    extraChapterPanel.classList.remove("hidden");
}

function showExtraChapterLocationChoices() {
    const chapter = extraChapters[activeChapter];
    if (!chapter) return;

    extraChapterPanel.classList.add("hidden");
    scenarioPanel.classList.add("hidden");
    extraLocationKicker.textContent = `${localize(chapter.kicker)} · ${currentLanguage === "en" ? "EXPLORATION" : "EXPLORAÇÃO"}`;
    extraLocationSubtitle.textContent = localize(chapter.locationSubtitle);
    extraLocationOptions.innerHTML = "";

    for (const [id, location] of Object.entries(chapter.locations)) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "location-button";
        button.dataset.extraLocation = id;
        button.textContent = localize(location.title);
        extraLocationOptions.appendChild(button);
    }

    extraLocationPanel.classList.remove("hidden");
}

function showLocationChoices() {
    chapterOnePanel.classList.add("hidden");
    chapterTwoPanel.classList.add("hidden");
    scenarioPanel.classList.add("hidden");
    locationPanel.classList.remove("hidden");
}

function showChapterTwoLocationChoices() {
    chapterTwoPanel.classList.add("hidden");
    scenarioPanel.classList.add("hidden");
    locationPanelTwo.classList.remove("hidden");
}

function showChapterThreeLocationChoices() {
    chapterThreePanel.classList.add("hidden");
    scenarioPanel.classList.add("hidden");
    locationPanelThree.classList.remove("hidden");
}

function showChapterFourLocationChoices() {
    chapterFourPanel.classList.add("hidden");
    scenarioPanel.classList.add("hidden");
    locationPanelFour.classList.remove("hidden");
}

function renderAdventurePuzzle() {
    const puzzle = adventurePuzzles[activeAdventurePuzzle];
    if (!puzzle) return;

    const puzzleType = {
        sequence: "LINHA DO TEMPO",
        collect: "INVESTIGAÇÃO DE EVIDÊNCIAS",
        code: "CÓDIGO DE ARQUIVO"
    }[puzzle.mode];

    adventurePuzzleKicker.textContent = `${interfaceTranslations[currentLanguage].chapterPrefix} ${activeAdventurePuzzle} · ${currentLanguage === "en" ? ({ sequence: "TIMELINE", collect: "EVIDENCE INVESTIGATION", code: "ARCHIVE CODE" }[puzzle.mode]) : puzzleType}`;
    adventurePuzzleTitle.textContent = localize(puzzle.title);
    adventurePuzzleText.textContent = localize(puzzle.text);
    adventurePuzzleProgress.textContent = `${collectedClues.length}/${puzzle.order.length}`;
    adventurePuzzleClues.innerHTML = "";

    for (const clue of shuffledAdventureClues) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "adventure-clue";
        button.dataset.clue = clue.id;
        const image = document.createElement("img");
        image.src = clue.image;
        image.alt = "";
        const label = document.createElement("span");
        label.textContent = localize(clue.label);
        button.append(image, label);

        if (collectedClues.includes(clue.id)) {
            button.disabled = true;
            button.classList.add("collected");
        }

        adventurePuzzleClues.appendChild(button);
    }
}

function shuffleAdventureClues() {
    const puzzle = adventurePuzzles[activeAdventurePuzzle];
    shuffledAdventureClues = [...puzzle.clues];

    for (let index = shuffledAdventureClues.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledAdventureClues[index], shuffledAdventureClues[randomIndex]] = [
            shuffledAdventureClues[randomIndex],
            shuffledAdventureClues[index]
        ];
    }
}

function startAdventurePuzzle(chapter) {
    activeAdventurePuzzle = chapter;
    collectedClues = [];
    shuffleAdventureClues();
    adventurePuzzleFeedback.textContent = "";
    adventurePuzzleFeedback.className = "puzzle-feedback";
    adventurePuzzleContinue.classList.add("hidden");
    [chapterTwoPanel, chapterThreePanel, chapterFourPanel].forEach((panel) => {
        panel.classList.add("hidden");
    });
    renderAdventurePuzzle();
    adventurePuzzlePanel.classList.remove("hidden");
}

function selectAdventureClue(clueId) {
    const puzzle = adventurePuzzles[activeAdventurePuzzle];
    if (!puzzle || collectedClues.length >= puzzle.order.length) return;

    const isCorrect = puzzle.mode === "collect"
        ? puzzle.order.includes(clueId)
        : clueId === puzzle.order[collectedClues.length];

    if (!isCorrect) {
        adventurePuzzleFeedback.textContent = puzzle.mode === "collect"
            ? "Essa não é uma consequência direta da crise. Procure outra evidência."
            : "Essa pista ainda não se encaixa. Observe a sequência e tente outra.";
        adventurePuzzleFeedback.className = "puzzle-feedback incorrect";
        return;
    }

    collectedClues.push(clueId);

    if (collectedClues.length === puzzle.order.length) {
        unlockChapter(puzzle.unlocks);
        adventurePuzzleFeedback.textContent = localize(`Arquivo completo! O Capítulo ${puzzle.unlocks} foi desbloqueado.`);
        adventurePuzzleFeedback.className = "puzzle-feedback correct";
        adventurePuzzleContinue.classList.remove("hidden");
    } else {
        adventurePuzzleFeedback.textContent = localize("Pista organizada. Procure a próxima peça do acontecimento.");
        adventurePuzzleFeedback.className = "puzzle-feedback";
    }

    renderAdventurePuzzle();
}

function startPuzzle() {
    chapterOnePanel.classList.add("hidden");
    puzzleFeedback.textContent = "";
    puzzleFeedback.className = "puzzle-feedback";
    puzzleContinue.classList.add("hidden");
    puzzleOptions.querySelectorAll("button").forEach((button) => {
        button.disabled = false;
    });
    chapterOnePuzzle.classList.remove("hidden");
}

function finishChapterOnePuzzle() {
    unlockChapter(2);
    puzzleFeedback.textContent = localize("Resposta correta! O Capítulo 2 foi desbloqueado.");
    puzzleFeedback.className = "puzzle-feedback correct";
    puzzleOptions.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
    });
    puzzleContinue.classList.remove("hidden");
}

function showScenario(locationId, locations) {
    const location = locations[locationId];
    if (!location || transitionInProgress) return;

    addNotebookDiscovery(activeChapter, location.title);

    transitionInProgress = true;
    locationPanel.classList.add("hidden");
    locationPanelTwo.classList.add("hidden");
    locationPanelThree.classList.add("hidden");
    locationPanelFour.classList.add("hidden");
    extraLocationPanel.classList.add("hidden");
    sceneTransition.classList.remove("hidden");

    window.setTimeout(() => {
        scenarioImage.src = location.image;
        scenarioImage.alt = interfaceTranslations[currentLanguage].scene.replace("{title}", localize(location.title));
        scenarioChapter.textContent = activeChapter >= 5
            ? localize(extraChapters[activeChapter].kicker)
            : activeChapter === 1
            ? "CAPÍTULO 1 · 1914–1918"
            : activeChapter === 2
                ? "CAPÍTULO 2 · 1917"
                : activeChapter === 3
                    ? "CAPÍTULO 3 · 1929"
                    : "CAPÍTULO 4 · 1933";
        scenarioChapter.textContent = localize(scenarioChapter.textContent);
        scenarioTitle.textContent = localize(location.title);
        scenarioText.textContent = localize(location.text);
        scenarioPanel.classList.remove("hidden");
        sceneTransition.classList.add("hidden");
        transitionInProgress = false;
    }, 900);
}


function updatePlayerPosition() {
    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;
    player.style.width = `${PLAYER_W}px`;
    player.style.height = `${PLAYER_H}px`;
}

/* =========================================================
   MOVIMENTO
========================================================= */

function tryMove(dx, dy) {
    let moved = false;

    /* Primeiro eixo X. */
    if (dx !== 0) {
        const nx = playerX + dx;

        if (
            nx > 18 &&
            nx < window.innerWidth - 18 &&
            !blockedAt(nx, playerY)
        ) {
            playerX = nx;
            moved = true;
        }
    }

    /* Depois eixo Y.
       Isso permite deslizar pela parede em vez de travar. */
    if (dy !== 0) {
        const ny = playerY + dy;

        if (
            ny > 22 &&
            ny < window.innerHeight - 18 &&
            !blockedAt(playerX, ny)
        ) {
            playerY = ny;
            moved = true;
        }
    }

    return moved;
}

function gameLoop(time) {
    const dt = Math.min(
        (time - lastTime) / 1000 || 0,
        0.05
    );

    lastTime = time;

    if (gameRunning) {
        let dx = 0;
        let dy = 0;

        if (keys.w || keys.arrowup) dy -= 1;
        if (keys.s || keys.arrowdown) dy += 1;
        if (keys.a || keys.arrowleft) dx -= 1;
        if (keys.d || keys.arrowright) dx += 1;

        const moving = dx !== 0 || dy !== 0;
        let direction = characterDirection;

        if (moving) {
            direction = Math.abs(dx) > Math.abs(dy)
                ? (dx < 0 ? "left" : "right")
                : (dy < 0 ? "up" : "down");
            player.classList.remove("facing-left", "facing-right", "facing-up", "facing-down");
            player.classList.add(`facing-${direction}`);
        }

        if (moving) {
            const len = Math.hypot(dx, dy);
            dx /= len;
            dy /= len;

            tryMove(
                dx * SPEED * dt,
                dy * SPEED * dt
            );
            setCharacterPose(direction, true);
        } else {
            setCharacterPose(characterDirection, false);
        }

        updatePlayerPosition();
        updateChapterHint();
    }

    requestAnimationFrame(gameLoop);
}

/* =========================================================
   TECLADO
========================================================= */

function isTypingInField(target) {
    return target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target.isContentEditable;
}

window.addEventListener("keydown", (event) => {
    if (isTypingInField(event.target)) return;
    if (!endingScreen.classList.contains("hidden")) {
        if (event.key === "Escape") {
            event.preventDefault();
            showEndingFinish();
        }
        return;
    }
    const key = event.key.toLowerCase();
    keys[key] = true;

    if (
        [
            "arrowup",
            "arrowdown",
            "arrowleft",
            "arrowright",
            "w",
            "a",
            "s",
            "d"
        ].includes(key)
    ) {
        event.preventDefault();
    }

    if (key === "escape") {
        event.preventDefault();
        if (!options.classList.contains("hidden")) {
            closeOptions();
        } else if (chapterPanelOpen) {
            closeChapterOneExperience();
        } else if (!game.classList.contains("hidden") && blackScreen.classList.contains("fade")) {
            openOptions(true);
        }
    }

    if (key === "e") {
        if (nearbyFinalDoor) openFinalReview();
        if (nearbyChapter?.number === "CAPÍTULO 1") openChapterOneExperience();
        if (nearbyChapter?.number === "CAPÍTULO 2") openChapterTwoExperience();
        if (nearbyChapter?.number === "CAPÍTULO 3") openChapterThreeExperience();
        if (nearbyChapter?.number === "CAPÍTULO 4") openChapterFourExperience();
        if (getChapterIndex(nearbyChapter || { number: "CAPÍTULO 0" }) >= 5) {
            openExtraChapterExperience(getChapterIndex(nearbyChapter));
        }
    }
});

window.addEventListener("keyup", (event) => {
    if (isTypingInField(event.target)) return;
    keys[event.key.toLowerCase()] = false;
});

/* =========================================================
   JOGAR
========================================================= */

function startGame(freeMode = false) {
    stopMusic();
    freeModeActive = freeMode;
    menu.classList.add("hidden");
    options.classList.add("hidden");
    optionsOpenedFromGame = false;
    returnMenuButton.classList.add("hidden");
    pauseButton.classList.add("hidden");
    game.classList.remove("hidden");

    setInitialPosition();
    updatePlayerPosition();

    gameRunning = false;
    chapterPanelOpen = false;
    transitionInProgress = false;
    activeChapter = null;
    nearbyChapter = null;
    chapterHint.classList.add("hidden");
    chapterOnePanel.classList.add("hidden");
    locationPanel.classList.add("hidden");
    chapterOnePuzzle.classList.add("hidden");
    chapterTwoPanel.classList.add("hidden");
    locationPanelTwo.classList.add("hidden");
    chapterThreePanel.classList.add("hidden");
    locationPanelThree.classList.add("hidden");
    chapterFourPanel.classList.add("hidden");
    locationPanelFour.classList.add("hidden");
    extraChapterPanel.classList.add("hidden");
    extraLocationPanel.classList.add("hidden");
    adventurePuzzlePanel.classList.add("hidden");
    missionPanel.classList.add("hidden");
    notebookPanel.classList.add("hidden");
    finalReviewPanel.classList.add("hidden");
    scenarioPanel.classList.add("hidden");
    sceneTransition.classList.add("hidden");
    blackScreen.classList.remove("fade");

    setTimeout(() => {
        blackScreen.classList.add("fade");
        pauseButton.classList.remove("hidden");
        startGameplayMusic();
        gameRunning = true;
        updateChapterHint();
    }, 1500);
}

playButton.addEventListener("click", openSaveSelect);
freeModeButton.addEventListener("click", () => startGame(true));
saveBackButton.addEventListener("click", () => {
    saveSelect.classList.add("hidden");
    menu.classList.remove("hidden");
    startMenuMusic();
});
saveSlots.addEventListener("click", (event) => {
    const deleteSlot = event.target.closest("[data-delete-save-slot]");
    if (deleteSlot) {
        deleteSaveSlot(Number.parseInt(deleteSlot.dataset.deleteSaveSlot, 10));
        return;
    }

    const slot = event.target.closest("[data-save-slot]");
    if (slot) chooseSaveSlot(Number.parseInt(slot.dataset.saveSlot, 10));
});

/* =========================================================
   OPÇÕES
========================================================= */

function openOptions(fromGame = false) {
    optionsOpenedFromGame = fromGame;
    const text = interfaceTranslations[currentLanguage];
    optionsTitle.textContent = fromGame ? text.paused : text.options;
    backButton.textContent = fromGame ? text.resume : text.back;
    returnMenuButton.textContent = text.returnToMenu;
    returnMenuButton.classList.toggle("hidden", !fromGame);

    if (fromGame) {
        gameRunningBeforeOptions = gameRunning;
        gameplayMusicWasPlayingBeforeOptions = musicMode === "game" && !musicPlayer.paused;
        gameRunning = false;
        if (musicMode === "game") musicPlayer.pause();
        Object.keys(keys).forEach((key) => { keys[key] = false; });
    }

    options.classList.remove("hidden");
}

function closeOptions() {
    options.classList.add("hidden");
    if (optionsOpenedFromGame) {
        gameRunning = gameRunningBeforeOptions;
        if (gameplayMusicWasPlayingBeforeOptions && musicMode === "game") {
            musicPlayer.play().catch(() => {});
        }
    }
    optionsOpenedFromGame = false;
    gameRunningBeforeOptions = false;
    gameplayMusicWasPlayingBeforeOptions = false;
}

function returnToMainMenu() {
    gameRunning = false;
    chapterPanelOpen = false;
    nearbyChapter = null;
    nearbyFinalDoor = false;
    Object.keys(keys).forEach((key) => { keys[key] = false; });
    options.classList.add("hidden");
    returnMenuButton.classList.add("hidden");
    game.classList.add("hidden");
    saveSelect.classList.add("hidden");
    menu.classList.remove("hidden");
    optionsOpenedFromGame = false;
    gameRunningBeforeOptions = false;
    gameplayMusicWasPlayingBeforeOptions = false;
    startMenuMusic();
}

optionsButton.addEventListener("click", () => openOptions(false));
pauseButton.addEventListener("click", () => {
    if (!game.classList.contains("hidden") && blackScreen.classList.contains("fade")) openOptions(true);
});
backButton.addEventListener("click", closeOptions);
returnMenuButton.addEventListener("click", returnToMainMenu);

volume.addEventListener("input", () => {
    volumeNumber.textContent = `${volume.value}%`;
    musicPlayer.volume = Number(volume.value) / 100;
});

languageSelect.addEventListener("change", () => {
    currentLanguage = languageSelect.value;
    localStorage.setItem("memorias-seculo-xx-language", currentLanguage);
    applyLanguage();
});

/* =========================================================
   INTERAÇÕES DO CAPÍTULO 1
========================================================= */

exploreYes.addEventListener("click", showLocationChoices);
exploreNo.addEventListener("click", closeChapterOneExperience);
startChapterOnePuzzle.addEventListener("click", () => startMission(1));
locationBack.addEventListener("click", () => {
    locationPanel.classList.add("hidden");
    chapterOnePanel.classList.remove("hidden");
});

puzzleOptions.addEventListener("click", (event) => {
    const answer = event.target.closest("[data-answer]");
    if (!answer) return;

    if (answer.dataset.answer === "1914") {
        finishChapterOnePuzzle();
    } else {
        puzzleFeedback.textContent = localize("Ainda não. Tente outra alternativa.");
        puzzleFeedback.className = "puzzle-feedback incorrect";
    }
});

puzzleBack.addEventListener("click", () => {
    chapterOnePuzzle.classList.add("hidden");
    chapterOnePanel.classList.remove("hidden");
});

puzzleContinue.addEventListener("click", closeChapterOneExperience);

locationOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-location]");
    if (button) showScenario(button.dataset.location, chapterOneLocations);
});

exploreTwoYes.addEventListener("click", showChapterTwoLocationChoices);
exploreTwoNo.addEventListener("click", closeChapterOneExperience);
startChapterTwoPuzzle.addEventListener("click", () => startMission(2));
locationBackTwo.addEventListener("click", () => {
    locationPanelTwo.classList.add("hidden");
    chapterTwoPanel.classList.remove("hidden");
});

locationOptionsTwo.addEventListener("click", (event) => {
    const button = event.target.closest("[data-location-two]");
    if (button) showScenario(button.dataset.locationTwo, chapterTwoLocations);
});

exploreThreeYes.addEventListener("click", showChapterThreeLocationChoices);
exploreThreeNo.addEventListener("click", closeChapterOneExperience);
startChapterThreePuzzle.addEventListener("click", () => startMission(3));
locationBackThree.addEventListener("click", () => {
    locationPanelThree.classList.add("hidden");
    chapterThreePanel.classList.remove("hidden");
});
locationOptionsThree.addEventListener("click", (event) => {
    const button = event.target.closest("[data-location-three]");
    if (button) showScenario(button.dataset.locationThree, chapterThreeLocations);
});

exploreFourYes.addEventListener("click", showChapterFourLocationChoices);
exploreFourNo.addEventListener("click", closeChapterOneExperience);
startChapterFourPuzzle.addEventListener("click", () => startMission(4));
locationBackFour.addEventListener("click", () => {
    locationPanelFour.classList.add("hidden");
    chapterFourPanel.classList.remove("hidden");
});
locationOptionsFour.addEventListener("click", (event) => {
    const button = event.target.closest("[data-location-four]");
    if (button) showScenario(button.dataset.locationFour, chapterFourLocations);
});

extraExplore.addEventListener("click", showExtraChapterLocationChoices);
extraPuzzle.addEventListener("click", () => startMission(activeChapter));
extraClose.addEventListener("click", closeChapterOneExperience);
extraLocationBack.addEventListener("click", () => {
    extraLocationPanel.classList.add("hidden");
    extraChapterPanel.classList.remove("hidden");
});
extraLocationOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-extra-location]");
    const chapter = extraChapters[activeChapter];
    if (button && chapter) showScenario(button.dataset.extraLocation, chapter.locations);
});

missionAnswers.addEventListener("click", (event) => {
    const answer = event.target.closest("[data-mission-answer]");
    if (answer) answerMission(answer.dataset.missionAnswer);
});
missionBack.addEventListener("click", () => {
    missionPanel.classList.add("hidden");
    if (activeMissionChapter <= 4) {
        [chapterOnePanel, chapterTwoPanel, chapterThreePanel, chapterFourPanel][activeMissionChapter - 1].classList.remove("hidden");
    } else {
        extraChapterPanel.classList.remove("hidden");
    }
});
missionContinue.addEventListener("click", () => {
    if (activeMissionChapter === 10) {
        missionFeedback.textContent = interfaceTranslations[currentLanguage].finalUnlocked;
        closeChapterOneExperience();
    } else closeChapterOneExperience();
});
notebookButton.addEventListener("click", () => {
    gameRunning = false;
    renderNotebook();
    notebookPanel.classList.remove("hidden");
});
notebookClose.addEventListener("click", () => {
    notebookPanel.classList.add("hidden");
    if (!chapterPanelOpen) gameRunning = true;
});

adventurePuzzleClues.addEventListener("click", (event) => {
    const clue = event.target.closest("[data-clue]");
    if (clue) selectAdventureClue(clue.dataset.clue);
});
adventurePuzzleRestart.addEventListener("click", () => {
    collectedClues = [];
    shuffleAdventureClues();
    adventurePuzzleFeedback.textContent = localize("As pistas foram embaralhadas novamente.");
    adventurePuzzleFeedback.className = "puzzle-feedback";
    adventurePuzzleContinue.classList.add("hidden");
    renderAdventurePuzzle();
});
adventurePuzzleBack.addEventListener("click", () => {
    adventurePuzzlePanel.classList.add("hidden");
    if (activeAdventurePuzzle === 2) chapterTwoPanel.classList.remove("hidden");
    if (activeAdventurePuzzle === 3) chapterThreePanel.classList.remove("hidden");
    if (activeAdventurePuzzle === 4) chapterFourPanel.classList.remove("hidden");
});
adventurePuzzleContinue.addEventListener("click", closeChapterOneExperience);

scenarioLocations.addEventListener("click", () => {
    if (activeChapter >= 5) {
        showExtraChapterLocationChoices();
    } else if (activeChapter === 2) {
        showChapterTwoLocationChoices();
    } else if (activeChapter === 3) {
        showChapterThreeLocationChoices();
    } else if (activeChapter === 4) {
        showChapterFourLocationChoices();
    } else {
        showLocationChoices();
    }
});
scenarioMuseum.addEventListener("click", closeChapterOneExperience);

/* =========================================================
   SAIR
========================================================= */

exitButton.addEventListener("click", () => {
    window.close();

    /* Navegadores bloqueiam fechar abas abertas manualmente.
       Nesse caso, voltamos ao menu sem quebrar o jogo. */
    setTimeout(() => {
        gameRunning = false;
        game.classList.add("hidden");
        options.classList.add("hidden");
        menu.classList.remove("hidden");
        startMenuMusic();
    }, 150);
});

/* =========================================================
   REDIMENSIONAMENTO
========================================================= */

window.addEventListener("resize", () => {
    resizeCollisionCanvas();
    updatePlayerPosition();
    updateChapterHint();
});

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

player.classList.add("idle");
musicPlayer.volume = Number(volume.value) / 100;
startMenuMusic();
applyLanguage();
updateFreeModeButton();
resizeCollisionCanvas();
setInitialPosition();
updatePlayerPosition();
requestAnimationFrame(gameLoop);
