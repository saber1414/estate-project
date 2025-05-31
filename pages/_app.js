import "@/styles/globals.css";
import Sidebar from "@/components/modules/sidebar/sidebar";
import Header from "@/components/modules/header/header";
import RealTors from "@/components/modules/realTors/realTors";
import Footer from "@/components/modules/footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <RealTors />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
