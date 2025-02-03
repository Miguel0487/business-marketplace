import NavBar from "./NavBar";
import LogoBar from "./LogoBar";
import FooterBar from "./FooterBar";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";
import NewsletterForm from "./Form";

function App() {
  return (
    <div className="text-center">
      <LogoBar />
      <NavBar />

      <div className="flex-1 p-5">
        <header className="bg-white min-h-screen flex flex-col items-center justify-center text-black">
          <h2 className="text-2xl font-bold">Business Marketplace</h2>
          <div className="mt-4 mb-4">
          <SearchBar />
          </div>

          <NewsletterForm />
        </header>
      </div>

      <FooterBar />
    </div>
  );
}

export default App;