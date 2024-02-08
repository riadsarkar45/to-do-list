import { useEffect, useState } from 'react';
import Tasks from './Tasks';
const Content = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [taskType, setTaskType] = useState(null)
    const [inputText, setInputText] = useState('');
    const [allTask, setAllTask] = useState([])
    const [test, setTest] = useState('')
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
            priority: 'none'
        };

        const updatedTasks = [...allTask, newTask];
        setAllTask(updatedTasks);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const editTask = (taskIndexNo) =>{
        setTest(taskIndexNo)
    }

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setAllTask(storedTasks);
    }, []);
    console.log(test)
    return (
        <div className="flex gap-2 font-serif ">
            <div className='bg-red-500 bg-opacity-10 p-2 w-[24rem]'>
                <div className="overflow-y-auto h-[29rem]  rounded-md">
                    <h2>Pending</h2>
                    {
                        allTask.map((task, index) => (
                            task.status === 'Pending' &&
                            <Tasks key={index} task={task} test={test === index} index={index} editTask={editTask}></Tasks>
                        ))
                    }

                </div>

                <div className=''>
                    {
                        taskType === 'Pending' && isClicked ? (
                            <div className=" bg-opacity-20 text-xl rounded-md w-full flex justify-between items-center">
                                <div>
                                    <input value={inputText} onChange={handleChange} className='p-2 border-0 w-[16rem]' placeholder='Enter title for this card' type="text" />
                                </div>
                                <div>
                                    <button onClick={() => handleAddTask()} className='bg-blue-500 bg-opacity-20  rounded-r-md p-2'>Add Card</button>
                                </div>
                            </div>
                        ) : (
                            <div className='text-center border border-blue-200 p-2 hover:bg-blue-200 rounded-md'>
                                <button onClick={() => makeVisibleInputField('Pending')} className=''>+ Add Card</button>
                            </div>
                        )
                    }




                </div>
            </div>
            <div className='bg-red-500 bg-opacity-10 p-2 w-[24rem]'>
                <div className="overflow-y-auto h-[29rem]  rounded-md">
                    <h2>Ongoing</h2>
                    {
                        allTask.map((task, index) => (
                            task.status === 'Ongoing' &&
                            <Tasks key={index} task={task} test={test === index}index={index} editTask={editTask}></Tasks>
                        ))
                    }

                </div>

                <div className=''>
                    {
                        taskType === 'Ongoing' && isClicked ? (
                            <div className=" bg-opacity-20 text-xl rounded-md w-full flex justify-between items-center">
                                <div>
                                    <input value={inputText} onChange={handleChange} className='p-2 border-0 w-[16rem]' placeholder='Enter title for this card' type="text" />
                                </div>
                                <div>
                                    <button onClick={() => handleAddTask()} className='bg-blue-500 bg-opacity-20  rounded-r-md p-2'>Add Card</button>
                                </div>
                            </div>
                        ) : (
                            <div className='text-center border border-blue-200 p-2 hover:bg-blue-200 rounded-md'>
                                <button onClick={() => makeVisibleInputField('Ongoing')} className=''>+ Add Card</button>
                            </div>
                        )
                    }




                </div>
            </div>
            <div className='bg-red-500 bg-opacity-10 p-2 w-[24rem]'>
                <div className="overflow-y-auto h-[29rem]  rounded-md">
                    <h2>Completed</h2>
                    {
                        allTask.map((task, index) => (
                            task.status === 'Completed' &&
                            <Tasks key={index} task={task} test={test === index} index={index} editTask={editTask}></Tasks>
                        ))
                    }

                </div>

                <div className=''>
                    {
                        taskType === 'Completed' && isClicked ? (
                            <div className=" bg-opacity-20 text-xl rounded-md w-full flex justify-between items-center">
                                <div>
                                    <input value={inputText} onChange={handleChange} className='p-2 border-0 w-[16rem]' placeholder='Enter title for this card' type="text" />
                                </div>
                                <div>
                                    <button onClick={() => handleAddTask()} className='bg-blue-500 bg-opacity-20  rounded-r-md p-2'>Add Card</button>
                                </div>
                            </div>
                        ) : (
                            <div className='text-center border border-blue-200 p-2 hover:bg-blue-200 rounded-md'>
                                <button onClick={() => makeVisibleInputField('Completed')} className=''>+ Add Card</button>
                            </div>
                        )
                    }




                </div>
            </div>


        </div>
    );
};

export default Content;