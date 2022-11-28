import dynamic from "next/dynamic";

const Graph = dynamic(import('../templates/Graphy'),{ssr:false});

export default () => <Graph />