
import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

  export const envData =  {
    serverUrl: process.env.NEXT_PUBLIC_MORALIS_SERVER_URL,
    appId: process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID,
    clientID: process.env.NEXT_PUBLIC_WEB3_CLIENT_ID
  }

function MyApp({ Component, pageProps }) {
  
  return (
    <MoralisProvider serverUrl={envData.serverUrl} appId={envData.appId}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
