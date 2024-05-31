async function signIn(email: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "123456") {
        resolve({
          token: "fake-data",
          email,
          name: "test",
        });
      }

      reject(new Error("Credenciais inválidas"));
    }, 500);
  });
}

export const authService = { signIn };
