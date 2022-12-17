import {createContext, useState} from "react";
const LanguageContext = createContext(null);

function Provider({children}){
    const [text, setText] = useState('');
    const [selectedLanguage, setLanguage] = useState("None");
    const valueToShare = {
        selectedLanguage,
        setLanguage,
        text,
        setText
    }
    
    return <LanguageContext.Provider value={valueToShare}>
        {children}
        </LanguageContext.Provider>
}
export { Provider };
export default LanguageContext;