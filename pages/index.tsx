import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (

    <>
      <Head>
        <title>Income Dashboard</title>
        <meta name="description" content="Simple income dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="flex h-screen w-screen bg-main">
        <aside className="rounded-tb-[20px] h-full w-24 rounded-br-[20px] bg-white px-6 pt-8">
          <Image width={50} height={50} alt="Logo" src="/icon.png" />
        </aside>
        <main className="">
          Main
        </main>
      </div>
    </>
  );
}
