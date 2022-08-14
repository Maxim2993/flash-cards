import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../../app/hooks';
import { login } from '../../../app/slices/auth/authSlice';
import { MIN_LENGTH_LOGIN, MIN_LENGTH_PASSWORD, ERROR_MESSAGES } from '../../../constants';

export type FormValues = {
    login: string;
    password: string;
};

export const LoginForm = () => {

    const [submitError, setSubmitError] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isSubmitError = (values: FormValues): Boolean => {
        return !(values.login === 'admin' && values.password === 'admin');
    }

    const formik: FormikProps<FormValues> = useFormik<FormValues>({

        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .min(MIN_LENGTH_LOGIN, ERROR_MESSAGES.MIN_LOGIN)
                .required(ERROR_MESSAGES.REQUIRED),

            password: Yup.string()
                .min(MIN_LENGTH_PASSWORD, ERROR_MESSAGES.MIN_PASSWORD)
                .required(ERROR_MESSAGES.REQUIRED),

        }),
        onSubmit: values => {
            if (isSubmitError(values)) {
                setSubmitError(ERROR_MESSAGES.SUBMIT_ERROR)
            } else {
                dispatch(login({ isAuth: true }));
                navigate('/');
            }
        },
    });

    const isButtonDisabled = !formik.values.login || !formik.values.password ||
        Boolean(formik.errors.login) || Boolean(formik.errors.password)

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 4,
                width: '400px',
                boxShadow: '0px 4px 33px blue',
                borderRadius: 4
            }}
            component='section'
        >
            <Typography variant='h4' sx={{ color: '#dae0f0', WebkitTextStroke: '1px #6486de' }}>
                Авторизация
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}
                sx={{ mt: 4, display: 'flex', flexDirection: 'column', width: '100%' }}
            >
                <TextField
                    variant="outlined"
                    type='text'
                    id='login'
                    label='Логин'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.login}
                    error={(formik.touched.login && Boolean(formik.errors.login)) || Boolean(submitError)}
                    helperText={(formik.touched.login && formik.errors.login)}
                />
                <TextField
                    variant="outlined"
                    type='password'
                    id='password'
                    label='Пароль'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={(formik.touched.password && Boolean(formik.errors.password)) || Boolean(submitError)}
                    helperText={formik.touched.password && formik.errors.password}
                    sx={{ mt: 3 }}
                />
                <Typography variant="overline" sx={{ textTransform: 'none', ml: '14px', color: '#d32f2f' }} >
                    {submitError}
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    disabled={isButtonDisabled}
                    sx={{
                        mt: 5,
                        height: '50px',
                        background: 'linear-gradient(to bottom, #6486de, #dae0f0)',
                        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.15)',
                        padding: '7px',
                    }}
                >
                    <Typography variant="body2" sx={{ textTransform: 'none' }} >
                        Войти
                    </Typography>
                </Button>
            </Box>
        </Box >
    )
};