import { useState } from 'react';

export default function ErrorMessage({ error }: { error?: string | null}) {
  return (
    <div className="border border-red-400 rounded-md p-4">
    <p className="text-red-500">{error}</p>
    </div>
  );
}

