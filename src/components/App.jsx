import css from './App.module.css';
import { SigneupForm } from './SigneupForm/SigneupForm';
export const App = () => {
  return (
    <div className={css.main}>
      <SigneupForm />
    </div>
  );
};
