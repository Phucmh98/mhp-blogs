import Threads from "@/components/commons/reactbits/threads";

const Banner = () => {
    return ( 
        <div className="relative w-full h-[300px]">
           
            <Threads amplitude={3} distance={0} enableMouseInteraction={true} />
        </div>
     );
}
 
export default Banner
