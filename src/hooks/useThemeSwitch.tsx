import { create } from 'zustand';

type Theme = 'dark' | 'light';

type State = {
  theme: Theme;
  setTheme: () => void;
};

const useThemeSwitch = create<State>((set) => ({
  theme: 'dark',
  setTheme: () => set((state: State) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));

export default useThemeSwitch;
