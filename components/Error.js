import Link from "next/link";

export default function Error() {
  return (
    <section className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oops, INVALID OPERATION !!!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          <span>
           <Link
           href="/#questions"
            className="text-purple-600 hover:text-rose-600 duration-300 underline underline-offset-4"
           >
           Know more
           </Link> 
            </span> about what happened
        </p>
      </div>
    </section>
  );
}
