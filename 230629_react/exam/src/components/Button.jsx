export default function Button({name, color, size}){
  return (
    <button style={{color:color,fontSize:size}}>
    {name}</button>
  )
}