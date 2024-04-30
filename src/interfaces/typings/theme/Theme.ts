interface InitialTheme {
  backgroundColor?: string;
  title?: string;
  description?: string;
  icon?: string;

  screens?: {
    settings?: {
      profileCardBackgroundColor?: string;
    };
  };
}

interface Dark extends InitialTheme {}
interface Light extends InitialTheme {}
export declare interface Theme {
  light?: Light;
  dark?: Dark;
}
