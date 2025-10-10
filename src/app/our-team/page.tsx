import { teamData, trainers, BRAND } from "@/app/our-team/data";
import TeamCTASection from "@/components/Sections/TeamCTASection";
import TeamCultureSection from "@/components/Sections/TeamCultureSection";
import TeamDirectory from "@/components/Sections/TeamDirectorySection";
import TeamHeroSection from "@/components/Sections/TeamHeroSection";
import TeamLeadershipSpotlight from "@/components/Sections/TeamLeadershipSpotlight";
import TeamTestimonialsSection from "@/components/Sections/TeamTestimonialsSection";
import TeamTrainersSection from "@/components/Sections/TeamTrainersSection";
import JsonLdOrganization from "./JsonLdOrganization";



export default function Page() {
    return (
        <main style={{ /* expose brand as CSS var */["--brand" as any]: BRAND }} className="bg-white">
            <TeamHeroSection />
            <TeamLeadershipSpotlight data={teamData} />
            <TeamCultureSection />
            <TeamDirectory data={teamData} />
            <TeamTrainersSection trainers={trainers} />
            <TeamTestimonialsSection />
            <TeamCTASection />
            <JsonLdOrganization data={teamData} />
        </main>
    );
}