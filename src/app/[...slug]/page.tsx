import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    title: params.slug,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageWrapper params={params} />
    </Suspense>
  );
}

async function PageWrapper({ params }: { params: { slug: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const slug = params.slug;
  return (
    <main className="flex flex-col gap-[1.6rem]">
      <h1>Current Page: {slug}</h1>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </main>
  );
}
