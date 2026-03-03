import { PERSONAL_INFO } from "@/src/lib/personal-info";

const Footer = () => {

  return (
    <div className='text-sm my-4'>
      <div className='text-foreground selection:bg-pink-500 selection:text-white pb-2'>
        Designed & Built by {PERSONAL_INFO.name}
      </div>

      
    </div>
  )
}

export default Footer