import Image from "next/image";
import logo_img from "../public/lazycartremove.png";
const anim = () => {
  return (
    <div>
      <div className="w-[500px] h-[500px] overflow-hidden">
        <Image
          className="img_anim"
          src={"/lazycartremove.png"}
          width={500}
          height={500}
          alt="logo"
        />
      </div>
      <div className="w-[500px] h-[500px] overflow-hidden">
        <Image
          className="title_anim"
          src={"/lazytitle.png"}
          width={500}
          height={500}
          alt="logo"
        ></Image>
      </div>
    </div>
  );
};

export default anim;
