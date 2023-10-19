import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </SWRConfig>
  );
}
