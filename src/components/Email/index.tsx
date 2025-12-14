import { FC, useState } from 'react';
import Typography from '../Typography/Typography';
import styled from 'styled-components';
import { slowTransition } from '@app/styles/mixins';
import copy from 'copy-to-clipboard';

const EmailText = styled(Typography)<{ $copied: boolean }>`
  position: relative;
  font-weight: 500;
  width: max-content;
  margin: 0 auto;
  text-decoration: none;
  cursor: pointer;
  ${slowTransition};
  &::after {
    content: '${({ $copied }) => ($copied ? 'Copied!' : 'Click to copy')}';
    position: absolute;
    bottom: -40px;
    left: calc(50% - 50px);
    display: block;
    opacity: 0;
    font-weight: 500;
    font-size: 10px;
    width: 95px;
    height: max-content;
    border-radius: 4px;
    padding: 2px 6px;
    border: 1px solid ${({ theme }) => theme.colors.fg.defaultBlur};
    color: ${({ theme }) => theme.colors.fg.defaultBlur};
    ${slowTransition};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.accent.green};
    transform: scale(1.1);
    &::after {
      opacity: 1;
      bottom: -28px;
    }
  }
`;

type Props = {
  fontSize?: string;
};

const Email: FC<Props> = ({ fontSize }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const copyEmail = (text: string) => {
    copy(text);
    setCopied(true);
  };

  return (
    <EmailText
      $textalign="center"
      fontSize={fontSize ?? '12px'}
      as="a"
      onClick={() => copyEmail('fio2auer5@gmail.com')}
      $copied={copied}
      onMouseLeave={() => setCopied(false)}
      aria-label="Copy email address"
    >
      fio2auer5@gmail.com
    </EmailText>
  );
};

export default Email;
