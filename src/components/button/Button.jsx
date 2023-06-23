
const Button = ({children}) => {
    
  return (
    <div>
        <button className= "py-3 px-2 rounded-xl w-[12rem] text-white bg-black hover:bg-blue-700">
         {children}
        </button>
    </div>
  )
}


export default Button