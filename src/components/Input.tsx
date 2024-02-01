interface Input {
  label: string,
  placeholder?: string,
  type?: string,
  name: string,
  value?: string | number,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const Input: React.FC<Input> = ({ label, placeholder = label, name, type, value, onChange, required = false }) => {
  return (
    <label>
      <p className="text-zinc-300 text-sm mb-2">{label}</p>
      <input
        className="bg-opacity-50 bg-neutral-700 text-neutral-100 p-3 rounded-xl w-full outline-none border-[1.5px] border-neutral-600"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  )
}

export default Input