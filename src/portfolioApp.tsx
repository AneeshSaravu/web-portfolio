import { Header, Landing, Loader } from "./layouts";
import { useLoaderTimer } from "./hooks";
import { ThemeProvider } from "./providers";

export default function PortfolioApp() {
  const isLoading = useLoaderTimer(4000);

  return (
    <ThemeProvider>
      <Loader isOpen={isLoading} />
      <Header />
      <Landing />
    </ThemeProvider>
  );
}
