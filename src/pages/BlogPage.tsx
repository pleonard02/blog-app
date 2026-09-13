import { useNavigate, useParams } from "react-router-dom";
import { blogPosts } from "../data/posts";

function BlogPage() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const blog = blogPosts.find((blog) => blog.slug === slug);

    if (!blog) return <h3>No Post Found!</h3>;

        return (
            <main className="mx-auto min-h-screen max-w-4xl px-4 py-8 sm:px-6">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="mb-6 rounded-lg bg-amber-200 px-4 py-2 font-medium text-amber-950 transition hover:bg-amber-300"
                >
                    ← Back
                </button>

                <article className="overflow-hidden rounded-2xl bg-white shadow-lg">
                    <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="h-64 w-full object-cover sm:h-80 lg:h-96"
                    />

                    <div className="p-6 sm:p-8">
                        <h2 className="mb-6 text-3xl font-bold text-center text-stone-800 sm:text-4xl">
                            {blog.title}
                        </h2>

                        <p
                            className="whitespace-pre-line leading-7 text-stone-700"
                        >
                            {blog.content}
                        </p>
                    </div>
                </article>
            </main>
        );
}

export default BlogPage;