export interface SelectOption<T> {
  label: string;
  value?: T;
}

export interface FilterObject {
  [key: string]: FilterItem<any>;
}

export class FilterItem<T> {
  key?: string;
  label: string;
  items: T[] = [];
  selecteds: T[] = [];

  constructor(obj: FilterItem<T>) {
    this.key = obj?.key;
    this.label = obj.label;
    this.items = obj.items;
    this.selecteds = obj.selecteds;
  }
}
