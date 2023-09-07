export interface ActionPanelProps {
  buttons: IButtons[];
}

export interface IButtons {
  title: string;
  badgeCount?: number;
  icon: JSX.Element;
  onClick?: (val: string) => void;
}
