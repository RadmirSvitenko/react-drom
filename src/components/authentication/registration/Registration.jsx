import React, { useState } from "react";
import {
  RegistrationContainer,
  RegistrationContent,
  RegistrationEnterButton,
  RegistrationField,
  RegistrationForm,
  RegistrationHelperBox,
  RegistrationHelperButton,
  RegistrationHelperText,
  RegistrationTitle,
} from "./styles";
import { t } from "i18next";
import {
  AccountCircleRounded,
  VisibilityOffRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Registration = ({ toggleAuthSwitch }) => {
  const [passwordFieldHidden, setPasswordFieldHidden] = useState(true);

  const handleChangeVisibilityPassword = () => {
    setPasswordFieldHidden((hidden) => !hidden);
  };
  return (
    <RegistrationContainer>
      <RegistrationTitle>{t("titleRegistration")}</RegistrationTitle>
      <RegistrationContent>
        <RegistrationForm>
          <RegistrationField
            type="email"
            margin="dense"
            variant="outlined"
            placeholder={t("RegistrationLabelMail")}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <AccountCircleRounded />
                </IconButton>
              ),
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
          />
          <RegistrationField
            type={passwordFieldHidden ? "password" : "text"}
            margin="dense"
            variant="outlined"
            placeholder={t("RegistrationLabelPassword")}
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
          <RegistrationField
            type={passwordFieldHidden ? "password" : "text"}
            margin="dense"
            variant="outlined"
            placeholder={t("RegistrationLabelPasswordRepeat")}
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

          <RegistrationHelperBox>
            <RegistrationHelperText>
              {t("RegistrationHelperText")}
            </RegistrationHelperText>
            <RegistrationHelperButton
              variant="text"
              onClick={() => toggleAuthSwitch(true)}
            >
              {t("titleAuthorization")}
            </RegistrationHelperButton>
          </RegistrationHelperBox>

          <RegistrationEnterButton>
            {t("titleRegistration")}
          </RegistrationEnterButton>
        </RegistrationForm>
      </RegistrationContent>
    </RegistrationContainer>
  );
};

export default Registration;
