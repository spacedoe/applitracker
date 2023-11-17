import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import '@mantine/tiptap/styles.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
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
        <SessionProvider session={session}>
          <Notifications position="bottom-right" zIndex={1000} />
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </SWRConfig>
  );
}
