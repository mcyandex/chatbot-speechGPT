import React from 'react';
import classNames from 'classnames';

interface AdjustmentsHorizontalProps {
  className?: string;
  strokeWidth?: string;
}

const AdjustmentsHorizontal: React.FC<AdjustmentsHorizontalProps> = ({
  className,
  strokeWidth,
}) => {
  return (
    <svg
      className={classNames('', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth || '2'}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="14" cy="6" r="2" />{' '}
      <line x1="4" y1="6" x2="12" y2="6" /> <line x1="16" y1="6" x2="20" y2="6" />{' '}
      <circle cx="8" cy="12" r="2" /> <line x1="4" y1="12" x2="6" y2="12" />{' '}
      <line x1="10" y1="12" x2="20" y2="12" /> <circle cx="17" cy="18" r="2" />{' '}
      <line x1="4" y1="18" x2="15" y2="18" /> <line x1="19" y1="18" x2="20" y2="18" />
    </svg>
  );
};

export default AdjustmentsHorizontal;
