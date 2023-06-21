import React from 'react';
import { Button, Col, Row, Divider, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import './App.css';

interface DataType {
  key: string;
  name: string;
  email: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '',
    dataIndex: '',
    key: 'edit',
    render: () => <Button className='edit-button' type="primary" icon={<EditOutlined />} size='large' />,
  },
  {
    title: '',
    dataIndex: '',
    key: 'delete',
    render: () => <Button className='delete-button' type="primary" icon={<DeleteOutlined />} size='large' />,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Primeiro usuário',
    email: 'primeiro_usuario@gmail.com',
  },
  {
    key: '2',
    name: 'Segundo usuário',
    email: 'segundo_usuario@gmail.com',
  },
];

function App() {
  return (
    <div className="App">
      <Divider orientation="left">Usuários cadastrados</Divider>
      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Button type="primary">Novo cadastro</Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
