import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import SignIn from "../components/SignIn";
import { SignOut } from "../components/SignOut";
// import { envData } from "./_app";

//   const serverUrl = envData.serverUrl
//   const appId = envData.appId

export default function Home() {
  
  const { isAuthenticated } = useMoralis();

  return (
    <div>
      <div className={styles.backgroundParent}>
        {isAuthenticated ? <SignOut /> : <SignIn />}
      </div>
    </div>
  );
}
