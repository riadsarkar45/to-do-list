import { useEffect, useState } from 'react';
import moment from 'moment';

const AllToDoList = () => {
    const [tasks, setTasks] = useState([])
    const [isSearched, setIsSearched] = useState(false)
    const [searched, setSearched] = useState([])
    const handleDeleteTask = (index) => {
        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(existingTasks)
        existingTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(existingTasks));

    };

    const handleSearch = (taskName) => {
        const search = tasks.filter(task => task.taskName.toLowerCase().includes(taskName.toLowerCase())); console.log(search)
        setSearched(search)
        setIsSearched(true)
    }

    const handlePriority = (priority) => {
        if (priority === "Sort Priority") {
            setIsSearched(false)
        }
        const search = tasks.filter(task => task.priority.toLowerCase().includes(priority.toLowerCase())); console.log(search)
        setSearched(search)
        setIsSearched(true)
    }
    useEffect(() => {
        try {
            const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            setTasks(storedTasks);
        } catch (error) {
            console.error('Error parsing tasks from localStorage:', error);
        }
    }, []);

    return (
        <div>
            <div className='lg:flex md:flex'>
   
                <div className='bg-green-500 p-2 bg-opacity-35 mb-3'>
                    <input onChange={(e) => handleSearch(e.target.value)} className='lg:w-[30rem] md:w-[30rem] w-full border-1 p-3' type="text" placeholder='Search' />
                </div>
                <div className='bg-green-500 p-2 bg-opacity-35 mb-3'>
                    {/* <input className='w-[30rem] border-1 p-2' type="text" placeholder='Search' /> */}
                    <select onChange={(e) => handlePriority(e.target.value)} className='lg:w-[30rem] md:w-[30rem] w-full border-1 p-3' name="" id="">
                        <option>Sort Priority</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
            </div>
            <div className='lg:flex lg:flex-wrap md:flex gap-2 m-auto font-serif'>
                {
                    isSearched ? (
                        searched?.map((task, index) => (
                            <div key={index} className='lg:flex bg-g md:flex bg-green-600 p-2 rounded-md bg-opacity-10 lg:w-1/6 w-f md:w-1/6 w-full'>
                                <div className='w-full'>
                                    <p>{task.taskName}</p>
                                    <div className=''>{moment(task.taskAddingTime).fromNow()}</div>
                                    <div className='flex text-right'>
                                        <button onClick={() => handleDeleteTask(index)} type="button" className="bg-red-500 bg-opacity-35 border-2 p-1 rounded-md text-white">Delete</button>
                                    </div>
                                </div>
                            </div>

                        ))
                    ) : (
                        tasks?.map((task, index) => (
                            <div key={index} className='lg:flex bg-g md:flex bg-green-600 p-2 rounded-md bg-opacity-10 lg:w-1/6 w-f md:w-1/6 w-full'>
                                <div className='w-full'>
                                    <p>{task.taskName}</p>
                                    <div className=''>{moment(task.taskAddingTime).fromNow()}</div>
                                    <div className='flex text-right'>
                                        <button onClick={() => handleDeleteTask(index)} type="button" className="bg-red-500 bg-opacity-35 border-2 p-1 rounded-md text-white">Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>




    );
};

export default AllToDoList;