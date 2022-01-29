import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm/AuthForm';

const SignUp = () => {
  return (
    <Layout className="signup">
      <AuthForm title="Register" />
      <div>
        Already have an account? <Link to="/login">Log in</Link>{' '}
      </div>
    </Layout>
  );
};

export default SignUp;
