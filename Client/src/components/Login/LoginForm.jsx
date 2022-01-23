import { Form, Input } from "antd";
import { Button } from "evergreen-ui";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const auth = getAuth();

  const onFinish = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Form layout="vertical" className="login_form" onFinish={onFinish}>
      <h1 className="heading">Welcome to KnittX</h1>
      <div className="mb-5">
        <Form.Item
          name={"email"}
          label="Email"
          className="font-medium"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input className="form-control" required />
        </Form.Item>

        <Form.Item
          name={"password"}
          label="Password"
          className="font-medium"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="form-control" required />
        </Form.Item>
      </div>
      <Button
        appearance="primary"
        type="submit"
        size="large"
        className="w-full"
      >
        <div className="text-base">Login</div>
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

export default LoginForm;
