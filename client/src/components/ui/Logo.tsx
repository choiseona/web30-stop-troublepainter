import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { CDN } from '@/constants/cdn';
import { cn } from '@/utils/cn';

const logoVariants = cva('w-auto', {
  variants: {
    variant: {
      main: 'h-40 sm:h-64',
      side: 'h-20 xs:h-24',
    },
  },
  defaultVariants: {
    variant: 'main',
  },
});

export type LogoVariant = 'main' | 'side';

interface LogoInfo {
  src: string;
  alt: string;
  description: string;
}

const LOGO_INFO: Record<LogoVariant, LogoInfo> = {
  main: {
    src: CDN.MAIN_LOGO,
    alt: '메인 로고',
    description: '우리 프로젝트를 대표하는 메인 로고 이미지입니다',
  },
  side: {
    src: CDN.SIDE_LOGO,
    alt: '보조 로고',
    description: '우리 프로젝트를 대표하는 보조 로고 이미지입니다',
  },
} as const;

export interface LogoProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'aria-label'>,
    VariantProps<typeof logoVariants> {
  /**
   * 로고 이미지 설명을 위한 사용자 정의 aria-label
   */
  ariaLabel?: string;
}

const Logo = React.forwardRef<HTMLImageElement, LogoProps>(
  ({ className, variant = 'main', ariaLabel, ...props }, ref) => {
    return (
      <img
        src={LOGO_INFO[variant as LogoVariant].src}
        alt={LOGO_INFO[variant as LogoVariant].alt}
        aria-label={ariaLabel ?? LOGO_INFO[variant as LogoVariant].description}
        className={cn(logoVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Logo.displayName = 'Logo';

export { Logo, logoVariants };
