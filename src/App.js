import {
  Navbar,
  About,
  Controller,
  Header,
  HeroImg,
  Img1,
  Img2,
} from "./Components";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <section className='App'>
        <div className='App_Header'>
          <Navbar />
          <HeroImg />

          <Header />
        </div>
        <div className='App_Footer'>
          <Img1 />
          <About />
          <Img2 />
        </div>
      </section>
    </RecoilRoot>
  );
}

export default App;
