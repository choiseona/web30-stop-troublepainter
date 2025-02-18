import { HTMLAttributes, memo } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const chatBubbleVariants = cva(
  'select-text break-all px-2.5 inline-flex max-w-[85%] items-center justify-center rounded-lg border-2 border-violet-950 text-violet-950 text-base min-h-8 lg:text-lg 2xl:py-0.5 2xl:text-xl',
  {
    variants: {
      variant: {
        default: 'bg-halfbaked-200',
        secondary: 'bg-chartreuseyellow-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof chatBubbleVariants> {
  content: string;
  nickname?: string;
}

const ChatBubble = memo(({ className, variant, content, nickname, ...props }: ChatBubbleProps) => {
  const isOtherUser = Boolean(nickname);
  const ariaLabel = isOtherUser ? `${nickname}님의 메시지: ${content}` : `내 메시지: ${content}`;

  return (
    <div
      aria-label={ariaLabel}
      tabIndex={0}
      className={cn('flex', isOtherUser ? 'flex-col items-start gap-0.5' : 'justify-end')}
    >
      {isOtherUser && (
        <span className="text-sm text-stroke-sm lg:text-base 2xl:text-lg" aria-hidden="true">
          {nickname}
        </span>
      )}
      <p className={cn(chatBubbleVariants({ variant, className }))} {...props}>
        {content}
      </p>
    </div>
  );
});

export { ChatBubble, chatBubbleVariants };
