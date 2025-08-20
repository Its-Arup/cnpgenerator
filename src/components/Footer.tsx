import { Link } from "react-router"

const Footer = () => {
  return (
    <div className='w-full bg-[#202942] h-20'>
        <div className="mx-auto max-w-[1000px] w-full flex items-center text-gray-400 h-full">
            <p>© 2025 CNP Generator - Site realizat de <Link className="text-[#0d6efd]" to={"/"}>cnpgenerator.vercel.app</Link></p>
        </div>
    </div>
  )
}

export default Footer
