import React from 'react';
import classNames from 'classnames';

interface FeedbackIconProps {
  className?: string;
  strokeWidth?: string;
}

const FeedbackIcon: React.FC<FeedbackIconProps> = ({ className, strokeWidth }) => {
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
      <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />{' '}
      <line x1="8" y1="9" x2="16" y2="9" /> <line x1="8" y1="13" x2="14" y2="13" />
    </svg>
  );
};

export default FeedbackIcon;
