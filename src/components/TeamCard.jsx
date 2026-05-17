export default function TeamCard({ team }) {
  return (
    <div className="bg-white shadow !h-fit rounded-sm">
      <img
        src={team.avatar}
        alt={team.name}
        className="w-full max-h-[392px] h-full rounded-sm font-mo"
      />
      <div className="text-center space-y-3 py-8">
        <h4 className="text-green font-semibold font-palanquin text-xl">
          {team.name}
        </h4>
        <h5>{team.position}</h5>
      </div>
    </div>
  );
}
