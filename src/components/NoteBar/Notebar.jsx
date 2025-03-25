import NoteList from "../NoteList/NoteList";
import styles from "./NoteBar.module.css"

let Notebar = (props) => {

let notes = ["note1", "note2", "note3"];

    return(
        <div className={styles.noteBar}>
            <div className={styles.noteBarHeader}>Notes:</div>
            <div className={styles.noteList}>
                {
                    notes.map(note => {
                        return( 
                            <NoteList name = {note}/>
                    )
                    })
                }
            </div>
        </div>
    );
}

export default Notebar;