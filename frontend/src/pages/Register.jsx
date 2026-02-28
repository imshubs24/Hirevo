import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start managing your hiring process with Hirevo."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;