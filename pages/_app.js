import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
