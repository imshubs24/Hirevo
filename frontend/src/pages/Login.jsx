import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle="Access your dashboard and manage your hiring workflow."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;