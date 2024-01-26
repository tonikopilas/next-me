import { Metadata } from "next";
import "./page.css";

export const metadata: Metadata = {
  title: "Toni Kopilaš",
  description: "My position in world of development is Software Developer",
};

export default function Home() {
  return (
    <main className="home">
      <div className="home__container">
        <div className="home__container__title">
          <h1>Toni Kopilaš</h1>
        </div>
      </div>
    </main>
  );
}
