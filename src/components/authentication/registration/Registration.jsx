import React, { useState } from 'react';
import {
  InputMessage,
  InputMessageBox,
  RegistrationContainer,
  RegistrationContent,
  RegistrationEnterButton,
  RegistrationField,
  RegistrationForm,
  RegistrationHelperBox,
  RegistrationHelperButton,
  RegistrationHelperText,
  RegistrationTitle,
} from './styles';
import { t } from 'i18next';
import {
  AccountCircleRounded,
  VisibilityOffRounded,
  VisibilityRounded,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userRegister } from 'reducers/registerSlice';
import { getTokenFromCookies } from 'cookies';
import { userAuthorization } from 'reducers/authSlice';

const Registration = ({ toggleAuthSwitch }) => {
  const [passwordFieldHidden, setPasswordFieldHidden] = useState(true);
  const TOKEN = getTokenFromCookies();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleChangeVisibilityPassword = () => {
    setPasswordFieldHidden((hidden) => !hidden);
  };

  const onSubmit = async (d) => {
    console.log(JSON.stringify(d));
    await dispatch(userRegister({ data: d }));
    if (TOKEN && TOKEN !== 'undefined') {
      await dispatch(userAuthorization({ data: d }));
    }
  };

  return (
    <RegistrationContainer>
      <RegistrationTitle>{t('titleRegistration')}</RegistrationTitle>
      <RegistrationContent>
        <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
          <RegistrationField
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
            margin="dense"
            variant="outlined"
            placeholder={t('RegistrationLabelMail')}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <AccountCircleRounded />
                </IconButton>
              ),
            }}
            InputLabelProps={{
              style: { color: '#000' },
            }}
          />
          <InputMessageBox>
            {errors.email && (
              <InputMessage>{errors.email.message}</InputMessage>
            )}
          </InputMessageBox>

          <RegistrationField
            fullWidth
            {...register('password', {
              required: t('authMessageErrorRequire'),
              validate: (value) =>
                value === getValues('passwordRepeat') ||
                t('authMessageErrorPasswordMatch'),
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
            placeholder={t('RegistrationLabelPassword')}
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

          <RegistrationField
            fullWidth
            {...register('passwordRepeat', {
              required: t('authMessageErrorRequire'),
              validate: (value) =>
                value === getValues('password') ||
                t('authMessageErrorPasswordMatch'),

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
            id={'passwordRepeat'}
            margin="dense"
            variant="outlined"
            placeholder={t('RegistrationLabelPasswordRepeat')}
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
            {errors.passwordRepeat && (
              <InputMessage>{errors.passwordRepeat.message}</InputMessage>
            )}
          </InputMessageBox>

          <RegistrationHelperBox>
            <RegistrationHelperText>
              {t('RegistrationHelperText')}
            </RegistrationHelperText>
            <RegistrationHelperButton
              variant="text"
              onClick={() => toggleAuthSwitch(true)}
            >
              {t('titleAuthorization')}
            </RegistrationHelperButton>
          </RegistrationHelperBox>

          <RegistrationEnterButton type="submit">
            {t('titleRegistration')}
          </RegistrationEnterButton>
        </RegistrationForm>
      </RegistrationContent>
    </RegistrationContainer>
  );
};

export default Registration;
