import language from "../assets/languagepack.json" assert { type: "json" };


/* NOTE function to get translation from json file */
export default function gettranslation(lang, key) {
    return language[lang]?.[key]
}