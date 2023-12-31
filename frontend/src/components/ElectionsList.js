import { useEffect } from 'react';
import { useElectionsList } from '../custom-hooks/useElectionsList';
import voterpic from '../pics/voterpic.png';
import ElectionList from './ElectionList';
import Loading from './Loading';

function ElectionsList() {
  const { organizersList, displayElections, connectedAccount, isLoading } =
    useElectionsList();
  useEffect(() => {
    displayElections();
  }, [displayElections]);
  return (
    <div className=" w-[89%] ml-10  ">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="  mt-2 ">
            <h1 className="text-4xl font-sans mt-10 ml-12 intro">
              Hello Voter
            </h1>
            <p className="text-1xl font-sans mt-2 ml-12 intro">
              Start Voting in the listed elections that are active
            </p>
          </div>
          {organizersList.map((organizer, key) => {
            if (organizer.organizer !== connectedAccount) {
              return (
                <div className="flex w-full" key={key}>
                  <img
                    src={voterpic}
                    alt="candidatesdemopic"
                    className=" object-fill  h-20 mt-12  ml-8"
                    key={`${key}-img`}
                  />
                  <ElectionList
                    key={key}
                    id={key + 1}
                    organizer={organizer.organizer}
                    started={organizer.started}
                    ended={organizer.ended}
                    networkId={organizer.networkId}
                    default={false}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}

export default ElectionsList;
