import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Header from "./Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //enable system just enables the theme to be your system theme by default
    // then click on the theme toggle will change it in the future
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="bg-gray-200 dark:bg-zinc-900   transition-all duration-700">
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
