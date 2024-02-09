import { useEffect, useState } from 'react';
import Tasks from './Tasks';
const Content = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [taskType, setTaskType] = useState(null)
    const [inputText, setInputText] = useState('');
    const [allTask, setAllTask] = useState([])
    const [test, setTest] = useState('')
    const [editTask, setEditTask] = useState('')
    const makeVisibleInputField = (column) => {
        setIsClicked(true)
        setTaskType(column)
        setInputText('')
    }

    const handleChange = (event) => {
        setInputText(event.target.value);
    };
    const handleAddTask = () => {
        const newTask = {
            taskName: inputText,
            status: taskType,
            priority: ''
        };

        const updatedTasks = [...allTask, newTask];
        setAllTask(updatedTasks);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleInlineEditing = (taskIndexNo) => {
        setTest(taskIndexNo)
    }

    const handleEdit = (newTaskName) => {
        setEditTask(newTaskName)
    };

    const handleOnClickUpdate = () => {
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setAllTask(existingTasks);
        existingTasks[test].taskName = editTask;

        localStorage.setItem('tasks', JSON.stringify(existingTasks));

        setTest(null)
    }

    const handlePriority = (priority) => {
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setAllTask(existingTasks);
        existingTasks[test].priority = priority;

        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        console.log(test)
        setTest(null)
    }

    const handleTaskStatus = (status, index) => {
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setAllTask(existingTasks);
        existingTasks[index].status = status;

        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        console.log(index)
    }

    const handleDeleteTask = (index) => {
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setAllTask(existingTasks)
            existingTasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(existingTasks));
        
    };



    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setAllTask(storedTasks);
    }, []);
    return (
        <div className="flex gap-2 font-serif ">
            <div className=' bg-opacity-10 p-2  '>
                <div className=" bg-gray-500 h-[25rem] overflow-y-auto w-[19rem] overflow-x-hidden  bg-opacity-15">
                    <h2>ToDo</h2>
                    {
                        allTask.map((task, index) => (
                            task.status === 'todo' &&
                            <Tasks key={index}
                                task={task}
                                handleEdit={handleEdit}
                                handleOnClickUpdate={handleOnClickUpdate}
                                test={test === index}
                                index={index}
                                editTask={handleInlineEditing}
                                handlePriority={handlePriority}
                                handleTaskStatus={handleTaskStatus}
                                handleDeleteTask={handleDeleteTask}
                            />
                        ))
                    }

                </div>

                <div className=''>
                    {
                        taskType === 'todo' && isClicked ? (
                            <div className="mt-1 bg-opacity-20 text-xl  w-full flex justify-between items-center">
                                <div>
                                    <input value={inputText} onChange={handleChange} className='p-1 border-2 w-[13.1rem]' placeholder='Enter title for this card' type="text" />
                                </div>
                                <div>
                                    <button onClick={() => handleAddTask()} className='bg-blue-500 bg-opacity-20   p-1'>Add Card</button>
                                </div>
                            </div>
                        ) : (
                            <div className='hover:bg-green-500 bg-green-600 hover:bg-opacity-20 bg-opacity-20 p-2 '>
                                <button onClick={() => makeVisibleInputField('todo')} className=''>+ Add Card</button>
                            </div>
                        )
                    }




                </div>
            </div>
            <div className=' bg-opacity-10 p-2  '>
                <div className=" bg-gray-500 h-[25rem] overflow-y-auto w-[19rem] overflow-x-hidden bg-opacity-15">
                    <h2>ToDo</h2>
                    {
                        allTask.map((task, index) => (
                            task.status === 'ongoing' &&
                            <Tasks key={index}
                                task={task}
                                handleEdit={handleEdit}
                                handleOnClickUpdate={handleOnClickUpdate}
                                test={test === index}
                                index={index}
                                editTask={handleInlineEditing}
                                handlePriority={handlePriority}
                                handleTaskStatus={handleTaskStatus}
                                handleDeleteTask={handleDeleteTask}
                            />
                        ))
                    }

                </div>

                <div className=''>
                    {
                        taskType === 'ongoing' && isClicked ? (
                            <div className="mt-1 bg-opacity-20 text-xl  w-full flex justify-between items-center">
                                <div>
                                    <input value={inputText} onChange={handleChange} className='p-1 border-2 w-[13.1rem]' placeholder='Enter title for this card' type="text" />
                                </div>
                                <div>
                                    <button onClick={() => handleAddTask()} className='bg-blue-500 bg-opacity-20   p-1'>Add Card</button>
                                </div>
                            </div>
                        ) : (
                            <div className='hover:bg-green-500 bg-green-600 hover:bg-opacity-20 bg-opacity-20 p-2 '>
                                <button onClick={() => makeVisibleInputField('ongoing')} className=''>+ Add Card</button>
                            </div>
                        )
                    }




                </div>
            </div>
            <div className=' bg-opacity-10 p-2  '>
                <div className=" bg-gray-500 h-[25rem] overflow-y-auto w-[19rem] overflow-x-hidden bg-opacity-15">
                    <h2>ToDo</h2>
                    {
                        allTask.map((task, index) => (
                            task.status === 'complete' &&
                            <Tasks key={index}
                                task={task}
                                handleEdit={handleEdit}
                                handleOnClickUpdate={handleOnClickUpdate}
                                test={test === index}
                                index={index}
                                editTask={handleInlineEditing}
                                handlePriority={handlePriority}
                                handleTaskStatus={handleTaskStatus}
                                handleDeleteTask={handleDeleteTask}
                            />
                        ))
                    }

                </div>

                <div className=''>
                    {
                        taskType === 'complete' && isClicked ? (
                            <div className=" mt-1 bg-opacity-20 text-xl  w-full flex justify-between items-center">
                                <div>
                                    <input value={inputText} onChange={handleChange} className='p-1 border-2 w-[13.1rem]' placeholder='Enter title for this card' type="text" />
                                </div>
                                <div>
                                    <button onClick={() => handleAddTask()} className='hover:bg-green-500 bg-green-500 hover:bg-opacity-20 bg-opacity-20   p-1'>Add Card</button>
                                </div>
                            </div>
                        ) : (
                            <div className='hover:bg-green-500 bg-green-600 hover:bg-opacity-20 bg-opacity-20 p-2 '>
                                <button onClick={() => makeVisibleInputField('complete')} className=''>+ Add Card</button>
                            </div>
                        )
                    }




                </div>
            </div>















            {/* <div className='bg-red-500 bg-opacity-10 p-2 '>
                <div className="overflow-y-auto h-[29rem]  overflow-hidden ">
                    <h2>Ongoing</h2>
                    {
                        allTask.map((task, index) => (
                            task.status === 'ongoing' &&
                            <Tasks key={index}
                                task={task}
                                handleEdit={handleEdit}
                                handleOnClickUpdate={handleOnClickUpdate}
                                test={test === index}
                                index={index}
                                editTask={handleInlineEditing}
                                handlePriority={handlePriority}
                                handleTaskStatus={handleTaskStatus}
                            />
                        ))
                    }

                </div>

                <div className=''>
                    {
                        taskType === 'ongoing' && isClicked ? (
                            <div className=" bg-opacity-20 text-xl  w-full flex justify-between items-center">
                                <div>
                                    <input value={inputText} onChange={handleChange} className='p-1 border-0 w-[16rem]' placeholder='Enter title for this card' type="text" />
                                </div>
                                <div>
                                    <button onClick={() => handleAddTask()} className='bg-blue-500 bg-opacity-20   p-1'>Add Card</button>
                                </div>
                            </div>
                        ) : (
                            <div className='text-center border border-blue-200 p-2 hover:bg-blue-200 '>
                                <button onClick={() => makeVisibleInputField('ongoing')} className=''>+ Add Card</button>
                            </div>
                        )
                    }




                </div>
            </div>
            <div className='bg-red-500 bg-opacity-10 p-2 '>
                <div className="overflow-y-auto h-[29rem]  ">
                    <h2>Completed</h2>
                    {
                        allTask.map((task, index) => (
                            task.status === 'complete' &&
                            <Tasks key={index}
                                task={task}
                                handleEdit={handleEdit}
                                handleOnClickUpdate={handleOnClickUpdate}
                                test={test === index}
                                index={index}
                                editTask={handleInlineEditing}
                                handlePriority={handlePriority}
                                handleTaskStatus={handleTaskStatus}
                            />
                        ))
                    }

                </div>

                <div className=''>
                    {
                        taskType === 'complete' && isClicked ? (
                            <div className=" bg-opacity-20 text-xl  w-full flex justify-between items-center">
                                <div>
                                    <input value={inputText} onChange={handleChange} className='p-1 border-0 w-[16rem]' placeholder='Enter title for this card' type="text" />
                                </div>
                                <div>
                                    <button onClick={() => handleAddTask()} className='bg-blue-500 bg-opacity-20   p-1'>Add Card</button>
                                </div>
                            </div>
                        ) : (
                            <div className='text-center border border-blue-200 p-2 hover:bg-blue-200 '>
                                <button onClick={() => makeVisibleInputField('complete')} className=''>+ Add Card</button>
                            </div>
                        )
                    }




                </div>
            </div> */}


        </div>
    );
};

export default Content;