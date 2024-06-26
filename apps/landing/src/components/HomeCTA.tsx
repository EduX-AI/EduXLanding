import { IconProps } from '@phosphor-icons/react';
import clsx from 'clsx';
import { Button, ButtonBaseProps } from '@sd/ui';

interface Props extends ButtonBaseProps {
	className?: string;
	text: string;
	icon?: IconProps;
	onClick?: () => void;
}

export function HomeCTA({ className, text, icon, ...props }: Props) {
	return (
		<Button
			size="lg"
			className={clsx(
				'home-button-border-gradient relative z-30 flex cursor-pointer items-center gap-2 !rounded-[7px] border-0 !bg-white py-2 text-sm !backdrop-blur-lg hover:brightness-110 md:text-[16px]',
				className
			)}
			{...props}
		>
			<>
				{icon && icon}
				{text}
			</>
		</Button>
	);
}

export default HomeCTA;
