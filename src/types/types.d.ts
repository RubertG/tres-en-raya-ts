import { type OPTIONS } from '../consts/consts'

export type SquareOptions = typeof OPTIONS[keyof typeof OPTIONS] | null
