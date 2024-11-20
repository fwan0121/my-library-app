interface SectionTitleProps {
    title: string;
  }
  
  function SectionTitle({ title }: SectionTitleProps) {
    return (
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
          View All
        </button>
      </div>
    );
  }
  
  export default SectionTitle;