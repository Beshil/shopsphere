import AppRouter from "./AppRouter";
import { useTheme } from "./providers/ThemeProvider";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <h1>shop</h1>
      <p>current {theme}</p>
      <button onClick={toggleTheme}> toggle</button>
      <AppRouter />
    </>
  );
}

export default App;
