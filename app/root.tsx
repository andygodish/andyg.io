import { json, LinksFunction, LoaderArgs, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getEnv } from "../env.server";
import { NonFlashOfWrongThemeEls, Theme, ThemeProvider, useTheme } from "./utils/theme-provider";
import clsx from "clsx";
import { getThemeSession } from "./utils/theme.server";
import { Notification } from "./components/Notification/Notification";
import { NotificationProvider } from "./utils/NotificationProvider/notification-provider";
import { useNotification } from "./utils/NotificationProvider/notification-provider";

export type LoaderData = {
  ENV: any;
  THEME: Theme | null
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  return json<LoaderData>({
    ENV: getEnv(),
    THEME: themeSession.getTheme()
  })
}


function App() {
  const data = useLoaderData() // data is the return value of the loader function above
  const [theme] = useTheme();
  const { showNotification } = useNotification();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.THEME)} />
      </head>
      <body>
        <NavBar />
        {showNotification && <Notification />}
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(data.ENV)}` }} />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.THEME}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </ThemeProvider>
  );
}


