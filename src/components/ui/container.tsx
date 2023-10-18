interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="flex h-full flex-col">{children}</div>;
};

export default Container;
