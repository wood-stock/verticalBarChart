import style from './vertical-bar.module.css';
import { FC } from 'react';
interface IVerticalBar {
  customHeight: number;
}
const VerticalBar: FC<IVerticalBar> = ({ customHeight }) => (
  <div
    className={style.verticalBar}
    style={{ height: `${customHeight}%` }}
  ></div>
);
export default VerticalBar;
