import LanguagesList from "./components/LanguagesList";
import TranslatedText from "./components/TranslatedText";
import TranslationArea from "./components/TranslationArea";
import CharactersLimit from "./components/CharactersLimit";
import { useState } from "react";
import axios from "axios";
import "./css/App.css";

function App() {
  // state variables
  const languages = [{language:"English ", languageId:"en"},{language:"Spanish", languageId:"es"}, {language:"Italian", languageId:"it"},
  {language:"German", languageId:"de"}, {language:"French", languageId:"fr"},
  {language:"Russian", languageId:"ru"}, {language:"Arabic", languageId:"ar"},
  {language:"Japanese", languageId:"ja"}
];
  const [translatedText, setTranslatedText] = useState('');
  const [detectLangaugeKey, setLangaugeKey] = useState("en");
  
  // event handlers
  const handleTranslation = async (text, selectedLanguage) => {
    if(selectedLanguage !== "None" && text !== "")
    {
      await axios.post('https://libretranslate.de/detect',{q: text}).then((response) => {
        setLangaugeKey(response.data[0].language);
      });
      let data ={
        q: text,
        source: detectLangaugeKey,
        target: selectedLanguage
      }

      await axios.post('https://libretranslate.de/translate', data).then((response) => {
        setTranslatedText(response.data.translatedText);
      });
    }
    else
      if(text === "")
        alert("Please write something!");
      else
        alert("Please select a language!");
    
  };

  return (
      <main className="App">
        <div className="first-section-desktop">
          <CharactersLimit />
          <TranslationArea  handleTranslation={handleTranslation} setTranslatedText={setTranslatedText} />
          <LanguagesList languages={languages} />
      </div>
      <TranslatedText translatedText={translatedText} />
     </main>
  );
}

export default App;
