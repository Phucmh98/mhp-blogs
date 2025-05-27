import AnimatedContent from "@/components/animated-content";
import dynamic from "next/dynamic";
import Image from "next/image";
const InteractiveIcon = dynamic(
  () =>
    import("../../../../components/commons/interactive-icon/interactive-icon"),
  { ssr: false }
);

const ContainerImage = () => {
  return (
    <div className="flex flex-col items-center justify-start mt-15 mx-15">
      <AnimatedContent>
        <Image
          src={"/image/default-avt.png"}
          alt="avatar"
          width={150}
          height={150}
          className="rounded-full border-4 border-amber-500 shadow-md"
        />
        <InteractiveIcon
          iconUrl="https://cdn.lordicon.com/rpviwvwn.json"
          label="Vietnam/HCM"
          sizeIcon={28}
          colors="primary:#ff6900,secondary:#ff6900"
          animationState="hover-rotate-up-to-down"
          animationHover="hover-rotate-up-to-down"
          classNameContainer="flex items-center justify-center  mt-3"
          classNameLabel="text-xl ml-2 font-semibold text-[var(--phuc-text-primary-1)]"
          isLoop={true}
        />
      </AnimatedContent>
    </div>
  );
};

export default ContainerImage;
