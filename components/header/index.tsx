type Props = {
    currApp: number
    totalApps: number
    name: string
}

const AppHeader = ({ currApp, totalApps, name }: Props) => {
    return (<>{currApp === 0 && (
        <p
            style={{
                background: "var(--warning)",
                color: "white",
                borderRadius: 8,
                padding: 8,
            }}
        >
            PLEASE READ: notes are per-application, stored locally, and can
            be exported for easy viewing at delibs. please dont share this
            site. the source code is{" "}
            <u>
                <a href="https://github.com/maxLeiter/thetattauappreviewer">
                    here
                </a>
            </u>
            .
        </p>
    )}

        <h2>
            {name} - app{" "}
            {currApp === 0 ? <abbr title="This is CS, we start at 0. Sorry for being lazy">
                {currApp}
            </abbr> : currApp}{" "}
            of {totalApps}
        </h2>
    </>)
}

export default AppHeader
