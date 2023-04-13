import { type AppType } from "next/dist/shared/lib/utils";

import "y/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <body className="h-screen bg-gradient-to-b from-green-200 to-green-500">
      <Component {...pageProps} />
    </body>
  );
};

export default MyApp;
