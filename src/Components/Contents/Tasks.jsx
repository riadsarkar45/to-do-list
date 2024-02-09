import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

const Tasks = ({ task, index, editTask, test, handleEdit, handleOnClickUpdate }) => {
    const { taskName } = task;

    return (
        <div>
            <div className={`{bg-gray-500 bg-opacity-20 ${test ? 'bg-red-500' : 'bg-gray-500'} mt-2 text-2xl p-2 rounded-md flex justify-between items-center}`}>
                <div>
                    {
                        test ? (
                            <input onChange={(e) => handleEdit(e.target.value)} className='p-2' type="text" placeholder={taskName} />

                        ) : (
                            <p>{taskName} </p>
                        )
                    }
                </div>
                <div>
                    {
                        test ? (
                            <h2 className='cursor-pointer bg-green-300 p-2 rounded-sm' onClick={() => handleOnClickUpdate()}>Save</h2>
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