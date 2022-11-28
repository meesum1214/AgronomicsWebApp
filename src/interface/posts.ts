interface posts {
  id: number,
  image: string,
  title: string,
  post: string,
  comments: [],
}

export default [
  {
    id: 1,
    image: '/I1.png',
    title: 'Need for innovation in agriculture',
    post: 'assdkfuhsdhf skdfhiksduhfio sdaf  fksdhfkdshfiu sdufhs dkufsdiufhiu disdufhiusadhf isudf isud fisduf iusd udi.',
    comments: [],
  },
  {
    id: 2,
    image: '/I1.png',
    title: 'Need for innovation in agriculture',
    post: 'assdkfuhsdhf skdfhiksduhfio sdaf  fksdhfkdshfiu sdufhs dkufsdiufhiu disdufhiusadhf isudf isud fisduf iusd udi.',
    comments: [
      {
        id: 1,
        name: 'Salman',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
      {
        id: 2,
        name: 'Dawood',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
      {
        id: 3,
        name: 'Gujjar',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
      {
        id: 4,
        name: 'Ali',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
      {
        id: 5,
        name: 'Farhan',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
    ],
  },
  {
    id: 3,
    image: '/I1.png',
    title: 'Need for innovation in agriculture',
    post: 'assdkfuhsdhf skdfhiksduhfio sdaf  fksdhfkdshfiu sdufhs dkufsdiufhiu disdufhiusadhf isudf isud fisduf iusd udi.',
    comments: [
      {
        id: 1,
        name: 'Salman',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
      {
        id: 2,
        name: 'Dawood',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
    ]
  },
  {
    id: 4,
    image: '/I1.png',
    title: 'Need for innovation in agriculture',
    post: 'assdkfuhsdhf skdfhiksduhfio sdaf  fksdhfkdshfiu sdufhs dkufsdiufhiu disdufhiusadhf isudf isud fisduf iusd udi.',
    comments: [
      {
        id: 1,
        name: 'Salman',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
      {
        id: 2,
        name: 'Dawood',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
      {
        id: 3,
        name: 'Gujjar',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
    ]
  },
  {
    id: 5,
    image: '/I1.png',
    title: 'Need for innovation in agriculture',
    post: 'assdkfuhsdhf skdfhiksduhfio sdaf  fksdhfkdshfiu sdufhs dkufsdiufhiu disdufhiusadhf isudf isud fisduf iusd udi.',
    comments: [
      {
        id: 1,
        name: 'Salman',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      },
    ]
  },
] as posts[];