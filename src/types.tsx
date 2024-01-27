type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

type MyLink = {
  title: string;
  path: string;
};

export type { SideNavItem, MyLink };
