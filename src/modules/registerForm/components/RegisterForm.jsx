import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

import { Block } from "../../../components";
import { ExclamationCircleTwoTone } from "@ant-design/icons";

const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  const success = false;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item hasFeedback validateStatus="success">
              <Input size="large" type="text" placeholder="E-mail" />
            </Form.Item>

            <Form.Item>
              <Input size="large" type="text" placeholder="Ваше имя" />
            </Form.Item>

            <Form.Item>
              <Input.Password
                size="large"
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                size="large"
                type="password"
                placeholder="Повторите пароль"
                validateStatus="success"
              />
            </Form.Item>

            <Form.Item>
              <Button className="button" type="primary" htmlType="submit">
                Воити в аккаунт
              </Button>
            </Form.Item>

            <Link className="auth__register-link" to="/">
              Зарегистрироваться
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <ExclamationCircleTwoTone style={{ fontSize: "50px" }} />
            </div>
            <h3>Подтвердите свой аккаунт</h3>
            <p>На вашу почту отправленна ссылка с подтверждением аккаунта</p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
