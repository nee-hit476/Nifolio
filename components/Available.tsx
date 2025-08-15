import { GoDotFill } from "react-icons/go";

const Available = ({ text }: { text: string }) => {
  return (
    <div className="select-none font-medium text-xs w-fit border px-2 py-0.5 rounded-md flex items-center gap-1 border-green-400 text-green-400">
      <span className="animate-pulse">
        <GoDotFill />
      </span>
      {text}
    </div>
  );
};

export default Available;
