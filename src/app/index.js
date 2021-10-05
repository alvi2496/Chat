import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Title from './_components/Title';

export default function App() {
  return (
    <Row>
      <Col
        span={16}
        offset={4}
      >
        <Title />
      </Col>
    </Row>
  )
}