import style from "./NoteStyles.module.css"
let Note = (props) => {

    return(
        <div className={style.note}>
            <div className={style.noteName}>{props.note.name}</div>
            <div className={style.noteText}>
                {props.note.text}
            </div>
        </div>
    );
}

export default Note;