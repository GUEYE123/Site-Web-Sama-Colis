
import Header from "../components/Header";
import Footer from "../components/Footer";
import ParcelForm from "../components/ParcelForm";

const SendParcel = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl text-center mb-6">Envoyez un colis</h2>
        <ParcelForm />
      </main>
      <Footer />
    </div>
  );
};

export default SendParcel;
