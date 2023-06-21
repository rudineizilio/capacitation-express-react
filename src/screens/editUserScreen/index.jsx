import { Divider } from 'antd';
import FormComp from '../../components/Form/FormComp.tsx';

function EditUserScreen() {
  return (
    <div>
      <Divider orientation="left">Editar usuário</Divider>
      <FormComp />
    </div>
  );
}

export default EditUserScreen;
