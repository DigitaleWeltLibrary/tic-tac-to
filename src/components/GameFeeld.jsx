import { faCircleNotch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GameFeeld({ field, changefeeld, index, gameend, winfelds }) {
    return (
        <div
            onClick={
                () =>
                    gameend == null
                        ? changefeeld(index)
                        : null
            }
        >
            {field == null ?
                null :
                <FontAwesomeIcon icon={
                    field === "O"
                        ? faCircleNotch
                        : faXmark
                }
                    color='#72a24d'
                    size='2xl'
                    opacity={
                        gameend
                            ? (winfelds?.includes(index) ? 1 : 0.5)
                            : 1
                    }
                />}
        </div>
    )
}