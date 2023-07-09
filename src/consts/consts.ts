export const OPTIONS = {
  X: 'X',
  O: 'O'
} as const

export const WINNING_COMBO = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6]
] as const

export const CLASSFORWINNER = [
  'line-winner-1',
  'line-winner-2',
  'line-winner-3',
  'line-winner-4',
  'line-winner-5',
  'line-winner-6',
  'line-winner-7',
  'line-winner-8'
] as const
