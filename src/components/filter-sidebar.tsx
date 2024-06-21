import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "./ui/slider";

export function FilterSideBar() {
  return (
    <aside className="px-4 py-2 mt-[70px] w-72 bg-background border-y mb-4">
      <div className="space-y-4">
        <div>
          <div className="text-2xl font-bold">Filter services</div>
          <p className="text-sm text-muted-foreground">
            Filter services to suite your needs.
          </p>
        </div>
        <hr className="border-border" />
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground">
            PRICE &mdash; Naira
          </p>
          <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">0</p>
            <p className="text-sm font-medium">2000</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground">
            CATEGORIES
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="car-wash" />
              <Label htmlFor="car-wash">car wash</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cooking-gas" />
              <Label htmlFor="cooking-gas">cooking gas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="diesel" />
              <Label htmlFor="diesel">diesel</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-muted-foreground">
            DISTANCE &mdash; Km
          </p>
          <Slider defaultValue={[10]} max={100} step={1} />
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">0</p>
            <p className="text-sm font-medium">2000</p>
          </div>
        </div>
        <div className="grid grid-cols-4 pt-4 gap-x-2">
          <Button type="button" variant={"outline"} className="col-span-1">
            Clear
          </Button>
          <Button type="button" variant={"default"} className="col-span-3">
            Apply changes
          </Button>
        </div>
      </div>
    </aside>
  );
}
