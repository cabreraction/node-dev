const supportedLanguages = [ 'en', 'es', 'fr', 'it' ]
const selectedLanguage = process.argv[2];

if (!supportedLanguages.includes(selectedLanguage)) {
    console.log("Sorry, that language is not supported");
    exit(); 
}

const translationModule = `./strings-${selectedLanguage}.js`;

import(translationModule)
    .then(strings => {
        console.log(strings.HELLO);
    })