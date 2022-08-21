import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteTask } from '../../features/tasks/taskSlice';
import { Task } from '../../interfaces/Taks';

export const TaksList = () => {

  const taskList = useSelector((state:any) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id:string) => {
    dispatch(deleteTask(id))
  }


  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1>Tasks { taskList.length }</h1>
        <Link
          className='bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm'
          to='/create-task'
        >
          Create task
        </Link>
      </header>

      <div className='grid grid-cols-3 gap-3'>
        {
          taskList.map((task:Task) => (
            <div
              key={task.id}
              className='bg-neutral-600 p-4 rounded-md '
            >
              <header className='flex justify-between'>
                <h3 className="text-lg font-bold">
                  {task.title}
                </h3>
                <div className='flex gap-x-2'>
                  <Link
                    className='bg-zinc-600 px-2 py-1 text-xs rounded-md self-center'
                    to={`/edit-task/${task.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className='bg-red-500 px-2 py-1 text-xs rounded-md'
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </header>
                <p className='text-left'>{task.description}</p>
                {/* <p className="text-xs text-slate-400">{task.id}</p> */}
            </div>
          ))
        }
      </div>
    </div>
  )
}
