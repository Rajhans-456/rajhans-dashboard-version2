import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SearchForm({
  title,
  searchLabel,
  searchPlaceholder,
  selectLabel,
  selectOptions = [],
  showClearButton = true,
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-sm border border-gray-200",
        className,
      )}
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {searchLabel}
              </label>
              {selectLabel && (
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent mb-4">
                  <option>{selectLabel}</option>
                  {selectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {searchPlaceholder}
              </label>
              <input
                type="text"
                placeholder="Type Text & Press ENTER"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6">
              <Search className="w-4 h-4 mr-2" />
              {title}
            </Button>

            {showClearButton && (
              <Button variant="outline" className="px-6">
                Clear All Fields
              </Button>
            )}
          </div>
        </div>
      </div>

      {children && (
        <div className="border-t border-gray-200 p-6">{children}</div>
      )}
    </div>
  );
}
