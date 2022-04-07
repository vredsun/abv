import styled from 'styled-components';
import { FaRegCopy } from 'react-icons/fa'
import { isUndefined } from 'lodash';

const CopyToClipboardButton = styled.div`
    padding: 8px;
    font-size: 22px;
    border: none;
    border-left: 2px solid black;
`

function fallbackCopyTextToClipboard(text: string, showToastWithGoodCopy: () => void): void {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
      showToastWithGoodCopy()
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
}

type PropsT = {
  value: number | undefined;
  showToastWithGoodCopy: () => void;
}

const CopyToClipboard: React.FC<PropsT> = ({ value, showToastWithGoodCopy }) => {
    const handleCopy = (): void => {
        if (isUndefined(value)) {
          return;
        }

        const text = value?.toString() ?? '';

        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text, showToastWithGoodCopy);
            return;
          }
          navigator.clipboard.writeText(text).then(function() {
            showToastWithGoodCopy()
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
      }

    return (
        <CopyToClipboardButton onClick={handleCopy}><FaRegCopy /></CopyToClipboardButton>
    )
}

export default CopyToClipboard;
