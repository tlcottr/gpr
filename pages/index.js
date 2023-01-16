import Scene from "@/components/Scene";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader } from "@react-three/drei";

export default function Home() {
  return (
    <div>
      <Loader />
      <Header />
      <Scene />
      <Footer />
    </div>
  );
}
