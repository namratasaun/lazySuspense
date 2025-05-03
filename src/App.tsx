import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//not lazy loading homepage as it is visible in the first fold
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

//since the page is small and doesn't take much time to load, I have added a wait funtion while importing which will wait for 2000 ms before importing the profile component
const Profile = lazy(() => wait(1000).then(() => import("./pages/Profile")));
const About = lazy(() => wait(1500).then(() => import("./pages/About")));

export default function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<h3>Loading Component...</h3>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

//adding a delay before loading components using a custom `wait` function since the pages are small, very less time is required to render those and hence the fallback text is not visible to our eyes. hence introduced a forced delay
const wait = (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
