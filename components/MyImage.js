import Image from "next/image";

const MyImage = () => {
  return (
    <>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="profileImage"
      />
    </>
  );
};

export default MyImage;
