export default function Group() {
  return (
    <a className="group flex gap-1 items-center">
      <button type="button" className="underline">
        Click Me!
      </button>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
        className="opacity-0 group-hover:opacity-100 transition duration-500 group-hover:translate-x-1 will-change-transform"
      >
        <path
          d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
  );
}
