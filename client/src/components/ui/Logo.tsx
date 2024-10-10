import { Link } from 'lucide-react';

const Logo = () => {
  const isMobile = window.screen.width <= 768;
  return (
    <div className="flex items-center gap-4 text-[#633cff]">
      <Link size={isMobile ? '1.6rem' : '2.5rem'} />
      <h1 className="text-5xl  font-bold">devlinks</h1>
    </div>
  );
};
export default Logo;
