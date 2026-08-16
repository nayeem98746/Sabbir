import iconList from "./iconList.json"
type TIconName = keyof typeof iconList
type IconProps = {
    icon: TIconName;
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
};

const Icon= ({ icon, width = 24, height = 24, fill = '#212121',className }:IconProps) => {

    return (
        <svg
        className={className}
        width={width}
        height={height}
        fill="none"
        // viewBox={`0 0 ${width} ${height}`}
        viewBox={`0 0 24 24`}
        xmlns="http://www.w3.org/2000/svg"
        >
            <path d={iconList[icon]} fill={fill} />
        </svg>
    );
};

export default Icon;
