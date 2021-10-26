const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div>
        <div className="w-96 h-96 rounded-full animate-spin border-t-8 border-l-8 border-purple-700" />
        <div className="text-purple-700 font-bold text-center text-5xl">
          Loading
        </div>
      </div>
    </div>
  );
};

export default Loading;
