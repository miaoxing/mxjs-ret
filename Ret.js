import React from 'react';
import {Flex, Heading, Text, Image as BaseImage} from '@mxjs/box';
import PropTypes from 'prop-types';

const types = {
  error: 'https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg',
  wait: 'https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg',
};

const Image = ({src, ...props}) => {
  return <BaseImage mb={4} width="120px" src={src} {...props}/>;
};

Image.propTypes = {
  src: PropTypes.string,
};

const Message = (props) => {
  return <Heading fontSize="lg" mb={4} fontWeight="normal" {...props}/>;
};

Message.propTypes = {
  src: PropTypes.string,
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

Container.propTypes = {
  image: PropTypes.node,
  src: PropTypes.string,
  message: PropTypes.string,
  detail: PropTypes.string,
  children: PropTypes.node,
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

Ret.propTypes = {
  ret: PropTypes.object,
  children: PropTypes.node,
};

Ret.Container = Container;
Ret.Image = Image;
Ret.Message = Message;
Ret.Detail = Detail;

export default Ret;
