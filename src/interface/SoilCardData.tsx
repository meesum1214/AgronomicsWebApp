import { GETTOKEN } from "../config/API"

interface soilCardData {
  id: number,
  img: string,
  title: string,
  desc: string,
  src: string,
}

export default [
  {
    id: 1,
    img: 'post',
    title: 'Consult Agri-Expert',
    desc: 'Farmers can discuss their problems and get solutions from experts.',
    src: `/home/kissankollage/agriexpert?qwerty=${GETTOKEN()}`,
  },
  {
    id: 2,
    img: 'agri tech',
    title: 'Production Technology',
    desc: 'It provides information on pre-sowing till harvesting in pdf foramt.',
    src: '/home/kissankollage/productiontechnology',
  },
  {
    id: 3,
    img: 'agri report',
    title: 'Agri-Statistics',
    desc: 'Compalilation & eveluation of crop, area, production, price & yeild data.',
    src: ''
  },
  {
    id: 4,
    img: 'VIDEO',
    title: 'Audios & Videos',
    desc: 'It provides guidance on pre-sowing till harvesting in audio and video format.',
    src: '/home/kissankollage/audiosvideos'
  },
] as soilCardData[]


interface SoilAnalysisData {
  id: number,
  img: string,
  title: string,
  desc: string,
  src: string,
}

export const SoilAnalysisData = [
  {
    id: 1,
    img: 'soil sampling',
    title: 'Soil Sampling Procedure',
    desc: "Find the process of sample's collection.",
    src: '/home/soilanalysis/soilsample',
  },
  {
    id: 2,
    img: 'soil test',
    title: 'Soil Analysis',
    desc: 'Soil sampling and fertility analysis.',
    src: '/home/soilanalysis/soilanalysis'
  },
  {
    id: 3,
    img: 'test record',
    title: 'Test Records',
    desc: 'Maintain soil sample records.',
    src: '/home/soilanalysis/testrecord'
  },
]