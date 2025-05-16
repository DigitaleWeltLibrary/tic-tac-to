export default function ChangeLang({ changelanguage, getlang }) {
    return (
        <button 
        className="changelange"
            onClick={changelanguage}
        >{getlang}</button>
    )
}

