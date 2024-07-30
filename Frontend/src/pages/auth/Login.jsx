const Login = () => {
  const handleSubmit = () => {
    alert("Form submit successful");
  };

  return (
    <section className="min-w-md w-screen h-screen py-10 px-6 bg-gradient-to-br from-secondary to-primary rounded-xl shadow-xl shadow-zinc-600">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="cursor-pointer w-max text-white font-bold text-lg mb-1"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md outline-pink-300 shadow-xl"
            aria-label="email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="cursor-pointer w-max text-white font-bold text-lg mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="px-4 py-2 rounded-md outline-pink-300 shadow-xl"
            aria-label="password"
            required
          />
        </div>
        <div className="pt-2">
          <a href="#" className="underline text-zinc-50 ">
            forgot password?
          </a>
          <button className="bg-primary w-full py-2 shadow-2xl rounded-md text-white font-semibold uppercase hover:opacity-85 active:translate-y-[1px]">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
