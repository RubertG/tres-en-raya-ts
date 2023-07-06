import { type TurnType, type SquareOptions } from '../types/types'

export const setStorage = (label: string, objectToSave: (SquareOptions[] | TurnType)): void => {
  localStorage.setItem(label, JSON.stringify(objectToSave))
}

export const getStorage = (label: string): SquareOptions[] | TurnType => {
  return JSON.parse(localStorage.getItem(label) as string)
}
