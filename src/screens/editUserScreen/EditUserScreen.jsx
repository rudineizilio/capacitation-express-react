import { Divider } from 'antd';
import FormComp from '../../components/Form/FormComp.tsx';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { ApiUrl } from '../../utils/api_url';

function EditUserScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  const userData = {
    id: location.state.id,
    name: location.state.name,
    age: location.state.age,
    email: location.state.email,
  };

  const editUser = async (name, age, email) => {
    const editedUser = {
      name: name,
      age: age,
      email: email,
    };

    await axios.put(`${ApiUrl.URL}/${userData.id}`, editedUser);
    navigate('/');
  };

  return (
    <div>
      <Divider orientation="left">Editar usuário</Divider>
      <FormComp onClickFunction={editUser} userData={userData} />
    </div>
  );
}

export default EditUserScreen;
