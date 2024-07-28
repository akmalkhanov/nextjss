"use client";
import { useEffect } from "react";

export default function error({ err, res }) {
  useEffect(() => {
    console.error(err);
  }, [err]);

  return (
      <button
        onClick={() => res()}
        className="px-4 py-2 bg-indigo-400 text-white rounded-xl">
        error
      </button>
  );
}
