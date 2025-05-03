import { lazy, Suspense, useState } from "react";

const Portfolio = lazy(() => import("../components/Portfolio"));
const Followers = lazy(() => import("../components/Followers"));

const About = () => {
  const [tab, setTab] = useState("portfolio");
  return (
    <section>
      <h1>About page</h1>
      <p>Hello, this is About page.</p>
      <button onClick={() => setTab("portfolio")}>Portfolio</button>
      <button onClick={() => setTab("followers")}>Followers</button>
      <Suspense fallback={<p>Loading component...</p>}>
        {tab === "portfolio" ? <Portfolio /> : <Followers />}
      </Suspense>
    </section>
  );
};

export default About;
