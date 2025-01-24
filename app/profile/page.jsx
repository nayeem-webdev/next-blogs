export default function Profile() {
  return (
    <div className="container mx-auto px-5 pb-28">
      <div
        className="container mx-auto h-[30vh] rounded-lg border-2 border-purple-600 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-5 text-center">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
            Welcome To Your Profile
          </h2>
          <p className="max-w-lg mx-auto text-center text-white/70">
            Here you will find all we have... about you, Have a look on your
            Details... Let us know if you want to change anything.
          </p>
        </div>
      </div>
    </div>
  );
}
