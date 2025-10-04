const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2.5 sm:gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 Samim Zafar. Built with React & Tailwind CSS
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Available for opportunities • Based in Islamabad, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
