import { FaImages } from "react-icons/fa";

export default function Header() {
  return (
    <header className="py-[1rem] px-[4rem] min-h-[10vh] bg-[#262626] shadow-lg border-b border-[#363636] flex justify-between items-center gap-[3rem]">
      <h1 className="text-[2.5rem] font-[800] pb-1">ImageInk</h1>
      <div className="flex justify-center items-center">
        <label
          className="group py-[0.5rem] px-[2rem] rounded-lg border border-[#363636] cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition flex justify-center items-center gap-3"
          htmlFor="file"
        >
          <FaImages className="group-hover:scale-110 group-hover:-translate-x-2 transition-all" />
          Upload Image
        </label>
        <input type="file" name="file" id="file" hidden />
      </div>
    </header>
  );
}
