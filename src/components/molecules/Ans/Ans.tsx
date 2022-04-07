import isUndefined from 'lodash/isUndefined';
import styled from 'styled-components';
import CopyToClipboard from '../../atoms/CopyToClipboard/CopyToClipboard';
import Response from '../../atoms/Response/Response';

const AnsContainer = styled.div<{ hasValue: boolean }>`
    margin-top: 24px;
    display: flex;
    flex: 1;
    border: ${({ hasValue }) => hasValue ? '2px solid green' : '2px solid red'};
    border-radius: 4px;
`

type PropsT = {
    value: number | undefined;
    addToast: (text: string) => void;
}

const Ans: React.FC<PropsT> = ({ value, addToast }) => {
    const showToastWithGoodCopy = (): void => {
      addToast('Text copied')
    }

    return (
        <AnsContainer hasValue={!isUndefined(value)}>
            <Response>{value}</Response>
            <CopyToClipboard value={value} showToastWithGoodCopy={showToastWithGoodCopy} />
        </AnsContainer>
    )
}

export default Ans;
