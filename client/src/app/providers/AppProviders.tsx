import type { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider/ThemeProvider";

type AppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProviders;
