import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import useForm from "../hooks/useForm.jsx";

const SignIn = () => {
  const email = useForm();
  const password = useForm();

  return (
    <div className="h-full grid content-center gap-3 max-w-[640px] mx-auto p-[16px]">
      <Input
        label="E-mail ou usuário"
        type="text"
        name="email"
        placeholder="zezinho@example.com"
        {...email}
      />
      <Input
        label="Senha"
        type="password"
        name="senha"
        placeholder="1 character maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 characteres"
        {...password}
      />
      <p className="mt-[8px] mb-[24px]">
        Não possui cadastro?{" "}
        <a href="" className="underline">
          Cadastre-se aqui
        </a>
      </p>
      <Button>Entrar</Button>
    </div>
  );
};

export default SignIn;
