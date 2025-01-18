'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';

interface SynopsisModalProps {
  title: string;
  synopsis?: string;
}

export function SynopsisModal({ title, synopsis = 'N/A' }: SynopsisModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full">
          <Book className="mr-2 h-3 w-3" /> Read Synopsis
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Synopsis</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm text-gray-400">{synopsis}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
