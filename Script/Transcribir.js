function limparTexto() {
    const textarea = document.getElementById('bar');
    textarea.value = '';
  }
    function transliterar() {
      const textarea = document.getElementById('bar');
      const textoHebraico = textarea.value;
      const transliteracao = transliterarTextoHebraico(textoHebraico);
      const textoTransliterado = textoHebraico + " (" + transliteracao + ")";
      textarea.value = textoTransliterado;
    }
  
    function transliterarTextoHebraico(texto) {
      const tabelaTransliteracao = {

        //alef
        'א': '',
        'אָ': 'a',
        'אַ': 'a',
        'אֶ': 'e',
        'אֵ': 'e',
        'אִ': 'i',
        'אֹ' : 'o',
        'אֻ': 'u',
        'אוֹ': 'o',
        'אוּ': 'u',
        'אֳ' : 'o',
        'אֲ' : 'a',
        'אֱ' : 'e',
        'אְ' : 'e',

        //veit
        'ב': 'v',
        'בָ': 'va',
        'בַ' : 'va',
        'בֶ' : 've',
        'בֵ' : 've',
        'בִ' : 'vi',
        'בֳ' : 'vo',
        'בֲ' : 'va',
        'בֱ' : 've',
        'בְ' : 'v',
        'בֹ' : 'vo',
        'בֻ' : 'vu',
        'בוֹ' : 'vo',
        'בוּ' : 'vu',

        //beit
        'בּ' : 'b',
        'בָּ': 'ba',
        //'בַּ': 'ba',
        //'בֶּ': 'be',
        //'בֵּ': 'be',
        //'בִּ': 'bi',
        //'בֳּ': 'bo',
        //'בֲּ': 'ba',
        //'בֱּ': 'be',
        //'בְּ': 'b',

        //Guimel
        'ג': 'g',
        'גוּ': 'gu',
        'גוֹ': 'go',
        'גֻ': 'gu',
        'גֹ': 'go',
        'גָ': 'ga',
        'גַ': 'ga',
        'גֶ': 'ge',
        'גֵ': 'ge',
        'גִ': 'gi',
        'גֳ': 'go',
        'גֲ': 'ga',
        'גֱ': 'ge',
        'גְ': 'g',

        //Dalet
        'ד': 'd',
        'דוּ': 'du',
        'דוֹ': 'do',
        'דֻ': 'du',
        'דֹ': 'do',
        'דָ': 'da',
        'דַ': 'da',
        'דֶ': 'de',
        'דֵ': 'de',
        'דִ': 'di',
        'דֳ': 'do',
        'דֲ': 'da',
        'דֱ': 'de',
        'דְ': 'd',

        //he
        'ה': 'h',
        'הוּ': 'hu',
        'הוֹ': 'ho',
        'הֻ': 'hu',
        'הֹ': 'ho',
        'הָ': 'ha',
        'הַ': 'ha',
        'הֶ': 'he',
        'הֵ': 'he',
        'הִ': 'hi',
        'הֳ': 'ho',
        'הֲ': 'ha',
        'הֱ': 'he',
        'הְ': 'h',

        //vav
        'ו': 'v',
        'וָ': 'va',
        'וַ': 'va',
        'וֶ': 've',
        'וֵ': 've',
        'וִ': 'vi',
        'וְ': 've',
        'וּ': 'u',
        'וֹ': 'o',
        'וֻ': 'vu',
        'וֳ': 'vo',
        'וֲ': 'va',
        'וֱ': 've',
        'וְ': 'v',

        //zayn
        'ז': 'z',
        'זוּ': 'zu',
        'זוֹ': 'zo',
        'זֻ': 'zu',
        'זֹ': 'zo',
        'זָ': 'za',
        'זַ': 'za',
        'זֶ': 'ze',
        'זֵ': 'ze',
        'זִ': 'zi',
        'זֳ': 'zo',
        'זֲ': 'za',
        'זֱ': 'ze',
        'זְ': 'z',

        //chet
        'ח': 'ch',
        'חוּ' : 'chu',
        'חוֹ' : 'cho',
        'חֻ' : 'chu',
        'חֹ' : 'cho',
        'חָ' : 'cha',
        'חַ' : 'cha',
        'חֶ' : 'che',
        'חֵ' : 'che',
        'חִ' : 'chi',
        'חֳ' : 'cho',
        'חֲ' : 'cha',
        'חֱ' : 'che',
        'חְ' : 'ch',

        //tet
        'ט': 't',
        'טוּ' : 'tu',
        'טוֹ' : 'to',
        'טֻ' : 'tu',
        'טֹ' : 'to',
        'טָ' : 'ta',
        'טַ' : 'ta',
        'טֶ' : 'te',
        'טֵ' : 'te',
        'טִ' : 'ti',
        'טֳ' : 'to',
        'טֲ' : 'ta',
        'טֱ' : 'te',
        'טְ' : 't',

        //iod
        'י': 'i',
        'יוּ' : 'iu',
        'יוֹ' : 'io',
        'יֻ' : 'iu',
        'יֹ' : 'io',
        'יָ' : 'ia',
        'יַ' : 'ia',
        'יֶ' : 'ie',
        'יֵ' : 'ie',
        'יִ' : 'i',
        'יֳ' : 'io',
        'יֲ' : 'ia',
        'יֱ' : 'ie',
        'יְ' : 'i',

        //chet
        'כ': 'ch',
        'כוּ' : 'chu',
        'כוֹ' : 'cho',
        'כֻ' : 'chu',
        'כֹ' : 'cho',
        'כָ' : 'cha',
        'כַ' : 'cha',
        'כֶ' : 'che',
        'כֵ' : 'che',
        'כִ' : 'chi',
        'כֳ' : 'cho',
        'כֲ' : 'cha',
        'כֱ' : 'che',
        'כְ' : 'ch',

        'ך': 'ch',

        //lamed
        'ל': 'l',
        'לוּ' : 'lu',
        'לוֹ' : 'lo',
        'לֻ' : 'lu',
        'לֹ' : 'lo',
        'לָ' : 'la',
        'לַ' : 'la',
        'לֶ' : 'le',
        'לֵ' : 'le',
        'לִ' : 'li',
        'לֳ' : 'lo',
        'לֲ' : 'la',
        'לֱ' : 'le',
        'לְ' : 'l',

        //mem
        'מ': 'm',
        'מוּ' : 'mu',
        'מוֹ' : 'mo',
        'מֻ' : 'mu',
        'מֹ' : 'mo',
        'מָ' : 'ma',
        'מַ' : 'ma',
        'מֶ' : 'me',
        'מֵ' : 'me',
        'מִ' : 'mi',
        'מֳ' : 'mo',
        'מֲ' : 'ma',
        'מֱ' : 'me',
        'מְ' : 'me',

        'ם': 'm',

        //num
        'נ': 'n',
        'נוּ' : 'nu',
        'נוֹ' : 'no',
        'נֻ' : 'nu',
        'נֹ' : 'no',
        'נָ' : 'na',
        'נַ' : 'na',
        'נֶ' : 'ne',
        'נֵ' : 'ne',
        'נִ' : 'ni',
        'נֳ' : 'no',
        'נֲ' : 'na',
        'נֱ' : 'ne',
        'נְ' : 'n',

        'ן': 'n',

        //Sameach
        'ס': 's',
        'סוּ' : 'su',
        'סוֹ' : 'so',
        'סֻ' : 'su',
        'סֹ' : 'so',
        'סָ' : 'sa',
        'סַ' : 'sa',
        'סֶ' : 'se',
        'סֵ' : 'se',
        'סִ' : 'si',
        'סֳ' : 'so',
        'סֲ' : 'sa',
        'סֱ' : 'se',
        'סְ' : 's',

        //ayin
        'ע': '',
        'עוּ' : 'u',
        'עוֹ' : 'o',
        'עֻ' : 'u',
        'עֹ' : 'o',
        'עָ' : 'a',
        'עַ' : 'a',
        'עֶ' : 'e',
        'עֵ' : 'e',
        'עִ' : 'i',
        'עֳ' : 'o',
        'עֲ' : 'a',
        'עֱ' : 'e',
        'עְ' : 'e',

        //fe
        'פ': 'f',
        'פוּ' : 'fu',
        'פוֹ' : 'fo',
        'פֻ' : 'fu',
        'פֹ' : 'fo',
        'פָ' : 'fa',
        'פַ' : 'fa',
        'פֶ' : 'fe',
        'פֵ' : 'fe',
        'פִ' : 'fi',
        'פֳ' : 'fo',
        'פֲ' : 'fa',
        'פֱ' : 'fe',
        'פְ' : 'f',

        'ף': 'f',

        'פּ' : 'p',

        //tsadi
        'צ': 'tz',
        'צוּ' : 'tzu',
        'צוֹ' : 'tzo',
        'צֻ' : 'tzu',
        'צֹ' : 'tzo',
        'צָ' : 'tza',
        'צַ' : 'tza',
        'צֶ' : 'tze',
        'צֵ' : 'tze',
        'צִ' : 'tzi',
        'צֳ' : 'tzo',
        'צֲ' : 'tza',
        'צֱ' : 'tze',
        'צְ' : 'tz',

        'ץ': 'tz',

        //kof
        'ק': 'k',
        'קוּ' : 'ku',
        'קוֹ' : 'ko',
        'קֻ' : 'ku',
        'קֹ' : 'ko',
        'קָ' : 'ka',
        'קַ' : 'ka',
        'קֶ' : 'ke',
        'קֵ' : 'ke',
        'קִ' : 'ki',
        'קֳ' : 'ko',
        'קֲ' : 'ka',
        'קֱ' : 'ke',
        'קְ' : 'k',

        //resh
        'ר': 'r',
        'רוּ' : 'ru',
        'רוֹ' : 'ro',
        'רֻ' : 'ru',
        'רֹ' : 'ro',
        'רָ' : 'ra',
        'רַ' : 'ra',
        'רֶ' : 're',
        'רֵ' : 're',
        'רִ' : 'ri',
        'רֳ' : 'ro',
        'רֲ' : 'ra',
        'רֱ' : 're',
        'רְ' : 'r',
        
        //shin
        'שׂ' : 's',
        'ש': 'sh',
        'שוּ' : 'shu',
        'שוֹ' : 'sho',
        'שֻ' : 'shu',
        'שֹ' : 'sho',
        'שָ' : 'sha',
        'שַ' : 'sha',
        'שֶ' : 'she',
        'שֵ' : 'she',
        'שִ' : 'shi',
        'שֳ' : 'sho',
        'שֲ' : 'sha',
        'שֱ' : 'she',
        'שְ' : 'sh',

        //tav
        'ת': 't',
        'תוּ' : 'tu',
        'תוֹ' : 'to',
        'תֻ' : 'tu',
        'תֹ' : 'to',
        'תָ' : 'ta',
        'תַ' : 'ta',
        'תֶ' : 'te',
        'תֵ' : 'te',
        'תִ' : 'ti',
        'תֳ' : 'to',
        'תֲ' : 'ta',
        'תֱ' : 'te',
        'תְ' : 't'
      };
  
      let transliteracao = '';
      let i = 0;
      while (i < texto.length) {
        let caractereHebraico = texto[i];
        if (caractereHebraico in tabelaTransliteracao) {
          let transliteracaoCaractere = tabelaTransliteracao[caractereHebraico];
          if (i < texto.length - 1) {
            let proximoCaractereHebraico = texto[i + 1];
            let doisCaracteres = caractereHebraico + proximoCaractereHebraico;
            if (doisCaracteres in tabelaTransliteracao) {
              transliteracaoCaractere = tabelaTransliteracao[doisCaracteres];
              i++;
            }
          }
          transliteracao += transliteracaoCaractere;
        } else {
          transliteracao += caractereHebraico;
        }
        i++;
      }
  
      return transliteracao;
    }