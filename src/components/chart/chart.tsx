import { FC } from 'react';
import VerticalBar from '../vertical-bar';
import style from './chart.module.css';

interface IChart {
  data: number[];
}
const Chart: FC<IChart> = ({ data }) => (
  <div className={style.chart}>
    {data.map((i) => (
      <VerticalBar customHeight={i} />
    ))}
  </div>
);
export default Chart;
