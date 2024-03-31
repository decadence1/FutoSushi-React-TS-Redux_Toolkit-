import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Sidebar from "./components/Sidebar.tsx";
import { Provider } from "react-redux";
import RollSection from "./components/RollSection.tsx";
import SushiSection from "./components/SushiSection.tsx";
import SetSection from "./components/SetSection.tsx";
import BakedSection from "./components/RollBakedSection.tsx";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import store from "./Redux/store.ts";

const App: React.FC = () => {
  // const isSidebarOpen = useSelector((state: RootState) => state.isSidebarOpen);

  return (
    <Provider store={store}>
      <div>
        <Sidebar />
        <div className="app">
          <Header />
          <div id="rolls">
            <RollSection />
          </div>
          <Home />
          <div id="sushi">
            <SushiSection />
          </div>
          <Home />
          <div id="sets">
            <SetSection />
          </div>
          <div id="baked-rolls">
            <BakedSection />
          </div>
          <Home />
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
