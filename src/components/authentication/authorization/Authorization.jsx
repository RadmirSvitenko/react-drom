import React, { useState } from 'react';
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
  InputMessage,
  InputMessageBox,
} from './styles';
import { t } from 'i18next';
import {
  AccountCircleRounded,
  VisibilityOffRounded,
  VisibilityRounded,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthorization } from 'reducers/authSlice';
import { getTokenFromCookies } from 'cookies';

const Authorization = ({ toggleAuthSwitch, onClose }) => {
  const message = useSelector((state) => state.authReducer.account);
  console.log('message: ', message);

  const [passwordFieldHidden, setPasswordFieldHidden] = useState(true);
  const [token, setToken] = useState();
  console.log('token: ', token);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChangeVisibilityPassword = () => {
    setPasswordFieldHidden((hidden) => !hidden);
  };

  const onSubmit = async (d) => {
    await dispatch(userAuthorization({ data: d }));
    const TOKEN = getTokenFromCookies();
    setToken(TOKEN);

    if (TOKEN && TOKEN !== 'undefined') {
      onClose();
    } else if (TOKEN === 'undefined') {
      const errorMessage = document.getElementById('auth_message');
      errorMessage.style.display = 'none';
    }
  };

  return (
    <AuthorizationContainer>
      <AuthorizationTitle>{t('titleAuthorization')}</AuthorizationTitle>
      <AuthorizationContent>
        <AuthorizationForm onSubmit={handleSubmit(onSubmit)}>
          <AuthorizationField
            fullWidth
            {...register('email', {
              required: t('authMessageErrorRequire'),
              pattern: {
                value: /@mail\.ru$/,
                message: t('authMessageErrorMail'),
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
            type="email"
            id={'email'}
            variant="outlined"
            placeholder={t('AuthorizationLabelMail')}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <AccountCircleRounded />
                </IconButton>
              ),
            }}
            InputLabelProps={{
              style: { color: '#000' },
              focused: { color: '#fff' },
            }}
          />
          <InputMessageBox>
            {errors.email && (
              <InputMessage>{errors.email.message}</InputMessage>
            )}
          </InputMessageBox>

          <AuthorizationField
            fullWidth
            {...register('password', {
              required: t('authMessageErrorRequire'),
              minLength: {
                value: 8,
                message: t('authMessageErrorMinLength'),
              },
              maxLength: {
                value: 14,
                message: t('authMessageErrorMaxLength'),
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                message: t('authMessageErrorStringAndInt'),
              },
            })}
            type={passwordFieldHidden ? 'password' : 'text'}
            id="password"
            margin="dense"
            variant="outlined"
            placeholder={t('AuthorizationLabelPassword')}
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
              style: { color: '#000' },
            }}
          />
          <InputMessageBox>
            {errors.password && (
              <InputMessage>{errors.password.message}</InputMessage>
            )}
          </InputMessageBox>
          <AuthorizationHelperBox>
            <AuthorizationHelperText>
              {t('AuthorizationHelperText')}
            </AuthorizationHelperText>
            <AuthorizationHelperButton
              variant="text"
              onClick={() => toggleAuthSwitch(false)}
            >
              {t('titleRegistration')}
            </AuthorizationHelperButton>
          </AuthorizationHelperBox>
          <AuthorizationEnterButton type="submit">
            {t('titleAuthorization')}
          </AuthorizationEnterButton>

          <InputMessageBox id="auth_message">
            <InputMessage>{message}</InputMessage>
          </InputMessageBox>
        </AuthorizationForm>
      </AuthorizationContent>
    </AuthorizationContainer>
  );
};

export default Authorization;
