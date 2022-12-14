import React, { FC } from 'react';
import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(async () => await new Promise(resolve => {
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
