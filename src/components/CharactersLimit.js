import {useContext} from "react";
import LanguageTextContext from "../contexts/languageText";
import "./css/CharactersLimit.css"
function CharactersLimit(){
    const {text} = useContext(LanguageTextContext);
    return( 
    <span className="char-limit">{text.length}/1000</span>
    );
}
export default CharactersLimit;