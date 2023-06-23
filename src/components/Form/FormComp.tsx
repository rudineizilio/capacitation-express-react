import { Button, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

function FormComp({ onClickFunction, userData }: any) {
  const [name, setName] = useState(userData != null ? userData.name : '');

  const [age, setAge] = useState(userData != null ? userData.age : '');

  const [email, setEmail] = useState(userData != null ? userData.email : '');

  const setUserName = (event: any) => {
    setName(event.target.value);
  };

  const setUserAge = (event: any) => {
    setAge(event.target.value);
  };

  const setUserEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const onClick = () => {
    if (name.length != 0 && age.length != 0 && email.length != 0) {
      onClickFunction(name, age, email);
    };
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nome"
        name="name"
        initialValue={userData != null ? userData.name : ''}
        rules={[{ required: true, message: 'Por favor, informe um nome!' }]}
      >
        <Input onChange={setUserName}/>
      </Form.Item>

      <Form.Item
        label="Idade"
        name="age"
        initialValue={userData != null ? userData.age : ''}
        rules={[{ required: true, message: 'Por favor, informe uma idade!' }]}
      >
        <Input type="number" onChange={setUserAge}/>
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        initialValue={userData != null ? userData.email : ''}
        rules={[{ required: true, message: 'Por favor, informe um e-mail!' }]}
      >
        <Input onChange={setUserEmail}/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={onClick}>
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}

FormComp.propTypes = {
  onClickFunction: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

export default FormComp;
