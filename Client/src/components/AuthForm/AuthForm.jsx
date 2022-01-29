import { Form, Input } from 'antd';
import { Button } from 'evergreen-ui';
import { useNavigate } from 'react-router-dom';

import { login, signup } from '../../helpers/firebase-config';
import NotificationTypes from '../../constants/NotificationTypes';
import showNotification from '../../helpers/NotificationStatus';

const AuthForm = ({ title }) => {
  const navigate = useNavigate();

  const onFinish = async (data) => {
    if (title === 'Login') {
      await login(data.email, data.password)
        .then(({ user }) => {
          navigate('/');
          console.log(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
          if (error.code === 'auth/wrong-password') {
            showNotification(
              NotificationTypes.Error,
              'Please check the Password',
              NotificationTypes.Error
            );
          }
          if (error.code === 'auth/user-not-found') {
            showNotification(
              NotificationTypes.Error,
              'Please check the Email',
              NotificationTypes.Error
            );
          }
          if (error.code === 'auth/invalid-email') {
            showNotification(
              NotificationTypes.Error,
              'Please enter a Valid Email',
              NotificationTypes.Error
            );
          }
        });
    } else {
      await signup(data.email, data.password)
        .then(({ user }) => {
          navigate('/');
          localStorage.setItem('currentUser', JSON.stringify(user));
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
          if (error.code === 'auth/email-already-in-use') {
            showNotification(
              NotificationTypes.Error,
              'Email Already in Use',
              NotificationTypes.Error
            );
          }
          if (error.code === 'auth/weak-password') {
            showNotification(
              NotificationTypes.Error,
              'Password should be at least 6 characters',
              NotificationTypes.Error
            );
          }
        });
    }
  };

  return (
    <Form layout="vertical" className="auth_form" onFinish={onFinish}>
      <h1 className="heading">
        {title === 'Login' ? 'Welcome' : title} to KnittX
      </h1>
      <div className="mb-5">
        <Form.Item
          name="email"
          label="Email"
          className="font-medium"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
              type: 'email',
            },
          ]}
        >
          <Input className="form-control" required />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          className="font-medium"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
          ]}
        >
          <Input.Password className="form-control" autoComplete="on" />
        </Form.Item>
      </div>
      <Button
        appearance="primary"
        type="submit"
        size="large"
        className="w-full"
      >
        <div className="text-base">{title}</div>
      </Button>

      <div className="terms">
        By continuing, you agree to KnittX's
        <br />
        <a className="link" href="/">
          Terms of Service
        </a>
        and
        <a className="link" href="/">
          Privacy Policy
        </a>
        .
      </div>
    </Form>
  );
};

export default AuthForm;
