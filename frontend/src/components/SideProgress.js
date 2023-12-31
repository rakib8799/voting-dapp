import SideButton from "./SideButton";

function SideProgress(props) {
  return (
    <div className=" max-h-full  w-2/8 flex  mt-28 ">
      <div className=" h-80  font-serif mt-8">
        <SideButton content="Add Candidates" color="bg-blue-300" />
        <div className="h-20 w-0.5 bg-black ml-64 shadow-lg shadow-black"></div>
        <SideButton content="Start Election" color={props.color} />
        <div className="h-20 w-0.5 bg-black ml-64 shadow-md shadow-black"></div>
        <SideButton content="Confirm Election" color="bg-gray-400" />
      </div>
      <div className="h-96 w-1 bg-gray-700 ml-8 rounded-lg mt-6"></div>
    </div>
  );
}

export default SideProgress;
