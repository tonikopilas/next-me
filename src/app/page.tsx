import { Metadata } from "next";
import "./page.css";
import Navbar from "@/components/UI/Navbar/Navbar";
import Button from "@/components/UI/Button/Button";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Toni Kopilaš",
  description: "Be my witness",
};

export default function Home() {
  return (
    <main className="home">
      <div className="home__container">
        <Navbar />
        <section className="home_container__section">
          <h1>HELLO</h1>
          <h1>FRIEND</h1>
        </section>
        {/* <Button /> */}
      </div>
      {/* <Footer></Footer> */}
    </main>
  );
}
