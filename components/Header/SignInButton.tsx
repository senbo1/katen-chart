import { signIn } from '@/auth';
import { Button } from '../ui/button';

export const SignInButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
};
