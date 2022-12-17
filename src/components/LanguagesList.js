import Language from "./Language";
import { useContext } from "react";
import LanguageContext from "../contexts/language";
import "./css/LanguageList.css"
function LanguagesList({ languages }){
    const { setLanguage } = useContext(LanguageContext);
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