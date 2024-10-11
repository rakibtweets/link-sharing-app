import { getBgColor, getCorrespondingLogo } from '@/utils';
import { BiRightArrowAlt } from 'react-icons/bi';
import Image from 'next/image';

const ProfilePhoneMockup = () => {
  const links = [
    { name: 'Github', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Dev.to', url: 'https://dev.to' }
  ];

  const firstName = 'John';
  const lastName = 'Doe';
  const UserMail = 'abc@gmail.com';
  const photo =
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <div className="tablet:hidden relative flex w-full flex-col items-center justify-start justify-self-center bg-white p-16 pb-0">
      <Image
        src="/assets/iphone-mockup.svg"
        alt="phone mockup"
        width={400}
        height={600}
      />
      <div className="absolute top-[24rem] flex flex-col gap-[1.3rem] p-16">
        {links?.map((link, index) => (
          <div
            className={`flex w-[23.7rem] justify-between items-center gap-[0.8rem] rounded-[0.8rem] px-[1.6rem] py-[1.3rem] ${getBgColor(
              link.name
            )}`}
            key={index}
          >
            {getCorrespondingLogo(link.name, '2rem')}
            <h3 className="text-[1.6rem] leading-[2.4rem]">{link.name}</h3>
            <BiRightArrowAlt size="2rem" />
          </div>
        ))}
      </div>
      <div className="absolute top-[22rem] flex flex-col items-center">
        <p className="w-full min-w-[17rem] bg-white text-center text-[1.8rem] font-semibold leading-[2.7rem] text-[#333]">
          {firstName} {lastName}
        </p>

        <p
          className={`bg-white text-[1.4rem] leading-[2.1rem] text-[#737373] ${
            firstName || lastName ? 'mt-0' : 'mt-[2.2rem]'
          }`}
        >
          {UserMail}
        </p>
      </div>

      {photo ? (
        <Image
          src={photo}
          className="absolute top-[10.5rem] h-[9.6rem] w-[9.6rem] rounded-full object-cover"
          alt="user photo"
          width={100}
          height={100}
        />
      ) : null}
    </div>
  );
};
export default ProfilePhoneMockup;
