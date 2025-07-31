import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center flex flex-col items-center justify-center gap-10 py-14">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 mb-2">
        Welcome to Foodie
      </h1>
      <p className="text-xl text-gray-700 mb-4">
        Discover the best food from your favorite restaurants. Order now, track deliveries, and enjoy!
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          href="/restaurants"
          className="bg-orange-600 text-white p-3 px-6 rounded-full font-semibold shadow hover:bg-orange-700 transition"
        >
          Browse Restaurants
        </Link>
        <Link
          href="/login"
          className="border border-orange-600 text-orange-600 p-3 px-6 rounded-full font-semibold hover:bg-orange-50 transition"
        >
          Login
        </Link>
      </div>
    </section>
  );
}
