import * as React from "react";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Auth layout</p>
      {children}
    </>
  );
}
