import {
  getAllBriefings,
  getAllTenders,
  getTotalBriefings,
  getTotalTenders,
} from '@/actions';

const Home = async () => {
  const [allTenders, allBriefings, totalTenders, totalBriefings] =
    await Promise.all([
      getAllTenders(),
      getAllBriefings(),
      getTotalTenders(),
      getTotalBriefings(),
    ]);

  return (
    <div>
      <div>
        <h2>Tenders: {totalTenders}</h2>
        <pre>
          <code>{JSON.stringify(allTenders, null, 2)}</code>
        </pre>
      </div>

      <div>
        <h2>Briefings {totalBriefings} </h2>
        <pre>
          <code>{JSON.stringify(allBriefings, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};
export default Home;
