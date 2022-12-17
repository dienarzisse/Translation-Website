import Language from "./Language";
import { useContext } from "react";
import LanguageTextContext from "../contexts/languageText";
import "./css/LanguageList.css"
function LanguagesList({ languages }){
    const { setLanguage } = useContext(LanguageTextContext);
    const showLangauges = languages.map((language) => {
        return <Language
        key={language.languageId}
        language={language}
        setLanguage={setLanguage}
         />
    });
    return (
    <div className="languageListWrapper">
        <ul>{showLangauges}</ul>
    </div>
    );
}

export default LanguagesList;