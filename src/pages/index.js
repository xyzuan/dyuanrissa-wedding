import { useEffect } from "react";
import AOS from "aos";
import CoverPage from "./CoverPage";

export default function Home() {


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <CoverPage />
    </main>
  );
}
