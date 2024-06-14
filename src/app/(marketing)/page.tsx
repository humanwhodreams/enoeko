import { Button } from "@/components/ui/button";
import { ThemeDropdownMenu } from "@/components/theme/theme-dropdown-menu";

export default function Home() {
  return (
    <main>
      <section className="p-4">
        <div className="space-y-4">
          <h1>Welcome to Enoeko</h1>
          <div>
            <Button>Sign Up</Button>
          </div>
          <ThemeDropdownMenu />
        </div>
      </section>
    </main>
  );
}
