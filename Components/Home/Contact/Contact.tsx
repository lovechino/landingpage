import React from 'react'

type Props = {
  open : boolean,
  setClose : ()=>void
}

const Contact = ({open,setClose} : Props) => {
  return (
    <div className={` fixed inset-0 z-10 overflow-hidden flex justify-center items-center transition-all ${open ?" visible bg-black/20" : "invisible"}`}>
      <div className={`bg-white rounded-xl shadow  transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        <button className=' absolute top-3 right-3 text-xl' onClick={setClose}>X</button>
        <form className='max-w-xl mx-auto bg-white p-20 rounded-xl shadow space-y-4'>
          <h2 className='text-2xl font-bold'>Contact with me</h2>
          <div>
            <label className=' block font-medium'>Name</label>
            <input
            type='text'
            name='name'
            required 
            className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-400'
            />
          </div>
          <div>
            <label className=' block font-medium'>Email</label>
            <input
            type='text'
            
            name='email'
            required 
            className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-400'
            />
          </div>
          <div>
            <label className=' block font-medium'>Message</label>
            <textarea
            name='message'
            rows={4}
            className='w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-400' 
            />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact