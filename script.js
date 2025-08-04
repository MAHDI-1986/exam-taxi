const BASE_QUESTIONS = [
  {
    question:
      "En av dine ansatte rapporterer at en passasjer har glemt håndbagasje i drosjen. Hvem har ansvaret for den gjenglemte håndbagasjen?",
    options: [
      "Drosjepassasjeren",
      "Drosjeforsikring",
      "Drosjesjåføren",
      "Drosjeeieren",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er en moral?",
    options: [
      "Det er når du gir moralsk hjelp til de ansatte",
      "Det er rett og galt",
      "Det er personlig veiledning",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvor mange dager er lovlig å ta ferie?",
    options: ["25 dager", "30 dager", "20 dager", "15 dager"],
    correctAnswers: [0],
  },
  {
    question:
      "Hvilke tilleggsinnretninger skal være tilkoblet taksameteret under bruk?",
    options: ["Mobiltelefon", "Anlegg", "Tachograf", "Takskilt"],
    correctAnswers: [3],
  },
  {
    question: "Hvem er ansvarlig for bruken av taksameter?",
    options: [
      "Justisvesenet, dersom takstene blir uforholdsmessig høye",
      "Sjåføren, dersom løyvehaveren er en annen enn den som kjører bilen",
      "Påtalemyndighetenes, dersom det avdekkes feil eller mangler ved den daglige kontrollen",
      "Løyvehaveren, dersom ingen særlig grunn taler for at sjåfør anses som bruker",
    ],
    correctAnswers: [0],
  },
  {
    question: "Når er det tillatt å ta i bruk et taksameter i kjøretøyet?",
    options: [
      "Når tollvesenet har kontrollert og godkjent installasjonen, samt aktuelle tilleggsinnretninger",
      "Når Justervesenet har kontrollert og godkjent installasjonen, samt aktuelle tilleggsinnretninger",
      "Når Konkurransetilsynet har kontrollert og godkjent installasjonen",
      "Når Statens vegvesen har godkjent installasjonen og nødvendige tilleggsinnretninger",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "I hvilket tilfelle skal du melde ifra til Justervesenet før et taksameter kan tas i bruk?",
    options: [
      "Dersom taksameteret slutter å varsle om pålagte pauser",
      "Ved endring av dekkdimensjon som påvirker måleresultatet i vesentlig grad",
      "Ved vesentlig endring av kjøretøyets avgiftsklasse",
      "Dersom endring i konsumprisindeksen reduserer inntektsgrunnlaget",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Hva er riktig reaksjon dersom det kommer fram at en av dine sjåfører har stoppet taksameteret under et oppdrag?",
    options: [
      "Dersom sjåføren bærer all risiko alene, er dette akseptert",
      "Dersom nettoinntekten blir høyere uten takst, er det akseptabelt",
      "Sjåføren kan beholde et eventuelt overskudd",
      "Sjåføren må bli forklart at dette er bedrageri",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "Hvilken nettadresse må du bruke ved registrering av et drosjefirma?",
    options: ["www.nav.no", "www.altinn.no", "www.lovdata.no", "www.spk.no"],
    correctAnswers: [1],
  },
  {
    question: "Hva er riktig med hensyn til sykepenger for ansatte?",
    options: [
      "Det offentlige dekker sykepenger fra første sykedag",
      "Arbeidsgiver skal dekke alle sykepenger for deltidsansatte",
      "Arbeidsgiver dekker sykepenger fra andre sykedag",
      "Arbeidsgiver må dekke inntil 16 virkedager",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hvilke poster skal inngå i beregning av feriepenger?",
    options: [
      "Utbetalt kilometergodtgjørelse",
      "Utbetalt vederlag som vikar i en begrenset tidsperiode",
      "Utbetalt feriepenger",
      "Utbetalt utlegg for bompenger",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvilket ansvar har arbeidsgiver om din ansatte ønsker ferie?",
    options: [
      "Arbeidsgiver plikter å sørge for at arbeidstakeren som krever det, avvikler lønnsom ferietid i tidsrommet 1. juni til 30. september",
      "Arbeidsgiver som har sagt opp arbeidstaker, har ansvar for at all ferie tas i oppsigelsestiden",
      "Arbeidsgiver kan pålegge arbeidstakeren med tariffavtale å ta kortere ferie enn de som ikke er organiserte",
      "Arbeidsgiver har ansvar for at arbeidstaker avvikler høst- og vinterferie samtidig med skoleferien",
    ],
    correctAnswers: [0],
  },
  {
    question: "Når gjelder en gjensidig oppsigelsestid på 2 måneder?",
    options: [
      "Dersom arbeidstakeren har vært ansatt i mer enn 1 år sammenhengende i samme virksomhet",
      "Dersom arbeidstakeren har vært ansatt i mer enn 2 år sammenhengende i samme virksomhet",
      "Dersom arbeidstakeren har vært ansatt i mer enn 5 år sammenhengende i samme virksomhet",
      "Dersom arbeidstakeren har vært ansatt i mer enn 10 år sammenhengende i samme virksomhet",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er riktig om oppsigelse av en ansatt sjåfør?",
    options: [
      "Oppsigelsen skal inneholde opplysninger om arbeidstakerens lønns- og arbeidsforhold",
      "Oppsigelsen skal sendes enten per brev, eller som e-post til arbeidstakerens e-postadresse",
      "Oppsigelsen skal inneholde opplysninger om arbeidssted og arbeidstid",
      "Oppsigelsen skal sendes til arbeidstakeren personlig og rekommandert til arbeidstakerens adresse",
    ],
    correctAnswers: [3],
  },
  {
    question: "Eneretter for drosje kan bare tildeles i kommuner som har–",
    options: [
      "Over 40 000 innbyggere og befolkningstetthet over 60 innbyggere per km²",
      "Under 30 000 innbyggere og befolkningstetthet på under 70 innbyggere per km²",
      "Under 20 000 innbyggere og befolkningstetthet på under 80 innbyggere per km²",
      "Over 50 000 innbyggere og befolkningstetthet over 50 innbyggere per km²",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "Hva blir gjennomsnittlig årlig avskrivninger dersom en investering på kr. 400 000 avskrives over 8 år?",
    options: ["Kr. 0", "Kr. 40 000", "Kr. 50 000", "Kr. 80 000"],
    correctAnswers: [2],
  },
  {
    question:
      "Den eller de som ønsker å etablere et aksjeselskap, må stille til rådighet en aksjekapital på ...",
    options: ["Kr 30 000", "Kr 50 000", "Kr 100 000", "Kr 200 000"],
    correctAnswers: [0],
  },
  {
    question:
      "Hvor stor sum er eieren av et enkeltmannsforetak økonomisk ansvarlig for?",
    options: ["Kr 50 000", "Kr 250 000", "Kr 1 000 000", "Ubegrenset beløp"],
    correctAnswers: [3],
  },
  {
    question:
      "Hva stor sum er den enkelte aksjonær økonomisk ansvarlig for i et aksjeselskap?",
    options: ["Aksjeinnskuddet", "Kr 100 000", "Kr 600 000", "Ubegrenset"],
    correctAnswers: [0],
  },
  {
    question:
      "Når er det etter bestemmelsene om pliktmessig avhold forbudt å nyte alkohol?",
    options: [
      "8 timer før tjenestetiden begynner",
      "11 timer før tjenestetiden begynner",
      "8 timer etter at tjenestetiden er over",
      "11 timer etter at tjenestetiden er over",
    ],
    correctAnswers: [0],
  },
  {
    question: "Oppgaven gjelder pliktmessig avhold.",
    options: [
      "Fører må ikke nyte alkohol eller ta annet berusende i tjenestetiden og i et tidsrom av...",
      "8 timer før tjenestetiden begynner",
      "8 timer etter tjenestetiden avsluttes",
      "10 timer før tjenestetiden begynner",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er et ansvarlig selskap (ANS)?",
    options: [
      "Et offentlig foretak som skal drives til selvkost",
      "Et selskap som eies av to eller flere personer som har et ubegrenset personlig ansvar for virksomheten",
      "Et aksjeselskap med flere enn en eier som er solidarisk ansvarlig for inntektene",
      "Et selskap med en eier som er personlig ansvarlig for selskapets gjeld",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva betyr det at et selskap er insolvent?",
    options: [
      "Selskapet kan ikke innfri krav ved forfall og har mer gjeld enn verdier",
      "Selskapet har god likviditet og kan betale sin gjeld",
      "Selskapet har ikke tilstrekkelige driftsinntekter eller kassekreditt",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "Den største kostnaden ved å ha kjøretøy registrert som drosje er ...",
    options: [
      "Renter og avdrag på finansieringen",
      "Ansvar- og kaskoforsikringen",
      "Drivstoffkostnaden",
      "Kjøretøyets verditap",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er en egenmelding?",
    options: [
      "En melding som den ansatte må fylle ut ved søknad om fri uten lønn",
      "En melding fra lege ved sykefravær over lang tid",
      "En melding som den ansatte må fylle ut ved søknad om fri med lønn",
      "En melding som den ansatte må overlevere til arbeidsgiver ved korttidssykdom",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "Hvilke krav må du blant annet oppfylle for å få kjøreseddel for drosje?",
    options: [
      "Ha enerett i et større byområde, og gyldig kjøreseddel",
      "Ha god vandel, tilfredsstillende økonomisk evne og drive fast og varig virksomhet i Norge",
      "Ha økonomisk utdanning fra høyskole / eller universitet, i tillegg til fagbrev som sjåfør",
      "Ha gyldig førerkort i alle klasser, og utdanning innen service og samferdsel",
    ],
    correctAnswers: [1],
  },
  {
    question: "Kassekreditt er en låneform. Hva er riktig?",
    options: [
      "Penger til å betale skatter, avgifter og pensjonsinnskudd for de ansatte",
      "Kreditt for finansiering av kostbare langsiktige investeringer",
      "Bedriften har et bevilget beløp innenfor en låneramme til finansiering av driften",
      "Bedriften får en spareavtale med høyere sparerente enn utlånsrente",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er riktig om enerett for drosjetransport?",
    options: [
      "Enerett skal tildeles i alle kommuner, uavhengig av botall og innbyggere",
      "Enerett kan tildeles etter konkurranse og gjelde for inntil 5 år",
      "Enerett gir drosjeløyvehavere fortrinnsrett og gjelder for hele landet",
      "Enerett gir passasjerene en eksklusiv rett til lavere transportkostnad",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Hva er riktig om arbeidsgivers rett til å si opp arbeidstakeren som vært sykmeldt i seks måneder?",
    options: [
      "Arbeidstakere kan sies opp dersom fraværet er på grunn av ulykke eller sykdom",
      "Arbeidstakeren er pliktig å levere oppsigelse ved alvorlig sykdom",
      "Arbeidstakeren kan sies opp i perioden arbeidsgiveren betaler sykepenger (de første 16 dagene)",
      "Arbeidstakere som er borte fra arbeidet på grunn av ulykke eller sykdom kan ikke sies opp av denne grunn",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva består et merverdiavgiftsoppgjør av?",
    options: [
      "Utgående merverdiavgift pluss inngående merverdiavgift",
      "Inngående merverdiavgift pluss utgående merverdiavgift",
      "Inngående merverdiavgift minus utgående merverdiavgift",
      "Utgående merverdiavgift minus inngående merverdiavgift",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "En drosjesjåfør har kjørt inn kr 318 000 inklusive merverdiavgift i løpet av en termin.",
    options: [
      "Hva blir den utgående merverdiavgiften når satsen er på 6 % på transporttjenesten?",
      "Kr 18 000",
      "Kr 63 600",
      "Kr 79 500",
      "Kr 19 080",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva beregnes årets feriepenger av?",
    options: [
      "Skattemessige fordel fri bil og telefon i tillegg til fjorårets netto lønn",
      "Gjennomsnittet av netto utbetalt lønn fra foregående inntektsår",
      "Prosentandel av fjorårets utbetalte brutto lønn",
      "Promille av utbetalt brutto bonuser og ferielønn fra året før utbetalingsåret",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "Når er arbeidsgiver forpliktet til å utbetale sykepenger ved de ansattes sykefravær?",
    options: [
      "Fra første sykedag",
      "Etter to karensdager",
      "Etter 16 dagers sykdom",
      "Arbeidsgiver har ingen forpliktelse til å utbetale sykepenger ved ansattes sykefravær",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "Hvor lenge må en næringsdrivende ta vare på bilag og dokumentasjon (regnskapsmateriale) dersom bilagene er på papir?",
    options: [
      "Regnskapsmateriale og bilagsdokumentasjon skal oppbevares i Norge i fem år etter regnskapsårets slutt",
      "Regnskapsmateriale skal oppbevares i Norge i ett år etter regnskapsårets slutt og skattemeldingen er innsendt og skatteoppgjøret er foretatt",
      "Regnskapsmateriale anbefales oppbevart i tre år dersom det foreligger ubetalte regninger",
      "Regnskapsmateriale skal oppbevares i Norge i ti år etter regnskapsårets slutt",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvor ofte skal HMS-arbeidet utføres?",
    options: [
      "Hvert ett år",
      "Hvert halvår",
      "Kontinuerlig",
      "En gang i måneden",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "Hva er riktig dersom en drosjeeier ikke betaler skyldig merverdiavgift?",
    options: [
      "Drosjeeierens løyve blir inndratt umiddelbart",
      "Myndighetene sender en påminnelse om utestående merverdiavgift tidligst 30 dager etter forfall",
      "Drosjeeieren må overføre merverdiavgiften til neste merverdiavgiftsoppgjør",
      "Myndighetene sender ut varsel om tvangsinnfordring som blir gjennomført kort tid etter forfall",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "Hva er en av hovedhensiktene med kjøre- og hviletidsbestemmelsene?",
    options: [
      "Sørge for at transporten kommer raskere fram",
      "Gunstige konkurransevilkår som gir lavere transportkostnad",
      "Forbedre trafikksikkerheten for alle trafikanter",
      "Fordele transportoppdrag til land med mindre restriktivt lovverk",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "På hvilket tidspunkt er det økonomisk riktig å vurdere bytte til ny drosje?",
    options: [
      "Når den gamle bilens renter og avskrivninger øker mer enn den nye bilens gjennomsnittlige variable kostnader",
      "Når det presenteres en ny modell som har bedre drivstofføkonomi",
      "Når de variable inntektene blir mindre ved å kjøpe en ny bil",
      "Når de totale kostnadene det neste året forventes å bli lavere på ny bil enn for den gamle",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er riktig om godtgjøring (lønn) for utført arbeid?",
    options: [
      "Arbeidsgiver kan velge mellom å utbetale laveste beløp beregnet av minstelønn etter avtalt lønn",
      "Arbeidsgiver skal beregne skattetrekk av lønn og annet vederlag for utført arbeid i bedriften",
      "Det er opp til arbeidstaker om mottatt lønn skal innberettes til myndighetene for beregning av skatt",
      "Det er frivillig om den ansatte ønsker at arbeidsgiver skal foreta skattetrekk ved utbetaling av lønn",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er riktig dersom et aksjeselskap går konkurs?",
    options: [
      "Underskriverne på tinglysningsdokumentene er ansvarlige for å varsle myndighetene om konkursen",
      "Aksjeeierne er ansvarlige for gjeld kun hvis de er ansatt i selskapet",
      "Aksjeeierne er solidarisk ansvarlige for bedriftens totale tap",
      "Aksjeeierne taper kun sin innskutte egenkapital",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er arbeidsgivers trygdeforpliktelser?",
    options: [
      "Utbetaler tilleggspensjon",
      "Spare opp midler til uføretrygd",
      "Dekke privat helseforsikring",
      "Betale inn arbeidsgiveravgift",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er riktig om planlegging av arbeidstid og pauser?",
    options: [
      "Planlegges enhetlig for hele døgnet",
      "Dersom den daglige arbeidstiden vil overstige 10 timer, må arbeidstaker ha to pauser",
      "Dersom det arbeides sammenhengende mindre enn 8 timer, kan arbeidstaker fraskrive seg pause",
      "Dersom den daglige arbeidstiden vil overstige fem og en halv time, skal arbeidstaker ha minst en pause.",
    ],
    correctAnswers: [3],
  },
  {
    question: "Indirekte skatt...",
    options: [
      "Inndrives basert på hvilken trygdeavgift",
      "Innkreves ved kjøp av varer og tjenester",
      "Inndrives basert på lønnsinntekter",
      "Innkreves skatteyters formue",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Hvilken forskrift skal oppbevares i drosjebilen og forvises på oppfordring fra passasjerene?",
    options: [
      "Forskrift om krav til taksameter",
      "Forskrift om grunnutdanning og etterutdanning for yrkessjåfører (yrkessjåførforskriften)",
      "Forskrift om takstberegning og maksimalpriser for løyvepliktig drosjetransport med motorvogn",
      "Forskrift om bruk av kjøretøy",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er etterskuddsskatt?",
    options: [
      "Det er beløpet i skatteoppgjøret når Skatteetaten har beregnet riktig personskatt",
      "Det er det samme som restskatt",
      "Det er skatt beregnet av skattbart resultatet i et aksjeselskap",
      "Det er skatt beregnet av antatt netto skattbar inntekt inneværende år",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er riktig om utgående merverdiavgift?",
    options: [
      "Utgående merverdiavgift er en grunnavgift for regulering av bedriftens omsetning",
      "Utgående merverdiavgift er omsetningsavgift for kjøretøyenes drivstoffbruk",
      "Utgående merverdiavgift beregnes av bedriftens kjøp av varer og tjenester",
      "Utgående merverdiavgift beregnes av bedriftens omsetning",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva må du ha med når du skal utarbeide et budsjett?",
    options: [
      "Inntekter minus kostnader",
      "Oversikt over fremtidige innbetalinger minus utbetalinger",
      "Alle kalkulerte kostnader etter avsluttet anbudsoppdrag",
      "Alle regnskapsposter som reflekterer regnskapet",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva må arbeidsgiver gjøre dersom en arbeidstaker ... Døgnet?",
    options: [
      "Sørge for at drosjen til enhver tid er oppvarmet, ren og klar til bruk",
      "Utbetale lønn og honorarer av innkjørt etter hvert skift (daglig godtgjøring)",
      "Det skal utarbeides en arbeidsplan som viser hvilke uker, dager og tider den enkelte arbeidstaker skal arbeide",
      "Sørge for at den ansatte har tilgang på hvilerom og mat i løpet av den tiden arbeidstakeren arbeider",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er et enkeltpersonforetak?",
    options: [
      "Foretak med en eier som har ubegrenset ansvar for foretakets forpliktelser",
      "Foretak registrert som AS hvor en person er ansvarlig for alle aksjene",
      "Foretak med en eier hvor eieren har begrenset ansvar for foretakets forpliktelser",
      "Foretak bestående av inntil to like eiere med likt ansvar",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "Hva skjer med totale kapitalkostnader når vi kjører mindre i næring?",
    options: [
      "De synker i forhold til antall reduserte kilometer kjørt",
      "De forblir de samme uansett",
      "Rentene som er en del av kapitalkostnadene synker",
      "De øker i forhold til antall redusert kilometer",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er riktig om forskuddstrekk?",
    options: [
      "Settes inn på bedriftenes plasseringskonto",
      "Beregnes av innkjørte inntekter med fratrekk av kostnader",
      "Settes inn på skattetrekkskontoen senest første virkedag etter lønnsutbetaling",
      "Beregnes av den ansattes stillingsbrøk",
    ],
    correctAnswers: [2],
  },
  {
    question: "I hvilket tilfelle kan du si opp (avskjedige) en ansatt?",
    options: [
      "Dersom den ansatte har levert bilen etter endt skift uten å ha vasket den",
      "Dersom den ansatte har kommet for sent på jobb tre ganger",
      "Dersom den ansatte har nektet å ta opp en passasjer med synlig kniv",
      "Dersom den ansatte har stjålet fra passasjeren",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er riktig om bokføring?",
    options: [
      "Alle opplysninger om sjåførens kjøremåte og bilens drivstoffbruk føres i egen kjørebok",
      "Bilag og dokumentasjon skal bokføres og spesifiseres korrekt og nøyaktig",
      "Alle drosjeturer skal fortløpende bokføres og spesifiseres med distanse og kjøretid",
      "Bilag kan bokføres en gang per år, selv om man kan levere merverdiavgiftsmelding hver annen måned",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er arbeidsgiveravgift?",
    options: [
      "En avgift bedriften må betale basert på lønnen til de ansatte",
      "En trygdeytelse som avsettes og utbetales som feriepenger til ansatt",
      "En avgift hver ansatt må betale basert på lønnen",
      "En fiskalavgift bedriften må betale basert på overskuddet",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er riktig bruk av loggførte opplysninger om drosjeturer?",
    options: [
      "Opplysninger fra bilens GPS skal loggføres og lagres i 40 dager",
      "Opplysninger fra AutoPASS-brikke skal slettes etter syv virkedager",
      "Opplysninger fra et satellittbasert kommunikasjonssystem (GNSS), skal lagres i 60 dager",
      "Opplysninger fra MAP skal slettes senest 14 dager etter registrering",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvilke oppsigelsesfrister gjelder ved avskjed?",
    options: [
      "Øyeblikkelig fratreden",
      "Gjensidig oppsigelsestid på 1 måned",
      "Gjensidig oppsigelsestid på 14 dager",
      "Det er ikke lov å foreta en direkte avskjed av arbeidstaker",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "Forsikringsselskapene tilbyr ulike typer forsikring for kjøretøy. Hvilken av disse forsikringstypene er lovpålagt?",
    options: [
      "Full kaskoforsikring",
      "Del kaskoforsikring",
      "Bilglassforsikring",
      "Ansvarsforsikring",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er riktig om planlegging av ferie?",
    options: [
      "Det er arbeidsgiver som har styringsretten over ferieavvikling",
      "Feriefritiden bestemmes av myndighetene i forhold til når skolene har ferie",
      "Den ansatte bestemmer selv når egen sommerferie skal avvikles",
      "Fagforeningen har styringsretten over når feriefritiden skal avvikles",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva beregnes årets feriepenger av?",
    options: [
      "Gjennomsnittet av de ansattes lønn fordeles likt mellom de ansatte",
      "Fjorårets opptjente lønn",
      "Fordel av fri bil og telefon i tillegg til fjorårets netto lønn",
      "Ubetalt lønn og ferielønn fra året før utbetalingsåret",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Drosjeløyve gir løyvehaver rett til å benytte motorvogn registrert for maksimalt ...",
    options: ["5 personer", "17 personer", "12 personer", "9 personer"],
    correctAnswers: [3],
  },
  {
    question:
      "En arbeidstaker har vært midlertidig ansatt som vikar i mer enn 3 år. Hvilke rettigheter har arbeidstakeren?",
    options: [
      "Vikariatet kan forlenges inntil 5 år",
      "Arbeidstaker må anmodes om å levere oppsigelse",
      "Vikariatet fortsetter på ubegrenset tid",
      "Arbeidstakeren har krav på fast stilling",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva betraktes som langsiktig gjeld?",
    options: [
      "Manglende innbetalt skattetrekk",
      "Skyldig arbeidsgiveravgift",
      "Ubenyttet kassekreditt siste år",
      "Pantelån med nedbetalingsfrist over ett år",
      "63.⁠ ⁠Hvor mange løyvehaver rett til å benytte motorvogn registrert for en drosje?",
      "⁠  ⁠17 personer",
      "⁠  ⁠12 personer",
      "⁠  ⁠5 personer",
      "⁠  ⁠ 9 personer",
      "64.⁠ ⁠Du skal ansette en sjåfør i en hel fast stilling. Hva skal blant annet være med i den skriftlige arbeidsavtalen?",
      "⁠  ⁠Planlegging av pauser og hvor disse skal tas",
      "⁠  ⁠Tidspunktet for arbeidsforholdets begynnelse og slutt",
      "⁠  ⁠De faglige krav som gjelder for stillingen",
      "⁠  ⁠ Lengden av den avtalte daglige og ukentlige arbeidstid",
      "65.⁠ ⁠Hva er riktig om kravene til «tilfredsstillende økonomisk evne» ved tildeling av drosjeløyve?",
      "⁠  ⁠Det skal innbetales en garantisum til løyvemyndigheten",
      "⁠  ⁠Det må opplyses om to private kausjonister som garantister",
      "⁠  ⁠ Det må fremlegges en garantierklæring fra bank eller forsikringsselskap til løyvemyndigheten",
      "⁠  ⁠Det skal framlegges dokumentasjon på at kjøretøyet er betalt",
      "66.⁠ ⁠Hva er riktig om skatt?",
      "⁠  ⁠Eiendomsskatt legges for drosjer kjøpt og eid av virksomheten",
      "⁠  ⁠Formueskatt er frivillig, og betales etter evne og vilje",
      "⁠  ⁠ Inntektsskatt er en direkte skatt på inntekt og formue for enkeltpersoner",
      "⁠  ⁠Personskatt skal beregnes av innbetaling til yrkesskadeforsikringen",
    ],
    correctAnswers: [3, 8, 14, 19, 24],
  },
  {
    question: "Hva er riktig om forskuddsskatt?",
    options: [
      "Det er skatt som betales før den endelige skatteoppgjøret er klar",
      "Det er forskuddsskatt som betales fortrinnsvis",
      "Det skal betales årlig",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er riktig om enkeltmannsforetak?",
    options: ["Ubegrenset ansvar", "Fast ansvar", "Delvis ansvar"],
    correctAnswers: [0],
  },
  {
    question: "Hva betyr insolvent bedrift?",
    options: [
      "Bedriften kan ikke innfri sine krav",
      "Bedrift med mye gjeld",
      "Bedrift med lite gjeld",
      "Bedrift med anmerkninger",
    ],
    correctAnswers: [0],
  },
  {
    question: "Du får en tur med fem barn. Hva er riktig?",
    options: [
      "Du tar 4 og slipper én",
      "Du kan ta alle 5 med én bil",
      "Du kan bestille nok bil for alle",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva trenger du utenom taksameter?",
    options: ["MAP", "GPS", "Mobiltelefon"],
    correctAnswers: [1],
  },
  {
    question: "Hva er riktig om aksjekapitalinnskudd?",
    options: ["Kr 100 000", "Kr 60 000", "Kr 30 000", "Ubegrenset"],
    correctAnswers: [2],
  },
  {
    question:
      "Du har en bil. Ett år senere selger du bilen som brukt. Hva er en pris i henhold til dagens kurs?",
    options: ["75%", "70%", "60%"],
    correctAnswers: [0],
  },
  {
    question:
      "Oppsigelse – 2 måneder til ansatt: Hvor lenge har han/hun vært på jobb?",
    options: ["Mer enn 2 år", "Mer enn 3 år", "Mer enn 5 år", "Mer enn 10 år"],
    correctAnswers: [2],
  },
  {
    question: "Hvem dekker yrkesskade?",
    options: [
      "Forsikringen",
      "Arbeidsloven",
      "Myndighetene",
      "Arbeidsforsikringen",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hvordan regnes merverdiavgift?",
    options: [
      "En fiskalavgift bedriften må betale basert på overskuddet",
      "En avgift bedriften må betale basert på lønnen til de ansatte",
      "En trygdeytelse som avsettes og utbetales som feriepenger til ansatte",
      "Merverdiavgift (MVA) regnes ved å bruke en enkel formel som tar hensyn til den inngående merverdiavgiften (MVA på kjøp) og den utgående merverdiavgiften (MVA på salg). Denne formelen er:",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hvis en drosjeeier ikke betaler skyldig merverdiavgift?",
    options: [
      "Løyve blir inndratt umiddelbart",
      "Myndighetene sender en påminnelse om utestående merverdiavgift tidligst 30 dager etter forfall",
      "Drosjeeieren må overføre merverdiavgiften til neste merverdiavgiftsoppgjør",
      "Myndighetene sender ut varsel om tvangsinnfordring som blir gjennomført kort tid etter forfall",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er planlegging av arbeidstid og pauser?",
    options: [
      "plantes en het Den den daglige meget.",
      "Dersom den daglige arbeidstiden vil oversige over 5 1⁄2 time, skal arbeidstaker ha minst en pause.",
      "Dersom den daglige arbeidstiden vil overstige tem og en het, kawheidstaker ha minst en pas.",
      "Dersom den si in sammenhengende arbeten indre enn åñs tinter på att skilt, skal arbeidstaker abade uten paner.",
    ],
    correctAnswers: [1],
  },
  {
    question: "HMS-arbeidet utføres?",
    options: ["Kontinuerlig", "SESE", "En gang i måneden"],
    correctAnswers: [0],
  },
  {
    question:
      "En arbeidstaker har vært midlertidig ansatt som vikar i mer enn 3 år. Hvilke rettigheter har arbeidstakeren?",
    options: [
      "Vikariatet kan forlenges inntil 5 år",
      "Arbeidstaker må anmodes om å levere oppsigelse",
      "Vikariatet fortsetter på ubegrenset tid",
      "Arbeidstakeren har krav på fast stilling",
    ],
    correctAnswers: [3],
  },
  {
    question: "Dersom du har en tur, hvordan registrerer du det?",
    options: ["GPS", "Takstameter", "GNSS"],
    correctAnswers: [2],
  },
  {
    question: "Hva gjelder utenom taksameter i en drosje?",
    options: ["Takskilt", "Løyvenummeret", "Registreringsnummer"],
    correctAnswers: [0],
  },
  {
    question: "Når kan arbeidstaker avbryte jobben?",
    options: [
      "Dersom det er farlig for liv og helse",
      "Dersom det er lange arbeidstider",
      "Dersom arbeidsmiljøet ikke er trygt",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er en OTP?",
    options: [
      "Det er obligatorisk tjenestepensjon",
      "Det er trygdepensjon for ansatte",
      "Det er lønnsgaranti for de ansatte",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er ansvaret for DA?",
    options: [
      "Enkeltforetak som eies av to personer eller flere med ubegrenset ansvar",
      "Aksjeselskap som har 30 tusen",
      "Aksjeinnskudd-selskap",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvem har ansvaret hvis noen har gjenglemt bagasje på drosje?",
    options: [
      "Eieren av bilen",
      "Kan beholde inntil tre måneder",
      "Rimelig tid – skal leveres til politiet",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hvor kan du registrere aksjeselskap?",
    options: ["Foretaksregisteret", "Skatteetaten", "Justervesenet"],
    correctAnswers: [0],
  },
  {
    question: "Hva er en leasing?",
    options: [
      "Korttidsleie for biler",
      "Bedriftsfinansiering og avdragsordning",
      "Langtids bolig­utleie",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Hva blir gjennomsnittlig årlig avskrivninger dersom en investering på kr. 40 000 avskrives over 8 år?",
    options: [
      "5 000 pr år",
      "7 000 pr år",
      "9 000 pr år",
      
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
  submitBtn.classList.add("hidden");
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
  submitBtn.classList.remove("hidden");
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
  // Removed hiding of navigation buttons in exam mode to ensure visibility on mobile
  feedbackBox.textContent = "";
  renderQuestion();
}

function renderQuestion() {
  // Ensure submit button is only visible in exam mode
  if (mode === "exam") {
    submitBtn.classList.remove("hidden");
  } else {
    submitBtn.classList.add("hidden");
  }
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

