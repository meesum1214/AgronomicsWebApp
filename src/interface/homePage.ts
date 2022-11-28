interface myCards {
  id: number,
  src: string,
  imgUrl: string,
  heading: string,
  description: string,
  onClick: Function
}

export default [
  {
    id: 1,
    src: '/home/LocationBasedSuitablity',
    imgUrl: 'my land',
    heading: 'Location Base Suitablity',
    description: 'Offers Suitable Land Utilization',
    onClick: () => { }
  },
  {
    id: 2,
    src: '/home/CropSimulator',
    imgUrl: 'my crops',
    heading: 'Crop Simulator',
    description: 'Management Practices And Monitoring',
    onClick: () => { }
  },
  {
    id: 3,
    src: '/home/PlantAnalysis',
    imgUrl: 'AP',
    heading: 'Image Base Analysis',
    description: 'Realtime Plant Health Detection',
    onClick: () => { }
  },
  {
    id: 4,
    src: '/home/soilanalysis',
    imgUrl: 'SA',
    heading: 'Soil Analysis',
    description: 'Soil Sampling And Fertility Analysis',
    onClick: () => { }
  },
  {
    id: 5,
    src: '/home/agripedia',
    imgUrl: 'AP3',
    heading: 'Agripedia',
    description: 'Agriculutural Research Portal',
    onClick: () => { }
  },
  {
    id: 6,
    src: '/home',
    imgUrl: 'Kisan Market',
    heading: 'Kissan Market',
    description: 'Kissan Business Center',
    onClick: () => alert('Coming Soon!')
  },
  {
    id: 7,
    src: '/home/agreem',
    imgUrl: 'AP3',
    heading: 'Agreem',
    description: 'Agreem',
    onClick: () => {}
  },
] as myCards[];


interface bottomNavigation {
  id: number,
  src: string,
  iconUrl: string,
  title: string,
}

export const bottomNavigation = [
  {
    id: 1,
    src: '/home/technicalsupport',
    iconUrl: 't_support',
    title: 'Technical Support',
  },
  {
    id: 2,
    src: '/home/mandirates',
    iconUrl: 'mandi_rates',
    title: 'Mandi Rates',
  },
  {
    id: 3,
    src: '/home/faqs',
    iconUrl: 'faqs',
    title: "FAQ's",
  },
  {
    id: 4,
    src: '/home/kissankollage',
    iconUrl: 'kissan college',
    title: 'Kissan Kollege',
  },

] as bottomNavigation[]