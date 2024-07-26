type Details = {
  company: string;
  duration: string;
  responsibilities: string[];
};

export const ExperienceItem = ({
  company,
  duration,
  responsibilities,
}: Details) => {
  return (
    <div className="w-[50%]">
      <div className="border-2 p-4 bg-slate-700 hover:bg-slate-600">
        <h1 className="text-white font-semibold text-[1.25vw]">{company}</h1>
        <div>
          <h2 className="text-sm text-gray-400">{duration}</h2>
          <ul className="list-disc list-inside text-gray-200">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="mb-1">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
