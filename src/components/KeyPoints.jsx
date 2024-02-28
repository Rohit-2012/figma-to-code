import { keyPoints } from "../utils/keyPoints";
import KeyPointsCard from "./KeyPointsCard";

const KeyPoints = () => {

  return (
    <section className="p-14 flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-8">Steel Authority Of India Limited - A Maharatna</h2>
          <div className="flex gap-4">
              {keyPoints.map(keyPoint => (
                  <KeyPointsCard key={keyPoint.number} number={keyPoint.number} content={keyPoint.content} />
              ))}
          </div>
    </section>
  );
};

export default KeyPoints;
