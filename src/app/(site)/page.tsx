import CreateTender from '@/components/Forms/CreateTender';
import TenderForm from '@/components/Tenders/TenderForm';

const Home = async () => {
  return (
    <div>
      <div className='w-1/2 mx-auto'>
        {/* <TenderForm /> */}
      </div>
      <div className='w-1/2 mx-auto'>
        <CreateTender />
      </div>
    </div>
  );
};
export default Home;
