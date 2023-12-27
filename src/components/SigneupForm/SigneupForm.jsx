import { useState } from 'react';
import css from './SigneupForm.module.css';

export const SigneupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleChangeEmail = e => {
  //   setEmail(e.target.value);
  // };
  // const handleChangePassword = e => {
  //   setPassword(e.target.value);
  // };
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };
  return (
    <form className={css.form}>
      <label className={css.emailLabel}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="" className={css.passwordLabel}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Зареєструватися</button>
    </form>
  );
};
