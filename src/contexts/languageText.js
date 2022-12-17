import {createContext, useState} from "react";
const LanguageTextContext = createContext(null);

function Provider({children}){
    const [text, setText] = useState('');
    const [selectedLanguage, setLanguage] = useState("None");
    const valueToShare = {
        selectedLanguage,
        setLanguage,
        text,
        setText
    }
    
    return <LanguageTextContext.Provider value={valueToShare}>
        {children}
        </LanguageTextContext.Provider>
}
export { Provider };
export default LanguageTextContext;