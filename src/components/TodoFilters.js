import React, { useState } from 'react';
import { Space, Button } from 'antd';
import { SmileOutlined, UnorderedListOutlined, FrownOutlined } from '@ant-design/icons';

const TodoFilters = () => {
  const [size, setSize] = useState('large');
  return (
    <>
      <Space size={size} style={{ margin: "30px" }}>
        <Button
          icon={<UnorderedListOutlined />}
          type="primary"
          size="large"
          ghost
        >All</Button>
        <Button
          icon={<SmileOutlined />}
          type="primary"
          size="large"
          ghost
        >已完成</Button>
        <Button
          icon={<FrownOutlined />}
          type="danger"
          size="large"
          ghost
        >未完成</Button>
      </Space>
    </>
  )
}

export default TodoFilters

//<ReloadOutlined />