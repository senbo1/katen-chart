import { signIn } from 'next-auth/react';
import { Button } from '../ui/button';

export const SignInButton = () => {
  return (
    // <form
    //   action={async () => {
    //     'use server';
    //     await signIn('google');
    //   }}
    // >
    <Button
      type="submit"
      className="h-8 text-sm"
      onClick={() => signIn('google')}
    >
      Sign In
    </Button>
    // </form>
  );
};
