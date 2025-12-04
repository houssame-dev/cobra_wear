'use client';

import { usePathname } from 'next/navigation';

export default function PageWrapper({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className={isHomePage ? '' : 'pt-16 md:pt-20'}>
      {children}
    </div>
  );
}

