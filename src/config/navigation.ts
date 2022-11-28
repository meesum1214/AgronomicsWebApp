interface navigation {
  id: number,
  title: string,
  src: string,
  subRoute: []
}

export default [
  {
    id: 1,
    title: 'Home',
    src: '/home',
    subRoute: []
  },
  {
    id: 2,
    title: 'Map',
    src: '/map',
    subRoute: []
  },
  {
    id: 3,
    title: 'Stories',
    src: '/stories',
    subRoute: []
  },
  {
    id: 4,
    title: 'Notifications',
    src: '/notifications',
    subRoute: []
  }
] as navigation[];