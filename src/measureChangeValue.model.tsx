export interface ValueChangeDisplayProps {
  name: string // Make this a look up mapping
  value: any; // number | undefined; // | undefined;
  type: string;
  tooltip: {
    display: boolean;
    value?: string;
  };
  change: number;
  changeDisplayShow: boolean;
}

// TODO:
// name value should be a lookup similar to ChartMeasureType in the chartConfig whereby we map the name to if the change value should be displayed as positive or negative
// value number should be formatted in the component (E.g: thousands / millions etc...)
