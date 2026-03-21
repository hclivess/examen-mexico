// Spanish Verb Conjugation Data
// Pronouns: yo, tú, él/ella/usted, nosotros, ustedes/ellos
var verbPronouns = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'ustedes/ellos'];

var verbData = [
    {
        verb: 'ser', meaning: 'to be (permanent)',
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
        verb: 'estar', meaning: 'to be (temporary/location)',
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
        verb: 'tener', meaning: 'to have',
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
        verb: 'hacer', meaning: 'to do / to make',
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
        verb: 'ir', meaning: 'to go',
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
        verb: 'poder', meaning: 'to be able to / can',
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
        verb: 'decir', meaning: 'to say / to tell',
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
        verb: 'querer', meaning: 'to want / to love',
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
        verb: 'saber', meaning: 'to know (facts)',
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
        verb: 'conocer', meaning: 'to know (people/places)',
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
        verb: 'dar', meaning: 'to give',
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
        verb: 'hablar', meaning: 'to speak / to talk',
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
        verb: 'comer', meaning: 'to eat',
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
        verb: 'vivir', meaning: 'to live',
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
        verb: 'poner', meaning: 'to put / to place',
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
        verb: 'salir', meaning: 'to leave / to go out',
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
        verb: 'venir', meaning: 'to come',
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
        verb: 'pensar', meaning: 'to think',
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
        verb: 'dormir', meaning: 'to sleep',
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
        verb: 'escribir', meaning: 'to write',
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
        verb: 'leer', meaning: 'to read',
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
        verb: 'trabajar', meaning: 'to work',
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
        verb: 'necesitar', meaning: 'to need',
        tenses: {
            'Presente': ['necesito', 'necesitas', 'necesita', 'necesitamos', 'necesitan'],
            'Pretérito': ['necesité', 'necesitaste', 'necesitó', 'necesitamos', 'necesitaron'],
            'Imperfecto': ['necesitaba', 'necesitabas', 'necesitaba', 'necesitábamos', 'necesitaban'],
            'Futuro': ['necesitaré', 'necesitarás', 'necesitará', 'necesitaremos', 'necesitarán'],
            'Condicional': ['necesitaría', 'necesitarías', 'necesitaría', 'necesitaríamos', 'necesitarían'],
            'Subjuntivo Presente': ['necesite', 'necesites', 'necesite', 'necesitemos', 'necesiten']
        }
    },
    {
        verb: 'llegar', meaning: 'to arrive',
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
        verb: 'pedir', meaning: 'to ask for / to request',
        tenses: {
            'Presente': ['pido', 'pides', 'pide', 'pedimos', 'piden'],
            'Pretérito': ['pedí', 'pediste', 'pidió', 'pedimos', 'pidieron'],
            'Imperfecto': ['pedía', 'pedías', 'pedía', 'pedíamos', 'pedían'],
            'Futuro': ['pediré', 'pedirás', 'pedirá', 'pediremos', 'pedirán'],
            'Condicional': ['pediría', 'pedirías', 'pediría', 'pediríamos', 'pedirían'],
            'Subjuntivo Presente': ['pida', 'pidas', 'pida', 'pidamos', 'pidan']
        }
    }
];
