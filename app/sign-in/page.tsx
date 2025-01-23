// import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';

const SignIn = () => {
  return (
    // <form
    //   action={async () => {
    //     'use server';
    //     await signIn('google', { redirectTo: '/' });
    //   }}
    // >
    //   <Button type="submit">Signin with Google</Button>
    // </form>
    <main className="flex items-center justify-center h-screen">
      <div className="bg-foreground text-background p-8 rounded-2xl shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Katen chart</h1>
          <p className="text-gray-600">
            Sign in/up to continue to your account
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="secondary">Continue with Google</Button>
          <Button variant="secondary">Continue with Discord</Button>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
