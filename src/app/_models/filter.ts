export interface SelectOption<T> {
  label: string;
  value?: T;
}

export interface FilterItem<T> {
  label: string;
  items: T[];
  selecteds: T[];
}
