import "../styles/global.css";
import { NextComponentType } from "next/types";

export default function App({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
