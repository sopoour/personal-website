import { create } from 'zustand';

export type Theme = 'dark' | 'light';

type State = {
  theme: Theme;
  setTheme: () => void;
  setSpecificTheme: (theme: Theme) => void;
};

const useThemeSwitch = create<State>((set) => {
  return {
    theme: 'dark',
    setTheme: () => set((state: State) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
    setSpecificTheme: (theme) => set(() => ({ theme })),
  };
});

export default useThemeSwitch;
