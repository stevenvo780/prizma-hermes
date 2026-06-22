import React from 'react';
import ClientLayout from './components/ClientLayout';

// Metadata is inherited from root layout (app/layout.tsx).
// Do NOT re-export a duplicate metadata block here — it caused duplicate
// schema.org injection in /graf and could trigger a Google penalty (B2).

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
}
