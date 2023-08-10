import Input from "../components/Input.jsx";

const SignUp = () => {
  return (
    <div className="section max-w-[480px]">
      <Input>Nome de usuário</Input>
      <Input>E-mail</Input>
      <Input>Senha</Input>
      <button>Criar conta</button>
    </div>
  );
};

export default SignUp;
