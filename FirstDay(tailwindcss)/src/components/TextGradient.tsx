export default function TextGradient() {
  return (
    <div className="gap-4 max-w-5xl w-full mx-auto h-screen flex flex-col justify-center items-center">
      <div className="size-4 rounded-full bg-gray-300 bg-gradient-to-tr from-[#096bde] via-[30%] via-[rgb(9,107,222)] to-[#ddf1ff]" />
      <div className="bg-gradient-to-r from-[#e9f9f4] via-[45%] via-[#cfebfe] to-[#f2eefe] ">
        <div className="text-6xl bg-gradient-to-r from-[#15c064] to-[#00d1ff] text-transparent bg-clip-text">
          Shopify
        </div>
      </div>

      {/* <span
    className={
      "bg-gradient-to-r from-[#e9f9f4] via-[#cfebfe] via-[45%] to-[#f2eefe] px-2 text-5xl font-bold"
    }
  >
    from hello world to IPO.
  </span> */}

      <span
        className={
          "before:block before:-inset-1 relative before:absolute before:bg-gradient-to-r before:from-[#e9f9f4] before:via-[#cfebfe] before:via-[45%] before:to-[#f2eefe] text-5xl font-bold"
        }
      >
        <span className={"relative"}>from hello world to IPO.</span>
      </span>

      {/* <span className="bg-gradient-to-r from-[#15c064] from-[28.5%] to-[#00d1ff] to-[91.82%] bg-clip-text text-9xl font-bold text-transparent leading-[1.1] px-1">
    Shopify
  </span> */}
    </div>
  );
}
