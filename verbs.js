// Spanish Verb Conjugation Data
// Pronouns: yo, tú, él/ella/usted, nosotros, ustedes/ellos
var verbPronouns = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'ustedes/ellos'];

var verbCategories = [
    {id:'essential', label:'Esenciales', en:'Essential', cs:'Základní', de:'Wesentlich', it:'Essenziali', pt:'Essenciais'},
    {id:'common', label:'Comunes', en:'Common', cs:'Běžná', de:'Häufig', it:'Comuni', pt:'Comuns'},
    {id:'daily', label:'Cotidianos', en:'Daily life', cs:'Každodenní', de:'Alltäglich', it:'Quotidiani', pt:'Cotidianos'},
    {id:'communication', label:'Comunicación', en:'Communication', cs:'Komunikace', de:'Kommunikation', it:'Comunicazione', pt:'Comunicação'},
    {id:'movement', label:'Movimiento', en:'Movement', cs:'Pohyb', de:'Bewegung', it:'Movimento', pt:'Movimento'}
];

var verbData = [
    // ── ESSENTIAL ──
    {
        verb: 'ser', category: 'essential',
        meaning: {es:'ser (permanente)', en:'to be (permanent)', cs:'být (trvalý stav)', de:'sein (dauerhaft)', it:'essere (permanente)', pt:'ser (permanente)'},
        tenses: {
            'Presente': ['soy', 'eres', 'es', 'somos', 'son'],
            'Pretérito': ['fui', 'fuiste', 'fue', 'fuimos', 'fueron'],
            'Imperfecto': ['era', 'eras', 'era', 'éramos', 'eran'],
            'Futuro': ['seré', 'serás', 'será', 'seremos', 'serán'],
            'Condicional': ['sería', 'serías', 'sería', 'seríamos', 'serían'],
            'Subjuntivo Presente': ['sea', 'seas', 'sea', 'seamos', 'sean']
        }
    },
    {
        verb: 'estar', category: 'essential',
        meaning: {es:'estar (temporal/ubicación)', en:'to be (temporary/location)', cs:'být (dočasný stav/poloha)', de:'sein (vorübergehend/Ort)', it:'essere (temporaneo/posizione)', pt:'estar (temporário/localização)'},
        tenses: {
            'Presente': ['estoy', 'estás', 'está', 'estamos', 'están'],
            'Pretérito': ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvieron'],
            'Imperfecto': ['estaba', 'estabas', 'estaba', 'estábamos', 'estaban'],
            'Futuro': ['estaré', 'estarás', 'estará', 'estaremos', 'estarán'],
            'Condicional': ['estaría', 'estarías', 'estaría', 'estaríamos', 'estarían'],
            'Subjuntivo Presente': ['esté', 'estés', 'esté', 'estemos', 'estén']
        }
    },
    {
        verb: 'tener', category: 'essential',
        meaning: {es:'tener', en:'to have', cs:'mít', de:'haben', it:'avere', pt:'ter'},
        tenses: {
            'Presente': ['tengo', 'tienes', 'tiene', 'tenemos', 'tienen'],
            'Pretérito': ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvieron'],
            'Imperfecto': ['tenía', 'tenías', 'tenía', 'teníamos', 'tenían'],
            'Futuro': ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendrán'],
            'Condicional': ['tendría', 'tendrías', 'tendría', 'tendríamos', 'tendrían'],
            'Subjuntivo Presente': ['tenga', 'tengas', 'tenga', 'tengamos', 'tengan']
        }
    },
    {
        verb: 'hacer', category: 'essential',
        meaning: {es:'hacer', en:'to do / to make', cs:'dělat / udělat', de:'machen / tun', it:'fare', pt:'fazer'},
        tenses: {
            'Presente': ['hago', 'haces', 'hace', 'hacemos', 'hacen'],
            'Pretérito': ['hice', 'hiciste', 'hizo', 'hicimos', 'hicieron'],
            'Imperfecto': ['hacía', 'hacías', 'hacía', 'hacíamos', 'hacían'],
            'Futuro': ['haré', 'harás', 'hará', 'haremos', 'harán'],
            'Condicional': ['haría', 'harías', 'haría', 'haríamos', 'harían'],
            'Subjuntivo Presente': ['haga', 'hagas', 'haga', 'hagamos', 'hagan']
        }
    },
    {
        verb: 'ir', category: 'essential',
        meaning: {es:'ir', en:'to go', cs:'jít / jet', de:'gehen', it:'andare', pt:'ir'},
        tenses: {
            'Presente': ['voy', 'vas', 'va', 'vamos', 'van'],
            'Pretérito': ['fui', 'fuiste', 'fue', 'fuimos', 'fueron'],
            'Imperfecto': ['iba', 'ibas', 'iba', 'íbamos', 'iban'],
            'Futuro': ['iré', 'irás', 'irá', 'iremos', 'irán'],
            'Condicional': ['iría', 'irías', 'iría', 'iríamos', 'irían'],
            'Subjuntivo Presente': ['vaya', 'vayas', 'vaya', 'vayamos', 'vayan']
        }
    },
    {
        verb: 'haber', category: 'essential',
        meaning: {es:'haber (auxiliar)', en:'to have (auxiliary)', cs:'mít (pomocné)', de:'haben (Hilfsverb)', it:'avere (ausiliare)', pt:'haver (auxiliar)'},
        tenses: {
            'Presente': ['he', 'has', 'ha', 'hemos', 'han'],
            'Pretérito': ['hube', 'hubiste', 'hubo', 'hubimos', 'hubieron'],
            'Imperfecto': ['había', 'habías', 'había', 'habíamos', 'habían'],
            'Futuro': ['habré', 'habrás', 'habrá', 'habremos', 'habrán'],
            'Condicional': ['habría', 'habrías', 'habría', 'habríamos', 'habrían'],
            'Subjuntivo Presente': ['haya', 'hayas', 'haya', 'hayamos', 'hayan']
        }
    },
    // ── COMMON ──
    {
        verb: 'poder', category: 'common',
        meaning: {es:'poder', en:'to be able to / can', cs:'moci / umět', de:'können', it:'potere', pt:'poder'},
        tenses: {
            'Presente': ['puedo', 'puedes', 'puede', 'podemos', 'pueden'],
            'Pretérito': ['pude', 'pudiste', 'pudo', 'pudimos', 'pudieron'],
            'Imperfecto': ['podía', 'podías', 'podía', 'podíamos', 'podían'],
            'Futuro': ['podré', 'podrás', 'podrá', 'podremos', 'podrán'],
            'Condicional': ['podría', 'podrías', 'podría', 'podríamos', 'podrían'],
            'Subjuntivo Presente': ['pueda', 'puedas', 'pueda', 'podamos', 'puedan']
        }
    },
    {
        verb: 'decir', category: 'common',
        meaning: {es:'decir', en:'to say / to tell', cs:'říci / říkat', de:'sagen', it:'dire', pt:'dizer'},
        tenses: {
            'Presente': ['digo', 'dices', 'dice', 'decimos', 'dicen'],
            'Pretérito': ['dije', 'dijiste', 'dijo', 'dijimos', 'dijeron'],
            'Imperfecto': ['decía', 'decías', 'decía', 'decíamos', 'decían'],
            'Futuro': ['diré', 'dirás', 'dirá', 'diremos', 'dirán'],
            'Condicional': ['diría', 'dirías', 'diría', 'diríamos', 'dirían'],
            'Subjuntivo Presente': ['diga', 'digas', 'diga', 'digamos', 'digan']
        }
    },
    {
        verb: 'querer', category: 'common',
        meaning: {es:'querer', en:'to want / to love', cs:'chtít / milovat', de:'wollen / lieben', it:'volere / amare', pt:'querer / amar'},
        tenses: {
            'Presente': ['quiero', 'quieres', 'quiere', 'queremos', 'quieren'],
            'Pretérito': ['quise', 'quisiste', 'quiso', 'quisimos', 'quisieron'],
            'Imperfecto': ['quería', 'querías', 'quería', 'queríamos', 'querían'],
            'Futuro': ['querré', 'querrás', 'querrá', 'querremos', 'querrán'],
            'Condicional': ['querría', 'querrías', 'querría', 'querríamos', 'querrían'],
            'Subjuntivo Presente': ['quiera', 'quieras', 'quiera', 'queramos', 'quieran']
        }
    },
    {
        verb: 'saber', category: 'common',
        meaning: {es:'saber (hechos)', en:'to know (facts)', cs:'vědět (fakta)', de:'wissen (Fakten)', it:'sapere (fatti)', pt:'saber (fatos)'},
        tenses: {
            'Presente': ['sé', 'sabes', 'sabe', 'sabemos', 'saben'],
            'Pretérito': ['supe', 'supiste', 'supo', 'supimos', 'supieron'],
            'Imperfecto': ['sabía', 'sabías', 'sabía', 'sabíamos', 'sabían'],
            'Futuro': ['sabré', 'sabrás', 'sabrá', 'sabremos', 'sabrán'],
            'Condicional': ['sabría', 'sabrías', 'sabría', 'sabríamos', 'sabrían'],
            'Subjuntivo Presente': ['sepa', 'sepas', 'sepa', 'sepamos', 'sepan']
        }
    },
    {
        verb: 'conocer', category: 'common',
        meaning: {es:'conocer (personas/lugares)', en:'to know (people/places)', cs:'znát (lidi/místa)', de:'kennen (Leute/Orte)', it:'conoscere (persone/luoghi)', pt:'conhecer (pessoas/lugares)'},
        tenses: {
            'Presente': ['conozco', 'conoces', 'conoce', 'conocemos', 'conocen'],
            'Pretérito': ['conocí', 'conociste', 'conoció', 'conocimos', 'conocieron'],
            'Imperfecto': ['conocía', 'conocías', 'conocía', 'conocíamos', 'conocían'],
            'Futuro': ['conoceré', 'conocerás', 'conocerá', 'conoceremos', 'conocerán'],
            'Condicional': ['conocería', 'conocerías', 'conocería', 'conoceríamos', 'conocerían'],
            'Subjuntivo Presente': ['conozca', 'conozcas', 'conozca', 'conozcamos', 'conozcan']
        }
    },
    {
        verb: 'dar', category: 'common',
        meaning: {es:'dar', en:'to give', cs:'dát / dávat', de:'geben', it:'dare', pt:'dar'},
        tenses: {
            'Presente': ['doy', 'das', 'da', 'damos', 'dan'],
            'Pretérito': ['di', 'diste', 'dio', 'dimos', 'dieron'],
            'Imperfecto': ['daba', 'dabas', 'daba', 'dábamos', 'daban'],
            'Futuro': ['daré', 'darás', 'dará', 'daremos', 'darán'],
            'Condicional': ['daría', 'darías', 'daría', 'daríamos', 'darían'],
            'Subjuntivo Presente': ['dé', 'des', 'dé', 'demos', 'den']
        }
    },
    {
        verb: 'poner', category: 'common',
        meaning: {es:'poner', en:'to put / to place', cs:'dát / položit', de:'setzen / stellen / legen', it:'mettere', pt:'pôr / colocar'},
        tenses: {
            'Presente': ['pongo', 'pones', 'pone', 'ponemos', 'ponen'],
            'Pretérito': ['puse', 'pusiste', 'puso', 'pusimos', 'pusieron'],
            'Imperfecto': ['ponía', 'ponías', 'ponía', 'poníamos', 'ponían'],
            'Futuro': ['pondré', 'pondrás', 'pondrá', 'pondremos', 'pondrán'],
            'Condicional': ['pondría', 'pondrías', 'pondría', 'pondríamos', 'pondrían'],
            'Subjuntivo Presente': ['ponga', 'pongas', 'ponga', 'pongamos', 'pongan']
        }
    },
    {
        verb: 'pensar', category: 'common',
        meaning: {es:'pensar', en:'to think', cs:'myslet', de:'denken', it:'pensare', pt:'pensar'},
        tenses: {
            'Presente': ['pienso', 'piensas', 'piensa', 'pensamos', 'piensan'],
            'Pretérito': ['pensé', 'pensaste', 'pensó', 'pensamos', 'pensaron'],
            'Imperfecto': ['pensaba', 'pensabas', 'pensaba', 'pensábamos', 'pensaban'],
            'Futuro': ['pensaré', 'pensarás', 'pensará', 'pensaremos', 'pensarán'],
            'Condicional': ['pensaría', 'pensarías', 'pensaría', 'pensaríamos', 'pensarían'],
            'Subjuntivo Presente': ['piense', 'pienses', 'piense', 'pensemos', 'piensen']
        }
    },
    {
        verb: 'creer', category: 'common',
        meaning: {es:'creer', en:'to believe', cs:'věřit', de:'glauben', it:'credere', pt:'acreditar'},
        tenses: {
            'Presente': ['creo', 'crees', 'cree', 'creemos', 'creen'],
            'Pretérito': ['creí', 'creíste', 'creyó', 'creímos', 'creyeron'],
            'Imperfecto': ['creía', 'creías', 'creía', 'creíamos', 'creían'],
            'Futuro': ['creeré', 'creerás', 'creerá', 'creeremos', 'creerán'],
            'Condicional': ['creería', 'creerías', 'creería', 'creeríamos', 'creerían'],
            'Subjuntivo Presente': ['crea', 'creas', 'crea', 'creamos', 'crean']
        }
    },
    {
        verb: 'deber', category: 'common',
        meaning: {es:'deber', en:'must / to owe', cs:'muset / dlužit', de:'müssen / schulden', it:'dovere', pt:'dever'},
        tenses: {
            'Presente': ['debo', 'debes', 'debe', 'debemos', 'deben'],
            'Pretérito': ['debí', 'debiste', 'debió', 'debimos', 'debieron'],
            'Imperfecto': ['debía', 'debías', 'debía', 'debíamos', 'debían'],
            'Futuro': ['deberé', 'deberás', 'deberá', 'deberemos', 'deberán'],
            'Condicional': ['debería', 'deberías', 'debería', 'deberíamos', 'deberían'],
            'Subjuntivo Presente': ['deba', 'debas', 'deba', 'debamos', 'deban']
        }
    },
    {
        verb: 'parecer', category: 'common',
        meaning: {es:'parecer', en:'to seem / to appear', cs:'zdát se / vypadat', de:'scheinen / erscheinen', it:'sembrare / apparire', pt:'parecer'},
        tenses: {
            'Presente': ['parezco', 'pareces', 'parece', 'parecemos', 'parecen'],
            'Pretérito': ['parecí', 'pareciste', 'pareció', 'parecimos', 'parecieron'],
            'Imperfecto': ['parecía', 'parecías', 'parecía', 'parecíamos', 'parecían'],
            'Futuro': ['pareceré', 'parecerás', 'parecerá', 'pareceremos', 'parecerán'],
            'Condicional': ['parecería', 'parecerías', 'parecería', 'pareceríamos', 'parecerían'],
            'Subjuntivo Presente': ['parezca', 'parezcas', 'parezca', 'parezcamos', 'parezcan']
        }
    },
    // ── DAILY LIFE ──
    {
        verb: 'hablar', category: 'daily',
        meaning: {es:'hablar', en:'to speak / to talk', cs:'mluvit', de:'sprechen', it:'parlare', pt:'falar'},
        tenses: {
            'Presente': ['hablo', 'hablas', 'habla', 'hablamos', 'hablan'],
            'Pretérito': ['hablé', 'hablaste', 'habló', 'hablamos', 'hablaron'],
            'Imperfecto': ['hablaba', 'hablabas', 'hablaba', 'hablábamos', 'hablaban'],
            'Futuro': ['hablaré', 'hablarás', 'hablará', 'hablaremos', 'hablarán'],
            'Condicional': ['hablaría', 'hablarías', 'hablaría', 'hablaríamos', 'hablarían'],
            'Subjuntivo Presente': ['hable', 'hables', 'hable', 'hablemos', 'hablen']
        }
    },
    {
        verb: 'comer', category: 'daily',
        meaning: {es:'comer', en:'to eat', cs:'jíst', de:'essen', it:'mangiare', pt:'comer'},
        tenses: {
            'Presente': ['como', 'comes', 'come', 'comemos', 'comen'],
            'Pretérito': ['comí', 'comiste', 'comió', 'comimos', 'comieron'],
            'Imperfecto': ['comía', 'comías', 'comía', 'comíamos', 'comían'],
            'Futuro': ['comeré', 'comerás', 'comerá', 'comeremos', 'comerán'],
            'Condicional': ['comería', 'comerías', 'comería', 'comeríamos', 'comerían'],
            'Subjuntivo Presente': ['coma', 'comas', 'coma', 'comamos', 'coman']
        }
    },
    {
        verb: 'vivir', category: 'daily',
        meaning: {es:'vivir', en:'to live', cs:'žít', de:'leben', it:'vivere', pt:'viver'},
        tenses: {
            'Presente': ['vivo', 'vives', 'vive', 'vivimos', 'viven'],
            'Pretérito': ['viví', 'viviste', 'vivió', 'vivimos', 'vivieron'],
            'Imperfecto': ['vivía', 'vivías', 'vivía', 'vivíamos', 'vivían'],
            'Futuro': ['viviré', 'vivirás', 'vivirá', 'viviremos', 'vivirán'],
            'Condicional': ['viviría', 'vivirías', 'viviría', 'viviríamos', 'vivirían'],
            'Subjuntivo Presente': ['viva', 'vivas', 'viva', 'vivamos', 'vivan']
        }
    },
    {
        verb: 'dormir', category: 'daily',
        meaning: {es:'dormir', en:'to sleep', cs:'spát', de:'schlafen', it:'dormire', pt:'dormir'},
        tenses: {
            'Presente': ['duermo', 'duermes', 'duerme', 'dormimos', 'duermen'],
            'Pretérito': ['dormí', 'dormiste', 'durmió', 'dormimos', 'durmieron'],
            'Imperfecto': ['dormía', 'dormías', 'dormía', 'dormíamos', 'dormían'],
            'Futuro': ['dormiré', 'dormirás', 'dormirá', 'dormiremos', 'dormirán'],
            'Condicional': ['dormiría', 'dormirías', 'dormiría', 'dormiríamos', 'dormirían'],
            'Subjuntivo Presente': ['duerma', 'duermas', 'duerma', 'durmamos', 'duerman']
        }
    },
    {
        verb: 'trabajar', category: 'daily',
        meaning: {es:'trabajar', en:'to work', cs:'pracovat', de:'arbeiten', it:'lavorare', pt:'trabalhar'},
        tenses: {
            'Presente': ['trabajo', 'trabajas', 'trabaja', 'trabajamos', 'trabajan'],
            'Pretérito': ['trabajé', 'trabajaste', 'trabajó', 'trabajamos', 'trabajaron'],
            'Imperfecto': ['trabajaba', 'trabajabas', 'trabajaba', 'trabajábamos', 'trabajaban'],
            'Futuro': ['trabajaré', 'trabajarás', 'trabajará', 'trabajaremos', 'trabajarán'],
            'Condicional': ['trabajaría', 'trabajarías', 'trabajaría', 'trabajaríamos', 'trabajarían'],
            'Subjuntivo Presente': ['trabaje', 'trabajes', 'trabaje', 'trabajemos', 'trabajen']
        }
    },
    {
        verb: 'comprar', category: 'daily',
        meaning: {es:'comprar', en:'to buy', cs:'koupit', de:'kaufen', it:'comprare', pt:'comprar'},
        tenses: {
            'Presente': ['compro', 'compras', 'compra', 'compramos', 'compran'],
            'Pretérito': ['compré', 'compraste', 'compró', 'compramos', 'compraron'],
            'Imperfecto': ['compraba', 'comprabas', 'compraba', 'comprábamos', 'compraban'],
            'Futuro': ['compraré', 'comprarás', 'comprará', 'compraremos', 'comprarán'],
            'Condicional': ['compraría', 'comprarías', 'compraría', 'compraríamos', 'comprarían'],
            'Subjuntivo Presente': ['compre', 'compres', 'compre', 'compremos', 'compren']
        }
    },
    {
        verb: 'beber', category: 'daily',
        meaning: {es:'beber', en:'to drink', cs:'pít', de:'trinken', it:'bere', pt:'beber'},
        tenses: {
            'Presente': ['bebo', 'bebes', 'bebe', 'bebemos', 'beben'],
            'Pretérito': ['bebí', 'bebiste', 'bebió', 'bebimos', 'bebieron'],
            'Imperfecto': ['bebía', 'bebías', 'bebía', 'bebíamos', 'bebían'],
            'Futuro': ['beberé', 'beberás', 'beberá', 'beberemos', 'beberán'],
            'Condicional': ['bebería', 'beberías', 'bebería', 'beberíamos', 'beberían'],
            'Subjuntivo Presente': ['beba', 'bebas', 'beba', 'bebamos', 'beban']
        }
    },
    {
        verb: 'cocinar', category: 'daily',
        meaning: {es:'cocinar', en:'to cook', cs:'vařit', de:'kochen', it:'cucinare', pt:'cozinhar'},
        tenses: {
            'Presente': ['cocino', 'cocinas', 'cocina', 'cocinamos', 'cocinan'],
            'Pretérito': ['cociné', 'cocinaste', 'cocinó', 'cocinamos', 'cocinaron'],
            'Imperfecto': ['cocinaba', 'cocinabas', 'cocinaba', 'cocinábamos', 'cocinaban'],
            'Futuro': ['cocinaré', 'cocinarás', 'cocinará', 'cocinaremos', 'cocinarán'],
            'Condicional': ['cocinaría', 'cocinarías', 'cocinaría', 'cocinaríamos', 'cocinarían'],
            'Subjuntivo Presente': ['cocine', 'cocines', 'cocine', 'cocinemos', 'cocinen']
        }
    },
    {
        verb: 'necesitar', category: 'daily',
        meaning: {es:'necesitar', en:'to need', cs:'potřebovat', de:'brauchen', it:'necessitare / aver bisogno', pt:'precisar'},
        tenses: {
            'Presente': ['necesito', 'necesitas', 'necesita', 'necesitamos', 'necesitan'],
            'Pretérito': ['necesité', 'necesitaste', 'necesitó', 'necesitamos', 'necesitaron'],
            'Imperfecto': ['necesitaba', 'necesitabas', 'necesitaba', 'necesitábamos', 'necesitaban'],
            'Futuro': ['necesitaré', 'necesitarás', 'necesitará', 'necesitaremos', 'necesitarán'],
            'Condicional': ['necesitaría', 'necesitarías', 'necesitaría', 'necesitaríamos', 'necesitarían'],
            'Subjuntivo Presente': ['necesite', 'necesites', 'necesite', 'necesitemos', 'necesiten']
        }
    },
    // ── COMMUNICATION ──
    {
        verb: 'leer', category: 'communication',
        meaning: {es:'leer', en:'to read', cs:'číst', de:'lesen', it:'leggere', pt:'ler'},
        tenses: {
            'Presente': ['leo', 'lees', 'lee', 'leemos', 'leen'],
            'Pretérito': ['leí', 'leíste', 'leyó', 'leímos', 'leyeron'],
            'Imperfecto': ['leía', 'leías', 'leía', 'leíamos', 'leían'],
            'Futuro': ['leeré', 'leerás', 'leerá', 'leeremos', 'leerán'],
            'Condicional': ['leería', 'leerías', 'leería', 'leeríamos', 'leerían'],
            'Subjuntivo Presente': ['lea', 'leas', 'lea', 'leamos', 'lean']
        }
    },
    {
        verb: 'escribir', category: 'communication',
        meaning: {es:'escribir', en:'to write', cs:'psát', de:'schreiben', it:'scrivere', pt:'escrever'},
        tenses: {
            'Presente': ['escribo', 'escribes', 'escribe', 'escribimos', 'escriben'],
            'Pretérito': ['escribí', 'escribiste', 'escribió', 'escribimos', 'escribieron'],
            'Imperfecto': ['escribía', 'escribías', 'escribía', 'escribíamos', 'escribían'],
            'Futuro': ['escribiré', 'escribirás', 'escribirá', 'escribiremos', 'escribirán'],
            'Condicional': ['escribiría', 'escribirías', 'escribiría', 'escribiríamos', 'escribirían'],
            'Subjuntivo Presente': ['escriba', 'escribas', 'escriba', 'escribamos', 'escriban']
        }
    },
    {
        verb: 'pedir', category: 'communication',
        meaning: {es:'pedir', en:'to ask for / to request', cs:'požádat / žádat', de:'bitten / bestellen', it:'chiedere', pt:'pedir'},
        tenses: {
            'Presente': ['pido', 'pides', 'pide', 'pedimos', 'piden'],
            'Pretérito': ['pedí', 'pediste', 'pidió', 'pedimos', 'pidieron'],
            'Imperfecto': ['pedía', 'pedías', 'pedía', 'pedíamos', 'pedían'],
            'Futuro': ['pediré', 'pedirás', 'pedirá', 'pediremos', 'pedirán'],
            'Condicional': ['pediría', 'pedirías', 'pediría', 'pediríamos', 'pedirían'],
            'Subjuntivo Presente': ['pida', 'pidas', 'pida', 'pidamos', 'pidan']
        }
    },
    {
        verb: 'preguntar', category: 'communication',
        meaning: {es:'preguntar', en:'to ask (a question)', cs:'ptát se', de:'fragen', it:'domandare', pt:'perguntar'},
        tenses: {
            'Presente': ['pregunto', 'preguntas', 'pregunta', 'preguntamos', 'preguntan'],
            'Pretérito': ['pregunté', 'preguntaste', 'preguntó', 'preguntamos', 'preguntaron'],
            'Imperfecto': ['preguntaba', 'preguntabas', 'preguntaba', 'preguntábamos', 'preguntaban'],
            'Futuro': ['preguntaré', 'preguntarás', 'preguntará', 'preguntaremos', 'preguntarán'],
            'Condicional': ['preguntaría', 'preguntarías', 'preguntaría', 'preguntaríamos', 'preguntarían'],
            'Subjuntivo Presente': ['pregunte', 'preguntes', 'pregunte', 'preguntemos', 'pregunten']
        }
    },
    {
        verb: 'responder', category: 'communication',
        meaning: {es:'responder', en:'to answer / to respond', cs:'odpovědět', de:'antworten', it:'rispondere', pt:'responder'},
        tenses: {
            'Presente': ['respondo', 'respondes', 'responde', 'respondemos', 'responden'],
            'Pretérito': ['respondí', 'respondiste', 'respondió', 'respondimos', 'respondieron'],
            'Imperfecto': ['respondía', 'respondías', 'respondía', 'respondíamos', 'respondían'],
            'Futuro': ['responderé', 'responderás', 'responderá', 'responderemos', 'responderán'],
            'Condicional': ['respondería', 'responderías', 'respondería', 'responderíamos', 'responderían'],
            'Subjuntivo Presente': ['responda', 'respondas', 'responda', 'respondamos', 'respondan']
        }
    },
    {
        verb: 'entender', category: 'communication',
        meaning: {es:'entender', en:'to understand', cs:'rozumět', de:'verstehen', it:'capire', pt:'entender'},
        tenses: {
            'Presente': ['entiendo', 'entiendes', 'entiende', 'entendemos', 'entienden'],
            'Pretérito': ['entendí', 'entendiste', 'entendió', 'entendimos', 'entendieron'],
            'Imperfecto': ['entendía', 'entendías', 'entendía', 'entendíamos', 'entendían'],
            'Futuro': ['entenderé', 'entenderás', 'entenderá', 'entenderemos', 'entenderán'],
            'Condicional': ['entendería', 'entenderías', 'entendería', 'entenderíamos', 'entenderían'],
            'Subjuntivo Presente': ['entienda', 'entiendas', 'entienda', 'entendamos', 'entiendan']
        }
    },
    {
        verb: 'llamar', category: 'communication',
        meaning: {es:'llamar', en:'to call', cs:'volat / zavolat', de:'rufen / anrufen', it:'chiamare', pt:'chamar'},
        tenses: {
            'Presente': ['llamo', 'llamas', 'llama', 'llamamos', 'llaman'],
            'Pretérito': ['llamé', 'llamaste', 'llamó', 'llamamos', 'llamaron'],
            'Imperfecto': ['llamaba', 'llamabas', 'llamaba', 'llamábamos', 'llamaban'],
            'Futuro': ['llamaré', 'llamarás', 'llamará', 'llamaremos', 'llamarán'],
            'Condicional': ['llamaría', 'llamarías', 'llamaría', 'llamaríamos', 'llamarían'],
            'Subjuntivo Presente': ['llame', 'llames', 'llame', 'llamemos', 'llamen']
        }
    },
    // ── MOVEMENT ──
    {
        verb: 'venir', category: 'movement',
        meaning: {es:'venir', en:'to come', cs:'přijít / přijet', de:'kommen', it:'venire', pt:'vir'},
        tenses: {
            'Presente': ['vengo', 'vienes', 'viene', 'venimos', 'vienen'],
            'Pretérito': ['vine', 'viniste', 'vino', 'vinimos', 'vinieron'],
            'Imperfecto': ['venía', 'venías', 'venía', 'veníamos', 'venían'],
            'Futuro': ['vendré', 'vendrás', 'vendrá', 'vendremos', 'vendrán'],
            'Condicional': ['vendría', 'vendrías', 'vendría', 'vendríamos', 'vendrían'],
            'Subjuntivo Presente': ['venga', 'vengas', 'venga', 'vengamos', 'vengan']
        }
    },
    {
        verb: 'salir', category: 'movement',
        meaning: {es:'salir', en:'to leave / to go out', cs:'odejít / vyjít', de:'ausgehen / verlassen', it:'uscire', pt:'sair'},
        tenses: {
            'Presente': ['salgo', 'sales', 'sale', 'salimos', 'salen'],
            'Pretérito': ['salí', 'saliste', 'salió', 'salimos', 'salieron'],
            'Imperfecto': ['salía', 'salías', 'salía', 'salíamos', 'salían'],
            'Futuro': ['saldré', 'saldrás', 'saldrá', 'saldremos', 'saldrán'],
            'Condicional': ['saldría', 'saldrías', 'saldría', 'saldríamos', 'saldrían'],
            'Subjuntivo Presente': ['salga', 'salgas', 'salga', 'salgamos', 'salgan']
        }
    },
    {
        verb: 'llegar', category: 'movement',
        meaning: {es:'llegar', en:'to arrive', cs:'přijet / dorazit', de:'ankommen', it:'arrivare', pt:'chegar'},
        tenses: {
            'Presente': ['llego', 'llegas', 'llega', 'llegamos', 'llegan'],
            'Pretérito': ['llegué', 'llegaste', 'llegó', 'llegamos', 'llegaron'],
            'Imperfecto': ['llegaba', 'llegabas', 'llegaba', 'llegábamos', 'llegaban'],
            'Futuro': ['llegaré', 'llegarás', 'llegará', 'llegaremos', 'llegarán'],
            'Condicional': ['llegaría', 'llegarías', 'llegaría', 'llegaríamos', 'llegarían'],
            'Subjuntivo Presente': ['llegue', 'llegues', 'llegue', 'lleguemos', 'lleguen']
        }
    },
    {
        verb: 'volver', category: 'movement',
        meaning: {es:'volver', en:'to return', cs:'vrátit se', de:'zurückkehren', it:'tornare', pt:'voltar'},
        tenses: {
            'Presente': ['vuelvo', 'vuelves', 'vuelve', 'volvemos', 'vuelven'],
            'Pretérito': ['volví', 'volviste', 'volvió', 'volvimos', 'volvieron'],
            'Imperfecto': ['volvía', 'volvías', 'volvía', 'volvíamos', 'volvían'],
            'Futuro': ['volveré', 'volverás', 'volverá', 'volveremos', 'volverán'],
            'Condicional': ['volvería', 'volverías', 'volvería', 'volveríamos', 'volverían'],
            'Subjuntivo Presente': ['vuelva', 'vuelvas', 'vuelva', 'volvamos', 'vuelvan']
        }
    },
    {
        verb: 'correr', category: 'movement',
        meaning: {es:'correr', en:'to run', cs:'běžet', de:'rennen / laufen', it:'correre', pt:'correr'},
        tenses: {
            'Presente': ['corro', 'corres', 'corre', 'corremos', 'corren'],
            'Pretérito': ['corrí', 'corriste', 'corrió', 'corrimos', 'corrieron'],
            'Imperfecto': ['corría', 'corrías', 'corría', 'corríamos', 'corrían'],
            'Futuro': ['correré', 'correrás', 'correrá', 'correremos', 'correrán'],
            'Condicional': ['correría', 'correrías', 'correría', 'correríamos', 'correrían'],
            'Subjuntivo Presente': ['corra', 'corras', 'corra', 'corramos', 'corran']
        }
    },
    {
        verb: 'caminar', category: 'movement',
        meaning: {es:'caminar', en:'to walk', cs:'chodit / jít', de:'gehen / spazieren', it:'camminare', pt:'caminhar'},
        tenses: {
            'Presente': ['camino', 'caminas', 'camina', 'caminamos', 'caminan'],
            'Pretérito': ['caminé', 'caminaste', 'caminó', 'caminamos', 'caminaron'],
            'Imperfecto': ['caminaba', 'caminabas', 'caminaba', 'caminábamos', 'caminaban'],
            'Futuro': ['caminaré', 'caminarás', 'caminará', 'caminaremos', 'caminarán'],
            'Condicional': ['caminaría', 'caminarías', 'caminaría', 'caminaríamos', 'caminarían'],
            'Subjuntivo Presente': ['camine', 'camines', 'camine', 'caminemos', 'caminen']
        }
    },
    {
        verb: 'traer', category: 'movement',
        meaning: {es:'traer', en:'to bring', cs:'přinést', de:'bringen / mitbringen', it:'portare', pt:'trazer'},
        tenses: {
            'Presente': ['traigo', 'traes', 'trae', 'traemos', 'traen'],
            'Pretérito': ['traje', 'trajiste', 'trajo', 'trajimos', 'trajeron'],
            'Imperfecto': ['traía', 'traías', 'traía', 'traíamos', 'traían'],
            'Futuro': ['traeré', 'traerás', 'traerá', 'traeremos', 'traerán'],
            'Condicional': ['traería', 'traerías', 'traería', 'traeríamos', 'traerían'],
            'Subjuntivo Presente': ['traiga', 'traigas', 'traiga', 'traigamos', 'traigan']
        }
    }
];

// Helper: get verb meaning for current language
function getVerbMeaning(vb) {
    if (typeof vb.meaning === 'string') return vb.meaning;
    var lang = typeof currentLang !== 'undefined' ? currentLang : 'none';
    if (lang === 'none') return vb.meaning.es || vb.meaning.en;
    return vb.meaning[lang] || vb.meaning.en || vb.meaning.es;
}
