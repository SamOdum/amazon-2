import { atom, useAtom } from 'jotai'

const initialNavModalState = atom(false)
export const useNavModal = (): [boolean, () => void] => {
  const [state, setState] = useAtom(initialNavModalState)
  const modalOpen = state
  const toggleModalOpen = (): void | Promise<void> => setState(!modalOpen)
  return [modalOpen, toggleModalOpen]
}
