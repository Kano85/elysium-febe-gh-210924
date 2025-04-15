// Testimonial
export type Testimonial = {
  id: number;
  name: string;
  designation: string;
  content: string;
  image: string;
  star: number;
};

// Menu
export type MenuItemBase = {
  id: number;
  title: string;
  newTab: boolean;
};

export type MenuItemWithPath = MenuItemBase & {
  path: string;
  submenu?: never;
};

export type MenuItemWithSubmenu = MenuItemBase & {
  path?: never;
  submenu: MenuItemWithPath[];
};

export type MenuItem = MenuItemWithPath | MenuItemWithSubmenu;

export function isMenuItemWithPath(item: MenuItem): item is MenuItemWithPath {
  return (item as MenuItemWithPath).path !== undefined;
}

// Brand
export type Brand = {
  id: string | number;
  href: string;
  image: string; // Solo mantiene la versión oscura
  name: string;
};

// Feature
export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};
