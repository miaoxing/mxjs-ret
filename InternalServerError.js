import {Result} from 'antd';
import {BtnLink} from '@mxjs/a-button';

export default (props) => (
  <Result
    status="500"
    title="出错了"
    subTitle="很抱歉，加载出错！"
    extra={<BtnLink to="/">返回首页</BtnLink>}
    {...props}
  />
);
