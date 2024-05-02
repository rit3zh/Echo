export type RecursivePartial<T> = Partial<{
  [P in keyof T]: T[P] extends Record<string, any>
    ? RecursivePartial<T[P]>
    : T[P];
}>;

export type Theme = {
  backdrop: string;
  knob: string;
  container: string;
  header: string;
  skinTonesContainer: string;
  category: {
    icon: string;
    iconActive: string;
    container: string;
    containerActive: string;
  };
  search: {
    background: string;
    text: string;
    placeholder: string;
    icon: string;
  };
  emoji: {
    selected: string;
  };
};

export const RNEmojiKeyboardThemeDark: RecursivePartial<Theme> = {
  backdrop: "#16161888",
  knob: "#f5f5f5",
  container: "#282829",
  header: "#fff",
  skinTonesContainer: "#252427",
  category: {
    icon: "white",
    iconActive: "#fff",
    container: "#252427",
    containerActive: "#7a7a7a",
  },
  search: {
    placeholder: "white",
  },
};
