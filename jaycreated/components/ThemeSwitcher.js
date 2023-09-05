import { useTheme } from 'next-themes';

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? (
                <>
                    🌙 {/* Moon icon */}
                    <span className="sr-only">Switch to Dark Mode</span>
                </>
            ) : (
                <>
                    ☀️ {/* Sun icon */}
                    <span className="sr-only">Switch to Light Mode</span>
                </>
            )}
        </button>
    );
}

export default ThemeSwitcher;
