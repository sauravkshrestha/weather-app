import sunny from "../../../../public/sunny.svg";

const ForcastCard: React.FunctionComponent<{ timeStamp: string }> = ({ timeStamp }) => {
  return (
    <div className="shrink-0 w-1/3 p-4">
      <p className="text-center mb-4 text-xl font-semibold">{timeStamp}</p>
      <div className="flex justify-center mb-4">
        <img src={sunny.src} alt="SUNNY" />
      </div>

      <p className="text-black text-center text-2xl font-semibold"><span>25&deg;</span></p>
    </div>
  );
}

export default ForcastCard;