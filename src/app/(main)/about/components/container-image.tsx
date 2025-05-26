import Image from "next/image";

const ContainerImage = () => {
  return (
    <>
      <Image
        src={"/image/default-avt.png"}
        alt="avatar"
        width={150}
        height={150}
        className="rounded-full border-4 border-amber-500 shadow-md"
      />
    </>
  );
};

export default ContainerImage;
