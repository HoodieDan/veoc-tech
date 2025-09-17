type IArrowRight = React.SVGProps<SVGSVGElement>;

const ArrowRight = ({ className, ...rest }: IArrowRight) => {
    return (
        <svg
            width="48"
            height="24"
            viewBox="0 0 48 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M47.1492 13.0607C47.735 12.4749 47.735 11.5251 47.1492 10.9393L37.6033 1.3934C37.0175 0.807612 36.0677 0.807612 35.482 1.3934C34.8962 1.97918 34.8962 2.92893 35.482 3.51472L43.9672 12L35.482 20.4853C34.8962 21.0711 34.8962 22.0208 35.482 22.6066C36.0677 23.1924 37.0175 23.1924 37.6033 22.6066L47.1492 13.0607ZM0.911133 12V13.5H46.0886V12V10.5H0.911133V12Z"
                fill="currentColor"
                fill-opacity="0.9"
            />
        </svg>
    );
};

export default ArrowRight;
