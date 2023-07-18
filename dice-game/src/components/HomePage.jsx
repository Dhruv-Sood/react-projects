function HomePage({startGame}) {
  return (
    <div className="w-screen flex h-screen items-center justify-center gap-x-36">
        <div>
              <img src="https://i.ibb.co/RcS6zwn/dices.jpg" alt="dices" className="w-[400px]" border="0" />
        </div>
        <div className="flex flex-col items-end">
            <h1 className=" font-mono font-bold text-[70px]">DICE GAME</h1>
            <div onClick={startGame}className="bg-black text-white px-4 py-2 rounded-lg hover:cursor-pointer hover:opacity-80">Play Now</div>
        </div>
    </div>
  )
}
export default HomePage