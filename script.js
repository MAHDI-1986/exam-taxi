const questions = [
  {
    question: "Hva er intekter og kostender?",
    options: [
      "foretakregister",
      "Intekter= du tjener inn",
      "25 virkedager eller 5 uke",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Når du skal avslutte ett selskap,hvor lange skal du oppbevare dokumentene dine?",
    options: [
      "regner ut i fra tidligere bruttotall.",
      "du setter det inn i skattetrekkskonto, først",
      "5 år",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva vil det si at et seleskapet er insolvent?",
    options: [
      "Du klare ikke å betale ulike krav ved forfall og du ha rmye gjeld på deg.",
      "du kan ikke gi oppsigelse på grunn av sykdum.",
      "Den tiden er lønsomt før du skifter den ut.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Du åpner et aksjeselskap,hvor skal du registere det?",
    options: [
      "aksjerinnskudd.",
      "Når bilen er ikke økonomisk, kjøpe el bil.",
      "Foretaksregisteret",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "Hvor mye er du ansvarlig for dersom et aksjeselskap går konkurs?",
    options: [
      "Den tiden er lønsomt før du skifter den ut.",
      "det du har sett inn er det du taper ved konkurs.",
      "send inn en annen bil med nok plasser.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva menes med resultat budsjett?",
    options: [
      "Når bilen er ikke økonomisk, kjøpe el bil.",
      "betyr hvor får du penger fra",
      "Setter sammen-inntakter og kostnad i overskudd eller underskudd.",
    ],
    correctAnswers: [2],
  },
  {
    question: "hva menes med god og dårlig likviditet?",
    options: [
      "Alt av dine inntakter og utgjefter skal skrive i regnskapet.",
      "god likviditet = klar å betale",
      "1- egenfinansering ( du sette dine egen penger inn for å kjope noe)",
    ],
    correctAnswers: [1],
  },
  {
    question: "kassekreditt er ett låneform. Hva mens med det?",
    options: [
      "ved stor forskjell i dekk, dimenstasjon må du kontrollen taksemeter",
      "Skatten du betaler på forhånd",
      "et bevilket beløp med en kasseramme ( maks Belop) .",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er avskrivning ?",
    options: [
      "aksjerinnskudd.",
      "1- egenfinansering ( du sette dine egen penger inn for å kjope noe)",
      "fradragsfører verdigfallet til en eiendel.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvilke typer finansiering er det?",
    options: [
      "fast stilling fra deg.",
      "Yrkesskadeerstatning. yrkesskade forsikring.",
      "1- egenfinansering ( du sette dine egen penger inn for å kjope noe)",
    ],
    correctAnswers: [2],
  },
  {
    question: "fremmed finanisering( du tar opp lån)",
    options: [
      "3-selv finanisering( overskudd tilfirma)",
      "hvis dere har sykepengerforsikring får du først sykedag,hvis ikke så får du etter 16 dager.",
      "8 passasjen.Max. 9 passasjer med sjofør",
    ],
    correctAnswers: [0],
  },
  {
    question: "hva vil de si at dere er bokføringspliktige?",
    options: [
      "fremtidlig samlene utgifter.",
      "ikke slutte dato",
      "Alt av dine inntakter og utgjefter skal skrive i regnskapet.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er en kalkulert kostand ?",
    options: [
      "fremtidlig samlene utgifter.",
      "utgånde mva minus inngånde mva.",
      "ansatt ferie og hvor mange dager?",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "Ansatten din har jobbet i tre år som en midlertidlig ansatt. Hva kan han kreve fra deg?",
    options: [
      "det du har sett inn er det du taper ved konkurs.",
      "18000kr",
      "fast stilling fra deg.",
    ],
    correctAnswers: [2],
  },
  {
    question: "I hvilken periode må du etter loven gi",
    options: [
      "ansatt ferie og hvor mange dager?",
      "du kan ikke gi oppsigelse på grunn av sykdum.",
      "et aksjereselskapet?",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "Hvis ansetten din jobber mer enn 8 timer, hvor mye pause har han krav på?",
    options: [
      "minste 30 minutter.",
      "3-selv finanisering( overskudd tilfirma)",
      "ansatt ferie og hvor mange dager?",
    ],
    correctAnswers: [0],
  },
  {
    question: "Når har ansatt din krav på pause?",
    options: [
      "legge inn penger i noe i hope om et du tjenet på det. legge penger i investeringsfond, børs.",
      "Etter 5 timer og 30 minutter har ansatt krav på pause.",
      "deltakra har sin egen ansvarsandel. Da står for delt ansver alle eier har sin egen ansverdel",
    ],
    correctAnswers: [1],
  },
  {
    question: "hva skjer hvis du ikke betale skyldig merverdiavgjft?",
    options: [
      "kan krave tvangsording kort tid etter forfall.",
      "deltakra har sin egen ansvarsandel. Da står for delt ansver alle eier har sin egen ansverdel",
      "aksjerinnskudd.",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "Hvorden regner mann merverdiavgift( MVA)? Altså hva bestemmer om du får penger eller å betale ?",
    options: [
      "synlig.",
      "Når bilen er ikke økonomisk, kjøpe el bil.",
      "utgånde mva minus inngånde mva.",
    ],
    correctAnswers: [2],
  },
  {
    question: "hva er egenmelding?",
    options: [
      "god likviditet = klar å betale",
      "ikke slutte dato",
      "si ifra til arbeidsgiver ved korttidsykdom.",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "En ansatt har jobbet i samme virksomhet i 5år . hvor lenge er oppsigelsetiden?",
    options: [
      "hvor deltakerne har ubegrenset ansvar.",
      "du låner bil en begrense periode.",
      "2 månder.",
    ],
    correctAnswers: [2],
  },
  {
    question: "En ansatt blir sykfra.når du begynne å gi han sykepenger?",
    options: [
      "fradragsfører verdigfallet til en eiendel.",
      "fra første sykdag.",
      "2 månder.",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "har selvestendig næringdrivende krav på sykepenger?Eventuelt fra når?",
    options: [
      "hvis dere har sykepengerforsikring får du først sykedag,hvis ikke så får du etter 16 dager.",
      "fradragsfører verdigfallet til en eiendel.",
      "kontinuerlig (jevnlig)",
    ],
    correctAnswers: [0],
  },
  {
    question: "hva dekker yrkesrskade til en ansett?",
    options: [
      "50 000 kr hver år, 20 %.",
      "Yrkesskadeerstatning. yrkesskade forsikring.",
      "bedrift betale avgift basert på lønn til ansett.( oslo 14,1%)",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er den alminnelige arbeidstiden?",
    options: [
      "synlig.",
      "den må ikke overtide, 9 timer på 24 timer,",
      "et bevilket beløp med en kasseramme ( maks Belop) .",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva menes med den økonomiske levealderen til en bil?",
    options: [
      "ansatt ferie og hvor mange dager?",
      "Den tiden er lønsomt før du skifter den ut.",
      "2 eller flere eier med ubegrenset ansver.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Når kan du ta tilleggsbetalt for drosje turen?",
    options: [
      "du setter det inn i skattetrekkskonto, først",
      "Ansatt,arbeidtaker",
      "rullestol, forhåndsbestilling, oppkast",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvilke forskrift må du forevise til passasjernene dine?",
    options: [
      "god likviditet = klar å betale",
      "takberegning.",
      "kontinuerlig (jevnlig)",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvorden blir drosje turen registeret?",
    options: [
      "GNSS,60 dager.",
      "et bevilket beløp med en kasseramme ( maks Belop) .",
      "kontinuerlig (jevnlig)",
    ],
    correctAnswers: [0],
  },
  {
    question: "hva er forskuddstrekk og hvor settes de inn?",
    options: [
      "bedrift betale avgift basert på lønn til ansett.( oslo 14,1%)",
      "du setter det inn i skattetrekkskonto, først",
      "hvis han har truet passasjer.",
    ],
    correctAnswers: [1],
  },
  {
    question: "hva er en arbeidsplan?",
    options: [
      "Etter 5 timer og 30 minutter har ansatt krav på pause.",
      "arbeidesgiver og arbeidetaker lager en skriftlig plan over når den ansett skal jobbe.",
      "aksjerinnskudd.",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "En ansatt har vært sykmeldt i seks måneder -kan du gi han oppsigelse?",
    options: [
      "ved stor forskjell i dekk, dimenstasjon må du kontrollen taksemeter",
      "du kan ikke gi oppsigelse på grunn av sykdum.",
      "50 000 kr hver år, 20 %.",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Du skal gi oppsigelse til en ansatt- hvor skal du gi han oppsigelse?",
    options: [
      "Setter sammen-inntakter og kostnad i overskudd eller underskudd.",
      "det skal være personlig eller sendes brev, epost.",
      "GNSS,60 dager.",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Hvilken lov er det som sikrerfor at arbeidet er trygg og blir gjort i sikkerhet?",
    options: [
      "ansatt ferie og hvor mange dager?",
      "arbeidsmiljølover",
      "legge inn penger i noe i hope om et du tjenet på det. legge penger i investeringsfond, børs.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva menes med at du må ha økonomisk evne?",
    options: [
      "Setter sammen-inntakter og kostnad i overskudd eller underskudd.",
      "garantierklæring fra bank eller forsikring.",
      "bedrift betale avgift basert på lønn til ansett.( oslo 14,1%)",
    ],
    correctAnswers: [1],
  },
  {
    question: "Du har et drosjefirma, hvor registerer du løyve ?",
    options: ["Altin", "fremtidlig samlene utgifter.", "et aksjereselskapet?"],
    correctAnswers: [0],
  },
  {
    question: "Du har drosjeløyve- hva er høyest antall passasjerer kan ha?",
    options: [
      "legge inn penger i noe i hope om et du tjenet på det. legge penger i investeringsfond, børs.",
      "3-selv finanisering( overskudd tilfirma)",
      "8 passasjen.Max. 9 passasjer med sjofør",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvilken krav er det for å få kjøresddel?",
    options: [
      "Etter 5 timer og 30 minutter har ansatt krav på pause.",
      "politiatest-faglig kompetanse 2år- minste 20 år gammel- førerkort- lege test",
      "send inn en annen bil med nok plasser.",
    ],
    correctAnswers: [1],
  },
  {
    question: "hva er riktig om når enerett kan tildeles?",
    options: [
      "8 passasjen.Max. 9 passasjer med sjofør",
      "et aksjereselskapet?",
      "under 20000 innbyggere- 80 km byfolkning - tildeles ved konkuranse- maks 5 år- fylkskomune tildels enerett",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvilken krav trenger du for å få løyve?",
    options: ["organisasjon", "Hva er rett og galt.", "Foretaksregisteret"],
    correctAnswers: [0],
  },
  {
    question:
      "Hvilke utstyr skal være i en drøsjebil? taklamp- taksmeter- løyve synlig-kjøresddel",
    options: [
      "du kan ikke gi oppsigelse på grunn av sykdum.",
      "en peregnert fjoråret, bruttolønn, 10.2prosent",
      "synlig.",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "pliktmessig avholde, når skal du være under alkohol eller andre middel?",
    options: [
      "3-selv finanisering( overskudd tilfirma)",
      "før 8 timer",
      "fremtidlig samlene utgifter.",
    ],
    correctAnswers: [1],
  },
  {
    question: "hvor registrere mann dresjebil?",
    options: [
      "staten vegvesen",
      "kan krave tvangsording kort tid etter forfall.",
      "Den tiden er lønsomt før du skifter den ut.",
    ],
    correctAnswers: [0],
  },
  {
    question: "hvilken forsikring er lovpålagt et kjøretøy?",
    options: [
      "politiatest-faglig kompetanse 2år- minste 20 år gammel- førerkort- lege test",
      "ansværlig forsikring.",
      "fremtidlig samlene utgifter.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er arbeidsgiveravgift?",
    options: [
      "bedrift betale avgift basert på lønn til ansett.( oslo 14,1%)",
      "arbeidtaker",
      "det er arbeidsgiver styrer ferie.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er leasing?",
    options: [
      "ansatt ferie og hvor mange dager?",
      "Bedrageri",
      "du låner bil en begrense periode.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvilke direkte skatter har vi?",
    options: [
      "Yrkesskadeerstatning. yrkesskade forsikring.",
      "inntektskatt- trygdeavgift- formueskatt- eiendomskatt- arbeidegiveravgjfter.",
      "takberegning.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er etterskuddskatt?",
    options: [
      "endelig skatt- enten må du betale eller får du penger tilbake, Skatt mann betaler etter å ha fått skatmelding.",
      "før 8 timer",
      "Den tiden er lønsomt før du skifter den ut.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er forskuddskatt?",
    options: [
      "Skatten du betaler på forhånd",
      "18000kr",
      "kan krave tvangsording kort tid etter forfall.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er med i en arbeidavtale i en fast stilling?",
    options: [
      "Den tiden er lønsomt før du skifter den ut.",
      "det er arbeidsgiver styrer ferie.",
      "ikke slutte dato",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "Du ha en fire setter bil. Du skal plukke opp fem barn som skal til skolen, hva skal du gjøre?",
    options: [
      "25 virkedager eller 5 uke",
      "send inn en annen bil med nok plasser.",
      "ikke slutte dato",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er DA?",
    options: [
      "Setter sammen-inntakter og kostnad i overskudd eller underskudd.",
      "Bedrageri",
      "deltakra har sin egen ansvarsandel. Da står for delt ansver alle eier har sin egen ansverdel",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "sjøfår dine stopper taksmeter midt i en tur , hva skal du fortalle han?",
    options: ["Bedrageri", "minste 30 minutter.", "foretakregister"],
    correctAnswers: [0],
  },
  {
    question: "Hva er investering?",
    options: [
      "legge inn penger i noe i hope om et du tjenet på det. legge penger i investeringsfond, børs.",
      "det du har sett inn er det du taper ved konkurs.",
      "minste 30 minutter.",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "Hva skjer med den kapitale totalkostnaden dersom du kjøremindre i næring?",
    options: [
      "Alt av dine inntakter og utgjefter skal skrive i regnskapet.",
      "GNSS,60 dager.",
      "de sinker dersom du kjøre mindre.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvor mange feriedager er det i løpet av år?",
    options: [
      "25 virkedager eller 5 uke",
      "arbeidsmiljølover",
      "legge inn penger i noe i hope om et du tjenet på det. legge penger i investeringsfond, børs.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvem har krev på feriepenger?",
    options: [
      "Ansatt,arbeidtaker",
      "det skal være personlig eller sendes brev, epost.",
      "30000kr",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvem har ansvaret for taksmeter under kjøring?",
    options: [
      "Setter sammen-inntakter og kostnad i overskudd eller underskudd.",
      "fører av bilen",
      "ansatt ferie og hvor mange dager?",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Ved hvilken tilfeller skal du gå for å ta kontroll på taksamete?",
    options: [
      "ved stor forskjell i dekk, dimenstasjon må du kontrollen taksemeter",
      "inntektskatt- trygdeavgift- formueskatt- eiendomskatt- arbeidegiveravgjfter.",
      "hvis dere har sykepengerforsikring får du først sykedag,hvis ikke så får du etter 16 dager.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvor ofte skal bilen tilstand sjekks?",
    options: [
      "en gang i år.",
      "ved stor forskjell i dekk, dimenstasjon må du kontrollen taksemeter",
      "ansatt ferie og hvor mange dager?",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er etikk og moral?",
    options: [
      "Foretaksregisteret",
      "regner ut i fra tidligere bruttotall.",
      "Hva er rett og galt.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvor ofte skal du sjekke om at HMS reglene følges?",
    options: [
      "kontinuerlig (jevnlig)",
      "50 000 kr hver år, 20 %.",
      "Setter sammen-inntakter og kostnad i overskudd eller underskudd.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er et enkeltpersonforetak?",
    options: [
      "en eier med ubegrenset ansver.",
      "sette inn penger , ingen personlig ansver",
      "et bevilket beløp med en kasseramme ( maks Belop) .",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er et ansvarlig seleskapet?",
    options: [
      "2 eller flere eier med ubegrenset ansver.",
      "arbeidesgiver og arbeidetaker lager en skriftlig plan over når den ansett skal jobbe.",
      "før 8 timer",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er et aksjerselskap?",
    options: [
      "du kan ikke gi oppsigelse på grunn av sykdum.",
      "sette inn penger , ingen personlig ansver",
      "8 passasjen.Max. 9 passasjer med sjofør",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvor mye minimumskapital mådu ha for å starte",
    options: [
      "Intekter= du tjener inn",
      "kan krave tvangsording kort tid etter forfall.",
      "et aksjereselskapet?",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvor mye økonomisk ansvarlig er du for i et aksjerselskapet?",
    options: [
      "det skal være personlig eller sendes brev, epost.",
      "hvis han har truet passasjer.",
      "aksjerinnskudd.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Du åpner et aksjeselskap hvor skal du registrere?",
    options: ["foretakregister", "Hva er rett og galt.", "organisasjon"],
    correctAnswers: [0],
  },
  {
    question: "Hva er ANS?",
    options: [
      "det er arbeidsgiver styrer ferie.",
      "hvor deltakerne har ubegrenset ansvar.",
      "8 passasjen.Max. 9 passasjer med sjofør",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvilken tilfele kan du si opp( avkjed )ti ansatt?",
    options: [
      "deltakra har sin egen ansvarsandel. Da står for delt ansver alle eier har sin egen ansverdel",
      "hvis han har truet passasjer.",
      "legge inn penger i noe i hope om et du tjenet på det. legge penger i investeringsfond, børs.",
    ],
    correctAnswers: [1],
  },
  {
    question: "finansering?",
    options: [
      "Når bilen er ikke økonomisk, kjøpe el bil.",
      "betyr hvor får du penger fra",
      "de sinker dersom du kjøre mindre.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er riktig planleging av ferie?",
    options: [
      "det er arbeidsgiver styrer ferie.",
      "8 passasjen.Max. 9 passasjer med sjofør",
      "før 8 timer",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvem har krev for feriepenger?",
    options: [
      "den må ikke overtide, 9 timer på 24 timer,",
      "arbeidtaker",
      "de sinker dersom du kjøre mindre.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvorden blir fereipenger utregnet?",
    options: [
      "Setter sammen-inntakter og kostnad i overskudd eller underskudd.",
      "en peregnert fjoråret, bruttolønn, 10.2prosent",
      "en gang i år.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvorden regner mann ut av forskudskatt?",
    options: [
      "synlig.",
      "Etter 5 timer og 30 minutter har ansatt krav på pause.",
      "regner ut i fra tidligere bruttotall.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Når bør du bytte din drosje?",
    options: [
      "hvis han har truet passasjer.",
      "under 20000 innbyggere- 80 km byfolkning - tildeles ved konkuranse- maks 5 år- fylkskomune tildels enerett",
      "Når bilen er ikke økonomisk, kjøpe el bil.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Du avskriving for 400 000 på 8 år, Hvor mye er avskriving?",
    options: [
      "50 000 kr hver år, 20 %.",
      "du setter det inn i skattetrekkskonto, først",
      "Den tiden er lønsomt før du skifter den ut.",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "En taxi kjørte på en termin 280000/12% , Hvor mye sakl du betale?",
    options: ["Altin", "30000kr", "fradragsfører verdigfallet til en eiendel."],
    correctAnswers: [1],
  },
  {
    question: "320000/ 6% ?",
    options: [
      "18000kr",
      "deltakra har sin egen ansvarsandel. Da står for delt ansver alle eier har sin egen ansverdel",
      "en eier med ubegrenset ansver.",
    ],
    correctAnswers: [0],
  },
];
let currentQuestionIndex = 0;
let userAnswers = [];
let mode = "training";
let examQuestions = [];
let questionStats = new Map();

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const feedbackBox = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submitBtn = document.getElementById("submit-btn");
const resultBox = document.getElementById("result");

document.getElementById("start-training-btn").onclick = () =>
  startQuiz("training");
document.getElementById("start-exam-btn").onclick = () => startQuiz("exam");
nextBtn.onclick = nextQuestion;
prevBtn.onclick = prevQuestion;
submitBtn.onclick = submitExam;

function startQuiz(selectedMode) {
  mode = selectedMode;
  currentQuestionIndex = 0;
  userAnswers = Array(selectedMode === "exam" ? 35 : questions.length).fill(
    null
  );
  examQuestions =
    selectedMode === "exam"
      ? shuffleArray(questions).slice(0, 35)
      : questions.map((q) => ({ ...q }));
  submitBtn.classList.toggle("hidden", selectedMode !== "exam");
  nextBtn.classList.toggle("hidden", selectedMode === "exam");
  prevBtn.classList.toggle("hidden", selectedMode === "exam");
  resultBox.classList.add("hidden");
  renderQuestion();
}

function shuffleArray(arr) {
  let copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffleOptions(q) {
  const optionsWithIndex = q.options.map((text, index) => ({ text, index }));
  const shuffled = shuffleArray(optionsWithIndex);
  const newOptions = shuffled.map((o) => o.text);
  const correctIndex = shuffled.findIndex((o) =>
    q.correctAnswers.includes(o.index)
  );
  return { options: newOptions, correctAnswers: [correctIndex] };
}

function renderQuestion() {
  const progress = document.createElement("div");
  progress.style.marginBottom = "10px";
  progress.style.fontWeight = "bold";
  progress.textContent = `Question ${currentQuestionIndex + 1} of ${
    examQuestions.length
  }`;
  questionBox.innerHTML = "";
  questionBox.appendChild(progress);
  let originalQ = examQuestions[currentQuestionIndex];
  const shuffled = shuffleOptions(originalQ);
  let q = {
    ...originalQ,
    options: shuffled.options,
    correctAnswers: shuffled.correctAnswers,
  };
  examQuestions[currentQuestionIndex] = q;

  questionBox.textContent = `${currentQuestionIndex + 1}. ${q.question}`;
  optionsBox.innerHTML = "";
  feedbackBox.textContent = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => handleOptionClick(idx);

    if (mode === "exam" && userAnswers[currentQuestionIndex] !== null) {
      if (idx === userAnswers[currentQuestionIndex]) {
        btn.classList.add("selected");
      }
    }

    optionsBox.appendChild(btn);
  });

  prevBtn.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
  nextBtn.style.display =
    currentQuestionIndex < examQuestions.length - 1 ? "inline-block" : "none";
}

function handleOptionClick(index) {
  const q = examQuestions[currentQuestionIndex];
  userAnswers[currentQuestionIndex] = index;

  const qKey = q.question;
  const currentStat = questionStats.get(qKey) || { correct: 0, wrong: 0 };
  if (mode === "exam") {
    const isCorrect = q.correctAnswers.includes(index);
    if (isCorrect) currentStat.correct++;
    else currentStat.wrong++;
    questionStats.set(qKey, currentStat);
  }

  if (mode === "training") {
    Array.from(optionsBox.children).forEach((btn, idx) => {
      btn.disabled = true;
      if (q.correctAnswers.includes(idx)) btn.classList.add("correct");
      else if (idx === index) btn.classList.add("wrong");
    });
    feedbackBox.textContent = q.correctAnswers.includes(index)
      ? "Correct!"
      : "Wrong!";
    feedbackBox.style.color = q.correctAnswers.includes(index)
      ? "green"
      : "red";
  } else {
    renderQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < examQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function submitExam() {
  if (userAnswers.includes(null)) {
    alert("Please answer all questions before submitting.");
    return;
  }

  let score = 0;
  let output = examQuestions.map((q, i) => {
    const isCorrect = q.correctAnswers.includes(userAnswers[i]);
    if (isCorrect) score++;
    return `
        <li><b>${q.question}</b><br>
        Your answer: <span style="color:${isCorrect ? "green" : "red"}">${
      q.options[userAnswers[i]]
    }</span><br>
        Correct: <b>${q.options[q.correctAnswers[0]]}</b></li>
      `;
  });
  resultBox.innerHTML = `<h3>Score: ${score}/${
    examQuestions.length
  }</h3><ol>${output.join("")}</ol>`;
  let statsOutput = Array.from(questionStats.entries()).map(
    ([question, stat]) => {
      return `<li><b>${question}</b><br>Correct: ${stat.correct}, Wrong: ${stat.wrong}</li>`;
    }
  );
  resultBox.innerHTML += `<h3>Answer Summary</h3><ul>${statsOutput.join(
    ""
  )}</ul>`;
  resultBox.classList.remove("hidden");
  questionBox.textContent = "";
  optionsBox.innerHTML = "";
  feedbackBox.textContent = "";
  nextBtn.classList.add("hidden");
  prevBtn.classList.add("hidden");
  submitBtn.classList.add("hidden");
}
