const Form = () => {
  return (
    <div className="max-w-[350px] bg-zinc-900 text-white p-6 rounded-2xl border border-zinc-700 space-y-4 relative">
      <div className="relative flex items-center pl-8 text-2xl font-semibold text-cyan-400">
        Login
        <span className="absolute left-0 h-4 w-4 bg-cyan-400 rounded-full" />
        <span className="absolute left-0 h-4 w-4 bg-cyan-400 rounded-full animate-ping" />
      </div>

      <p className="text-sm text-white/70">
        Login now and get full access to our app.
      </p>

      <form className="space-y-5">
        <div className="relative">
          <input
            type="text"
            required
            className="peer w-full bg-zinc-800 text-white px-3 pt-5 pb-2 rounded-md border border-zinc-600 outline-none focus:border-cyan-400"
            placeholder=" "
          />
          <span className="absolute left-3 top-2 text-sm text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
            Username
          </span>
        </div>

        <div className="relative">
          <input
            type="password"
            required
            className="peer w-full bg-zinc-800 text-white px-3 pt-5 pb-2 rounded-md border border-zinc-600 outline-none focus:border-cyan-400"
            placeholder=" "
          />
          <span className="absolute left-3 top-2 text-sm text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
            Password
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-400 text-white py-2 rounded-md hover:bg-cyan-300 transition"
        >
          Submit
        </button>
      </form>

      <p className="text-sm text-center text-white/70">
        Don't have an account?{" "}
        <a href="/register" className="text-cyan-400 hover:underline">
          SignUp
        </a>
      </p>
    </div>
  );
};

export default Form;
