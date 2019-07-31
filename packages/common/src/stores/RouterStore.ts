import { observable } from 'mobx';
import { createContext } from 'react'

class RouterStore {
  @observable path = 'History'
}

export const RouterStoreContext = createContext(new RouterStore())