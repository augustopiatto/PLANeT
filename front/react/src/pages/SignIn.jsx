import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import useForm from "../hooks/useForm.jsx";

const SignIn = () => {
  const email = useForm();
  const password = useForm();

  return (
    <div className="section grid content-center gap-1 max-w-[480px] p-[16px]">
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
      <p className="mt-[16px] mb-[32px]">
        Não possui cadastro?{" "}
        <Link to="/signup" className="underline">
          Cadastre-se aqui
        </Link>
      </p>
      <Button>Entrar</Button>
    </div>
  );
};

export default SignIn;
