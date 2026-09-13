import { Link } from "react-router-dom";
import { blogPosts } from "../data/posts";

function BlogsPage() {

    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            <div className="mb-10 text-center">
                <p className="text-sm font-bold tracking-[0.2em] text-[#a3a380] uppercase">
                    Straight to the good stuff
                </p>

                <h2 className="mt-2 text-4xl font-bold text-[#bb8588]">
                    Recipes
                </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((blog) => (
                    <Link
                        key={blog.id}
                        to={`/blogs/${blog.slug}`}
                        className="group overflow-hidden rounded-3xl border-3 border-[#d6ce93] bg-[#efebce] shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="h-64 w-full object-cover"
                        />

                        <div className="p-5">
                            <h3 className="text-xl font-bold text-[#68664f] transition group-hover:text-[#bb8588]">
                                {blog.title}
                            </h3>

                            <p className="mt-2 text-sm font-semibold text-[#a3a380]">
                                View recipe →
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default BlogsPage;
