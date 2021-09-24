import { Falsy } from 'utility-types'

export const classNames = (...names: Array<string | Falsy>): string => {
  return names.filter(Boolean).join(' ')
}
