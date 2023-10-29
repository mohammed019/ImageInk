export default function Header() {
  return (
    <header className="py-[1rem] px-[4rem] min-h-[10vh] bg-[#262626] shadow-lg border-b border-[#363636] flex justify-between items-center gap-[3rem]">
      <h1 className="text-[2.5rem] font-[800] pb-1">ImageInk</h1>
      <div className="flex justify-center items-center">
        <label
          className="py-[0.5rem] px-[2rem] rounded border border-[#363636] cursor-pointer"
          htmlFor="file"
        >
          Upload Image
        </label>
        <input type="file" name="file" id="file" hidden />
      </div>
    </header>
  );
}
