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

type LoaderData = {
  ENV: any;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    ENV: getEnv(),
  })
}


export default function App() {
  const data = useLoaderData()

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="relative bg-gray-100">
        <NavBar />
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
