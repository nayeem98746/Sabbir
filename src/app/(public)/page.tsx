import Banner from "@/components/routes/home/Banner";
import CertificatesAwards from "@/components/routes/home/CertificatesAwards/CertificatesAwards";
import ContactForm from "@/components/routes/home/ContactForm/ContactForm";
import ContactInfo from "@/components/routes/home/ContactInfo/ContactInfo";
import CountTotalCredit from "@/components/routes/home/CountTotalCredit";
import EducationAndLearn from "@/components/routes/home/EducationAndLearn/EducationAndLearn";
import Experience from "@/components/routes/home/Experience";
import ShowOffSites from "@/components/routes/home/ShowOffSites";
import ProjectCards from "@/components/routes/home/projects/ProjectCards";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <CountTotalCredit />
        <div className="flex flex-col gap-20 md:gap-15 pb-28 pt-4">
          <Experience />
          <ProjectCards />
          <EducationAndLearn />
          <CertificatesAwards />
          <ContactInfo />
          <ContactForm />

        {/* <ShowOffSites /> */}
        </div>
      </div>
    </main>
  )
}