import { create } from 'zustand';

type State = {
  open: boolean;
  setOpen: () => void;
};

const useSidebar = create<State>((set) => ({
  open: false,
  setOpen: () => set((state: State) => ({ open: !state.open })),
}));

export default useSidebar;
