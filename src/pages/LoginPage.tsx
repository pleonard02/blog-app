import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setIsSubmitting(true);
            setErrorMessage("");

            await login(username, password);
            navigate("/blogs");
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Unable to log in.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="grid min-h-[70vh] place-items-center px-4 py-8">
            <section className="w-full max-w-md rounded-3xl border-4 border-[#d6ce93] bg-[#efebce] p-8 text-[#555541] shadow-[0_18px_45px_rgba(187,133,136,0.3)]">
                <div className="mb-8 text-center">
                    <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#a3a380] uppercase">
                        Recipe Blog
                    </p>

                    <h2 className="mb-2 text-3xl font-bold text-[#bb8588]">
                        Welcome Back
                    </h2>

                    <p className="text-[#6d6b51]">
                        Log in to access the kitchen dashboard.
                    </p>
                </div>

                <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-2 text-left">
                        <label
                            className="font-bold text-[#6d6b51]"
                            htmlFor="username"
                        >
                            Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            autoComplete="username"
                            required
                            className="w-full rounded-xl border-2 border-[#a3a380] bg-[#fffdf1] px-4 py-3 text-[#555541] outline-none transition focus:border-[#bb8588] focus:ring-4 focus:ring-[#d8a48f]/40"
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label
                            className="font-bold text-[#6d6b51]"
                            htmlFor="password"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            autoComplete="current-password"
                            required
                            className="w-full rounded-xl border-2 border-[#a3a380] bg-[#fffdf1] px-4 py-3 text-[#555541] outline-none transition focus:border-[#bb8588] focus:ring-4 focus:ring-[#d8a48f]/40"
                        />
                    </div>

                    {errorMessage && (
                        <p className="rounded-lg border-l-4 border-[#bb8588] bg-[#d8a48f]/30 p-3 text-left text-[#713f43]">
                            {errorMessage}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-xl bg-[#bb8588] px-5 py-3 font-bold text-[#fffdf1] transition hover:-translate-y-0.5 hover:bg-[#d8a48f] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#a3a380] disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                        {isSubmitting ? "Logging in..." : "Log In"}
                    </button>
                </form>
            </section>
        </main>
    );
}

export default LoginPage;