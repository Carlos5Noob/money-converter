type ImageProps = {
    src: string,
    width: number,
    height: number,
    alt?: string,
}

const Image = (props: ImageProps) => {
    const {src, width, height, alt} = props;
    return <img src={src} alt={alt} width={width} height={height} />;
};

export default Image;