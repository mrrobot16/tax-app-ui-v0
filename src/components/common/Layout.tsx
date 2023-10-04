import { ReactNode } from 'react';
import { Navbar } from 'components';

interface LayoutProps {
  children?: ReactNode;
}

const styles = {
  container: 'mx-auto flex flex-col space-y-4',
  main: 'flex w-full flex-1 flex-col overflow-hidden',
};


export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
