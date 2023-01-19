export enum ButtonTypes  {
  PRIMARY = 'primary',
  WARNING = 'warning',
  DANGER = 'danger',
  NEUTRAL = 'neutral'
}


export interface ButtonProps {
  text: string;
  type?: ButtonTypes
}

const Button = ({text, type = ButtonTypes.PRIMARY}: ButtonProps) => {

  const typesStyles = {
    [ButtonTypes.PRIMARY]: 'text-sky-600 border-sky-600 hover:text-white hover:bg-sky-600',
    [ButtonTypes.WARNING]: 'text-yellow-300 border-yellow-300 hover:text-white hover:bg-yellow-300',
    [ButtonTypes.DANGER]: 'text-rose-600 border-rose-600 hover:text-white hover:bg-rose-600',
    [ButtonTypes.NEUTRAL]: 'text-zinc-400 border-zinc-400 hover:text-white hover:bg-zinc-400',
  }

  return <button className={`border-solid border-2 p-2 rounded transition-all ${typesStyles[type]}`}>{text}</button>;
};

export default Button;
