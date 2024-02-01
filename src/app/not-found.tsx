import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-3/5 mx-auto text-center h-screen grid items-center'>
        <div className='w-full'>
            <img src="/404.png" className='w-1/3 inline-block' alt="404" />
            <h1 className='font-extrabold text-2xl'>404 - Página no encontrada</h1>
            <p className='text-sm mt-3 text-zinc-400'>Lo sentimos, la página que estás buscando no existe.</p>
        </div>
    </div>
  )
}