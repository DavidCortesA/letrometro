'use client'
import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <div className="flex min-h-screen flex-col items-center md:p-24 p-12 dark:bg-gray-800 justify-center">
      <h1 className="md:text-8xl text-4xl font-bold dark:text-white mb-4 text-center break-all">Página en desarrollo...</h1>
      <Link href="/" className="dark:bg-white bg-black dark:text-black text-white rounded-2xl px-5 py-1 text-2xl font-bold text-center cursor-pointer">Volver al inicio</Link>
    </div>
  );
}