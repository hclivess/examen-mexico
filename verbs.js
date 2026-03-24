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
            'Subjuntivo Presente': ['sea', 'seas', 'sea', 'seamos', 'sean'],
            'Presente Perfecto': ['he sido', 'has sido', 'ha sido', 'hemos sido', 'han sido'],
            'Futuro perifrástico': ['voy a ser', 'vas a ser', 'va a ser', 'vamos a ser', 'van a ser']
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
            'Subjuntivo Presente': ['esté', 'estés', 'esté', 'estemos', 'estén'],
            'Presente Perfecto': ['he estado', 'has estado', 'ha estado', 'hemos estado', 'han estado'],
            'Futuro perifrástico': ['voy a estar', 'vas a estar', 'va a estar', 'vamos a estar', 'van a estar']
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
            'Subjuntivo Presente': ['tenga', 'tengas', 'tenga', 'tengamos', 'tengan'],
            'Presente Perfecto': ['he tenido', 'has tenido', 'ha tenido', 'hemos tenido', 'han tenido'],
            'Futuro perifrástico': ['voy a tener', 'vas a tener', 'va a tener', 'vamos a tener', 'van a tener']
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
            'Subjuntivo Presente': ['haga', 'hagas', 'haga', 'hagamos', 'hagan'],
            'Presente Perfecto': ['he hecho', 'has hecho', 'ha hecho', 'hemos hecho', 'han hecho'],
            'Futuro perifrástico': ['voy a hacer', 'vas a hacer', 'va a hacer', 'vamos a hacer', 'van a hacer']
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
            'Subjuntivo Presente': ['vaya', 'vayas', 'vaya', 'vayamos', 'vayan'],
            'Presente Perfecto': ['he ido', 'has ido', 'ha ido', 'hemos ido', 'han ido'],
            'Futuro perifrástico': ['voy a ir', 'vas a ir', 'va a ir', 'vamos a ir', 'van a ir']
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
            'Subjuntivo Presente': ['haya', 'hayas', 'haya', 'hayamos', 'hayan'],
            'Presente Perfecto': ['he habido', 'has habido', 'ha habido', 'hemos habido', 'han habido'],
            'Futuro perifrástico': ['voy a haber', 'vas a haber', 'va a haber', 'vamos a haber', 'van a haber']
        }
    },
    {
        verb: 'hay', category: 'essential',
        impersonal: true,
        meaning: {es:'haber impersonal (existencia)', en:'there is / there are', cs:'existuje / existují', de:'es gibt', it:'c\'è / ci sono', pt:'há / existem'},
        tenses: {
            'Presente': ['hay'],
            'Pretérito': ['hubo'],
            'Imperfecto': ['había'],
            'Futuro': ['habrá'],
            'Condicional': ['habría'],
            'Subjuntivo Presente': ['haya'],
            'Presente Perfecto': ['ha habido'],
            'Futuro perifrástico': ['va a haber']
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
            'Subjuntivo Presente': ['pueda', 'puedas', 'pueda', 'podamos', 'puedan'],
            'Presente Perfecto': ['he podido', 'has podido', 'ha podido', 'hemos podido', 'han podido'],
            'Futuro perifrástico': ['voy a poder', 'vas a poder', 'va a poder', 'vamos a poder', 'van a poder']
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
            'Subjuntivo Presente': ['diga', 'digas', 'diga', 'digamos', 'digan'],
            'Presente Perfecto': ['he dicho', 'has dicho', 'ha dicho', 'hemos dicho', 'han dicho'],
            'Futuro perifrástico': ['voy a decir', 'vas a decir', 'va a decir', 'vamos a decir', 'van a decir']
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
            'Subjuntivo Presente': ['quiera', 'quieras', 'quiera', 'queramos', 'quieran'],
            'Presente Perfecto': ['he querido', 'has querido', 'ha querido', 'hemos querido', 'han querido'],
            'Futuro perifrástico': ['voy a querer', 'vas a querer', 'va a querer', 'vamos a querer', 'van a querer']
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
            'Subjuntivo Presente': ['sepa', 'sepas', 'sepa', 'sepamos', 'sepan'],
            'Presente Perfecto': ['he sabido', 'has sabido', 'ha sabido', 'hemos sabido', 'han sabido'],
            'Futuro perifrástico': ['voy a saber', 'vas a saber', 'va a saber', 'vamos a saber', 'van a saber']
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
            'Subjuntivo Presente': ['conozca', 'conozcas', 'conozca', 'conozcamos', 'conozcan'],
            'Presente Perfecto': ['he conocido', 'has conocido', 'ha conocido', 'hemos conocido', 'han conocido'],
            'Futuro perifrástico': ['voy a conocer', 'vas a conocer', 'va a conocer', 'vamos a conocer', 'van a conocer']
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
            'Subjuntivo Presente': ['dé', 'des', 'dé', 'demos', 'den'],
            'Presente Perfecto': ['he dado', 'has dado', 'ha dado', 'hemos dado', 'han dado'],
            'Futuro perifrástico': ['voy a dar', 'vas a dar', 'va a dar', 'vamos a dar', 'van a dar']
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
            'Subjuntivo Presente': ['ponga', 'pongas', 'ponga', 'pongamos', 'pongan'],
            'Presente Perfecto': ['he puesto', 'has puesto', 'ha puesto', 'hemos puesto', 'han puesto'],
            'Futuro perifrástico': ['voy a poner', 'vas a poner', 'va a poner', 'vamos a poner', 'van a poner']
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
            'Subjuntivo Presente': ['piense', 'pienses', 'piense', 'pensemos', 'piensen'],
            'Presente Perfecto': ['he pensado', 'has pensado', 'ha pensado', 'hemos pensado', 'han pensado'],
            'Futuro perifrástico': ['voy a pensar', 'vas a pensar', 'va a pensar', 'vamos a pensar', 'van a pensar']
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
            'Subjuntivo Presente': ['crea', 'creas', 'crea', 'creamos', 'crean'],
            'Presente Perfecto': ['he creído', 'has creído', 'ha creído', 'hemos creído', 'han creído'],
            'Futuro perifrástico': ['voy a creer', 'vas a creer', 'va a creer', 'vamos a creer', 'van a creer']
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
            'Subjuntivo Presente': ['deba', 'debas', 'deba', 'debamos', 'deban'],
            'Presente Perfecto': ['he debido', 'has debido', 'ha debido', 'hemos debido', 'han debido'],
            'Futuro perifrástico': ['voy a deber', 'vas a deber', 'va a deber', 'vamos a deber', 'van a deber']
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
            'Subjuntivo Presente': ['parezca', 'parezcas', 'parezca', 'parezcamos', 'parezcan'],
            'Presente Perfecto': ['he parecido', 'has parecido', 'ha parecido', 'hemos parecido', 'han parecido'],
            'Futuro perifrástico': ['voy a parecer', 'vas a parecer', 'va a parecer', 'vamos a parecer', 'van a parecer']
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
            'Subjuntivo Presente': ['hable', 'hables', 'hable', 'hablemos', 'hablen'],
            'Presente Perfecto': ['he hablado', 'has hablado', 'ha hablado', 'hemos hablado', 'han hablado'],
            'Futuro perifrástico': ['voy a hablar', 'vas a hablar', 'va a hablar', 'vamos a hablar', 'van a hablar']
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
            'Subjuntivo Presente': ['coma', 'comas', 'coma', 'comamos', 'coman'],
            'Presente Perfecto': ['he comido', 'has comido', 'ha comido', 'hemos comido', 'han comido'],
            'Futuro perifrástico': ['voy a comer', 'vas a comer', 'va a comer', 'vamos a comer', 'van a comer']
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
            'Subjuntivo Presente': ['viva', 'vivas', 'viva', 'vivamos', 'vivan'],
            'Presente Perfecto': ['he vivido', 'has vivido', 'ha vivido', 'hemos vivido', 'han vivido'],
            'Futuro perifrástico': ['voy a vivir', 'vas a vivir', 'va a vivir', 'vamos a vivir', 'van a vivir']
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
            'Subjuntivo Presente': ['duerma', 'duermas', 'duerma', 'durmamos', 'duerman'],
            'Presente Perfecto': ['he dormido', 'has dormido', 'ha dormido', 'hemos dormido', 'han dormido'],
            'Futuro perifrástico': ['voy a dormir', 'vas a dormir', 'va a dormir', 'vamos a dormir', 'van a dormir']
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
            'Subjuntivo Presente': ['trabaje', 'trabajes', 'trabaje', 'trabajemos', 'trabajen'],
            'Presente Perfecto': ['he trabajado', 'has trabajado', 'ha trabajado', 'hemos trabajado', 'han trabajado'],
            'Futuro perifrástico': ['voy a trabajar', 'vas a trabajar', 'va a trabajar', 'vamos a trabajar', 'van a trabajar']
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
            'Subjuntivo Presente': ['compre', 'compres', 'compre', 'compremos', 'compren'],
            'Presente Perfecto': ['he comprado', 'has comprado', 'ha comprado', 'hemos comprado', 'han comprado'],
            'Futuro perifrástico': ['voy a comprar', 'vas a comprar', 'va a comprar', 'vamos a comprar', 'van a comprar']
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
            'Subjuntivo Presente': ['beba', 'bebas', 'beba', 'bebamos', 'beban'],
            'Presente Perfecto': ['he bebido', 'has bebido', 'ha bebido', 'hemos bebido', 'han bebido'],
            'Futuro perifrástico': ['voy a beber', 'vas a beber', 'va a beber', 'vamos a beber', 'van a beber']
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
            'Subjuntivo Presente': ['cocine', 'cocines', 'cocine', 'cocinemos', 'cocinen'],
            'Presente Perfecto': ['he cocinado', 'has cocinado', 'ha cocinado', 'hemos cocinado', 'han cocinado'],
            'Futuro perifrástico': ['voy a cocinar', 'vas a cocinar', 'va a cocinar', 'vamos a cocinar', 'van a cocinar']
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
            'Subjuntivo Presente': ['necesite', 'necesites', 'necesite', 'necesitemos', 'necesiten'],
            'Presente Perfecto': ['he necesitado', 'has necesitado', 'ha necesitado', 'hemos necesitado', 'han necesitado'],
            'Futuro perifrástico': ['voy a necesitar', 'vas a necesitar', 'va a necesitar', 'vamos a necesitar', 'van a necesitar']
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
            'Subjuntivo Presente': ['lea', 'leas', 'lea', 'leamos', 'lean'],
            'Presente Perfecto': ['he leído', 'has leído', 'ha leído', 'hemos leído', 'han leído'],
            'Futuro perifrástico': ['voy a leer', 'vas a leer', 'va a leer', 'vamos a leer', 'van a leer']
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
            'Subjuntivo Presente': ['escriba', 'escribas', 'escriba', 'escribamos', 'escriban'],
            'Presente Perfecto': ['he escrito', 'has escrito', 'ha escrito', 'hemos escrito', 'han escrito'],
            'Futuro perifrástico': ['voy a escribir', 'vas a escribir', 'va a escribir', 'vamos a escribir', 'van a escribir']
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
            'Subjuntivo Presente': ['pida', 'pidas', 'pida', 'pidamos', 'pidan'],
            'Presente Perfecto': ['he pedido', 'has pedido', 'ha pedido', 'hemos pedido', 'han pedido'],
            'Futuro perifrástico': ['voy a pedir', 'vas a pedir', 'va a pedir', 'vamos a pedir', 'van a pedir']
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
            'Subjuntivo Presente': ['pregunte', 'preguntes', 'pregunte', 'preguntemos', 'pregunten'],
            'Presente Perfecto': ['he preguntado', 'has preguntado', 'ha preguntado', 'hemos preguntado', 'han preguntado'],
            'Futuro perifrástico': ['voy a preguntar', 'vas a preguntar', 'va a preguntar', 'vamos a preguntar', 'van a preguntar']
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
            'Subjuntivo Presente': ['responda', 'respondas', 'responda', 'respondamos', 'respondan'],
            'Presente Perfecto': ['he respondido', 'has respondido', 'ha respondido', 'hemos respondido', 'han respondido'],
            'Futuro perifrástico': ['voy a responder', 'vas a responder', 'va a responder', 'vamos a responder', 'van a responder']
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
            'Subjuntivo Presente': ['entienda', 'entiendas', 'entienda', 'entendamos', 'entiendan'],
            'Presente Perfecto': ['he entendido', 'has entendido', 'ha entendido', 'hemos entendido', 'han entendido'],
            'Futuro perifrástico': ['voy a entender', 'vas a entender', 'va a entender', 'vamos a entender', 'van a entender']
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
            'Subjuntivo Presente': ['llame', 'llames', 'llame', 'llamemos', 'llamen'],
            'Presente Perfecto': ['he llamado', 'has llamado', 'ha llamado', 'hemos llamado', 'han llamado'],
            'Futuro perifrástico': ['voy a llamar', 'vas a llamar', 'va a llamar', 'vamos a llamar', 'van a llamar']
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
            'Subjuntivo Presente': ['venga', 'vengas', 'venga', 'vengamos', 'vengan'],
            'Presente Perfecto': ['he venido', 'has venido', 'ha venido', 'hemos venido', 'han venido'],
            'Futuro perifrástico': ['voy a venir', 'vas a venir', 'va a venir', 'vamos a venir', 'van a venir']
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
            'Subjuntivo Presente': ['salga', 'salgas', 'salga', 'salgamos', 'salgan'],
            'Presente Perfecto': ['he salido', 'has salido', 'ha salido', 'hemos salido', 'han salido'],
            'Futuro perifrástico': ['voy a salir', 'vas a salir', 'va a salir', 'vamos a salir', 'van a salir']
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
            'Subjuntivo Presente': ['llegue', 'llegues', 'llegue', 'lleguemos', 'lleguen'],
            'Presente Perfecto': ['he llegado', 'has llegado', 'ha llegado', 'hemos llegado', 'han llegado'],
            'Futuro perifrástico': ['voy a llegar', 'vas a llegar', 'va a llegar', 'vamos a llegar', 'van a llegar']
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
            'Subjuntivo Presente': ['vuelva', 'vuelvas', 'vuelva', 'volvamos', 'vuelvan'],
            'Presente Perfecto': ['he vuelto', 'has vuelto', 'ha vuelto', 'hemos vuelto', 'han vuelto'],
            'Futuro perifrástico': ['voy a volver', 'vas a volver', 'va a volver', 'vamos a volver', 'van a volver']
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
            'Subjuntivo Presente': ['corra', 'corras', 'corra', 'corramos', 'corran'],
            'Presente Perfecto': ['he corrido', 'has corrido', 'ha corrido', 'hemos corrido', 'han corrido'],
            'Futuro perifrástico': ['voy a correr', 'vas a correr', 'va a correr', 'vamos a correr', 'van a correr']
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
            'Subjuntivo Presente': ['camine', 'camines', 'camine', 'caminemos', 'caminen'],
            'Presente Perfecto': ['he caminado', 'has caminado', 'ha caminado', 'hemos caminado', 'han caminado'],
            'Futuro perifrástico': ['voy a caminar', 'vas a caminar', 'va a caminar', 'vamos a caminar', 'van a caminar']
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
            'Subjuntivo Presente': ['traiga', 'traigas', 'traiga', 'traigamos', 'traigan'],
            'Presente Perfecto': ['he traído', 'has traído', 'ha traído', 'hemos traído', 'han traído'],
            'Futuro perifrástico': ['voy a traer', 'vas a traer', 'va a traer', 'vamos a traer', 'van a traer']
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
