
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">SamaColis</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/send">Envoyer un colis</Link></li>
            <li><Link href="/become-gp">Devenir un GP</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
