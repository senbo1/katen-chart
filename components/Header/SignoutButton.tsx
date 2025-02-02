'use client';
import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';

export function SignOutButton() {
  return (
    <Button
      className="h-8 text-sm"
      onClick={() => signOut({ redirectTo: '/' })}
    >
      Sign Out
    </Button>
  );
}
