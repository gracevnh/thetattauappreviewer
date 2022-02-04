type Props = {
    setTheme: (theme: string) => void
    theme: string
}

const ThemeSelector = ({ setTheme, theme }: Props) => {
    return (<div>
        Theme:{" "}
        <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
        >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="system">System</option>
        </select>
    </div>)
}

export default ThemeSelector
