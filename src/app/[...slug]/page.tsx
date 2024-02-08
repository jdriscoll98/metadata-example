import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  console.log("running metadata");
    // await fetch("https://jsonplaceholder.typicode.com/todos");
  await fetch("https://bundle.mxlocker.com/category-bundle.json", {
    headers: {
      "content-type": "application/json",
    },
  });
  return {
    title: params.slug,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  console.log("running page");
    // await fetch("https://jsonplaceholder.typicode.com/todos");
  await fetch("https://bundle.mxlocker.com/category-bundle.json", {
    headers: {
      "content-type": "application/json",
    },
  });
  const slug = params.slug;
  return (
    <main>
      <h1>{slug}</h1>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </main>
  );
}
