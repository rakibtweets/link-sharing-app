import { Link } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-4 text-primary">
      <Link className="mobile:text-[1.6rem] text-[2.5rem]" />
      <h1 className="text-5xl font-bold">devlinks</h1>
    </div>
  );
};
export default Logo;
