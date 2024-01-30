import { useEffect } from "react";
import AOS from "aos";
import MainPage from "./MainPage";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <MainPage />
    </main>
  );
}
