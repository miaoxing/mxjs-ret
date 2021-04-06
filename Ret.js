import React from 'react';
import {Flex, Heading, Text, Image as BaseImage} from '@mxjs/box';

const types = {
  error: 'https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg',
  wait: 'https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg',
};

const Image = ({src, ...props}) => {
  return <BaseImage mb={4} width="120px" src={src} {...props}/>;
};

const Message = (props) => {
  return <Heading fontSize="lg" mb={4} fontWeight="normal" {...props}/>;
};

const Detail = (props) => {
  return <Text color="muted" mb={4} {...props}/>;
};

const Container = ({image, src, message, detail, children, ...props}) => {
  return <Flex
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    p={6}
    h="100vh"
    textAlign="center"
    {...props}
  >
    {image ? image : (src && <Image src={src}/>)}
    {message && <Message>{message}</Message>}
    {detail && <Detail>{detail}</Detail>}
    {children}
  </Flex>;
};

const Ret = ({ret, children}) => {
  if (!ret || !ret.code) {
    return '';
  }

  if (ret.isSuc()) {
    return children;
  }

  if (ret.next) {
    window.location = ret.next;
    return '';
  }

  return <Container
    src={types[ret.retType || 'error']}
    message={ret.message}
    detail={ret.detail}
  />;
};

Ret.Container = Container;
Ret.Image = Image;
Ret.Message = Message;
Ret.Detail = Detail;

export default Ret;
