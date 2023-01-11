import Image from "next/image";
import Link from "next/link";

const AnimatedLogo = () => {
  return (
    <Link href='/'>
      <div className="relative w-[500px] h-[400px]">
        <div className="h-full overflow-hidden absolute bottom-0 right-0">
          <Image
            className="img_anim"
            src={"/lazycartremove.png"}
            width={400}
            height={400}
            alt="logo"
          />
        </div>
        <div className="w-[250px] h-[250px] overflow-hidden">
          <Image
            className="title_anim"
            src={"/lazytitle.png"}
            width={500}
            height={500}
            alt="logo"
          ></Image>
        </div>
      </div>
    </Link>
  );
};

export default AnimatedLogo;
