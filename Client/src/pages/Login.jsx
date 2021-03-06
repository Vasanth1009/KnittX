import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';

const Login = () => {
  return (
    <Layout className="login">
      <AuthForm title="Login" />
      <div>
        Don't have a account? <Link to="/signup">Sign up</Link>{' '}
      </div>
    </Layout>
  );
};

export default Login;
