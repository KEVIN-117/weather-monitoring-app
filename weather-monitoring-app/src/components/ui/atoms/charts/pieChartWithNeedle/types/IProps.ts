export interface IProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  needle?: (
    value: number,
    data: IProps['data'],
    cx: number,
    cy: number,
    iR: number,
    oR: number,
    color: string
  ) => JSX.Element[];
}