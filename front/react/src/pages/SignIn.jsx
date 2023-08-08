import Input from "../components/Input.jsx";

function SignIn() {
  return (
    <div className="">
      <Input>E-mail ou usuário</Input>
      <Input>Senha</Input>
      <p>
        Não possui cadastro? <a>Cadastre-se aqui</a>
      </p>
      <button>Entrar</button>
    </div>
  );
}

export default SignIn;
