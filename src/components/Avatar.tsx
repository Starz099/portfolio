import Image from "next/image";
import Link from "next/link";

const Avatar = () => {
  return (
    <div className="border-accent h-12 w-12 cursor-pointer overflow-hidden rounded-2xl border-2 shadow-md transition-transform duration-200 hover:scale-90">
      <Link href="/">
        <Image
          alt="profile avatar"
          src="/images/profile.jpg"
          width={48}
          height={48}
          className="-z-10"
          loading="eager"
        ></Image>
      </Link>
    </div>
  );
};

export default Avatar;
