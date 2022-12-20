import { Field, Helper } from "./style"

export const Input = ({ label, name, type, placeholder, errors, register, disabled = false }) => {
    return (
        <Field>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} placeholder={placeholder} {...register} disabled={disabled} />
            {!!errors && <Helper>{errors.message}</Helper>}
        </Field>)
}