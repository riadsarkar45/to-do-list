import EditIcon from '@mui/icons-material/Edit';

const Tasks = ({ task, index, editTask, test }) => {
    const { taskName } = task;
    if (test) {
        console.log('match')
    }
    return (
        <div>
            <div className={`{bg-gray-500 bg-opacity-20 ${test ? 'bg-red-500' : ''} mt-2 text-2xl p-2 rounded-md flex justify-between items-center}`}>
                <div>
                    {
                        test ? (
                            <input className='p-2' type="text" value={taskName} />
                        ) : (
                            <p>{taskName} </p>
                        )
                    }
                </div>
                <div>
                    {
                        test ? (
                            <h2 className='cursor-pointer bg-green-300 p-2 rounded-sm' onClick={() => editTask(index)}>Save</h2>
                        ) : (
                            <h2 className='cursor-pointer' onClick={() => editTask(index)}>< EditIcon /></h2>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Tasks;