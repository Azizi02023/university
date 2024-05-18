
import { Academic } from "./components/Academic";
import { Footer } from "./components/Footer";
import Front from "./components/Front";
import { Navbar } from "./components/Navbar";
import { Second } from "./components/Second";
import { SocialMedia } from "./components/SocialMedia";
import Story from "./components/Story";
import Whatsnew from "./components/Whatsnew";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Front></Front>
      <Academic></Academic>
      <Story></Story>
      <Whatsnew></Whatsnew>
      <SocialMedia></SocialMedia>
      <Second></Second>
      <Footer></Footer>
    </div>
  );
}

export default App;
