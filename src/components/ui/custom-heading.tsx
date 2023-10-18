type CustomHeadingProps = {
  title: string;
};

const CustomHeading = ({ title }: CustomHeadingProps) => {
  return <h2 className="mb-3 pl-5 font-bold uppercase">{title}</h2>;
};

export default CustomHeading;
