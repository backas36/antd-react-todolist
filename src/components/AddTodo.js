import { Input, Button, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const AddTodo = () => {
  return (
    <Row style={{ flexFlow: "nowrap" }}>
      <Input
        placeholder="請輸入 TODO 名稱"
        allowClear
        size="large"
        bordered
        style={{ maxWidth: "600px" }}
      />
      <Button
        type="primary"
        icon={<PlusOutlined />}
        size="large"

      >
        Add
      </Button>
    </Row>
  )
}

export default AddTodo