import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'
export default () => (
  <Provider store={store}>
    <Playground endpoint='http://192.168.100.17:5035/' />
  </Provider>
)


