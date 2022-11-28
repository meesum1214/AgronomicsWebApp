interface Agripedia {
  id: number,
  img: string,
  title: string,
  desc: string,
  src: string,
  btnText: string
}

export default [
  {
    id: 1,
    img: 'agri report',
    title: 'Agri-Books',
    desc: 'All worldwide books related to agriculture are available under the single heading.',
    src: 'bk',
    btnText: 'Get PDF'
  },
  {
    id: 2,
    img: 'VIDEO',
    title: 'Videos',
    desc: 'ALl worldwide videos content on agriculture available here.',
    src: '/home/agripedia/videos',
    btnText: 'See Videos'
  },
  {
    id: 3,
    img: 'articles',
    title: 'Articles',
    desc: 'All articles about agriculture are available here.',
    src: 'art',
    btnText: 'Get PDF'
  },
  {
    id: 4,
    img: 'reporting',
    title: 'Research Paper',
    desc: 'All the research papers on agriculture are avalaible here.',
    src: 'rp',
    btnText: 'Get PDF'
  },
] as Agripedia[]
