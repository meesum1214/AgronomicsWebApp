import dynamic from "next/dynamic";
const CropSimulator = dynamic(() => import("../../../templates/home/CropSimulator"), { ssr: false });

export default () => <CropSimulator/>