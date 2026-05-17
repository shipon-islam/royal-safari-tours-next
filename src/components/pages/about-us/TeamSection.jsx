import CommonHeading from "@/components/CommonHeading";
import TeamCard from "@/components/TeamCard";
const teamMembers = [
  {
    id: 1,
    name: "Morgan",
    position: "CEO/Founder",
    avatar: "/images/team/morgan.webp",
  },
  {
    id: 2,
    name: "Elisheba",
    position: "Manager",
    avatar: "/images/team/elisheba.webp",
  },
  {
    id: 3,
    name: "Gelasiana",
    position: "Trip Advisor",
    avatar: "/images/team/gelasiana.webp",
  },
  {
    id: 4,
    name: "Brook Elin",
    position: "Team Leader",
    avatar: "/images/team/brook-elin.webp",
  },
];
export default function TeamSection() {
  return (
    <section>
      <div className="container">
        <CommonHeading title="Team Section" subtitle="Meet Our Team" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-10 py-14 max-w-[1500px] mx-auto">
          {teamMembers.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
