export default function Home() {
  return (
    <>
      <h1 className="flex justify-center p-1">Project 4: Shopping List</h1>
      <div className="flex justify-center">
        <div className="mt-10 bg-white flex justify-center w-25rem border-2 border-black border-dashed">
          <div className="flex-row">
            <h2 className="p-4 pl-9">Items To Buy</h2>
            <div className="flex pb-3">
              <input
                type="text"
                placeholder="Add a new item"
                className="border placeholder-gray-500 border-gray-500 
                           mb-5 h-5 w-44 pl-1 text-custom-sm rounded-sm"
              />
              <button className="border border-gray-700 h-5 w-11 bg-buttonColor rounded-sm">
                <p className="flex justify-center items-center text-custom-sm">
                  Add
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
