import { State } from "../store/types"

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch {
    return undefined
  }
}

export const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch {}
}