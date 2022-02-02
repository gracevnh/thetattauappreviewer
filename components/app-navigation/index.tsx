import Button from "../button";

type Props = {
    apps: Object[],
    currApp: number,
    setApp: (app: number) => void,
}

const AppNavigation = ({ apps, currApp, setApp }: Props) => {
    const nextApp = () => {
        if (currApp === apps.length - 1) {
            localStorage.setItem("currApp", "0");
            setApp(0);
            return;
        }
        localStorage.setItem("currApp", (currApp + 1).toString());
        setApp(currApp + 1);
    };

    const prevApp = () => {
        if (currApp === 0) {
            localStorage.setItem("currApp", (apps.length - 1).toString());
            setApp(apps.length - 1);
            return;
        }
        localStorage.setItem("currApp", (currApp - 1).toString());
        setApp(currApp - 1);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={prevApp}>&#171; Prev</Button>
            <Button onClick={nextApp}>Next &#187;</Button>
        </div>
    )
}

export default AppNavigation