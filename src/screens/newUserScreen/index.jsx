import { Divider } from 'antd';
import FormComp from '../../components/Form/FormComp.tsx';

function NewUserScreen() {
  return (
    <div>
      <Divider orientation="left">Novo usuário</Divider>
      <FormComp />
    </div>
  );
}

export default NewUserScreen;
