import { useMemo, useRef, useState } from 'react';
import {
  type ButtonProps,
  type GridProps,
  IconButton,
  type SystemStyleObject,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import { CheckCircleIcon, CopyIcon } from '@chakra-ui/icons';

const CopyButton = ({
  iconSize = '16px',
  variant = 'ghost',
  value,
  children,
  type = 'button',
  sx,
  iconSx,
  ...props
}: ButtonProps & {
  iconSize?: number | string;
  iconSx?: SystemStyleObject & GridProps;
  type?: 'button' | 'submit' | 'reset';
  value: string;
}) => {
  const toast = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  async function copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(undefined, () => {
      let textarea;
      let result;

      try {
        textarea = document.createElement('textarea');
        textarea.setAttribute('readonly', 'true');
        textarea.setAttribute('contenteditable', 'true');
        textarea.style.position = 'fixed'; // prevent scroll from jumping to the bottom when focus is set.
        textarea.value = text;

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        const range = document.createRange();
        range.selectNodeContents(textarea);

        const sel = window.getSelection();
        if (sel) {
          sel.removeAllRanges();
          sel.addRange(range);
        }

        textarea.setSelectionRange(0, textarea.value.length);
        result = document.execCommand('copy');
      } catch (err) {
        result = null;
      } finally {
        if (textarea) document.body.removeChild(textarea);
      }
      if (!result) {
        throw Error(`Can't copy`);
      }
    });
  }

  const copyIcon = useMemo(
    () => (isCopied ? <CheckCircleIcon fontSize={iconSize} /> : <CopyIcon fontSize={iconSize} />),
    [isCopied, iconSize]
  );
  // onClick handler function for the copy button
  const handleCopyClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(value)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        if (ref.current) {
          ref.current.blur();
        }
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch(() => {
        toast({
          title: 'Can&apos;t copy',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Tooltip placement="top" label="Press to copy" hasArrow>
        <IconButton
          aria-label="copy-paste"
          type={type}
          variant={variant}
          icon={copyIcon}
          color="white"
          onClick={handleCopyClick}
          sx={{ ...iconSx }}
          {...props}
        />
      </Tooltip>
    </>
  );
};

export default CopyButton;
