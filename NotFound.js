import {Result} from 'antd';
import {BtnLink} from '@mxjs/a-button';

const NotFound = (props) => (
  <Result
    status="404"
    title="404"
    subTitle="很抱歉，您访问的页面不存在，请检查后再试。"
    extra={<BtnLink to="/" type="primary">返回首页</BtnLink>}
    {...props}
  />
);

export default NotFound;
