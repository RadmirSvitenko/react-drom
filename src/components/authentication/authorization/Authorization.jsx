import React, { useState } from "react";
import {
  AuthorizationContainer,
  AuthorizationContent,
  AuthorizationEnterButton,
  AuthorizationField,
  AuthorizationForm,
  AuthorizationHelperBox,
  AuthorizationHelperButton,
  AuthorizationHelperText,
  AuthorizationTitle,
} from "./styles";
import { t } from "i18next";
import {
  AccountCircleRounded,
  VisibilityOffRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Authorization = ({ toggleAuthSwitch }) => {
  const [passwordFieldHidden, setPasswordFieldHidden] = useState(true);

  const handleChangeVisibilityPassword = () => {
    setPasswordFieldHidden((hidden) => !hidden);
  };

  return (
    <AuthorizationContainer>
      <AuthorizationTitle>{t("titleAuthorization")}</AuthorizationTitle>
      <AuthorizationContent>
        <AuthorizationForm>
          <AuthorizationField
            type="email"
            variant="outlined"
            placeholder={t("AuthorizationLabelMail")}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <AccountCircleRounded />
                </IconButton>
              ),
            }}
            InputLabelProps={{
              style: { color: "#000" },
              focused: { color: "#fff" },
            }}
          />
          <AuthorizationField
            type={passwordFieldHidden ? "password" : "text"}
            margin="dense"
            variant="outlined"
            placeholder={t("AuthorizationLabelPassword")}
            InputProps={{
              endAdornment: passwordFieldHidden ? (
                <IconButton onClick={() => handleChangeVisibilityPassword()}>
                  <VisibilityRounded />
                </IconButton>
              ) : (
                <IconButton onClick={() => handleChangeVisibilityPassword()}>
                  <VisibilityOffRounded />
                </IconButton>
              ),
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
          />

          <AuthorizationHelperBox>
            <AuthorizationHelperText>
              {t("AuthorizationHelperText")}
            </AuthorizationHelperText>
            <AuthorizationHelperButton
              variant="text"
              onClick={() => toggleAuthSwitch(false)}
            >
              {t("titleRegistration")}
            </AuthorizationHelperButton>
          </AuthorizationHelperBox>

          <AuthorizationEnterButton>
            {t("titleAuthorization")}
          </AuthorizationEnterButton>
        </AuthorizationForm>
      </AuthorizationContent>
    </AuthorizationContainer>
  );
};

export default Authorization;
