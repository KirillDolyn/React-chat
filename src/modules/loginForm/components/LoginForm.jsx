import React from "react";
import { Form, Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Block } from "../../../components";

const LoginForm = () => {
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйта, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item hasFeedback validateStatus="success">
            <Input size="large" type="text" placeholder="Username" />
          </Form.Item>

          <Form.Item>
            <Input.Password
              size="large"
              type="password"
              placeholder="password"
              validateStatus="success"
            />
          </Form.Item>

          <Form.Item>
            <Link to="/im">
              <Button className="button" type="primary" htmlType="submit">
                Воити в аккаунт
              </Button>
            </Link>
          </Form.Item>

          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
