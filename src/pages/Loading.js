import React from 'react'

function Loading() {
  return (
    <div className='h-[100vh] w-full grid place-content-center bg-myChat-dark space-y-6 justify-items-center'>
        <div
  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-white border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>
      <h1 className=' text-white text-lg'>Your Chat Is Loading....</h1>
    </div>
  )
}

export default Loading
