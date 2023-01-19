interface TextInputProps {
  value?: string;
}

const TextInput = ({value}: TextInputProps) => {
  return <input type="text" value={value} />
};

export default TextInput;
