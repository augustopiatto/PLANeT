import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import useForm from "../hooks/useForm.jsx";

function SignIn() {
  const email = useForm();
  const password = useForm();

  return (
    <div className="grid gap-2 max-w-[640px] mx-auto">
      <Input label="E-mail ou usuário" type="text" name="email" {...email} />
      <Input label="Senha" type="password" name="senha" {...password} />
      <p>
        Não possui cadastro?{" "}
        <a href="" className="underline">
          Cadastre-se aqui
        </a>
      </p>
      <Button>Entrar</Button>
    </div>
  );
}

export default SignIn;
