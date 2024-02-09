
const Task = ({ task }) => {
    const { taskName } = task;
    console.log(taskName)
    return (
        <div className="" >
            <div>
                <h2 className="text-red-500 bg-green-500 h-[0.5rem] bg-opacity-15 rounded-sm w-[15rem]">asdsdfsadf{taskName}</h2>
            </div>
        </div>
    );
};

export default Task;