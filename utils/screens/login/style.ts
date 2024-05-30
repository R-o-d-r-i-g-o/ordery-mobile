import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

const FormContainer = styled.View`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  /* shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 4; */
  width: 90%;
  max-width: 400px;
`;

const Logo = styled.Image`
  width: 180px;
  height: 40px;
  align-self: center;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #4a5568;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 255, 0.2);
  color: #000;
  font-size: 16px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  background-color: #6a1b9a;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const ErrorText = styled.Text`
  color: #d32f2f;
  margin-bottom: 10px;
  font-size: 14px;
`;

export {
  Container,
  FormContainer,
  Logo,
  Input,
  SubmitButton,
  ButtonText,
  ErrorText,
  Title,
};
