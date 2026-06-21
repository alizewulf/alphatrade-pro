export const CustomTooltip = (props: any) => {
  const { active, payload, label } = props;

  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#2D3449] border border-white/10 rounded-lg px-3 py-2">
      <p className="text-[#ADC6FF] text-base leading-6 font-medium">
        ${payload[0].value?.toLocaleString()}
      </p>
      <p className="text-paragraph leading-4 text-xs mt-0.5">{label}</p>
    </div>
  );
};