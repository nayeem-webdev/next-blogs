export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin mb-4 mx-auto w-16 h-16 border-t-4 border-b-4 border-purple-600 rounded-full"></div>
        <h2 className="text-xl font-semibold text-purple-600 animate-pulse">
          Loading Your Profile...
        </h2>
      </div>
    </div>
  );
}
