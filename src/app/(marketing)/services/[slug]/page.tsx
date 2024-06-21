import { Bookmark } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <>
      <section className="my-6">
        <div className="flex items-start justify-start p-2">
          <div className="relative overflow-hidden border border-border rounded-xl">
            <img
              src={`https://ik.imagekit.io/lllriuc3k/BusinessEnoEko/cookingGas.jpeg?updatedAt=1718709180020`}
              alt={`buisness random generated image`}
              className="object-cover w-full h-64"
            />

            <div className="absolute top-0 left-0 right-0 m-4">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 text-sm font-medium bg-background text-foreground rounded-md">
                  car wash
                </span>

                <div className="flex items-center p-1 rounded-md shadow-sm bg-background text-foreground">
                  <Bookmark className="flex-shrink-0 size-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
