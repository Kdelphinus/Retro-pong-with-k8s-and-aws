import PageComponent from '@component/PageComponent.js';
import RegisterForm from '@component/modal/contents/RegisterForm.js';
import OpenModalButton from '@component/button/OpenModalButton.js';
import ModalComponent from '@component/modal/ModalComponent.js';

class Login extends PageComponent {
  constructor() {
    super();
    this.setTitle('Login');
  }

  async render() {
    return `
      ${OpenModalButton({ text: '> Register <', classList: 'btn btn-no-outline-hover', modalId: '#registerModal' })}
      ${ModalComponent({ borderColor: 'mint', title: 'WELCOME!', modalId: 'registerModal', content: RegisterForm(), buttonList: ['confirmBtn'] })}
      `;
  }
}

export default Login;
