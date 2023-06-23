import emptyBox from '../../assets/images/empty_box.png';
import { Col } from 'antd';

function EmptyMessageComp() {
  return (
    <div>
      <Col>
        <img src={emptyBox} width="100" />
      </Col>
      <Col>
        <span>Nenhum usuário para ser exibido no momento.</span>
      </Col>
    </div>
  );
}

export default EmptyMessageComp;
