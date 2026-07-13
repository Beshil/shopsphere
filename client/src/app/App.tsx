import Container from "@/components/ui/Container";
import AppRouter from "./AppRouter";
import { useTheme } from "./providers/ThemeProvider";
import { Button } from "@/components/ui";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container>
      <h1>shop</h1>
      <p>current {theme}</p>
      <Button> Primary</Button>
      <Button variant="secondary"> Secondary</Button>
      <Button variant="outline"> Outline</Button>
      <Button variant="danger">Delete</Button>
      <Button loading> Save</Button>
      <button onClick={toggleTheme}> toggle</button>
      <AppRouter />
    </Container>
  );
}

export default App;
