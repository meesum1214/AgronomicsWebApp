import { MouseEventHandler } from "react";

interface categories {
  id: number;
  text: string;
  link: string;
}

export default [
  {
    id: 1,
    text: 'Home',
    link: '/home'
  },
  {
    id: 2,
    text: 'Map',
    link: '/map'

  },
  {
    id: 3,
    text: 'Stories',
    link: '/stories'

  },
  {
    id: 4,
    text: 'Notifications',
    link: '/notifications'

  }
] as categories[];


interface another {
  id: number;
  text: string;
  link: string;
}

export const another = [
  {
    id: 1,
    text: 'Location Base Suitability',
    link: '/home/LocationBasedSuitablity'
  },
  {
    id: 2,
    text: 'Crop Simulator',
    link: '/home/CropSimulator'

  },
  {
    id: 3,
    text: 'Image Base Analysis',
    link: '/home/PlantAnalysis'
  },
  {
    id: 4,
    text: 'Soil Analysis',
    link: '/home/soilanalysis'
  },
  {
    id: 5,
    text: 'Agripedia',
    link: '/home/agripedia'
  }
] as another[];

interface agronomics {
  id: number;
  text: string;
  link: string;
}

export const agronomics = [
  {
    id: 1,
    text: 'Profile',
    link: 'http://agronomics.pk/'
  },
  {
    id: 2,
    text: 'About',
    link: 'http://agronomics.pk/about/'

  },
  {
    id: 3,
    text: 'Services',
    link: 'http://agronomics.pk/services/'

  },
  {
    id: 4,
    text: 'Objectives',
    link: 'http://agronomics.pk/objectives/'

  }
] as agronomics[];

interface contact {
  id: number;
  text: string;
  onClick?: MouseEventHandler
}

export const contact = [
  {
    id: 1,
    text: '+92 51 8460676',
  },
  {
    id: 2,
    text: '+92 51 8460678',
  },
  {
    id: 3,
    text: 'info@agronomics.com',
  },
  {
    id: 4,
    text: 'MidCity Apartments, Khokhar Road Infront of Quaid-E-Azam Monoument, Rawalpindi, Punjab 54000',
  },
] as contact[];