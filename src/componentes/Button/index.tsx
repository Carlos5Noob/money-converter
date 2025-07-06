type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const {children, className, onClick} = props;

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;