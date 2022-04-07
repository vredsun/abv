import styled from 'styled-components';
import { FaRegTimesCircle } from 'react-icons/fa'
import { isUndefined } from 'lodash';

const Container = styled.div`
    margin-top: 4px;
    flex: 1;
    display: flex;
    position: relative;
`

const InputContainer = styled.input`
    flex: 1;
    padding: 8px;
    font-size: 22px;
    border-radius: 4px;
    border-width: 2px;
`

const IconContainer = styled.div<{ hasValue: boolean }>`
    position: absolute;
    padding: 0 10px;
    right: 0px;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 22px;
    transition: opacity 300ms;
    opacity: ${({ hasValue }) => hasValue ? 1 : 0};
`;

type PropsT = {
    id: string;
    type: string;
    onChange: (value: string) => void;
    value: string | undefined;
};

const Input: React.FC<PropsT> = ({ id, type, value, onChange }) => {
    return (
        <Container>
            <InputContainer id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
            <IconContainer hasValue={value !== ''} onClick={() => onChange('')}>
                <FaRegTimesCircle />
            </IconContainer>
        </Container>
    )
}

export default Input;
