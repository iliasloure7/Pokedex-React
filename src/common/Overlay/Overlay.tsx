type Props = {
  children: React.ReactNode;
  alignItems: string;
  justifyContent: string;
};

function Overlay({ children, alignItems, justifyContent }: Props) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/[.60] flex ${alignItems} ${justifyContent}`}
    >
      {children}
    </div>
  );
}

export default Overlay;
