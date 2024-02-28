

const KeyPointsCard = ({number, content}) => {
  return (
    <div className="w-1/6 h-[220px] bg-gradient-to-b from-[#C5DFFF] from-50% to-transparent rounded-t-[2rem] p-4">
      <h1 className="text-[4rem] font-extrabold font-outline text-transparent">{number}</h1>
      <span className="text-xl">{content}</span>
    </div>
  )
}

export default KeyPointsCard
