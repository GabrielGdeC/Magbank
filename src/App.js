import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CenteredButton from "./components/CenteredButton";
import CardList from "./components/CardList";
import CreditCard from "./components/CreditCard";
import AccountModal from "./components/AccountModal";
import Institutional from "./components/Institutional";
import Footer from "./components/Footer";

import Posts from "./Data/Posts";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <Navbar handleCreateAccount={() => setShowModal(true)} />
      <Hero />
      <CreditCard />
      <CardList Posts={Posts} />
      <CenteredButton>Abra sua Conta</CenteredButton>
      <Institutional />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
