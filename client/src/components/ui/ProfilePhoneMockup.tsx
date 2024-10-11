import Image from 'next/image';

const ProfilePhoneMockup = () => {
  return (
    <div className="tablet:hidden relative flex w-full flex-col items-center justify-start justify-self-center bg-white p-16 pb-0">
      <Image
        src="/assets/iphone-mockup.svg"
        alt="phone mockup"
        width={400}
        height={600}
      />
    </div>
  );
};
export default ProfilePhoneMockup;
