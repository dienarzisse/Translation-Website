import {useContext} from "react";
import LanguageTextContext from "../contexts/languageText";
import "./css/TranslationArea.css"
function TranslationArea({ handleTranslation, setTranslatedText }){
    const {text, setText} = useContext(LanguageTextContext);
    const {selectedLanguage} = useContext(LanguageTextContext);

    function handleChange(event){
        const newText = event.target.value;
        setText(newText);
        if(newText === '')
            setTranslatedText('');
    }

    function handleSubmit(event){
        event.preventDefault();
        handleTranslation(text, selectedLanguage);
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>Enter text to be translated</label>
        <textarea value={text} cols="40" rows="5" placeholder={"Enter your text..."}  onChange={handleChange} />
        <button className="translate-button">
            <img src="https://www.svgrepo.com/show/223044/translate-language.svg" alt="translation icon"></img>
            <span>Translate</span>
        </button>
    </form>
    );
}

export default TranslationArea;