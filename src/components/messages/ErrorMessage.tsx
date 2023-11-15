const style = {
  main: {
    width: '75vw',
  },
};

export default function ErrorMessage({ message }: { message: string | null }) {
  return (
    <div className="border border-red-400 rounded-md p-4" style={style.main}>
      <p className="text-red-500">{message}</p>
    </div>
  );
}

