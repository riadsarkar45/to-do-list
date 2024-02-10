import { FaPen } from "react-icons/fa"; import { FaMinus } from "react-icons/fa";
const Tasks = ({ task, index, editTask, test, handleEdit, handleOnClickUpdate, handlePriority, handleTaskStatus, handleDeleteTask }) => {
    const { taskName, priority, status } = task;

    return (
        <div>
            <div className={`{ ${test ? 'bg-red-500' : 'bg-green-500'} ${status === 'complete' ? 'bg-green-500' : status === 'ongoing' ? 'bg-yellow-500' : status === 'todo' ? 'bg-red-500' : null} mt-3 bg-opacity-10 text-2xl p-2 rounded-md}`}>
                <div>
                    <div className=''>
                        <div className='flex justify-between items-center mb-1'>
                            <div><h2 className='cursor-pointer text-sm' onClick={() => editTask(index)}><FaPen /></h2></div>
                            <div className='flex gap-1'>
                                {
                                    status === 'complete' ? (
                                        <>

                                            <button onClick={() => handleTaskStatus('ongoing', index)} className='border border-yellow-600 hover:bg-yellow-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Ongoing</button>
                                            <button onClick={() => handleTaskStatus('todo', index)} className='border border-red-600 hover:bg-red-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Todo</button>
                                            <button onClick={() => handleDeleteTask(index)} className='border border-red-600 hover:bg-red-500 hover:bg-opacity-40 text-sm p-1 rounded-md'>Delete</button>
                                        </>
                                    ) : status === 'ongoing' ? (
                                        <>
                                            <button onClick={() => handleTaskStatus('todo', index)} className='border border-red-600 hover:bg-red-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Todo</button>
                                            <button onClick={() => handleTaskStatus('complete', index)} className='border border-green-300 hover:bg-green-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Complete</button>
                                            <button onClick={() => handleDeleteTask(index)} className='border border-red-600 hover:bg-red-500 hover:bg-opacity-40 text-sm p-1 rounded-md'>Delete</button>
                                        </>
                                    ) : status === 'todo' ? (
                                        <>
                                            <button onClick={() => handleTaskStatus('todo', index)} className='border border-red-600 hover:bg-red-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Todo</button>
                                            <button onClick={() => handleTaskStatus('complete', index)} className='border border-green-300 hover:bg-green-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Complete</button>
                                            <button onClick={() => handleDeleteTask(index)} className='border border-red-600 hover:bg-red-500 hover:bg-opacity-40 text-sm p-1 rounded-md'>Delete</button>

                                        </>
                                    ) : null
                                }
                                {/* <button onClick={() => handleTaskStatus('complete', index)} className='border border-green-300 hover:bg-green-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Complete</button>
                                <button onClick={() => handleTaskStatus('ongoing', index)} className='border border-yellow-600 hover:bg-yellow-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Ongoing</button>
                                <button onClick={() => handleTaskStatus('todo', index)} className='border border-red-600 hover:bg-red-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Todo</button>
                                <button onClick={() => handleDeleteTask(index)} className='border border-red-600 hover:bg-red-500 hover:bg-opacity-40 text-sm p-1 rounded-md'>Delete</button> */}
                            </div>
                        </div>
                        <div className='border border-white opacity-30'></div>
                        <p className='lg:w-[20rem] p-3'>{taskName}</p>
                    </div>
                    {
                        test ? (
                            <>
                                <input onChange={(e) => handleEdit(e.target.value)} className='p-2 w-full border-2 border-gray-500' type="text" placeholder={taskName} />
                                <div className='mb-1 mt-1'>
                                    <h2 className="text-sm">Priority</h2>
                                    <div className="border-1 border-gray-500"></div>
                                    <div className='mb-2'>
                                        <button onClick={() => handlePriority('low')} className='border border-green-300 hover:bg-green-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Low</button>
                                        <button onClick={() => handlePriority('medium')} className='border border-yellow-600 hover:bg-yellow-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>Medium</button>
                                        <button onClick={() => handlePriority('high')} className='border border-red-600 hover:bg-red-500 hover:bg-opacity-20 text-sm p-1 rounded-md'>High</button>
                                    </div>
                                </div>
                            </>

                        ) : null
                    }
                </div>
                <div>

                    {
                        test ? (
                            <>
                                <h2 className='cursor-pointer bg-green-300 p-2 rounded-sm text-center' onClick={() => handleOnClickUpdate()}>Save</h2>
                            </>
                        ) : (
                            <>
                                {
                                    priority === 'low' ? (
                                        <span className=' text-green-500 text-4xl'><FaMinus /></span>
                                    ) : priority === 'medium' ? (
                                        <span className='text-yellow-500 text-4xl'><FaMinus /></span>
                                    ) : priority === 'high' ? (
                                        <span className='text-red-500 text-4xl'><FaMinus /></span>
                                    ) : null

                                }

                            </>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Tasks;