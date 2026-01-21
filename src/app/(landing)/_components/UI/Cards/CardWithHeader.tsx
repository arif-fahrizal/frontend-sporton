interface TCardWithHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function CardWithHeader({ title, children }: TCardWithHeaderProps) {
  return (
    <div className="bg-white">
      <div className="py-4 px-5 border-b border-gray-200">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
}
