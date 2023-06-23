import { useEffect, useState } from 'react';
import { Button, Col, Row, Divider, Table, Spin, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ApiUrl } from '../../utils/api_url';
import EmptyMessageComp from '../../components/EmptyMessage/EmptyMessageComp';

import './homeScreen.css';

interface DataType {
  name: string;
  age: number;
  email: string;
}

function HomeScreen() {
  const navigate = useNavigate();
  const goToNewUserScreen = () => {
    navigate('/new-user');
  };

  const goToEditUserScreen = (userId: string, userName: string, userAge: number, userEmail: string) => {
    navigate('/edit-user', {
      state: {
        id: userId,
        name: userName,
        age: userAge,
        email: userEmail,
      },
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      key: 'age',
      width: '15%',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      key: 'actions',
      width: '5%',
      render: (params) => (
        <Space size="middle">
          <Button className='editButton' type="primary" icon={<EditOutlined onClick={(_) => goToEditUserScreen(params._id, params.name, params.age, params.email)}/>} size='large' />
          <Button className='deleteButton' type="primary" icon={<DeleteOutlined onClick={(_) => deleteUser(params._id)}/>} size='large' />
        </Space>
      ),
    },
  ];

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const data: DataType[] = items;
  
  const getUsers = async () => {
    try {
      await axios.get(ApiUrl.URL).then((res) => setItems(res.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId: string) => {
    setLoading(true);
    await axios.delete(`${ApiUrl.URL}/${userId}`);
    setLoading(false);

    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Divider orientation="left">Usuários cadastrados</Divider>
      {!loading
        ? <Row>
            <Col span={24}>
              {items.length > 0
                ? <Table className='table' columns={columns} dataSource={data} rowKey={'name'} size="small"/>
                : <EmptyMessageComp />
              } 
            </Col>
            <Col span={24}>
              <Button className='button' type="primary" onClick={goToNewUserScreen}>Adicionar usuário</Button>
            </Col>
          </Row>        
        : <Spin className='loading' size="large" />
      }
    </div>
  );
}

export default HomeScreen;
