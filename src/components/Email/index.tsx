import { FC, useState } from 'react';
import Typography from '../Typography/Typography';
import styled from 'styled-components';
import theme from '@app/styles/theme';
import css from 'styled-jsx/css';
import { slowTransition } from '@app/styles/mixins';

const EmailText = styled(Typography)<{ $copied: boolean }>`
  position: relative;
  font-weight: 500;
  ${slowTransition};
  &::after {
    content: '${({ $copied }) => ($copied ? 'Copied!' : 'Click to copy')}';
    position: absolute;
    bottom: -300%;
    left: 28%;
    display: block;
    opacity: 0;
    font-weight: 500;
    width: 104px;
    height: max-content;
    border-radius: 4px;
    padding: 4px 12px;
    border: 1px solid ${theme.colors.fg.inactive};
    color: ${theme.colors.fg.inactive};
    ${slowTransition};
  }
  &:hover {
    color: ${theme.colors.accent.green};
    transform: scale(1.1);
    &::after {
      opacity: 1;
      bottom: -200%;
    }
  }
`;

type Props = {
  fontSize?: string;
};

const Email: FC<Props> = ({ fontSize }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const copy = (text: string) => {
    if (!navigator) {
      return;
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <EmailText
      textalign="center"
      fontSize={fontSize ?? '12px'}
      style={{ marginTop: '-10px' }}
      as="button"
      onClick={() => copy('sophia.auer@gmail.com')}
      $copied={copied}
    >
      sophia.auer@gmail.com
    </EmailText>
  );
};

export default Email;
