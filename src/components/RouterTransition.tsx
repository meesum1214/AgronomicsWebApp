// components/RouterTransition.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Loading, { LoadingAG } from './Loading';

export function RouterTransition() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && LoadingAG(true);
    const handleComplete = () => LoadingAG(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath]);

  return null;
}