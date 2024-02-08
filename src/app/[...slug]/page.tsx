import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  console.log("generateMetadata", params.slug)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    title: params.slug,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  console.log("rendering page", params.slug)
  await new Promise((resolve) => setTimeout(resolve, 1000));
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
