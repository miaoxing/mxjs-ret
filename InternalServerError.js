import {Result} from 'antd';
import {BtnLink} from '@mxjs/a-button';

const InternalServerError = (props) => (
  <Result
    status="500"
    title="出错了"
    subTitle="很抱歉，加载出错！"
    extra={<BtnLink to="/" type="primary">返回首页</BtnLink>}
    {...props}
  />
);

export default InternalServerError;
