import { List, Divider, Tooltip, Button } from 'antd';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const TodoList = () => {
  return (
    <>
      <Divider orientation="left">TodoList</Divider>
      <List
        size="large"
        bordered

        dataSource={data}
        renderItem={item => (
          <List.Item
            //style={{ textDecoration: 'line-through' }}
            actions={[
              <Tooltip title="completed">
                <Button
                  type="ghost"
                  shape="circle"
                  icon={<CheckOutlined />}
                  size="middle"
                />
              </Tooltip>,
              <Tooltip title="delete">
                <Button
                  type="ghost"
                  shape="circle"
                  icon={<DeleteOutlined />}
                  size="middle"
                  danger={true}
                  ghost={true}
                />
              </Tooltip>,
            ]}
          >{item}</List.Item>
        )}
      />
    </>
  )
}


export default TodoList