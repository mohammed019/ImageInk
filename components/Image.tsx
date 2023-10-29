import Image from "next/image";
import ColorList from "./ColorList";

export default function DisplayImage({ colors, img }: any) {
  const toHex = (rgb: any) => {
    let hex = Number(rgb).toString(16);

    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  };

  return (
    <div className="flex items-center justify-center flex-col gap-[2rem]">
      <div className="w-[20rem] h-[10rem] md:w-[48rem] md:h-[25rem] flex justify-center items-center border-[#363636] rounded-[0.5rem] transition overflow-hidden hover:shadow-lg">
        {img ? (
          <Image
            className="object-cover w-full h-full object-center rounded-[0.5rem]"
            src={img}
            alt="uploaded"
          />
        ) : (
          <h2>Put An Image Here...</h2>
        )}
      </div>

      {colors && (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 transition-all">
          {colors.map((color: any, i: any) => {
            const rgb = `rgb(${color.join(",")})`;

            const hex =
              "#" + toHex(color[0]) + toHex(color[1]) + toHex(color[2]);

            return <ColorList key={i} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}
    </div>
  );
}
