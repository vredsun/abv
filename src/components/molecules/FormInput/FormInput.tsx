import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

const FormInputContainer = styled.div`
    margin-bottom: 8px;
    gap: 4px;
`

type PropsT = {
    label: string;
    value: string | undefined;
    onChange: (value: string) => void;
}

const FormInput: React.FC<PropsT> = ({ label, value, onChange }) => {
    return (
        <FormInputContainer>
            <Label>
                {label}
                <Input id={label} type="number" value={value} onChange={onChange}/>
            </Label>
        </FormInputContainer>
    )
}

export default FormInput;
