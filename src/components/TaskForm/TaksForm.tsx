import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTask, editTask } from '../../features/tasks/taskSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Task } from '../../interfaces/Taks';

export const TaksForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const tasks = useSelector((state:any) => state.tasks);

  useEffect(() => {
    if (params?.id) {
      setTask(tasks.find((task:Task) => task.id === params.id));
    }
  }, [])


  const handleChange = (e:any) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (params?.id) {
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }));
    }
    navigate('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-zinc-800 max-w-sm p-4 '
    >
      <label htmlFor="title" className='block text-xs font-bold mb-1'>
        Title
        <input
          className='w-full p-2 rounded-md bg-zinc-600 mb-2'
          type="text"
          name='title'
          id='title'
          placeholder='Title'
          onChange={handleChange}
          value={task.title}
        />
      </label>

      <label htmlFor="description" className='block text-xs font-bold mb-2'>
        Description
        <textarea
          className='w-full p-2 rounded-md bg-zinc-600 mb-2'
          name="description"
          id='description'
          placeholder='Description'
          onChange={handleChange}
          value={task.description}
        ></textarea>
      </label>

      <button className='bg-indigo-600 px-2 py-1'>
        Save
      </button>
    </form>
  )
}
