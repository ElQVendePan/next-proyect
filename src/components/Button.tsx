interface Button {
  type: "button" | "submit";
  text: string;
  mainButton?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
}

const Button: React.FC<Button> = ({ type, text, mainButton = false, onClick = undefined, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${mainButton ? 'bg-sky-400 font-bold text-white' : 'bg-zinc-600'
        } px-8 p-2 rounded-full hover:bg-sky-600 duration-200 disabled:opacity-25 disabled:bg-zinc-600 disabled:cursor-not-allowed`}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
