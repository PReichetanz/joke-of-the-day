const jokes = [
  {
    id: 1,
    question: 'Was ist groß, grau, und vollkommen egal?',
    answer: 'Ein Irrelephant.',
  },
  {
    id: 2,
    question: 'Auf dem Todesstern ist heute Vadertag.',
    answer: '',
  },
  {
    id: 3,
    question: 'Wohin bringen Bananen vormittags ihre kleinen Kinder?',
    answer: 'In die Chiquita.',
  },
  {
    id: 4,
    question: 'Hab mir ein Dach gekauft.',
    answer: "Ging auf's Haus.",
  },
  {
    id: 5,
    question: 'Wie nennt man einen Waschbären, der viel trainiert?',
    answer: 'Waschmaschine',
  },
  {
    id: 6,
    question: 'Was sagt ein Pirat, wenn er trockenes Gras sieht?',
    answer: 'A, Heu.',
  },
  {
    id: 7,
    question: 'Der Bademeister geht in Rente.',
    answer: 'Er hatte eine chlorreiche Karriere.',
  },
  {
    id: 8,
    question: 'Ich bin heute aus dem Töpferkurs geflogen.',
    answer: 'Hab mich wohl im Ton vergriffen.',
  },
  {
    id: 9,
    question: '"Warum biegen Sie die Äste dieser Tanne gerade?"',
    answer: '"Ich bin Kieferorthopäde."',
  },
  {
    id: 10,
    question: '"Ich stecke in der Bredouille!"',
    answer: '"Oh wie schön, Frankreich!"',
  },
  {
    id: 11,
    question: 'Wer Nachtisch sagt, mousse au chocolat sagen.',
    answer: '',
  },
  {
    id: 12,
    question: 'Bei Hühnern heißt das Chicksal, oder?',
    answer: '',
  },
  {
    id: 13,
    question: '"Mensch, Dein Hund bellt aber tief!"',
    answer: '"Ja, ist ein Subwuffer."',
  },
  {
    id: 14,
    question: 'Habe gestern zwei Biber beim Essen beobachtet.',
    answer: 'Es gab Steg.',
  },
  {
    id: 15,
    question: 'Captain Kirk hat immer Brückentag.',
    answer: '',
  },
  {
    id: 16,
    question: 'Welcher Vogel hat Darth Vader auf den Kopf gekackt?',
    answer: 'Der Star Wars.',
  },
  {
    id: 17,
    question: '"Warum ist deine Wohnung so dreckig?"',
    answer: '"I don\'t care."',
  },
  {
    id: 18,
    question: 'Für wen kauft ein Egoist Obst?',
    answer: 'Pfirsich!',
  },
  {
    id: 19,
    question: 'Liberal als gar kein Fisch.',
    answer: '(wait for it)',
  },
  {
    id: 20,
    question: 'Weißt Du, was ein Hammer ist?',
    answer: 'Ein Werkzeug.',
  },
  {
    id: 21,
    question:
      'Was sagte 50 Cents Mutter, wenn er etwas Verbotenes getan hatte?',
    answer: '59!',
  },
  {
    id: 22,
    question:
      'Was sagt ein Chemiker, wenn ihm ein Goldbarren auf den Fuß fällt?',
    answer: 'Au!',
  },
  {
    id: 23,
    question: 'Payback ist wie Flensburg:',
    answer: "Hast Du genug Punkte, gibt's ein Fahrrad.",
  },
  {
    id: 24,
    question: 'Was ist das Lieblingsgebäude von Vampiren in New York?',
    answer: 'Das Vampire State Building.',
  },
  {
    id: 25,
    question: '"Darf ich Dir einen Zeitreisewitz erzählen?"',
    answer: '"Ja, gerne!" - "Du mochtest ihn nicht."',
  },
  {
    id: 26,
    question: 'Wie heißt ein Ritter ohne Rüstung?',
    answer: 'Wilhelm',
  },
  {
    id: 27,
    question: 'Patient beim Urologen: "Ich krieg meine Vorhaut nicht zurück.',
    answer: '"Sowas verleiht man ja auch nicht!"',
  },
  {
    id: 28,
    question: 'Hans weigert sich, die Uhr aufzuheben.',
    answer: 'Er sagt, er habe kein "Urheberrecht".',
  },
  {
    id: 29,
    question:
      'Geht eine schwangere Frau in eine Bäckerei ud sagt: "Ich krieg ein Brot."',
    answer: 'Darauf der Bäcker: "Sachen gibt\'s!"',
  },
  {
    id: 30,
    question: '"Papi, warum hast Du eigentlich Mami geheiratet?"',
    answer: '"Siehst Du, Ingrid, die Kinder können es auch nicht verstehen!"',
  },
  {
    id: 31,
    question: 'Was macht eine Wolke mit Juckreiz?',
    answer: 'Sie fliegt zum Wolkenkratzer.',
  },
  {
    id: 32,
    question: 'Was steht auf dem Grabstein des Hausmeisters?',
    answer: '"Er kehrt nie wieder."',
  },
  {
    id: 33,
    question: "Was ist weiß und guckt durch's Schlüssellock?",
    answer: 'Ein Spannbettlaken.',
  },
  {
    id: 34,
    question: 'Was sitzt auf dem Baum und winkt?',
    answer: 'Ein Huhu.',
  },
  {
    id: 35,
    question: 'Was machen zwei wütende Schafe?',
    answer: 'Sie kriegen sich in die Wolle.',
  },
  {
    id: 36,
    question: 'Sag mal, ist der Fisch immer so nervig?',
    answer: 'Ja, er ist ein Stör.',
  },
  {
    id: 37,
    question: 'Was ist das Gegenteil von Katalog?',
    answer: 'KatasagtedieWahrheit.',
  },
  {
    id: 38,
    question:
      'Ein Mann sagt zu seinem Kollegen: "Hab mich bei der Bundeswehr als Gebirgsjäger beworben. Glaube, dass ich das gut hinbekomme. So schnell sind die ja nicht."',
    answer: '',
  },
  {
    id: 39,
    question: 'Warum findet der Henker nie den Rückweg?',
    answer: 'Weil er nur die Hinrichtung kennt.',
  },
  {
    id: 40,
    question: 'Warum konnte die Polizei die Pfanne nicht festnehmen?',
    answer: 'Sie war antihaftbeschichtet.',
  },
  {
    id: 41,
    question: 'Was nennt man ein Kaninchen im Fitnessstudio?',
    answer: 'Pumpernickel',
  },
  {
    id: 42,
    question: 'Wer hat das Sagen auf Sylt?',
    answer: 'Der Syltan.',
  },
  {
    id: 43,
    question: 'Was für ein Bär läuft durch den Wald und schreit "Kugel!"?',
    answer: 'Ein Kugel-Schrei-Bär.',
  },
  {
    id: 44,
    question: 'Egal, wie jung Deine Freunde sind:',
    answer: "Jesus' Freunde waren Jünger.",
  },
  {
    id: 45,
    question: 'Wer lebt im Dschungel und schummelt?',
    answer: 'Mogli',
  },
  {
    id: 46,
    question: 'Was sucht ein einarmiger Mann in der Einkaufsstraße?',
    answer: 'Einen Secondhand-Shop.',
  },
];

export default jokes;
