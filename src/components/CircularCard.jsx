import { FaArrowRight } from "react-icons/fa";

const CircularCard = ({ circular }) => {
  return (
    <div className="border border-black rounded-3xl w-[400px] h-[560px] py-4 bg-gradient-to-b from-[#ECF9FF] to-transparent">
      <div className="border-b border-black p-4">
        <h2 className="text-xl font-bold">{circular.heading}</h2>
      </div>
      <ul className="p-8 font-semibold text-sm flex flex-col gap-6">
        {circular.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
     <div className="px-8">
          {circular.link && (
            <span className="flex items-center font-bold">
              <FaArrowRight /> {circular.link}
            </span>
          )}
     </div>
    </div>
  );
};

export default CircularCard;
