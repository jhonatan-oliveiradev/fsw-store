const Footer = () => {
  return (
    <footer className="bg-accent px-8 py-4 text-muted-foreground">
      <p className="text-sm">
        © {new Date().getFullYear()} Copyright{" "}
        <span className="font-semibold">FSW Store</span>.
      </p>
    </footer>
  );
};

export default Footer;
