import React from "react";
import { Formik, FormikProps } from "formik";

import { useAuth } from "../../contexts/auth";
import * as S from "./style";
import * as schema from "./schema";

const logo = require("../../assets/logo.png");

const LoginScreen = () => {
  const { signIn } = useAuth();
  return (
    <S.Container>
      <S.FormContainer>
        <S.Logo source={logo} />
        <S.Title>Seja bem vindo(a)!</S.Title>
        <Formik
          initialValues={schema.initialValues}
          validationSchema={schema.LoginSchema}
          onSubmit={(form) => signIn(form.email, form.password)}
        >
          {(props) => <LoginForm {...props} />}
        </Formik>
      </S.FormContainer>
    </S.Container>
  );
};

const LoginForm: React.FC<FormikProps<typeof schema.initialValues>> = ({
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  errors,
  touched,
}) => (
  <>
    <S.Input
      placeholder="Email"
      placeholderTextColor="#aaa"
      onChangeText={handleChange("email")}
      onBlur={handleBlur("email")}
      value={values.email}
    />
    {errors.email && touched.email && <S.ErrorText>{errors.email}</S.ErrorText>}
    <S.Input
      placeholder="Password"
      placeholderTextColor="#aaa"
      onChangeText={handleChange("password")}
      onBlur={handleBlur("password")}
      value={values.password}
      secureTextEntry
    />
    {errors.password && touched.password && (
      <S.ErrorText>{errors.password}</S.ErrorText>
    )}
    <S.SubmitButton onPress={handleSubmit}>
      <S.ButtonText>Entrar</S.ButtonText>
    </S.SubmitButton>
  </>
);

export default LoginScreen;
