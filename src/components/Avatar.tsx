import Image from "next/image";
import Link from "next/link";

const Avatar = () => {
  return (
    <div className="border-2 border-accent rounded-2xl shadow-md overflow-hidden w-12 h-12 hover:scale-90 transition-transform duration-200 cursor-pointer">
      <Link href="/">
        <Image
          alt="profile avatar"
          src="/images/profile.jpg"
          width={48}
          height={48}
          className="-z-10 "
        ></Image>
      </Link>
    </div>
  );
};

export default Avatar;
