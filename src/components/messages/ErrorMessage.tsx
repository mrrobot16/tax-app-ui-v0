import { AxiosError } from 'axios';

const style = {
  main: {
    width: '75vw',
  },
};

export default function ErrorMessage({ error }: { error?: string | null | AxiosError}) {
  return (
    <div className="border border-red-400 rounded-md p-4" style={style.main}>
      <p className="text-red-500">{error as string}</p>
    </div>
  );
}

