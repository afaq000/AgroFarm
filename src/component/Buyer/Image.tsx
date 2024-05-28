import React from 'react';
import NextImage from 'next/image';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  onClick?: () => void;
}

const Image: React.FC<Props> = ({
  src,
  alt,
  width = 0,
  height = 0,
  className,
  style,
  onClick,
  priority,
  ...rest // Capture rest props
}: Props) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      // used for performance optimization
      loading="eager"
      className={className}
      style={style}
      onClick={onClick}
      priority={priority}
      // used for rest props
      {...rest}
    />
  );
};

export default Image;
