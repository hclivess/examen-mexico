// Spanish Phrases Data
var phraseCategories = [
    {id:'greetings', label:'Saludos y cortesía', en:'Greetings & courtesy', cs:'Pozdravy a zdvořilost', de:'Begrüßung & Höflichkeit', it:'Saluti e cortesia', pt:'Saudações e cortesia'},
    {id:'immigration', label:'Migración y trámites', en:'Immigration & paperwork', cs:'Migrace a úřady', de:'Migration & Behörden', it:'Immigrazione e pratiche', pt:'Imigração e documentos'},
    {id:'daily', label:'Vida cotidiana', en:'Daily life', cs:'Každodenní život', de:'Alltag', it:'Vita quotidiana', pt:'Vida cotidiana'},
    {id:'directions', label:'Direcciones y transporte', en:'Directions & transport', cs:'Směry a doprava', de:'Richtungen & Transport', it:'Direzioni e trasporto', pt:'Direções e transporte'},
    {id:'shopping', label:'Compras y restaurante', en:'Shopping & restaurant', cs:'Nákupy a restaurace', de:'Einkaufen & Restaurant', it:'Shopping e ristorante', pt:'Compras e restaurante'},
    {id:'emergency', label:'Emergencias', en:'Emergencies', cs:'Nouzové situace', de:'Notfälle', it:'Emergenze', pt:'Emergências'},
    {id:'conversation', label:'Conversación', en:'Conversation', cs:'Konverzace', de:'Konversation', it:'Conversazione', pt:'Conversação'}
];

var phraseData = [
    // ===== Saludos y cortesía =====
    {
        phrase: 'Buenos días',
        category: 'greetings',
        translation: {
            en: 'Good morning',
            cs: 'Dobré ráno',
            de: 'Guten Morgen',
            it: 'Buongiorno',
            pt: 'Bom dia'
        }
    },
    {
        phrase: 'Buenas tardes',
        category: 'greetings',
        translation: {
            en: 'Good afternoon',
            cs: 'Dobré odpoledne',
            de: 'Guten Tag',
            it: 'Buon pomeriggio',
            pt: 'Boa tarde'
        }
    },
    {
        phrase: 'Buenas noches',
        category: 'greetings',
        translation: {
            en: 'Good evening / Good night',
            cs: 'Dobrý večer / Dobrou noc',
            de: 'Guten Abend / Gute Nacht',
            it: 'Buonasera / Buonanotte',
            pt: 'Boa noite'
        }
    },
    {
        phrase: '¿Cómo está usted?',
        category: 'greetings',
        translation: {
            en: 'How are you? (formal)',
            cs: 'Jak se máte? (formální)',
            de: 'Wie geht es Ihnen? (formell)',
            it: 'Come sta? (formale)',
            pt: 'Como está o senhor / a senhora? (formal)'
        }
    },
    {
        phrase: '¿Cómo estás?',
        category: 'greetings',
        translation: {
            en: 'How are you? (informal)',
            cs: 'Jak se máš? (neformální)',
            de: 'Wie geht es dir? (informell)',
            it: 'Come stai? (informale)',
            pt: 'Como você está? (informal)'
        }
    },
    {
        phrase: 'Mucho gusto',
        category: 'greetings',
        translation: {
            en: 'Nice to meet you',
            cs: 'Těší mě',
            de: 'Freut mich',
            it: 'Piacere',
            pt: 'Muito prazer'
        }
    },
    {
        phrase: 'Con permiso',
        category: 'greetings',
        translation: {
            en: 'Excuse me (to pass by)',
            cs: 'S dovolením',
            de: 'Mit Erlaubnis / Gestatten Sie',
            it: 'Con permesso',
            pt: 'Com licença'
        }
    },
    {
        phrase: 'Disculpe / Perdón',
        category: 'greetings',
        translation: {
            en: 'Excuse me / Sorry',
            cs: 'Promiňte / Pardon',
            de: 'Entschuldigung / Verzeihung',
            it: 'Mi scusi / Scusa',
            pt: 'Desculpe / Perdão'
        }
    },
    {
        phrase: 'Por favor',
        category: 'greetings',
        translation: {
            en: 'Please',
            cs: 'Prosím',
            de: 'Bitte',
            it: 'Per favore',
            pt: 'Por favor'
        }
    },
    {
        phrase: 'Gracias',
        category: 'greetings',
        translation: {
            en: 'Thank you',
            cs: 'Děkuji',
            de: 'Danke',
            it: 'Grazie',
            pt: 'Obrigado / Obrigada'
        }
    },
    {
        phrase: 'De nada',
        category: 'greetings',
        translation: {
            en: "You're welcome",
            cs: 'Není zač',
            de: 'Bitte schön / Gern geschehen',
            it: 'Di niente / Prego',
            pt: 'De nada'
        }
    },
    {
        phrase: '¿Me podría ayudar?',
        category: 'greetings',
        translation: {
            en: 'Could you help me?',
            cs: 'Mohl/a byste mi pomoci?',
            de: 'Könnten Sie mir helfen?',
            it: 'Potrebbe aiutarmi?',
            pt: 'Poderia me ajudar?'
        }
    },
    {
        phrase: 'Con mucho gusto',
        category: 'greetings',
        translation: {
            en: 'With pleasure / Gladly',
            cs: 'S velkým potěšením / Rádo se stalo',
            de: 'Mit Vergnügen / Gerne',
            it: 'Con molto piacere / Volentieri',
            pt: 'Com muito prazer / Com gosto'
        }
    },
    {
        phrase: 'Que le vaya bien',
        category: 'greetings',
        translation: {
            en: 'Take care / Have a good one',
            cs: 'Ať se vám daří',
            de: 'Alles Gute / Machen Sie es gut',
            it: 'Le auguro il meglio / Stia bene',
            pt: 'Que lhe corra tudo bem'
        }
    },
    {
        phrase: 'Nos vemos',
        category: 'greetings',
        translation: {
            en: 'See you later',
            cs: 'Uvidíme se',
            de: 'Wir sehen uns',
            it: 'Ci vediamo',
            pt: 'Até logo / Nos vemos'
        }
    },
    {
        phrase: '¡Buen provecho!',
        category: 'greetings',
        translation: {
            en: 'Enjoy your meal!',
            cs: 'Dobrou chuť!',
            de: 'Guten Appetit!',
            it: 'Buon appetito!',
            pt: 'Bom apetite!'
        }
    },
    {
        phrase: '¿Mande?',
        category: 'greetings',
        translation: {
            en: 'Pardon? / What did you say? (Mexican)',
            cs: 'Prosím? / Cože? (mexický výraz)',
            de: 'Wie bitte? (mexikanischer Ausdruck)',
            it: 'Come dice? / Prego? (espressione messicana)',
            pt: 'Como disse? (expressão mexicana)'
        }
    },
    {
        phrase: 'Estoy bien, gracias',
        category: 'greetings',
        translation: {
            en: "I'm fine, thank you",
            cs: 'Mám se dobře, děkuji',
            de: 'Mir geht es gut, danke',
            it: 'Sto bene, grazie',
            pt: 'Estou bem, obrigado/a'
        }
    },
    {
        phrase: 'Igualmente',
        category: 'greetings',
        translation: {
            en: 'Likewise / Same to you',
            cs: 'Rovněž / Stejně tak',
            de: 'Gleichfalls / Ebenso',
            it: 'Altrettanto / Ugualmente',
            pt: 'Igualmente'
        }
    },
    {
        phrase: 'Le agradezco mucho',
        category: 'greetings',
        translation: {
            en: 'I appreciate it very much (formal)',
            cs: 'Velmi vám děkuji (formální)',
            de: 'Ich bin Ihnen sehr dankbar (formell)',
            it: 'La ringrazio molto (formale)',
            pt: 'Agradeço-lhe muito (formal)'
        }
    },

    // ===== Migración y trámites =====
    {
        phrase: 'Quiero solicitar la naturalización mexicana',
        category: 'immigration',
        translation: {
            en: 'I want to apply for Mexican naturalization',
            cs: 'Chci požádat o mexické občanství',
            de: 'Ich möchte die mexikanische Einbürgerung beantragen',
            it: 'Voglio richiedere la naturalizzazione messicana',
            pt: 'Quero solicitar a naturalização mexicana'
        }
    },
    {
        phrase: 'Necesito renovar mi visa',
        category: 'immigration',
        translation: {
            en: 'I need to renew my visa',
            cs: 'Potřebuji obnovit své vízum',
            de: 'Ich muss mein Visum erneuern',
            it: 'Devo rinnovare il mio visto',
            pt: 'Preciso renovar meu visto'
        }
    },
    {
        phrase: '¿Dónde está la oficina de migración?',
        category: 'immigration',
        translation: {
            en: 'Where is the immigration office?',
            cs: 'Kde je imigrační úřad?',
            de: 'Wo ist das Einwanderungsamt?',
            it: "Dov'è l'ufficio immigrazione?",
            pt: 'Onde fica o escritório de imigração?'
        }
    },
    {
        phrase: 'Tengo una cita programada',
        category: 'immigration',
        translation: {
            en: 'I have a scheduled appointment',
            cs: 'Mám naplánovanou schůzku',
            de: 'Ich habe einen vereinbarten Termin',
            it: 'Ho un appuntamento programmato',
            pt: 'Tenho uma consulta agendada'
        }
    },
    {
        phrase: 'Aquí está mi pasaporte',
        category: 'immigration',
        translation: {
            en: 'Here is my passport',
            cs: 'Tady je můj pas',
            de: 'Hier ist mein Reisepass',
            it: 'Ecco il mio passaporto',
            pt: 'Aqui está meu passaporte'
        }
    },
    {
        phrase: '¿Cuánto tiempo tarda el trámite?',
        category: 'immigration',
        translation: {
            en: 'How long does the process take?',
            cs: 'Jak dlouho trvá vyřízení?',
            de: 'Wie lange dauert der Vorgang?',
            it: 'Quanto tempo richiede la pratica?',
            pt: 'Quanto tempo demora o trâmite?'
        }
    },
    {
        phrase: 'Necesito una copia certificada',
        category: 'immigration',
        translation: {
            en: 'I need a certified copy',
            cs: 'Potřebuji ověřenou kopii',
            de: 'Ich brauche eine beglaubigte Kopie',
            it: 'Ho bisogno di una copia autenticata',
            pt: 'Preciso de uma cópia autenticada'
        }
    },
    {
        phrase: '¿Cuáles son los requisitos?',
        category: 'immigration',
        translation: {
            en: 'What are the requirements?',
            cs: 'Jaké jsou požadavky?',
            de: 'Was sind die Voraussetzungen?',
            it: 'Quali sono i requisiti?',
            pt: 'Quais são os requisitos?'
        }
    },
    {
        phrase: 'Vengo a recoger mi documento',
        category: 'immigration',
        translation: {
            en: 'I came to pick up my document',
            cs: 'Přišel/přišla jsem vyzvednout svůj dokument',
            de: 'Ich komme, um mein Dokument abzuholen',
            it: 'Vengo a ritirare il mio documento',
            pt: 'Vim buscar meu documento'
        }
    },
    {
        phrase: '¿Dónde puedo sacar copias?',
        category: 'immigration',
        translation: {
            en: 'Where can I make copies?',
            cs: 'Kde si mohu udělat kopie?',
            de: 'Wo kann ich Kopien machen?',
            it: 'Dove posso fare delle copie?',
            pt: 'Onde posso tirar cópias?'
        }
    },
    {
        phrase: 'Necesito apostillar un documento',
        category: 'immigration',
        translation: {
            en: 'I need to get a document apostilled',
            cs: 'Potřebuji apostilovat dokument',
            de: 'Ich muss ein Dokument apostillieren lassen',
            it: 'Devo far apostillare un documento',
            pt: 'Preciso apostilar um documento'
        }
    },
    {
        phrase: '¿Cuánto cuesta el trámite?',
        category: 'immigration',
        translation: {
            en: 'How much does the procedure cost?',
            cs: 'Kolik stojí vyřízení?',
            de: 'Wie viel kostet der Vorgang?',
            it: 'Quanto costa la pratica?',
            pt: 'Quanto custa o trâmite?'
        }
    },
    {
        phrase: 'Mi número de expediente es...',
        category: 'immigration',
        translation: {
            en: 'My case number is...',
            cs: 'Moje číslo spisu je...',
            de: 'Meine Aktennummer ist...',
            it: 'Il mio numero di pratica è...',
            pt: 'Meu número de processo é...'
        }
    },
    {
        phrase: '¿Puedo pagar con tarjeta?',
        category: 'immigration',
        translation: {
            en: 'Can I pay by card?',
            cs: 'Mohu platit kartou?',
            de: 'Kann ich mit Karte zahlen?',
            it: 'Posso pagare con carta?',
            pt: 'Posso pagar com cartão?'
        }
    },
    {
        phrase: 'Necesito un comprobante de domicilio',
        category: 'immigration',
        translation: {
            en: 'I need a proof of address',
            cs: 'Potřebuji doklad o bydlišti',
            de: 'Ich brauche einen Adressnachweis',
            it: 'Ho bisogno di un certificato di residenza',
            pt: 'Preciso de um comprovante de endereço'
        }
    },

    // ===== Vida cotidiana =====
    {
        phrase: '¿Qué hora es?',
        category: 'daily',
        translation: {
            en: 'What time is it?',
            cs: 'Kolik je hodin?',
            de: 'Wie spät ist es?',
            it: 'Che ore sono?',
            pt: 'Que horas são?'
        }
    },
    {
        phrase: '¿Dónde queda el baño?',
        category: 'daily',
        translation: {
            en: 'Where is the bathroom?',
            cs: 'Kde je toaleta?',
            de: 'Wo ist die Toilette?',
            it: "Dov'è il bagno?",
            pt: 'Onde fica o banheiro?'
        }
    },
    {
        phrase: 'Tengo hambre',
        category: 'daily',
        translation: {
            en: "I'm hungry",
            cs: 'Mám hlad',
            de: 'Ich habe Hunger',
            it: 'Ho fame',
            pt: 'Estou com fome'
        }
    },
    {
        phrase: 'Tengo sed',
        category: 'daily',
        translation: {
            en: "I'm thirsty",
            cs: 'Mám žízeň',
            de: 'Ich habe Durst',
            it: 'Ho sete',
            pt: 'Estou com sede'
        }
    },
    {
        phrase: '¿Cuánto cuesta?',
        category: 'daily',
        translation: {
            en: 'How much does it cost?',
            cs: 'Kolik to stojí?',
            de: 'Wie viel kostet es?',
            it: 'Quanto costa?',
            pt: 'Quanto custa?'
        }
    },
    {
        phrase: 'No entiendo, ¿puede repetir?',
        category: 'daily',
        translation: {
            en: "I don't understand, can you repeat?",
            cs: 'Nerozumím, můžete zopakovat?',
            de: 'Ich verstehe nicht, können Sie wiederholen?',
            it: 'Non capisco, può ripetere?',
            pt: 'Não entendo, pode repetir?'
        }
    },
    {
        phrase: 'Hablo un poco de español',
        category: 'daily',
        translation: {
            en: 'I speak a little Spanish',
            cs: 'Mluvím trochu španělsky',
            de: 'Ich spreche ein wenig Spanisch',
            it: 'Parlo un po\' di spagnolo',
            pt: 'Falo um pouco de espanhol'
        }
    },
    {
        phrase: '¿Me puede hablar más despacio?',
        category: 'daily',
        translation: {
            en: 'Can you speak more slowly?',
            cs: 'Můžete mluvit pomaleji?',
            de: 'Können Sie langsamer sprechen?',
            it: 'Può parlare più lentamente?',
            pt: 'Pode falar mais devagar?'
        }
    },
    {
        phrase: 'Vivo en México desde hace...',
        category: 'daily',
        translation: {
            en: "I've been living in Mexico for...",
            cs: 'Žiji v Mexiku od...',
            de: 'Ich lebe in Mexiko seit...',
            it: 'Vivo in Messico da...',
            pt: 'Moro no México há...'
        }
    },
    {
        phrase: 'Trabajo en... / Soy...',
        category: 'daily',
        translation: {
            en: 'I work at... / I am a...',
            cs: 'Pracuji v... / Jsem...',
            de: 'Ich arbeite bei... / Ich bin...',
            it: 'Lavoro a... / Sono...',
            pt: 'Trabalho em... / Sou...'
        }
    },
    {
        phrase: '¿Tiene usted...?',
        category: 'daily',
        translation: {
            en: 'Do you have...? (formal)',
            cs: 'Máte...? (formální)',
            de: 'Haben Sie...? (formell)',
            it: 'Ha...? (formale)',
            pt: 'O senhor / a senhora tem...? (formal)'
        }
    },
    {
        phrase: 'Me gustaría...',
        category: 'daily',
        translation: {
            en: 'I would like...',
            cs: 'Chtěl/a bych...',
            de: 'Ich möchte...',
            it: 'Mi piacerebbe... / Vorrei...',
            pt: 'Eu gostaria de...'
        }
    },
    {
        phrase: '¿A qué hora abre/cierra?',
        category: 'daily',
        translation: {
            en: 'What time does it open/close?',
            cs: 'V kolik hodin otvírá/zavírá?',
            de: 'Um wie viel Uhr öffnet/schließt es?',
            it: 'A che ora apre/chiude?',
            pt: 'A que horas abre/fecha?'
        }
    },
    {
        phrase: 'Necesito ir al doctor',
        category: 'daily',
        translation: {
            en: 'I need to go to the doctor',
            cs: 'Potřebuji jít k lékaři',
            de: 'Ich muss zum Arzt gehen',
            it: 'Devo andare dal dottore',
            pt: 'Preciso ir ao médico'
        }
    },
    {
        phrase: '¿Dónde puedo encontrar...?',
        category: 'daily',
        translation: {
            en: 'Where can I find...?',
            cs: 'Kde mohu najít...?',
            de: 'Wo kann ich ... finden?',
            it: 'Dove posso trovare...?',
            pt: 'Onde posso encontrar...?'
        }
    },
    {
        phrase: 'Estoy aprendiendo español',
        category: 'daily',
        translation: {
            en: "I'm learning Spanish",
            cs: 'Učím se španělsky',
            de: 'Ich lerne Spanisch',
            it: 'Sto imparando lo spagnolo',
            pt: 'Estou aprendendo espanhol'
        }
    },

    // ===== Direcciones y transporte =====
    {
        phrase: '¿Cómo llego a...?',
        category: 'directions',
        translation: {
            en: 'How do I get to...?',
            cs: 'Jak se dostanu do/k...?',
            de: 'Wie komme ich zu/nach...?',
            it: 'Come arrivo a...?',
            pt: 'Como chego a...?'
        }
    },
    {
        phrase: '¿Está lejos o cerca?',
        category: 'directions',
        translation: {
            en: 'Is it far or close?',
            cs: 'Je to daleko nebo blízko?',
            de: 'Ist es weit oder nah?',
            it: 'È lontano o vicino?',
            pt: 'Fica longe ou perto?'
        }
    },
    {
        phrase: 'A la derecha / A la izquierda / Derecho',
        category: 'directions',
        translation: {
            en: 'To the right / To the left / Straight ahead',
            cs: 'Doprava / Doleva / Rovně',
            de: 'Nach rechts / Nach links / Geradeaus',
            it: 'A destra / A sinistra / Dritto',
            pt: 'À direita / À esquerda / Em frente'
        }
    },
    {
        phrase: '¿Dónde está la parada de autobús?',
        category: 'directions',
        translation: {
            en: 'Where is the bus stop?',
            cs: 'Kde je autobusová zastávka?',
            de: 'Wo ist die Bushaltestelle?',
            it: "Dov'è la fermata dell'autobus?",
            pt: 'Onde fica a parada de ônibus?'
        }
    },
    {
        phrase: '¿Cuánto cuesta el pasaje?',
        category: 'directions',
        translation: {
            en: 'How much is the fare?',
            cs: 'Kolik stojí jízdenka?',
            de: 'Wie viel kostet die Fahrkarte?',
            it: 'Quanto costa il biglietto?',
            pt: 'Quanto custa a passagem?'
        }
    },
    {
        phrase: 'Quiero ir a...',
        category: 'directions',
        translation: {
            en: 'I want to go to...',
            cs: 'Chci jet do/na...',
            de: 'Ich möchte nach/zu ... fahren',
            it: 'Voglio andare a...',
            pt: 'Quero ir a/para...'
        }
    },
    {
        phrase: '¿Me puede llevar a...?',
        category: 'directions',
        translation: {
            en: 'Can you take me to...?',
            cs: 'Můžete mě odvézt do/k...?',
            de: 'Können Sie mich nach/zu ... bringen?',
            it: 'Può portarmi a...?',
            pt: 'Pode me levar a...?'
        }
    },
    {
        phrase: '¿Cuánto tiempo se hace?',
        category: 'directions',
        translation: {
            en: 'How long does it take?',
            cs: 'Jak dlouho to trvá?',
            de: 'Wie lange dauert es?',
            it: 'Quanto tempo ci vuole?',
            pt: 'Quanto tempo leva?'
        }
    },
    {
        phrase: 'Siga derecho dos cuadras',
        category: 'directions',
        translation: {
            en: 'Go straight for two blocks',
            cs: 'Jděte rovně dva bloky',
            de: 'Gehen Sie zwei Blocks geradeaus',
            it: 'Vada dritto per due isolati',
            pt: 'Siga em frente duas quadras'
        }
    },
    {
        phrase: '¿Hay una estación de metro cerca?',
        category: 'directions',
        translation: {
            en: 'Is there a metro station nearby?',
            cs: 'Je tady poblíž stanice metra?',
            de: 'Gibt es eine U-Bahn-Station in der Nähe?',
            it: "C'è una stazione della metro qui vicino?",
            pt: 'Há uma estação de metrô perto daqui?'
        }
    },
    {
        phrase: '¿Pasa por aquí el camión a...?',
        category: 'directions',
        translation: {
            en: 'Does the bus to ... pass by here? (Mexican)',
            cs: 'Jede tudy autobus do...? (mexický výraz)',
            de: 'Fährt der Bus nach ... hier vorbei? (mexikanisch)',
            it: "L'autobus per ... passa di qui? (espressione messicana)",
            pt: 'O ônibus para ... passa por aqui? (expressão mexicana)'
        }
    },
    {
        phrase: 'Bájeme en la próxima, por favor',
        category: 'directions',
        translation: {
            en: 'Let me off at the next stop, please',
            cs: 'Vysaďte mě na příští zastávce, prosím',
            de: 'Lassen Sie mich bitte an der nächsten Haltestelle raus',
            it: 'Mi faccia scendere alla prossima, per favore',
            pt: 'Me deixe na próxima, por favor'
        }
    },

    // ===== Compras y restaurante =====
    {
        phrase: '¿Cuánto cuesta esto?',
        category: 'shopping',
        translation: {
            en: 'How much does this cost?',
            cs: 'Kolik to stojí?',
            de: 'Wie viel kostet das?',
            it: 'Quanto costa questo?',
            pt: 'Quanto custa isto?'
        }
    },
    {
        phrase: '¿Me da la cuenta, por favor?',
        category: 'shopping',
        translation: {
            en: 'Can I have the bill, please?',
            cs: 'Účet, prosím?',
            de: 'Die Rechnung, bitte?',
            it: 'Mi porta il conto, per favore?',
            pt: 'Pode me trazer a conta, por favor?'
        }
    },
    {
        phrase: 'Quisiera ordenar...',
        category: 'shopping',
        translation: {
            en: 'I would like to order...',
            cs: 'Chtěl/a bych si objednat...',
            de: 'Ich möchte bestellen...',
            it: 'Vorrei ordinare...',
            pt: 'Gostaria de pedir...'
        }
    },
    {
        phrase: '¿Qué me recomienda?',
        category: 'shopping',
        translation: {
            en: 'What do you recommend?',
            cs: 'Co mi doporučujete?',
            de: 'Was empfehlen Sie mir?',
            it: 'Cosa mi consiglia?',
            pt: 'O que me recomenda?'
        }
    },
    {
        phrase: '¿Tiene algo más barato?',
        category: 'shopping',
        translation: {
            en: 'Do you have something cheaper?',
            cs: 'Máte něco levnějšího?',
            de: 'Haben Sie etwas Günstigeres?',
            it: 'Ha qualcosa di più economico?',
            pt: 'Tem algo mais barato?'
        }
    },
    {
        phrase: 'Me lo llevo',
        category: 'shopping',
        translation: {
            en: "I'll take it",
            cs: 'Vezmu si to',
            de: 'Ich nehme es',
            it: 'Lo prendo',
            pt: 'Vou levar'
        }
    },
    {
        phrase: '¿Aceptan tarjeta de crédito?',
        category: 'shopping',
        translation: {
            en: 'Do you accept credit cards?',
            cs: 'Přijímáte kreditní karty?',
            de: 'Akzeptieren Sie Kreditkarten?',
            it: 'Accettate carte di credito?',
            pt: 'Aceitam cartão de crédito?'
        }
    },
    {
        phrase: '¿Me puede dar una bolsa?',
        category: 'shopping',
        translation: {
            en: 'Can you give me a bag?',
            cs: 'Můžete mi dát tašku?',
            de: 'Können Sie mir eine Tüte geben?',
            it: 'Mi può dare un sacchetto?',
            pt: 'Pode me dar uma sacola?'
        }
    },
    {
        phrase: 'Quiero una mesa para dos',
        category: 'shopping',
        translation: {
            en: 'I want a table for two',
            cs: 'Chtěl/a bych stůl pro dva',
            de: 'Ich möchte einen Tisch für zwei',
            it: 'Vorrei un tavolo per due',
            pt: 'Quero uma mesa para dois'
        }
    },
    {
        phrase: '¿Tiene menú del día?',
        category: 'shopping',
        translation: {
            en: 'Do you have a daily menu?',
            cs: 'Máte denní menu?',
            de: 'Haben Sie ein Tagesmenü?',
            it: 'Avete il menù del giorno?',
            pt: 'Tem menu do dia?'
        }
    },
    {
        phrase: '¿La propina está incluida?',
        category: 'shopping',
        translation: {
            en: 'Is the tip included?',
            cs: 'Je spropitné zahrnuto?',
            de: 'Ist das Trinkgeld inbegriffen?',
            it: 'La mancia è inclusa?',
            pt: 'A gorjeta está incluída?'
        }
    },
    {
        phrase: '¿Me trae más agua, por favor?',
        category: 'shopping',
        translation: {
            en: 'Can you bring me more water, please?',
            cs: 'Přinesete mi ještě vodu, prosím?',
            de: 'Bringen Sie mir bitte noch Wasser?',
            it: "Mi porta ancora dell'acqua, per favore?",
            pt: 'Pode me trazer mais água, por favor?'
        }
    },

    // ===== Emergencias =====
    {
        phrase: '¡Ayuda! / ¡Socorro!',
        category: 'emergency',
        translation: {
            en: 'Help!',
            cs: 'Pomoc!',
            de: 'Hilfe!',
            it: 'Aiuto! / Soccorso!',
            pt: 'Ajuda! / Socorro!'
        }
    },
    {
        phrase: 'Necesito un doctor',
        category: 'emergency',
        translation: {
            en: 'I need a doctor',
            cs: 'Potřebuji lékaře',
            de: 'Ich brauche einen Arzt',
            it: 'Ho bisogno di un dottore',
            pt: 'Preciso de um médico'
        }
    },
    {
        phrase: 'Llame a una ambulancia',
        category: 'emergency',
        translation: {
            en: 'Call an ambulance',
            cs: 'Zavolejte sanitku',
            de: 'Rufen Sie einen Krankenwagen',
            it: "Chiami un'ambulanza",
            pt: 'Chame uma ambulância'
        }
    },
    {
        phrase: '¿Dónde está el hospital más cercano?',
        category: 'emergency',
        translation: {
            en: 'Where is the nearest hospital?',
            cs: 'Kde je nejbližší nemocnice?',
            de: 'Wo ist das nächste Krankenhaus?',
            it: "Dov'è l'ospedale più vicino?",
            pt: 'Onde fica o hospital mais próximo?'
        }
    },
    {
        phrase: 'Me siento mal',
        category: 'emergency',
        translation: {
            en: 'I feel sick',
            cs: 'Je mi špatně',
            de: 'Mir geht es schlecht',
            it: 'Mi sento male',
            pt: 'Estou me sentindo mal'
        }
    },
    {
        phrase: 'Tuve un accidente',
        category: 'emergency',
        translation: {
            en: 'I had an accident',
            cs: 'Měl/a jsem nehodu',
            de: 'Ich hatte einen Unfall',
            it: 'Ho avuto un incidente',
            pt: 'Tive um acidente'
        }
    },
    {
        phrase: 'Me robaron',
        category: 'emergency',
        translation: {
            en: 'I was robbed',
            cs: 'Okradli mě',
            de: 'Ich wurde ausgeraubt',
            it: 'Mi hanno derubato',
            pt: 'Me roubaram / Fui roubado/a'
        }
    },
    {
        phrase: 'Necesito llamar a mi embajada',
        category: 'emergency',
        translation: {
            en: 'I need to call my embassy',
            cs: 'Potřebuji zavolat na svou ambasádu',
            de: 'Ich muss meine Botschaft anrufen',
            it: 'Devo chiamare la mia ambasciata',
            pt: 'Preciso ligar para minha embaixada'
        }
    },
    {
        phrase: '¿Dónde está la farmacia?',
        category: 'emergency',
        translation: {
            en: 'Where is the pharmacy?',
            cs: 'Kde je lékárna?',
            de: 'Wo ist die Apotheke?',
            it: "Dov'è la farmacia?",
            pt: 'Onde fica a farmácia?'
        }
    },
    {
        phrase: 'Es una emergencia',
        category: 'emergency',
        translation: {
            en: "It's an emergency",
            cs: 'Je to nouzová situace',
            de: 'Es ist ein Notfall',
            it: "È un'emergenza",
            pt: 'É uma emergência'
        }
    },
    {
        phrase: 'Necesito la policía',
        category: 'emergency',
        translation: {
            en: 'I need the police',
            cs: 'Potřebuji policii',
            de: 'Ich brauche die Polizei',
            it: 'Ho bisogno della polizia',
            pt: 'Preciso da polícia'
        }
    },
    {
        phrase: '¿Puede llamar al 911?',
        category: 'emergency',
        translation: {
            en: 'Can you call 911?',
            cs: 'Můžete zavolat 911?',
            de: 'Können Sie 911 anrufen?',
            it: 'Può chiamare il 911?',
            pt: 'Pode ligar para o 911?'
        }
    },

    // ===== Conversación =====
    {
        phrase: '¿De dónde eres? / ¿De dónde es usted?',
        category: 'conversation',
        translation: {
            en: 'Where are you from? (informal / formal)',
            cs: 'Odkud jsi? / Odkud jste? (neformální / formální)',
            de: 'Woher kommst du? / Woher kommen Sie? (informell / formell)',
            it: 'Di dove sei? / Di dove è Lei? (informale / formale)',
            pt: 'De onde você é? / De onde o senhor é? (informal / formal)'
        }
    },
    {
        phrase: 'Soy de...',
        category: 'conversation',
        translation: {
            en: "I'm from...",
            cs: 'Jsem z...',
            de: 'Ich komme aus...',
            it: 'Sono di/da...',
            pt: 'Sou de...'
        }
    },
    {
        phrase: '¿Cuánto tiempo llevas en México?',
        category: 'conversation',
        translation: {
            en: 'How long have you been in Mexico?',
            cs: 'Jak dlouho jsi v Mexiku?',
            de: 'Wie lange bist du schon in Mexiko?',
            it: 'Da quanto tempo sei in Messico?',
            pt: 'Há quanto tempo você está no México?'
        }
    },
    {
        phrase: 'Me gusta mucho México',
        category: 'conversation',
        translation: {
            en: 'I like Mexico a lot',
            cs: 'Mexiko se mi moc líbí',
            de: 'Mexiko gefällt mir sehr',
            it: 'Mi piace molto il Messico',
            pt: 'Gosto muito do México'
        }
    },
    {
        phrase: '¿Qué significa...?',
        category: 'conversation',
        translation: {
            en: 'What does ... mean?',
            cs: 'Co znamená...?',
            de: 'Was bedeutet...?',
            it: 'Cosa significa...?',
            pt: 'O que significa...?'
        }
    },
    {
        phrase: '¿Cómo se dice... en español?',
        category: 'conversation',
        translation: {
            en: 'How do you say ... in Spanish?',
            cs: 'Jak se řekne ... ve španělštině?',
            de: 'Wie sagt man ... auf Spanisch?',
            it: 'Come si dice ... in spagnolo?',
            pt: 'Como se diz ... em espanhol?'
        }
    },
    {
        phrase: '¿Puede escribirlo, por favor?',
        category: 'conversation',
        translation: {
            en: 'Can you write it down, please?',
            cs: 'Můžete to napsat, prosím?',
            de: 'Können Sie es bitte aufschreiben?',
            it: 'Può scriverlo, per favore?',
            pt: 'Pode escrever, por favor?'
        }
    },
    {
        phrase: 'No sé / No estoy seguro(a)',
        category: 'conversation',
        translation: {
            en: "I don't know / I'm not sure",
            cs: 'Nevím / Nejsem si jistý/á',
            de: 'Ich weiß nicht / Ich bin mir nicht sicher',
            it: 'Non lo so / Non sono sicuro/a',
            pt: 'Não sei / Não tenho certeza'
        }
    },
    {
        phrase: 'Creo que sí / Creo que no',
        category: 'conversation',
        translation: {
            en: 'I think so / I think not',
            cs: 'Myslím, že ano / Myslím, že ne',
            de: 'Ich glaube ja / Ich glaube nicht',
            it: 'Credo di sì / Credo di no',
            pt: 'Acho que sim / Acho que não'
        }
    },
    {
        phrase: '¿En serio? / ¿De verdad?',
        category: 'conversation',
        translation: {
            en: 'Really? / Seriously?',
            cs: 'Vážně? / Opravdu?',
            de: 'Im Ernst? / Wirklich?',
            it: 'Davvero? / Sul serio?',
            pt: 'Sério? / De verdade?'
        }
    },
    {
        phrase: '¡Qué padre!',
        category: 'conversation',
        translation: {
            en: 'Cool! / Awesome! (Mexican slang)',
            cs: 'Super! / Skvělé! (mexický slang)',
            de: 'Cool! / Toll! (mexikanischer Slang)',
            it: 'Che bello! / Fantastico! (slang messicano)',
            pt: 'Que legal! / Que bacana! (gíria mexicana)'
        }
    },
    {
        phrase: 'Estoy de acuerdo',
        category: 'conversation',
        translation: {
            en: 'I agree',
            cs: 'Souhlasím',
            de: 'Ich stimme zu / Einverstanden',
            it: "Sono d'accordo",
            pt: 'Estou de acordo / Concordo'
        }
    },
    {
        phrase: 'No te preocupes / No se preocupe',
        category: 'conversation',
        translation: {
            en: "Don't worry (informal / formal)",
            cs: 'Neboj se / Nebojte se (neformální / formální)',
            de: 'Mach dir keine Sorgen / Machen Sie sich keine Sorgen (informell / formell)',
            it: 'Non ti preoccupare / Non si preoccupi (informale / formale)',
            pt: 'Não se preocupe (informal / formal)'
        }
    },
    {
        phrase: 'Con calma',
        category: 'conversation',
        translation: {
            en: 'Take it easy / No rush',
            cs: 'V klidu / Bez spěchu',
            de: 'Immer mit der Ruhe / Keine Eile',
            it: 'Con calma / Senza fretta',
            pt: 'Com calma / Sem pressa'
        }
    },
    {
        phrase: 'Poco a poco',
        category: 'conversation',
        translation: {
            en: 'Little by little / Step by step',
            cs: 'Pomalu, ale jistě / Krok za krokem',
            de: 'Nach und nach / Schritt für Schritt',
            it: 'Poco a poco / Passo dopo passo',
            pt: 'Pouco a pouco / Passo a passo'
        }
    }
];
