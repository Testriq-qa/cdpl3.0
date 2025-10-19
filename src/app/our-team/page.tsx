import { teamData, trainers, BRAND } from "@/app/our-team/data";
// import TeamCTASection from "@/components/sections/TeamCTASection";
import TeamCultureSection from "@/components/sections/TeamCultureSection";
import TeamDirectory from "@/components/sections/TeamDirectorySection";
import TeamHeroSection from "@/components/sections/TeamHeroSection";
import TeamLeadershipSpotlight from "@/components/sections/TeamLeadershipSpotlight";
// import TeamTestimonialsSection from "@/components/sections/TeamTestimonialsSection";
import TeamTrainersSection from "@/components/sections/TeamTrainersSection";
import JsonLdOrganization from "./JsonLdOrganization";



export default function Page() {
    return (
        <main style={{ /* expose brand as CSS var */["--brand" as any]: BRAND }} className="bg-white">
            <TeamHeroSection />
            <TeamLeadershipSpotlight data={teamData} />
            <TeamTrainersSection trainers={trainers} />
            <TeamDirectory data={teamData} />
            {/* <TeamTestimonialsSection />
            <TeamCTASection /> */}
            <TeamCultureSection />

            <JsonLdOrganization data={teamData} />
        </main>
    );
}