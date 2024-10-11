import {
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaTwitch,
  FaCodepen,
  FaFreeCodeCamp,
  FaStackOverflow
} from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { PiGithubLogoFill, PiDevToLogoFill } from 'react-icons/pi';
import {
  SiFrontendmentor,
  SiCodewars,
  SiGitlab,
  SiHashnode
} from 'react-icons/si';

export function getBgColor(name: string) {
  if (name === 'Github') return 'bg-[#1a1a1a] text-white';
  if (name === 'Frontend Mentor')
    return 'bg-white border border-solid border-[#d9d9d9] text-[#333]';
  if (name === 'Twitter') return 'bg-[#43b7e9] text-white';
  if (name === 'LinkedIn') return 'bg-[#2d68ff] text-white';
  if (name === 'YouTube') return 'bg-[#ee3939] text-white';
  if (name === 'Facebook') return 'bg-[#2442ac] text-white';
  if (name === 'Dev.to') return 'bg-[#333] text-white';
  if (name === 'Codewars') return 'bg-[#ba1a50] text-white';
  if (name === 'freeCodeCamp') return 'bg-[#302267] text-white';
  if (name === 'Gitlab') return 'bg-[#eb4925] text-white';
  if (name === 'Hashnode') return 'bg-[#0330d1] text-white';
  if (name === 'StackOverflow') return 'bg-[#ec7100] text-white';
  if (name === 'Twitch') return 'bg-[#ee3fc8] text-white';
  if (name === 'Codepen') return 'bg-[#464646] text-white';
}

export function getCorrespondingLogo(name: string, size?: string) {
  if (name === 'Github') return <PiGithubLogoFill size={size} />;
  if (name === 'Dev.to') return <PiDevToLogoFill size={size} />;
  if (name === 'Frontend Mentor') return <SiFrontendmentor size={size} />;
  if (name === 'Codewars') return <SiCodewars size={size} />;
  if (name === 'Gitlab') return <SiGitlab size={size} />;
  if (name === 'Hashnode') return <SiHashnode size={size} />;
  if (name === 'Twitter') return <IoLogoTwitter size={size} />;
  if (name === 'LinkedIn') return <FaLinkedin size={size} />;
  if (name === 'YouTube') return <FaYoutube size={size} />;
  if (name === 'Facebook') return <FaFacebook size={size} />;
  if (name === 'Twitch') return <FaTwitch size={size} />;
  if (name === 'Codepen') return <FaCodepen size={size} />;
  if (name === 'freeCodeCamp') return <FaFreeCodeCamp size={size} />;
  if (name === 'StackOverflow') return <FaStackOverflow size={size} />;
}
