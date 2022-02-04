import { useRouter } from "next/router";
import Button from "../button";

type Props = {
    currApp: number,
    totalApps: number
}

const AppNavigation = ({ currApp, totalApps }: Props) => {
    const { push, } = useRouter();
    const nextApp = () => {
        if (currApp === totalApps - 1) {
            push("/0")
            return;
        } else {
            push(`/${currApp + 1}`)
        }
    };

    const prevApp = () => {
        if (currApp === 0) {
            push(`/${totalApps - 1}`)
            return;
        } else {
            push(`/${currApp - 1}`)
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={prevApp}>&#171; Prev</Button>
            <Button onClick={nextApp}>Next &#187;</Button>
        </div>
    )
}

export default AppNavigation