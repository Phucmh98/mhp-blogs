import Banner from "./components/banner";
import CollectionProject from "./components/collection-project";

export default function MyProjects() {
  return (
    <section className="w-full">
      <Banner />
      <div className="container w-full mx-auto max-w-5xl px-3 sm:px-10 text-gray-500">
        <h1 className="text-4xl font-bold mb-5  dark:text-gray-300">
          My Projects
        </h1>
        <p className="text-lg dark:text-gray-400">
          This is a collection of my projects. You can find more details about
          each project by clicking on the cards below.
        </p>
      <CollectionProject />

      </div>
    </section>
  );
}
