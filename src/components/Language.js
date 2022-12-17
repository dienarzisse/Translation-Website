import "./css/Language.css"
function Language({ language, setLanguage }){
    const handleClick = (event) => {
        const prevElement = document.getElementById("selected");
        if(prevElement)
            prevElement.setAttribute("id", "")
        const target = event.target;
        const language = target.className;
        setLanguage(language);
        target.setAttribute("id", "selected")
    };
    return( 
    <li>
        <button className={language.languageId} onClick={handleClick}>{language.language}</button>
    </li>
    );
}

export default Language;