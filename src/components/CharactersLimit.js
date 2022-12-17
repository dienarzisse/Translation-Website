import {useContext} from "react";
import LanguageContext from "../contexts/language";
import "./css/CharactersLimit.css"
function CharactersLimit(){
    const {text} = useContext(LanguageContext);
    return( 
    <span className="char-limit">{text.length}/1000</span>
    );
}
export default CharactersLimit;