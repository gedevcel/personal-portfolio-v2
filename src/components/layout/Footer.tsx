export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-[#191919] px-5 z-50">
      <span className="text-center text-sm text-gray-400 dark:text-gray-500 py-1">
        Loosely designed in Figma and built with Next.js and Tailwind CSS -
        Follow me on{" "}
        <a className="text-white" href="https://github.com/gedevcel">
          GitHub 👨‍💻
        </a>{" "}
      </span>
    </div>
  );
}
