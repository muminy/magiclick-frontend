export default function MarketSkeleton() {
  return (
    <div className="skeleton">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Skeleton key={item} />
      ))}
    </div>
  );
}

const Skeleton = () => {
  return (
    <div className="xl:col-span-6 col-span-12 flex pb-[24px] mb-[20px]">
      <div className="w-[43px] h-[30px] rounded-md bg-gray-200 animate-pulse" />
      <div className="ml-4 space-y-2">
        <div className="w-10 h-3 rounded-md bg-gray-200 animate-pulse" />
        <div className="w-24 h-3 rounded-md bg-gray-200 animate-pulse" />
      </div>

      <div className="space-x-10 flex ml-auto">
        <div className="space-y-2">
          <div className="w-10 h-3 ml-auto rounded-md bg-gray-200 animate-pulse" />
          <div className="w-14 h-3 ml-auto rounded-md bg-gray-200 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="w-10 h-3 ml-auto rounded-md bg-gray-200 animate-pulse" />
          <div className="w-14 h-3 ml-auto rounded-md bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
