import Banner from "./components/banner";
import ContentMe from "./components/content-me";
import FormContact from "./components/form-contact";

export default function Contact() {
  return (
    <>
      <Banner />
      <section className="container mx-auto max-w-5xl px-3 sm:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="order-2 md:order-1">
            <FormContact />
          </div>
          <div className="order-1 md:order-2">
            <ContentMe />
          </div>
        </div>
      </section>
    </>
  );
}
