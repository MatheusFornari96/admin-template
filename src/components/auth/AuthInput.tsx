interface AuthInputProps {
  label: string
  valor: any
  required?: boolean
  noRendering?: boolean
  tipo?: 'text' | 'email' | 'password'
  valorMudou: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return props.noRendering ? null : (
    <div>
      <label>{props.label}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={e => props.valorMudou?.(e.target.value)}
        required={props.required}
      />
    </div>
  )
}