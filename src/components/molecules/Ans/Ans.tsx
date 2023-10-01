import isUndefined from 'lodash/isUndefined';
import styled from 'styled-components';
import CopyToClipboard from '../../atoms/CopyToClipboard/CopyToClipboard';
import Label from '../../atoms/Label/Label';
import LabelText from '../../atoms/LabelText/LabelText';
import Response from '../../atoms/Response/Response';

const AnsContainer = styled.div<{ hasValue: boolean }>`
    margin-top: 4px;
    display: flex;
    flex: 1;
    border: 2px solid grey;
    background-color: lightgrey;
    border-radius: 8px;
    width: 100%;

    overflow: hidden;
`

type PropsT = {
    value: number | undefined;
    addToast: (text: string) => void;
}

const Ans: React.FC<PropsT> = ({ value, addToast }) => {
    const showToastWithGoodCopy = (): void => {
      addToast(`Text copied: ${value ?? 0}`)
    }

    return (
        <Label>
            <LabelText>visibility</LabelText>
            <AnsContainer hasValue={!isUndefined(value)}>
                <Response>{value}</Response>
                <CopyToClipboard value={value} showToastWithGoodCopy={showToastWithGoodCopy} />
            </AnsContainer>
        </Label>
        
    )
}

export default Ans;
