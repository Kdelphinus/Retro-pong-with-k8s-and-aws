import NavBar from '../component/Navbar.js';
import PageComponent from '../component/PageComponent.js';
import RegisterForm from '../component/modal/contents/RegisterForm.js';
import OpenModalButton from '../component/button/OpenModalButton.js';
import ModalComponent from '../component/modal/ModalComponent.js';
import FriendWaitList from '../component/modal/contents/FriendWaitList.js';

class Login extends PageComponent {
  constructor() {
    super();
    this.setTitle('Login');
  }

  async render() {
    return `${NavBar()}
      ${OpenModalButton({ text: '> Register <', classList: 'btn btn-no-outline-hover', modalId: '#registerModal' })}
      ${ModalComponent({ borderColor: 'modal-border-mint', title: 'WELCOME!', modalId: 'registerModal', content: RegisterForm(), buttonList: ['confirmBtn'] })}      ${OpenModalButton({ text: '> WAITING', classList: 'btn btn-no-outline-hover', modalId: '#friendWaitingModal' })}
      ${ModalComponent({ borderColor: 'modal-border-mint', title: 'WAITING', modalId: 'friendWaitingModal', content: FriendWaitList(), buttonList: [] })}
      `;
  }
}

export default Login;
