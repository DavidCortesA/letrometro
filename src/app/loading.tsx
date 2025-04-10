'use client'
import React from "react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center md:p-24 p-12 dark:bg-gray-800 justify-center">
      <h1 className="md:text-8xl text-4xl font-bold dark:text-white mb-4 text-center break-all animate-pulse">Cargando...</h1>
    </div>
  );
}