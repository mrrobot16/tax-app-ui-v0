import { AxiosError } from 'axios';

export default function ErrorMessage({ error }: { error?: string | null | AxiosError}) {
  return (
    <div className="border border-red-400 rounded-md p-4">
    <p className="text-red-500">{error as string}</p>
    </div>
  );
}

