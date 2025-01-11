import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Introduction Section */}
        <section className="text-center sm:text-left">
          <h1 className="text-2xl font-bold">Hello there, my name is:</h1>
          <h1 className="text-6xl font-bold mt-2">Alby Thomas</h1>
          <p className="mt-4">I&apos;m a NYC based software engineer with +5 years of experience and a passion for product engineering.</p>
        </section>

        <Separator className="my-4" />

        {/* About Me Section */}
        <section className="text-center sm:text-left mt-8 w-full">
          <h2 className="text-xl font-bold">About Me</h2>
          <div className="mt-4 flex flex-col sm:flex-row gap-8 items-center">
            <p className="flex-1">
              I grew up in Michigan and even went on to study computer science at the University of Michigan, Ann Arbor. After graduating, I&apos;ve worked at a variety of companies ranging from series A startups to &quot;Big Tech&quot;. I&apos;m currently working at Nourish as a Senior Software Engineer.
            </p>
            <Image
              src="/profile.png"  // Add your image to the public folder
              alt="Alby Thomas"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </section>

        <Separator className="my-4" />

        {/* Where I've Worked Section */}
        <section className="text-center sm:text-left mt-8">
          <h2 className="text-xl font-bold">Where I&apos;ve Worked</h2>
          <div className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Nourish</CardTitle>
                <CardDescription>2025 - Current</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/grubhub-logo.png"  // Add this logo to your public folder
                  alt="Grubhub logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <CardTitle>Grubhub (Acquired by Wonder 🤷🏾‍♂️)</CardTitle>
                  <CardDescription>2024 - 2025</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mt-2">
                  <li>Led the payments platform team in a security hardening initiative to protect Grubhub from card testing attacks.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/valon-logo.png" 
                  alt="Valon logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <CardTitle>Valon</CardTitle>
                  <CardDescription>2022 - 2024</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mt-2">
                  <li>Led the credit reporting infrastructure project and introduced bulk editing features which enhanced system scalability and reduced eng involvement by 95%.</li>
                  <li>Took ownership of the company&apos;s bulk invoice system by devising comprehensive test cases and implementing missing functionalities that reduced the operation team’s data entry time by 70%.</li>
                  <li>Simplified monthly investor portfolio onboarding process by condensing several manual operations into singular API calls which were made accessible to the operations team through a retool, reducing portfolio setup from 1 hour to 1 minute.</li>
                  <li>Owned multiple investor reports and their automated generation to inform clients on loan level activity across all their portfolios.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/capsule-logo.png" 
                  alt="Capsule logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <CardTitle>Capsule</CardTitle>
                  <CardDescription>2021 - 2022</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mt-2">
                  <li>Led the development of a daily patient adherence calculator that aggregates prescription data across various healthcare partners and computes prescription compliance for over 50,000 patients.</li>
                  <li>Directed the back-end development efforts of Capsule&apos;s Rx status bar by creating a microservice that subscribes to prescription status updates through an outbox pattern and allows customers to know real-time updates on their prescriptions.</li>
                  <li>Spearheaded the integration of AWS Canaries onto existing systems with high traffic to better monitor the health and latency of endpoints and web pages.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/jpmorganchase-logo.jpg" 
                  alt="JPMorgan Chase & Co. logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <CardTitle>JPMorgan Chase & Co.</CardTitle>
                  <CardDescription>2021 - 2022</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mt-2">
                  <li>Prevented defects from getting introduced to the Chase website and mobile app by developing code that enhances the firm&apos;s functional UI testing framework.</li>
                  <li>Developed an Angular and Java Spring based web dashboard used by over 300 engineers to quickly review the results of their functional UI tests and identify risks.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
