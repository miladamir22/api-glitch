import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";

const providers = [{ id: "credentials", name: "Credentials" }];

const BRANDING = {
  logo: (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_A74nRxPo11IbgAjBdkHPBL2HkItffNTH7TK_BNE-fECogYFWQs1DCHlWVjzDcZjfHU&usqp=CAU"
      alt="MUI logo"
      style={{ height: 24 }}
    />
  ),
  title: "Classroom",
};

const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Login with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function Login() {
  const theme = useTheme();

  const backgroundStyle = {
    backgroundImage:
      "url('https://static.vecteezy.com/system/resources/previews/015/277/452/non_2x/space-background-with-stardust-and-shining-stars-realistic-colorful-cosmos-with-nebula-and-milky-way-blue-galaxy-background-beautiful-outer-space-infinite-universe-illustration-free-vector.jpg')", 
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", 
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={backgroundStyle}>
      <AppProvider branding={BRANDING} theme={theme}>
        <SignInPage
          signIn={signIn}
          providers={providers}
          slotProps={{ emailField: { autoFocus: false } }}
        />
      </AppProvider>
    </div>
  );
}
