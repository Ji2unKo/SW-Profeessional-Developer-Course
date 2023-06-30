import style from "./Button.module.css"

export default function Button({name, primary,secondary}){
  // 3항연산자
  const isPrimary = primary ? style.primary : ''
  const isSecondary = secondary ? style.secondary :''
  // if(primary){
  //   return style.primary
  // } else {
  //   return ''
  // }
  return (
   <button className={[style.button, isPrimary, isSecondary].join(" ")}>{name}</button>
  )
}
