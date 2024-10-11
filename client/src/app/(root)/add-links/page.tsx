import ProfilePhoneMockup from '@/components/ui/ProfilePhoneMockup';

export default function AddLinks() {
  return (
    <section className="grid grid-cols-2 gap-8 pt-14 tablet:grid-cols-1 tablet:pt-0">
      {/* Profile Phone Mockup */}
      <ProfilePhoneMockup />
      {/* Add Links */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center">
          Add your links and social media
        </h2>
        <p className="text-center text-gray-500 mt-4">
          Add your social media links and give your audience a way to connect
          with you.
        </p>
        <button className="btn-primary mt-8">Add Links</button>
      </div>
    </section>
  );
}
