import { cn } from "@/lib/utils";

export default function FormInput({
  label,
  placeholder,
  type = "text",
  className,
  value,
  onChange,
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder || label}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400"
      />
    </div>
  );
}
