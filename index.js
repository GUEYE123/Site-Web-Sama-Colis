
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="text-center py-16 bg-green-500">
        <h1 className="text-4xl text-white font-bold">Envoyez vos colis en toute simplicité avec SamaColis</h1>
        <p className="mt-4 text-white">Connectez-vous avec des voyageurs pour un transport rapide et sécurisé.</p>
        <div className="mt-8">
          <button className="bg-white text-green-500 px-6 py-3 rounded-lg">Envoyer un colis</button>
          <button className="bg-white text-green-500 px-6 py-3 rounded-lg ml-4">Devenir un GP</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
