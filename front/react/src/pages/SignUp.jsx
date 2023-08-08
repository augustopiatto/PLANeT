import Input from "../components/Input.jsx";

function SignUp() {
  return (
    <div className="">
      <Input>Nome de usuário</Input>
      <Input>E-mail</Input>
      <Input>Senha</Input>
      <button>Criar conta</button>
    </div>
  );
}

export default SignUp;
