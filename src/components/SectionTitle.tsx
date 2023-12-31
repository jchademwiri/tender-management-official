const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className='flex items-center gap-2 py-4'>
      <span className='h-1 w-20 rounded-full  bg-primary'></span>
      <h2 className='text-2xl font-medium text-primary'>{title}</h2>
    </div>
  );
};
export default SectionTitle;
