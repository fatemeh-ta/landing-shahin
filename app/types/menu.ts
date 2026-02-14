export interface Item {
  label: string;
  to: string;
  icon?: string;
  class?: string;
  active?: boolean;
  subMenu?: boolean;
  isItem?: boolean;
}

export interface Menu {
  header?: string;
  icon?: string;
  children?: Item[];
}

export interface MainMenu extends Item {
  children?: Item[];
}

export type MenuItem = Menu[];
