import useLocalStorage from '../../lib/useLocalStorage';
import { ApplicationData } from '../../pages/[app]';
import Button from '../button'
import styles from './notes.module.css'

type Props = {
    namesAndIds: {
        name: string,
        id: number
    }[],
    currApp: number
}

const Notes = ({ namesAndIds, currApp }: Props) => {
    const year = new Date().getFullYear();
    const [note, setNote] = useLocalStorage(`note-${currApp}-${year}`, "");

    const handleNoteChange = (e) => {
        localStorage.setItem(`note-${currApp}`, e.target.value);
        setNote(e.target.value);
    };

    const exportNotes = () => {
        const list = [];
        list.push(["Name", "Note"]);
        for (const { name, id } of namesAndIds) {
            const note = localStorage.getItem(`note-${id}-${year}`);
            if (note) {
                list.push([name, note]);
            }
        }

        const csvContent = list.map((e) => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "exportedNotes.csv");
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className={styles.notes}>
            <span className={styles.notesSticky}>
                <h2>Notes</h2>
                <Button
                    onClick={exportNotes}
                >
                    Export notes
                </Button>
                <textarea
                    value={note}
                    onChange={handleNoteChange}
                    placeholder="Add notes here 📝"
                    style={{ height: '500px', marginTop: "var(--gap)", padding: 'var(--gap-half)' }}
                ></textarea>
            </span>
        </div>
    )
}

export default Notes