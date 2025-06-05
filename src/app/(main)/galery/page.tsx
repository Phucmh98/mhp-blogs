import Banner from "./components/banner";
import ContainerImages from "./components/container-images";

export default function GalleryPage() {
  return (
    <section className="w-full">
      <Banner />
      <div className="container w-full mx-auto max-w-5xl px-3 sm:px-10">
        <ContainerImages />
      </div>
    </section>
  );
}
