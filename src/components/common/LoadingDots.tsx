import { LoadingDotsProps } from 'types/common';
import 'components/common/styles.css';

function LoadingDots({ color = '', style = ''}: LoadingDotsProps) {
  return (
    <span className={style === 'small' ? 'loading2' : 'loading'}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
}

export default LoadingDots;
