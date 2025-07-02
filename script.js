const BASE_QUESTIONS = [
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
// ✅ Base Questions - Never Mutated

let currentQuestionIndex = 0;
let userAnswers = [];
let mode = "training";
let trainingQuestions = [];
let examQuestions = [];

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const feedbackBox = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submitBtn = document.getElementById("submit-btn");
const resultBox = document.getElementById("result");
const passwordGate = document.getElementById("password-gate");
const appContainer = document.getElementById("app-container");
const passwordInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const partSelector = document.getElementById("part-selector");
const trainTypeSelector = document.getElementById("train-type-selector");

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startTraining(partIndex = 0, preserveOrder = false) {
  mode = "training";
  currentQuestionIndex = 0;

  const split = [14, 14, 14, 14, 14, 13];
  const start = split.slice(0, partIndex).reduce((a, b) => a + b, 0);
  const count = split[partIndex];

  let block = BASE_QUESTIONS.slice(start, start + count).map((q) => ({
    question: q.question,
    options: [...q.options],
    correctAnswers: [...q.correctAnswers],
  }));

  if (!preserveOrder) {
    block = shuffleArray(block);
  }

  trainingQuestions = block.map((q) => {
    if (preserveOrder) {
      return {
        question: q.question,
        options: q.options,
        correctAnswers: q.correctAnswers,
      };
    } else {
      const shuffledIndices = q.options.map((_, i) => i);
      shuffleArray(shuffledIndices);
      return {
        question: q.question,
        options: shuffledIndices.map((i) => q.options[i]),
        correctAnswers: q.correctAnswers.map((i) => shuffledIndices.indexOf(i)),
      };
    }
  });

  userAnswers = Array(trainingQuestions.length).fill(null);
  resultBox.classList.add("hidden");
  submitBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  prevBtn.classList.remove("hidden");
  feedbackBox.textContent = "";
  renderQuestion();
}

function startExam() {
  mode = "exam";
  currentQuestionIndex = 0;
  userAnswers = [];
  examQuestions = shuffleArray(BASE_QUESTIONS)
    .slice(0, 35)
    .map((q) => {
      const shuffledIndices = q.options.map((_, i) => i);
      shuffleArray(shuffledIndices);
      return {
        question: q.question,
        options: shuffledIndices.map((i) => q.options[i]),
        correctAnswers: q.correctAnswers.map((i) => shuffledIndices.indexOf(i)),
      };
    });
  resultBox.classList.add("hidden");
  submitBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");
  prevBtn.classList.add("hidden");
  feedbackBox.textContent = "";
  renderQuestion();
}

function renderQuestion() {
  feedbackBox.textContent = "";
  const qList = mode === "training" ? trainingQuestions : examQuestions;
  const qData = qList[currentQuestionIndex];
  const options = qData.options;
  const correctAnswers = qData.correctAnswers;
  questionBox.textContent = `${currentQuestionIndex + 1}. ${qData.question}`;
  optionsBox.innerHTML = "";
  options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => handleOptionClick(index);
    if (mode === "training" && userAnswers[currentQuestionIndex] !== null) {
      if (index === userAnswers[currentQuestionIndex]) {
        btn.classList.add(correctAnswers.includes(index) ? "correct" : "wrong");
      }
    }
    if (mode === "exam" && userAnswers[currentQuestionIndex] !== null) {
      if (index === userAnswers[currentQuestionIndex]) {
        btn.classList.add("selected");
      }
    }
    optionsBox.appendChild(btn);
  });
  const lastIndex = qList.length - 1;
  prevBtn.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
  nextBtn.style.display =
    currentQuestionIndex === lastIndex ? "none" : "inline-block";
}

function handleOptionClick(selectedIndex) {
  const qList = mode === "training" ? trainingQuestions : examQuestions;
  const qData = qList[currentQuestionIndex];
  const options = qData.options;
  const correctAnswers = qData.correctAnswers;
  userAnswers[currentQuestionIndex] = selectedIndex;
  if (mode === "training") {
    if (correctAnswers.includes(selectedIndex)) {
      feedbackBox.textContent = "Correct!";
      feedbackBox.style.color = "green";
    } else {
      const correctOpts = correctAnswers.map((i) => options[i]).join(", ");
      feedbackBox.textContent = `Wrong! Correct answer: ${correctOpts}`;
      feedbackBox.style.color = "red";
    }
    Array.from(optionsBox.children).forEach((btn, idx) => {
      btn.disabled = true;
      if (correctAnswers.includes(idx)) btn.classList.add("correct");
      if (idx === selectedIndex && !correctAnswers.includes(idx))
        btn.classList.add("wrong");
    });
  } else {
    Array.from(optionsBox.children).forEach((btn, idx) => {
      btn.classList.toggle("selected", idx === selectedIndex);
    });
  }
}

function nextQuestion() {
  const qList = mode === "training" ? trainingQuestions : examQuestions;
  if (currentQuestionIndex < qList.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    feedbackBox.textContent = "";
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
    feedbackBox.textContent = "";
  }
}

function submitExam() {
  if (userAnswers.length < examQuestions.length || userAnswers.includes(null)) {
    alert("Please answer all questions before submitting.");
    return;
  }
  let correctCount = 0;
  let detailedResults = [];
  examQuestions.forEach((q, idx) => {
    const userAns = userAnswers[idx];
    const isCorrect = q.correctAnswers.includes(userAns);
    if (isCorrect) correctCount++;
    const correctOpts = q.correctAnswers.map((i) => q.options[i]).join(", ");
    detailedResults.push({
      question: q.question,
      userAnswer: q.options[userAns],
      correctAnswer: correctOpts,
      isCorrect,
    });
  });
  const passMark = Math.ceil(examQuestions.length * 0.85);
  const pass = correctCount >= passMark;
  const passMsg = pass
    ? "🎉 Congratulations! You passed the exam."
    : "❌ Sorry, you failed the exam.";
  resultBox.innerHTML = `
      <h2>Result</h2>
      <p>Score: ${correctCount} / ${examQuestions.length}</p>
      <p>${passMsg}</p>
      <hr/>
      <h3>Review</h3>
      <ol>
        ${detailedResults
          .map(
            (res) => `
          <li>
            <b>${res.question}</b><br/>
            Your answer: <span style="color:${
              res.isCorrect ? "green" : "red"
            }">${res.userAnswer || "No answer"}</span><br/>
            Correct answer: <b>${res.correctAnswer}</b>
          </li>`
          )
          .join("")}
      </ol>`;
  resultBox.classList.remove("hidden");
  questionBox.textContent = "";
  optionsBox.innerHTML = "";
  feedbackBox.textContent = "";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  submitBtn.style.display = "none";
}

nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
submitBtn.addEventListener("click", submitExam);

trainTypeSelector.addEventListener("change", () => {
  const part = parseInt(partSelector.value);
  const type = trainTypeSelector.value;
  if (!isNaN(part)) {
    startTraining(part, type === "1");
  }
});
document.getElementById("start-exam-btn").addEventListener("click", startExam);

partSelector.addEventListener("change", () => {
  const part = parseInt(partSelector.value);
  const type = trainTypeSelector.value;
  if (!isNaN(part)) {
    startTraining(part, type === "1");
  }
});

loginBtn.addEventListener("click", () => {
  const password = passwordInput.value.trim();
  if (password === "admin123") {
    passwordGate.style.display = "none";
    appContainer.style.display = "block";

    const part = parseInt(partSelector.value);
    const type = trainTypeSelector.value;
    startTraining(part, type === "1");
  } else {
    alert("Wrong password");
  }
});
