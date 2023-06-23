import { Divider } from 'antd';
import FormComp from '../../components/Form/FormComp.tsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ApiUrl } from '../../utils/api_url';

function NewUserScreen() {
  const navigate = useNavigate();
  const addUser = async (name, age, email) => {
    const newUser = {
      name: name,
      age: age,
      email: email,
    };

    await axios.post(ApiUrl.URL, newUser);
    navigate('/');
  };

  return (
    <div>
      <Divider orientation="left">Novo usuário</Divider>
      <FormComp onClickFunction={addUser} />
    </div>
  );
}

export default NewUserScreen;
