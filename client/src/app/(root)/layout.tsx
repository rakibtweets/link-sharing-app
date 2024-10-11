import Navbar from '@/components/shared/Navbar';

const LinkPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default LinkPageLayout;
